'use client';

import Script from 'next/script';

export default function AdminPage() {
  return (
    <>
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
            '        label: "Zaglavlja kolona / Column Headers (comma-separated)",',
            '        widget: "string",',
            '        hint: "e.g. Stavka, Cena, Napomena",',
            '      },',
            '      {',
            '        name: "rows",',
            '        label: "Redovi / Rows",',
            '        widget: "list",',
            '        field: {',
            '          name: "row",',
            '          label: "Red / Row (comma-separated values)",',
            '          widget: "string",',
            '          hint: "e.g. Dorucak, 500 RSD, ukljuceno",',
            '        },',
            '      },',
            '    ],',
            '',
            '    pattern: /^(\\|.+\\|)\\n(\\|[\\s:?-]+\\|)\\n((?:\\|.+\\|(?:\\n|$))+)/m,',
            '',
            '    fromBlock: function(match) {',
            '      var headerCells = match[1]',
            '        .split("|")',
            '        .map(function(c) { return c.trim(); })',
            '        .filter(function(c) { return c.length > 0; });',
            '',
            '      var dataLines = match[3].trim().split("\\n");',
            '      var rows = dataLines.map(function(line) {',
            '        var cells = line',
            '          .split("|")',
            '          .map(function(c) { return c.trim(); })',
            '          .filter(function(c) { return c.length > 0; });',
            '        return cells.join(", ");',
            '      });',
            '',
            '      return {',
            '        headers: headerCells.join(", "),',
            '        rows: rows,',
            '      };',
            '    },',
            '',
            '    toBlock: function(data) {',
            '      if (!data.headers) return "";',
            '',
            '      var headers = data.headers.split(",").map(function(h) { return h.trim(); });',
            '      var separator = headers.map(function() { return "---"; });',
            '',
            '      var headerRow = "| " + headers.join(" | ") + " |";',
            '      var separatorRow = "| " + separator.join(" | ") + " |";',
            '',
            '      var dataRows = "";',
            '      if (data.rows && data.rows.length > 0) {',
            '        dataRows = "\\n" + data.rows.map(function(row) {',
            '          var cells = (typeof row === "string" ? row : row.row || "").split(",").map(function(c) { return c.trim(); });',
            '          while (cells.length < headers.length) cells.push("");',
            '          cells = cells.slice(0, headers.length);',
            '          return "| " + cells.join(" | ") + " |";',
            '        }).join("\\n");',
            '      }',
            '',
            '      return headerRow + "\\n" + separatorRow + dataRows;',
            '    },',
            '',
            '    toPreview: function(data) {',
            '      if (!data.headers) return "";',
            '',
            '      var headers = data.headers.split(",").map(function(h) { return h.trim(); });',
            '',
            '      var html = "<table><thead><tr>";',
            '      headers.forEach(function(h) { html += "<th>" + h + "<\\/th>"; });',
            '      html += "<\\/tr><\\/thead><tbody>";',
            '',
            '      if (data.rows && data.rows.length > 0) {',
            '        data.rows.forEach(function(row) {',
            '          var cells = (typeof row === "string" ? row : row.row || "").split(",").map(function(c) { return c.trim(); });',
            '          while (cells.length < headers.length) cells.push("");',
            '          cells = cells.slice(0, headers.length);',
            '          html += "<tr>";',
            '          cells.forEach(function(c) { html += "<td>" + c + "<\\/td>"; });',
            '          html += "<\\/tr>";',
            '        });',
            '      }',
            '',
            '      html += "<\\/tbody><\\/table>";',
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
