import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/metrics/:path*',
        destination: `https://${process.env.NEXT_PUBLIC_GTM_FPS_ID || '[PASTE_YOUR_GOOGLE_ASSIGNED_ID_HERE]'}.fps.goog/:path*`,
      },
    ];
  },
};

export default nextConfig;
