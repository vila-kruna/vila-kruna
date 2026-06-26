import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Reach Us from the Highway — Mini-Guide | Vila Kruna Belgrade',
  description: 'Learn the easiest way to reach Vila Kruna from the highway or Belgrade Bypass. Detailed driving directions, distances, and free secure parking.',
  alternates: {
    canonical: '/en/how-to-reach-us-from-highway',
  },
  openGraph: {
    title: 'How to Reach Us from the Highway — Mini-Guide | Vila Kruna Belgrade',
    description: 'Find the quickest route to Vila Kruna from the Belgrade Bypass or E-75 highway. Detailed directions and free video-monitored parking.',
    url: '/en/how-to-reach-us-from-highway',
  },
};

export default function HowToReachUsPage() {
  return (
    <>
      <section className="page-header" id="highway-guide-header">
        <div className="container">
          <h1>How to Reach Us from the Highway</h1>
          <p>A quick and simple guide to easily reach Vila Kruna from major highway routes.</p>
        </div>
      </section>

      <section className="section" id="highway-guide-content">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="section-title text-center">Perfect Location for Transit & Rest</h2>
          <p className="section-subtitle text-center">
            Vila Kruna is located in Rakovica, in a peaceful area that is highly accessible from the Belgrade Bypass and the E-75 highway.
          </p>

          <div style={{ marginBottom: '40px' }}>
            <div style={{ background: 'var(--white)', padding: '30px', borderRadius: 'var(--border-radius)', border: '1px solid var(--border-color)', marginBottom: '30px' }}>
              <h3 style={{ color: 'var(--primary)', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fa-solid fa-map-location-dot"></i> Coming from Zagreb / Budapest (E-70 / E-75)
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '15px' }}>
                If you are arriving from Croatia or the north of Serbia, follow the Belgrade Bypass (direction Niš).
              </p>
              <ol style={{ paddingLeft: '20px', color: 'var(--text-primary)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>Take the exit at the <strong>Orlovača</strong> interchange toward Ibarska Magistrala (direction Rakovica/Center).</li>
                <li>Continue straight onto Patrijarha Dimitrija Street.</li>
                <li>Turn right onto Svetozara Ivačkovića Street, where Vila Kruna is located.</li>
              </ol>
            </div>

            <div style={{ background: 'var(--white)', padding: '30px', borderRadius: 'var(--border-radius)', border: '1px solid var(--border-color)', marginBottom: '30px' }}>
              <h3 style={{ color: 'var(--primary)', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fa-solid fa-road"></i> Coming from Niš / Kragujevca (E-75)
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '15px' }}>
                For guests arriving from the south of Serbia, the easiest route is via the Belgrade Bypass to avoid central city traffic.
              </p>
              <ol style={{ paddingLeft: '20px', color: 'var(--text-primary)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>Follow the Bypass toward Zagreb/Ostružnica and exit at <strong>Kružni put Kijevo</strong> or <strong>Orlovača</strong>.</li>
                <li>Follow the signs toward Rakovica.</li>
                <li>Our villa is located just a 5 to 7-minute drive from the Bypass.</li>
              </ol>
            </div>

            <div style={{ background: 'var(--white)', padding: '30px', borderRadius: 'var(--border-radius)', border: '1px solid var(--border-color)' }}>
              <h3 style={{ color: 'var(--primary)', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fa-solid fa-city"></i> Coming from Belgrade City Center
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '15px' }}>
                If you are driving from the city center, we recommend the route via Topčider.
              </p>
              <ol style={{ paddingLeft: '20px', color: 'var(--text-primary)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>Drive along Bulevar Vojvode Mišića past the Belgrade Fair, then cross the Topčider River and pass next to Topčider Park.</li>
                <li>Continue straight on Bulevar Patrijarha Pavla and Patrijarha Dimitrija directly toward Rakovica.</li>
                <li>The route is direct, fast, and does not require complex turns.</li>
              </ol>
            </div>
          </div>

          <div className="price-note-box" style={{ marginBottom: '40px' }}>
            <p>
              <i className="fa-solid fa-square-parking" style={{ color: 'var(--accent)', marginRight: '8px', fontSize: '1.1rem' }}></i>
              <strong>Free & Secure Parking:</strong> Upon arrival, you will have access to our large, fenced private parking lot monitored by video surveillance. Parking is completely free for all guests and can accommodate larger vehicles (vans, SUVs, trailers).
            </p>
          </div>

          <div className="text-center" style={{ marginTop: '30px' }}>
            <Link href="/en/booking" className="btn btn-primary">
              <i className="fa-solid fa-calendar-check"></i> Book Your Stay
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
