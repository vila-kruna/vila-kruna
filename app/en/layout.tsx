import type { Metadata } from "next";
import { Inter, Playfair_Display } from 'next/font/google';
import "../globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PromoBanner from "../components/PromoBanner";
import { GoogleAnalytics } from '@next/third-parties/google';

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
  title: "Vila Kruna — Accommodation and Motel in Belgrade | Booking.com rating 9.0",
  description: "Vila Kruna motel and accommodation in Rakovica, Belgrade. New, spacious, clean — 15 min from the center. Free parking and WiFi. Rated 9.0 on Booking.com.",
  alternates: {
    canonical: "https://vilakruna.rs/en/",
    languages: {
      "sr": "https://vilakruna.rs/",
      "en": "https://vilakruna.rs/en/",
      "x-default": "https://vilakruna.rs/"
    }
  },
  openGraph: {
    title: "Vila Kruna — Accommodation and Motel in Belgrade",
    description: "Your peace in Belgrade. New, spacious, clean — 15 min from the center. Free parking and WiFi. Rated 9.0 on Booking.com.",
    url: "https://vilakruna.rs/en/",
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
      </head>
      <body className={`lang-en min-h-screen flex flex-col ${inter.variable} ${playfair.variable}`}>
        <Header lang="en" />

        {/* Dynamic Promo Banner */}
        <PromoBanner lang="en" />

        <main className="flex-grow">
          {children}
        </main>

        <Footer lang="en" />
        {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />}
      </body>
    </html>
  );
}
