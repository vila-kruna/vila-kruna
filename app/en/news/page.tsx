import { getAllPosts } from '@/lib/markdown';

export const metadata = {
  title: "News — Vila Kruna",
  description: "Latest news, offers and events from Vila Kruna in Belgrade.",
};

export default function NewsPage() {
  const posts = getAllPosts('en');

  return (
    <>
      <section className="page-header" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://utfs.io/f/7BAyoiVHGCJelvHRDeY43o2rhvXi6WazDQ9IB51uFONndpYx')" }}>
        <div className="container text-center">
          <h1 className="page-title">News</h1>
          <p className="page-subtitle">Stay up to date with the latest news, offers and events at Vila Kruna.</p>
        </div>
      </section>

      <section className="section" style={{ padding: '60px 0' }}>
        <div className="container">
          {posts.length === 0 ? (
            <div className="text-center" style={{ padding: '40px' }}>
              <p>There are currently no published news.</p>
            </div>
          ) : (
            <div className="news-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
              {posts.map(post => (
                <div key={post.slug} className="news-card" style={{ backgroundColor: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                  {post.thumbnail && (
                    <div className="news-img" style={{ height: '200px', backgroundImage: `url('${post.thumbnail}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                  )}
                  <div className="news-content" style={{ padding: '24px' }}>
                    <div className="news-date" style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>
                      {new Date(post.date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </div>
                    <h3 className="news-title" style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--text-primary)' }}>{post.title}</h3>
                    <a href={`/en/news/${post.slug}`} className="btn btn-secondary" style={{ display: 'inline-block', marginTop: '16px' }}>Read more</a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
