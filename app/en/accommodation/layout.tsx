import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accommodation & Rooms — Vila Kruna Belgrade',
  description: 'Explore our accommodation at Vila Kruna. We offer modern rooms for 1-3 guests. Free parking and WiFi.',
  alternates: {
    canonical: '/en/accommodation',
  },
  openGraph: {
    title: 'Accommodation & Rooms — Vila Kruna Belgrade',
    description: 'Explore our accommodation at Vila Kruna. We offer modern rooms for 1-3 guests. Free parking and WiFi.',
    url: '/en/accommodation',
  },
};

export default function AccommodationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
