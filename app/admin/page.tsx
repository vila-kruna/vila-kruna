'use client';

import Script from 'next/script';
import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'sveltia-cms.user';

/**
 * Check if a valid Sveltia CMS user session exists in localStorage.
 */
function hasExistingSession(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return false;
    const parsed = JSON.parse(stored);
    return typeof parsed?.token === 'string' && parsed.token.length > 0;
  } catch {
    return false;
  }
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setIsAuthenticated(hasExistingSession());
    setIsLoading(false);
  }, []);

  const handleLogout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    for (let i = localStorage.length - 1; i >= 0; i--) {
      const key = localStorage.key(i);
      if (key && key.startsWith('sveltia-cms')) {
        localStorage.removeItem(key);
      }
    }
    window.location.href = '/admin';
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Greška pri prijavi.');
        return;
      }

      if (!data.token) {
        setError('Server je vratio neispravan odgovor.');
        return;
      }

      const userData = {
        token: data.token,
        backendName: 'github',
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));

      setUsername('');
      setPassword('');
      setIsAuthenticated(true);
    } catch {
      setError('Greška na mreži. Pokušajte ponovo.');
    } finally {
      setIsSubmitting(false);
    }
  }, [username, password]);

  if (isLoading) {
    return null;
  }

  // ─── Authenticated: load Sveltia CMS with table editor component ───
  if (isAuthenticated) {
    return (
      <>
        <button
          onClick={handleLogout}
          id="admin-logout-btn"
          style={{
            position: 'fixed',
            top: '12px',
            right: '12px',
            zIndex: 99999,
            padding: '6px 14px',
            background: 'rgba(220, 53, 69, 0.9)',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            fontSize: '13px',
            fontFamily: 'Inter, system-ui, sans-serif',
            cursor: 'pointer',
            backdropFilter: 'blur(4px)',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={(e) => { (e.target as HTMLElement).style.opacity = '0.8'; }}
          onMouseLeave={(e) => { (e.target as HTMLElement).style.opacity = '1'; }}
        >
          Odjavi se
        </button>

        {/* Prevent Sveltia CMS from auto-initializing so we can register editor components first */}
        <Script
          id="cms-manual-init-flag"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: 'window.CMS_MANUAL_INIT = true;',
          }}
        />

        <Script
          src="https://unpkg.com/@sveltia/cms/dist/sveltia-cms.js"
          strategy="afterInteractive"
        />

        {/* Register custom editor components after the CMS script has loaded, then init */}
        <Script
          id="cms-editor-components"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: [
              '(function registerTableComponent() {',
              '  if (typeof window.CMS === "undefined" || typeof window.CMS.registerEditorComponent !== "function") {',
              '    setTimeout(registerTableComponent, 200);',
              '    return;',
              '  }',
              '',
              '  window.CMS.registerEditorComponent({',
              '    id: "markdown-table",',
              '    label: "Tabela / Table",',
              '    icon: "table",',
              '    fields: [',
              '      {',
              '        name: "headers",',
              '        label: "Zaglavlja kolona / Column Headers (separated by |)",',
              '        widget: "string",',
              '        hint: "e.g. Gde | Parking | Mir / buka | Do auto-puta",',
              '      },',
              '      {',
              '        name: "rows",',
              '        label: "Redovi / Rows",',
              '        widget: "list",',
              '        field: {',
              '          name: "row",',
              '          label: "Red / Row (separated by |)",',
              '          widget: "string",',
              '          hint: "e.g. **Vila Kruna** | Besplatan, ispred vrata | Tiho | 5 min do E75",',
              '        },',
              '      },',
              '    ],',
              '',
              '    pattern: /^\\\\|(.+)\\\\|\\\\s*\\\\n\\\\|([-| :]+)\\\\|\\\\s*\\\\n((?:\\\\|.+\\\\|\\\\s*(?:\\\\n|$))+)/m,',
              '',
              '    fromBlock: function(match) {',
              '      var headerCells = match[1]',
              '        .split("|")',
              '        .map(function(c) { return c.trim(); });',
              '      var headers = headerCells.join(" | ");',
              '',
              '      var dataLines = match[3].trim().split("\\\\n");',
              '      var rows = dataLines.map(function(line) {',
              '        var cleanLine = line.trim();',
              '        if (cleanLine.indexOf("|") === 0) cleanLine = cleanLine.substring(1);',
              '        if (cleanLine.lastIndexOf("|") === cleanLine.length - 1) cleanLine = cleanLine.substring(0, cleanLine.length - 1);',
              '        var cells = cleanLine.split("|").map(function(c) { return c.trim(); });',
              '        return cells.join(" | ");',
              '      });',
              '',
              '      return {',
              '        headers: headers,',
              '        rows: rows,',
              '      };',
              '    },',
              '',
              '    toBlock: function(data) {',
              '      if (!data.headers) return "";',
              '',
              '      var headers = data.headers.split("|").map(function(h) { return h.trim(); });',
              '      var separator = headers.map(function() { return "---"; });',
              '',
              '      var headerRow = "| " + headers.join(" | ") + " |";',
              '      var separatorRow = "| " + separator.join(" | ") + " |";',
              '',
              '      var dataRows = "";',
              '      if (data.rows && data.rows.length > 0) {',
              '        dataRows = "\\\\n" + data.rows.map(function(row) {',
              '          var rowVal = typeof row === "string" ? row : row.row || "";',
              '          var cells = rowVal.split("|").map(function(c) { return c.trim(); });',
              '          while (cells.length < headers.length) cells.push("");',
              '          cells = cells.slice(0, headers.length);',
              '          return "| " + cells.join(" | ") + " |";',
              '        }).join("\\\\n");',
              '      }',
              '',
              '      return headerRow + "\\\\n" + separatorRow + dataRows;',
              '    },',
              '',
              '    toPreview: function(data) {',
              '      if (!data.headers) return "";',
              '',
              '      var headers = data.headers.split("|").map(function(h) { return h.trim(); });',
              '',
              '      var html = \'<table style="width:100%; border-collapse:collapse; margin: 16px 0;"><thead><tr style="border-bottom:2px solid #ccc;">\';',
              '      headers.forEach(function(h) { html += "<th>" + h + "<\\\\/th>"; });',
              '      html += "<\\\\/tr><\\\\/thead><tbody>";',
              '',
              '      if (data.rows && data.rows.length > 0) {',
              '        data.rows.forEach(function(row) {',
              '          var rowVal = typeof row === "string" ? row : row.row || "";',
              '          var cells = rowVal.split("|").map(function(c) { return c.trim(); });',
              '          while (cells.length < headers.length) cells.push("");',
              '          cells = cells.slice(0, headers.length);',
              '          html += \'<tr style="border-bottom:1px solid #eee;">\';',
              '          cells.forEach(function(c) { html += "<td>" + c + "<\\\\/td>"; });',
              '          html += "<\\\\/tr>";',
              '        });',
              '      }',
              '',
              '      html += "<\\\\/tbody><\\\\/table>";',
              '      return html;',
              '    },',
              '  });',
              '',
              '  window.CMS.init();',
              '})();',
            ].join('\n'),
          }}
        />
      </>
    );
  }

  // ─── Login form ───
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        padding: '20px',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '400px',
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '40px 32px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.3)',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1
            style={{
              color: '#e2e8f0',
              fontSize: '24px',
              fontWeight: 700,
              margin: '0 0 8px 0',
              letterSpacing: '-0.02em',
            }}
          >
            Vila Kruna
          </h1>
          <p
            style={{
              color: 'rgba(226, 232, 240, 0.5)',
              fontSize: '14px',
              margin: 0,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            Admin Panel
          </p>
        </div>

        {error && (
          <div
            role="alert"
            style={{
              background: 'rgba(220, 53, 69, 0.15)',
              border: '1px solid rgba(220, 53, 69, 0.3)',
              borderRadius: '8px',
              padding: '12px 16px',
              marginBottom: '20px',
              color: '#f87171',
              fontSize: '14px',
              textAlign: 'center',
            }}
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '16px' }}>
            <label
              htmlFor="admin-username"
              style={{
                display: 'block',
                color: 'rgba(226, 232, 240, 0.7)',
                fontSize: '13px',
                fontWeight: 500,
                marginBottom: '6px',
              }}
            >
              Korisničko ime
            </label>
            <input
              id="admin-username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete="username"
              maxLength={128}
              disabled={isSubmitting}
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'rgba(255, 255, 255, 0.07)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '10px',
                color: '#e2e8f0',
                fontSize: '15px',
                outline: 'none',
                transition: 'border-color 0.2s',
                boxSizing: 'border-box',
              }}
              onFocus={(e) => { e.target.style.borderColor = 'rgba(99, 179, 237, 0.5)'; }}
              onBlur={(e) => { e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)'; }}
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label
              htmlFor="admin-password"
              style={{
                display: 'block',
                color: 'rgba(226, 232, 240, 0.7)',
                fontSize: '13px',
                fontWeight: 500,
                marginBottom: '6px',
              }}
            >
              Lozinka
            </label>
            <input
              id="admin-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              maxLength={128}
              disabled={isSubmitting}
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'rgba(255, 255, 255, 0.07)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '10px',
                color: '#e2e8f0',
                fontSize: '15px',
                outline: 'none',
                transition: 'border-color 0.2s',
                boxSizing: 'border-box',
              }}
              onFocus={(e) => { e.target.style.borderColor = 'rgba(99, 179, 237, 0.5)'; }}
              onBlur={(e) => { e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)'; }}
            />
          </div>

          <button
            id="admin-login-btn"
            type="submit"
            disabled={isSubmitting}
            style={{
              width: '100%',
              padding: '13px',
              background: isSubmitting
                ? 'rgba(99, 179, 237, 0.3)'
                : 'linear-gradient(135deg, #3182ce 0%, #2b6cb0 100%)',
              color: '#fff',
              border: 'none',
              borderRadius: '10px',
              fontSize: '15px',
              fontWeight: 600,
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s',
              letterSpacing: '0.02em',
            }}
          >
            {isSubmitting ? 'Prijava...' : 'Prijavi se'}
          </button>
        </form>

        <p
          style={{
            textAlign: 'center',
            color: 'rgba(226, 232, 240, 0.25)',
            fontSize: '12px',
            marginTop: '24px',
          }}
        >
          Pristup samo za administratore
        </p>
      </div>
    </div>
  );
}
