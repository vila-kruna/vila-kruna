import type { Metadata } from "next";
import { Inter, Playfair_Display } from 'next/font/google';
import "../globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PromoBanner from "../components/PromoBanner";
import { GoogleTagManager } from '@next/third-parties/google';
import ConsentBanner from "../components/ConsentBanner";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vilakruna.rs"),
  title: "Vila Kruna — Accommodation and Motel in Belgrade | Booking.com rating 9.0",
  description: "Vila Kruna motel and accommodation in Rakovica, Belgrade. New, spacious, clean — 15 min from the center. Free parking and WiFi. Rated 9.0 on Booking.com.",
  alternates: {
    languages: {
      "sr": "https://vilakruna.rs/",
      "en": "https://vilakruna.rs/en/",
      "x-default": "https://vilakruna.rs/"
    }
  },
  openGraph: {
    title: "Vila Kruna — Accommodation and Motel in Belgrade",
    description: "Your peace in Belgrade. New, spacious, clean — 15 min from the center. Free parking and WiFi. Rated 9.0 on Booking.com.",
    images: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/assets/favicon/favicon.ico" />
        <link rel="icon" type="image/png" sizes="96x96" href="/assets/favicon/favicon-96x96.png" />
        <link rel="icon" type="image/svg+xml" href="/assets/favicon/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/assets/favicon/site.webmanifest" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          window.gtag = window.gtag || function() { window.dataLayer.push(arguments); };
          
          let consentSettings = {
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'analytics_storage': 'denied'
          };
          
          try {
            const stored = localStorage.getItem('vk_consent_settings');
            if (stored) {
              const parsed = JSON.parse(stored);
              consentSettings.ad_storage = parsed.ad_storage ? 'granted' : 'denied';
              consentSettings.ad_user_data = parsed.ad_user_data ? 'granted' : 'denied';
              consentSettings.ad_personalization = parsed.ad_personalization ? 'granted' : 'denied';
              consentSettings.analytics_storage = parsed.analytics_storage ? 'granted' : 'denied';
            } else {
              const status = localStorage.getItem('vk_consent_status');
              if (status === 'accepted') {
                consentSettings = {
                  'ad_storage': 'granted',
                  'ad_user_data': 'granted',
                  'ad_personalization': 'granted',
                  'analytics_storage': 'granted'
                };
              }
            }
          } catch(e) {}
          
          gtag('consent', 'default', consentSettings);
        `}} />
      </head>
      <body className={`lang-en min-h-screen flex flex-col ${inter.variable} ${playfair.variable}`}>
        <Header lang="en" />

        {/* Dynamic Promo Banner */}
        <PromoBanner lang="en" />

        <main className="flex-grow">
          {children}
        </main>

        <Footer lang="en" />
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || "GTM-XXXXXX"} gtmScriptUrl="https://www.vilakruna.rs/metrics/gtm.js" />
        <ConsentBanner lang="en" />
      </body>
    </html>
  );
}
