'use client';
import { useState, useEffect } from 'react';
import { sendGTMEvent } from '@next/third-parties/google';

interface PromoData {
  enabled: boolean;
  text_sr?: string;
  text_en?: string;
  link?: string;
  bg_color?: string;
  text_color?: string;
}

export default function PromoBanner({ lang }: { lang: 'sr' | 'en' }) {
  const [promo, setPromo] = useState<PromoData | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    fetch('/content/settings/promo.json')
      .then((r) => r.json())
      .then((data: PromoData) => {
        if (data.enabled) setPromo(data);
      })
      .catch(() => {
        // Silently fail — promo banner is optional
      });
  }, []);

  if (!promo || dismissed) return null;

  const text = lang === 'en' ? promo.text_en : promo.text_sr;
  if (!text) return null;

  const bgColor = promo.bg_color || '#2a7d4f';
  const textColor = promo.text_color || '#ffffff';

  return (
    <div className="promo-banner" style={{ backgroundColor: bgColor, color: textColor }}>
      <div className="container promo-banner-inner">
        {promo.link ? (
          <a 
            href={promo.link} 
            className="promo-banner-link" 
            style={{ color: textColor }}
            onClick={() => sendGTMEvent({ event: 'select_promotion', promotion_name: 'promo_banner' })}
          >
            {text}
          </a>
        ) : (
          <span className="promo-banner-text">{text}</span>
        )}
        <button
          className="promo-dismiss-btn"
          aria-label={lang === 'en' ? 'Dismiss' : 'Zatvori'}
          style={{ color: textColor }}
          onClick={() => setDismissed(true)}
        >
          ×
        </button>
      </div>
    </div>
  );
}
