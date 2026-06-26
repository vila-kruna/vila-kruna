import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Quiet, Peaceful Corner with Free Parking | Vila Kruna Belgrade',
  description: 'Enjoy a peaceful and quiet stay in Belgrade. Vila Kruna offers spacious rooms and free private parking secured with video surveillance.',
  alternates: {
    canonical: '/en/quiet-peaceful-corner-with-parking',
  },
  openGraph: {
    title: 'Quiet, Peaceful Corner with Free Parking | Vila Kruna Belgrade',
    description: 'Accommodation with free private parking and video surveillance in a quiet area of Belgrade. Perfect for transit travelers and couples.',
    url: '/en/quiet-peaceful-corner-with-parking',
  },
};

export default function QuietCornerPage() {
  return (
    <>
      <section className="page-header" id="quiet-corner-header">
        <div className="container">
          <h1>Quiet & Peaceful Accommodation with Parking in Belgrade — Vila Kruna</h1>
          <p>Relax in a peaceful environment with free private parking provided for your vehicle.</p>
        </div>
      </section>

      <section className="section" id="quiet-corner-content">
        <div className="container">
          <div className="about-grid" style={{ marginBottom: '60px' }}>
            <div className="about-text">
              <h2 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '20px' }}>
                Your Safe Haven in Belgrade
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '15px' }}>
                Finding accommodation with secure, accessible parking in Belgrade can be a major challenge. At Vila Kruna, we have fully resolved this issue. We offer a peaceful location along with free, spacious, and fenced private parking for all our guests.
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '25px' }}>
                We are located in Rakovica, on the quiet Svetozara Ivačkovića 4 Street, isolated from city crowds and traffic noise, guaranteeing a restful sleep and complete recovery after a long trip or a busy working day.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <i className="fa-solid fa-shield-halved" style={{ color: 'var(--accent)', fontSize: '1.5rem', marginTop: '3px' }}></i>
                  <div>
                    <h4 style={{ color: 'var(--primary)', marginBottom: '5px' }}>Video Surveillance</h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>The parking lot is covered by cameras 24/7 for your absolute security.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <i className="fa-solid fa-expand" style={{ color: 'var(--accent)', fontSize: '1.5rem', marginTop: '3px' }}></i>
                  <div>
                    <h4 style={{ color: 'var(--primary)', marginBottom: '5px' }}>Spaciousness</h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>No need to worry about tight spots — we have ample space for all guests.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <i className="fa-solid fa-truck" style={{ color: 'var(--accent)', fontSize: '1.5rem', marginTop: '3px' }}></i>
                  <div>
                    <h4 style={{ color: 'var(--primary)', marginBottom: '5px' }}>For Larger Vehicles</h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Perfect for vans, SUVs, 4x4s, and cars with trailers.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <i className="fa-solid fa-volume-xmark" style={{ color: 'var(--accent)', fontSize: '1.5rem', marginTop: '3px' }}></i>
                  <div>
                    <h4 style={{ color: 'var(--primary)', marginBottom: '5px' }}>Exceptional Peace</h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Excellent sound insulation in rooms and a quiet location away from busy roads.</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="about-img"
              style={{
                backgroundImage: "url('https://utfs.io/f/7BAyoiVHGCJePomEg5Hx8IiVXgY2mu5rspelTc6EkNGOdya1')",
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-lg)'
              }}
            ></div>
          </div>

          <div style={{ background: 'var(--white)', padding: '40px', borderRadius: 'var(--border-radius)', border: '1px solid var(--border-color)', marginBottom: '40px' }}>
            <h3 style={{ color: 'var(--primary)', marginBottom: '20px', textAlign: 'center', fontFamily: 'var(--font-playfair)', fontSize: '1.75rem' }}>
              Ideal Accommodation for Transit Travelers
            </h3>
            <p style={{ color: 'var(--text-secondary)', textAlign: 'center', maxWidth: '800px', margin: '0 auto 20px', lineHeight: '1.7' }}>
              Whether you are traveling to Greece, Montenegro, or transiting through Serbia to other parts of Europe, Vila Kruna is the perfect location for an overnight stay. We are situated near the Belgrade Bypass and the Orlovača interchange, allowing you to resume your trip in the morning without getting caught in rush-hour traffic jams.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', marginTop: '30px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>0 EUR</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Parking Fee</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>100%</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Guaranteed Peace</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>5 min</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>From the Bypass</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/en/booking" className="btn btn-primary" style={{ padding: '16px 36px' }}>
              <i className="fa-solid fa-calendar-check" style={{ marginRight: '8px' }}></i> Book Your Quiet Stay
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
