import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/markdown';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vilakruna.rs';
  const postsSr = getAllPosts('sr');
  const postsEn = getAllPosts('en');

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/smestaj`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/cenovnik`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/galerija`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/novosti`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/rezervacija`, changeFrequency: 'yearly', priority: 0.5 },
    // New Serbian SEO pages
    { url: `${baseUrl}/kako-do-nas-sa-autoputa`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/superior-soba`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/tih-miran-kutak-sa-parkingom`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/dnevni-smestaj`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/grupe-i-porodice`, changeFrequency: 'monthly', priority: 0.7 },
    // English
    { url: `${baseUrl}/en`, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/en/accommodation`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/en/pricing`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/en/gallery`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/en/news`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/en/booking`, changeFrequency: 'yearly', priority: 0.5 },
    // New English SEO pages
    { url: `${baseUrl}/en/how-to-reach-us-from-highway`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/en/superior-room`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/en/quiet-peaceful-corner-with-parking`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/en/day-use-accommodation`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/en/groups-and-families`, changeFrequency: 'monthly', priority: 0.7 },
  ];

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
