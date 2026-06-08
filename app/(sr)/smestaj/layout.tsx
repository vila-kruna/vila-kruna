import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Smeštaj i Sobe — Vila Kruna Beograd',
  description: 'Pogledajte ponudu smeštaja u Vili Kruna. Nudimo moderne sobe za 1-3 osobe. Parking i WiFi besplatni.',
};

export default function SmestajLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
