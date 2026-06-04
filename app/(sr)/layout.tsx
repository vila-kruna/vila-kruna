import type { Metadata } from "next";
import { Inter, Playfair_Display } from 'next/font/google';
import "../globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PromoBanner from "../components/PromoBanner";

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
  title: "Vila Kruna — Smeštaj i motel u Beogradu | Booking.com rating 9.0",
  description: "Vila Kruna motel i smeštaj u Rakovici, Beograd. Novo, prostrano, čisto — 15 min od centra. Besplatan parking i WiFi. Ocena 9.0 na Booking.com.",
  alternates: {
    canonical: "https://vilakruna.rs/",
    languages: {
      "sr": "https://vilakruna.rs/",
      "en": "https://vilakruna.rs/en/",
      "x-default": "https://vilakruna.rs/"
    }
  },
  openGraph: {
    title: "Vila Kruna — Smeštaj i motel u Beogradu",
    description: "Vaš mir u Beogradu. Novo, prostrano, čisto — 15 min od centra. Besplatan parking i WiFi. Ocena 9.0 na Booking.com.",
    url: "https://vilakruna.rs",
    images: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <head>
        <link rel="icon" type="image/x-icon" href="/assets/favicon/favicon.ico" />
        <link rel="icon" type="image/png" sizes="96x96" href="/assets/favicon/favicon-96x96.png" />
        <link rel="icon" type="image/svg+xml" href="/assets/favicon/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/assets/favicon/site.webmanifest" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={`lang-sr min-h-screen flex flex-col ${inter.variable} ${playfair.variable}`}>
        <Header lang="sr" />

        {/* Dynamic Promo Banner */}
        <PromoBanner lang="sr" />

        <main className="flex-grow">
          {children}
        </main>

        <Footer lang="sr" />
      </body>
    </html>
  );
}
