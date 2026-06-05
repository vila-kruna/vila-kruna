'use client';

import Script from 'next/script';

export default function AdminPage() {
  return (
    <Script
      src="https://unpkg.com/@sveltia/cms/dist/sveltia-cms.js"
      strategy="afterInteractive"
    />
  );
}
