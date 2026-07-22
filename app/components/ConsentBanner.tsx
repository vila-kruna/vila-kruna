'use client';

import { useState, useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: Object[];
  }
}

interface ConsentBannerProps {
  lang: 'sr' | 'en';
}

const translations = {
  sr: {
    title: 'Kolačići & Privatnost',
    description: 'Koristimo kolačiće kako bismo poboljšali vaše iskustvo na našem sajtu, analizirali saobraćaj i prikazivali personalizovane oglase. Klikom na "Prihvati sve" pristaneje na našu upotrebu svih kolačića.',
    acceptAll: 'Prihvati sve',
    decline: 'Odbij',
    customize: 'Prilagodi',
    savePreferences: 'Sačuvaj podešavanja',
    back: 'Nazad',
    categories: {
      necessary: {
        title: 'Neophodni kolačići',
        desc: 'Ovi kolačići su neophodni za funkcionisanje veb sajta i ne mogu se isključiti (npr. bezbednost, izbor jezika).',
      },
      analytics: {
        title: 'Analitički kolačići',
        desc: 'Pomažu nam da merimo posetu, analiziramo odakle dolaze posetioci i poboljšamo performanse sajta.',
      },
      marketing: {
        title: 'Marketing & Oglasi',
        desc: 'Koriste se za isporučivanje relevantnih oglasa i praćenje uspešnosti reklamnih kampanja.',
      },
    },
  },
  en: {
    title: 'Cookies & Privacy',
    description: 'We use cookies to improve your experience on our website, analyze site traffic, and display personalized ads. By clicking "Accept All", you consent to our use of all cookies.',
    acceptAll: 'Accept All',
    decline: 'Decline',
    customize: 'Customize',
    savePreferences: 'Save Preferences',
    back: 'Back',
    categories: {
      necessary: {
        title: 'Necessary Cookies',
        desc: 'These cookies are required for the website to function properly and cannot be disabled (e.g. security, language choice).',
      },
      analytics: {
        title: 'Analytical Cookies',
        desc: 'Help us measure traffic, see how visitors navigate the site, and improve user experience.',
      },
      marketing: {
        title: 'Marketing & Ads',
        desc: 'Used to deliver relevant advertisements and track the performance of advertising campaigns.',
      },
    },
  },
};

export default function ConsentBanner({ lang }: ConsentBannerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [analyticsAllowed, setAnalyticsAllowed] = useState(true);
  const [marketingAllowed, setMarketingAllowed] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    setIsMounted(true);
    const status = localStorage.getItem('vk_consent_status');
    const settings = localStorage.getItem('vk_consent_settings');

    if (!status && !settings) {
      setIsVisible(true);
    } else if (settings) {
      try {
        const parsed = JSON.parse(settings);
        setAnalyticsAllowed(!!parsed.analytics_storage);
        setMarketingAllowed(!!parsed.ad_storage);
      } catch (e) { }
    }
  }, []);

  if (!isMounted || !isVisible) {
    return null;
  }

  const triggerConsentUpdate = (analytics: boolean, marketing: boolean) => {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      // Ensure we push a valid gtag structure to dataLayer as fallback
      const gtag = window.gtag || function () { (window.dataLayer as Object[]).push(arguments); };
      gtag('consent', 'update', {
        analytics_storage: analytics ? 'granted' : 'denied',
        ad_storage: marketing ? 'granted' : 'denied',
        ad_user_data: marketing ? 'granted' : 'denied',
        ad_personalization: marketing ? 'granted' : 'denied',
      });
    }
  };

  const handleAcceptAll = () => {
    const settings = {
      analytics_storage: true,
      ad_storage: true,
      ad_user_data: true,
      ad_personalization: true,
    };
    localStorage.setItem('vk_consent_status', 'accepted');
    localStorage.setItem('vk_consent_settings', JSON.stringify(settings));

    triggerConsentUpdate(true, true);
    setIsVisible(false);
  };

  const handleDecline = () => {
    const settings = {
      analytics_storage: false,
      ad_storage: false,
      ad_user_data: false,
      ad_personalization: false,
    };
    localStorage.setItem('vk_consent_status', 'declined');
    localStorage.setItem('vk_consent_settings', JSON.stringify(settings));

    triggerConsentUpdate(false, false);
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    const settings = {
      analytics_storage: analyticsAllowed,
      ad_storage: marketingAllowed,
      ad_user_data: marketingAllowed,
      ad_personalization: marketingAllowed,
    };
    localStorage.setItem('vk_consent_status', 'custom');
    localStorage.setItem('vk_consent_settings', JSON.stringify(settings));

    triggerConsentUpdate(analyticsAllowed, marketingAllowed);
    setIsVisible(false);
  };

  return (
    <div className="consent-banner-wrapper">
      <div className="consent-banner-card">
        {!isCustomizing ? (
          <div className="consent-banner-main">
            <div className="consent-banner-content">
              <h3 className="consent-banner-title">{t.title}</h3>
              <p className="consent-banner-desc">{t.description}</p>
            </div>
            <div className="consent-banner-actions">
              <button
                type="button"
                className="btn btn-secondary btn-sm consent-btn"
                onClick={handleDecline}
              >
                {t.decline}
              </button>
              <button
                type="button"
                className="btn btn-secondary btn-sm consent-btn"
                onClick={() => setIsCustomizing(true)}
              >
                {t.customize}
              </button>
              <button
                type="button"
                className="btn btn-primary btn-sm consent-btn"
                onClick={handleAcceptAll}
              >
                {t.acceptAll}
              </button>
            </div>
          </div>
        ) : (
          <div className="consent-banner-custom">
            <h3 className="consent-banner-title">{t.title}</h3>

            <div className="consent-banner-options">
              {/* Necessary */}
              <div className="consent-option-item">
                <div className="consent-option-header">
                  <span className="consent-option-title">{t.categories.necessary.title}</span>
                  <span className="consent-option-badge">Required</span>
                </div>
                <p className="consent-option-desc">{t.categories.necessary.desc}</p>
              </div>

              {/* Analytics */}
              <div className="consent-option-item">
                <div className="consent-option-header">
                  <span className="consent-option-title">{t.categories.analytics.title}</span>
                  <label className="switch-toggle">
                    <input
                      type="checkbox"
                      checked={analyticsAllowed}
                      onChange={(e) => setAnalyticsAllowed(e.target.checked)}
                    />
                    <span className="slider"></span>
                  </label>
                </div>
                <p className="consent-option-desc">{t.categories.analytics.desc}</p>
              </div>

              {/* Marketing */}
              <div className="consent-option-item">
                <div className="consent-option-header">
                  <span className="consent-option-title">{t.categories.marketing.title}</span>
                  <label className="switch-toggle">
                    <input
                      type="checkbox"
                      checked={marketingAllowed}
                      onChange={(e) => setMarketingAllowed(e.target.checked)}
                    />
                    <span className="slider"></span>
                  </label>
                </div>
                <p className="consent-option-desc">{t.categories.marketing.desc}</p>
              </div>
            </div>

            <div className="consent-banner-actions">
              <button
                type="button"
                className="btn btn-secondary btn-sm consent-btn"
                onClick={() => setIsCustomizing(false)}
              >
                {t.back}
              </button>
              <button
                type="button"
                className="btn btn-primary btn-sm consent-btn"
                onClick={handleSavePreferences}
              >
                {t.savePreferences}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
