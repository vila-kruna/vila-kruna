import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/markdown';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vilakruna.rs';
  const postsSr = getAllPosts('sr');
  const postsEn = getAllPosts('en');

  const currentDate = new Date();

  // Helper to construct sitemap entries with alternates
  const createLocalizedEntry = (
    srPath: string,
    enPath: string,
    changeFrequency: 'weekly' | 'monthly' | 'yearly',
    priority: number
  ): MetadataRoute.Sitemap => {
    const srUrl = srPath ? `${baseUrl}/${srPath}` : baseUrl;
    const enUrl = `${baseUrl}/en${enPath ? `/${enPath}` : ''}`;
    const alternates = {
      languages: {
        sr: srUrl,
        en: enUrl,
      },
    };

    return [
      {
        url: srUrl,
        lastModified: currentDate,
        changeFrequency,
        priority,
        alternates,
      },
      {
        url: enUrl,
        lastModified: currentDate,
        changeFrequency,
        priority,
        alternates,
      },
    ];
  };

  // Generate localized static pages
  const staticPairs = [
    // Home page
    { sr: '', en: '', freq: 'weekly' as const, priority: 1.0 },
    // Main pages
    { sr: 'smestaj', en: 'accommodation', freq: 'monthly' as const, priority: 0.8 },
    { sr: 'cenovnik', en: 'pricing', freq: 'monthly' as const, priority: 0.7 },
    { sr: 'galerija', en: 'gallery', freq: 'monthly' as const, priority: 0.6 },
    { sr: 'novosti', en: 'news', freq: 'weekly' as const, priority: 0.7 },
    { sr: 'rezervacija', en: 'booking', freq: 'yearly' as const, priority: 0.5 },
    // SEO Pages
    { sr: 'kako-do-nas-sa-autoputa', en: 'how-to-reach-us-from-highway', freq: 'monthly' as const, priority: 0.7 },
    { sr: 'superior-soba', en: 'superior-room', freq: 'monthly' as const, priority: 0.8 },
    { sr: 'tih-miran-kutak-sa-parkingom', en: 'quiet-peaceful-corner-with-parking', freq: 'monthly' as const, priority: 0.7 },
    // Service Pages (SR + EN)
    { sr: 'usluge', en: 'services', freq: 'weekly' as const, priority: 0.8 },
    { sr: 'usluge/dnevni-smestaj', en: 'services/day-use-accommodation', freq: 'monthly' as const, priority: 0.7 },
    { sr: 'usluge/produzeni-boravak', en: 'services/extended-stay', freq: 'monthly' as const, priority: 0.7 },
    { sr: 'usluge/pranje-vesa-za-goste', en: 'services/laundry-service', freq: 'monthly' as const, priority: 0.7 },
    { sr: 'usluge/organizacija-prevoza', en: 'services/transportation-service', freq: 'monthly' as const, priority: 0.7 },
    { sr: 'usluge/smestaj-za-radnike', en: 'services/workers-accommodation', freq: 'monthly' as const, priority: 0.7 },
    { sr: 'usluge/smestaj-za-organizovane-grupe', en: 'services/group-accommodation', freq: 'monthly' as const, priority: 0.7 },
  ];

  const staticPages: MetadataRoute.Sitemap = staticPairs.flatMap(pair =>
    createLocalizedEntry(pair.sr, pair.en, pair.freq, pair.priority)
  );

  const blogPagesSr: MetadataRoute.Sitemap = postsSr.map(post => ({
    url: `${baseUrl}/novosti/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const blogPagesEn: MetadataRoute.Sitemap = postsEn.map(post => ({
    url: `${baseUrl}/en/news/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticPages, ...blogPagesSr, ...blogPagesEn];
}
