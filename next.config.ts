import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/metrics/:path*',
        destination: `https://${process.env.NEXT_PUBLIC_GTM_FPS_ID || 'PASTE_YOUR_GOOGLE_ASSIGNED_ID_HERE'}.fps.goog/metrics/:path*`,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/dnevni-smestaj',
        destination: '/usluge/dnevni-smestaj',
        permanent: true,
      },
      {
        source: '/en/day-use-accommodation',
        destination: '/en/services/day-use-accommodation',
        permanent: true,
      },
      {
        source: '/grupe-i-porodice',
        destination: '/usluge/smestaj-za-organizovane-grupe',
        permanent: true,
      },
      {
        source: '/en/groups-and-families',
        destination: '/en/services/group-accommodation',
        permanent: true,
      },
      // Deleted service pages redirects
      {
        source: '/usluge/porodicne-sobe',
        destination: '/usluge',
        permanent: true,
      },
      {
        source: '/en/services/family-rooms',
        destination: '/en/services',
        permanent: true,
      },
      {
        source: '/usluge/visekrevetne-sobe',
        destination: '/usluge',
        permanent: true,
      },
      {
        source: '/en/services/multi-bed-rooms',
        destination: '/en/services',
        permanent: true,
      },
      {
        source: '/usluge/sobe-sa-klimom',
        destination: '/usluge',
        permanent: true,
      },
      {
        source: '/en/services/air-conditioned-rooms',
        destination: '/en/services',
        permanent: true,
      },
      {
        source: '/usluge/smestaj-za-sportske-ekipe',
        destination: '/usluge/smestaj-za-organizovane-grupe',
        permanent: true,
      },
      {
        source: '/en/services/sports-teams-accommodation',
        destination: '/en/services/group-accommodation',
        permanent: true,
      },
      {
        source: '/usluge/smestaj-za-tv-ekipe',
        destination: '/usluge/smestaj-za-radnike',
        permanent: true,
      },
      {
        source: '/en/services/tv-crews-accommodation',
        destination: '/en/services/workers-accommodation',
        permanent: true,
      },
      {
        source: '/usluge/pet-friendly-smestaj',
        destination: '/usluge',
        permanent: true,
      },
      {
        source: '/en/services/pet-friendly-accommodation',
        destination: '/en/services',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
