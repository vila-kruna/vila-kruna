import { getPostBySlug, getAllPosts } from '@/lib/markdown';
import { marked } from 'marked';
import Script from 'next/script';

import Link from 'next/link';

export async function generateStaticParams() {
  const posts = getAllPosts('sr');
  if (posts.length === 0) return [{ slug: 'empty' }];
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = getPostBySlug(params.slug, 'sr');
  return {
    title: `${post.title} — Vila Kruna`,
    description: post.summary || `${post.title} — najnovije vesti iz Vile Kruna u Beogradu.`,
    alternates: {
      canonical: `https://vilakruna.rs/novosti/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.summary || `${post.title} — Vila Kruna`,
      url: `https://vilakruna.rs/novosti/${post.slug}`,
      type: 'article',
      images: post.thumbnail ? [post.thumbnail] : [],
      publishedTime: post.date,
    },
  };
}

export default async function PostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = getPostBySlug(params.slug, 'sr');
  const contentHtml = marked(post.content);

  return (
    <>
      <Script
        id={`json-ld-${post.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            datePublished: post.date,
            image: post.thumbnail || undefined,
            author: { '@type': 'Organization', name: 'Vila Kruna' },
            publisher: {
              '@type': 'Organization',
              name: 'Vila Kruna',
              url: 'https://vilakruna.rs',
            },
            description: post.summary || undefined,
          }),
        }}
      />
      <section className="page-header" style={{ backgroundImage: post.thumbnail ? `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${post.thumbnail}')` : "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://utfs.io/f/7BAyoiVHGCJelvHRDeY43o2rhvXi6WazDQ9IB51uFONndpYx')" }}>
        <div className="container text-center">
          <h1 className="page-title">{post.title}</h1>
          <div className="news-date" style={{ color: 'var(--accent)', fontWeight: 600, marginTop: '16px' }}>
            {new Date(post.date).toLocaleDateString('sr-RS', { day: 'numeric', month: 'long', year: 'numeric' })}
          </div>
        </div>
      </section>

      <section className="section" style={{ padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div
            className="prose prose-lg"
            style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
          <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #eee', textAlign: 'center' }}>
            <Link href="/novosti" className="btn btn-secondary">&larr; Nazad na sve novosti</Link>
          </div>
        </div>
      </section>
    </>
  );
}
