import type { Metadata } from 'next';
import Link from 'next/link';
import RoomGallery from '../../components/RoomGallery';

export const metadata: Metadata = {
  title: 'Superior Room with Sauna & Jacuzzi in Belgrade | Vila Kruna',
  description: 'Book our superior room with private Finnish sauna and hydro-massage jacuzzi in Belgrade. 65m² of pure luxury, free parking and WiFi.',
  alternates: {
    canonical: '/en/superior-room',
  },
  openGraph: {
    title: 'Superior Room with Sauna & Jacuzzi in Belgrade | Vila Kruna',
    description: 'Book our superior room with private Finnish sauna and hydro-massage jacuzzi in Belgrade. 65m² of pure luxury.',
    url: '/en/superior-room',
  },
};

export default function SuperiorRoomPage() {
  const thumbnails = [
    "https://utfs.io/f/7BAyoiVHGCJenc84FCkO3WXfeNzPAUHa8t91oGIrqb7YRShF",
    "https://utfs.io/f/7BAyoiVHGCJe28vDdJsjWxN9zdEUKa1O4mc8He07DiboJvLk",
    "https://utfs.io/f/7BAyoiVHGCJeAHoBZb3Ee2cMNEHvPDR0mzldWLfVIotjhbaY",
    "https://utfs.io/f/7BAyoiVHGCJeCt235AnJqLhaVXvwsKWTQ24RuMo5NZF79DUf"
  ];

  return (
    <>
      <section className="page-header" id="superior-room-header">
        <div className="container">
          <h1>Superior Room with Sauna & Jacuzzi in Belgrade — Vila Kruna</h1>
          <p>Discover our most luxurious accommodation built for absolute relaxation and comfort.</p>
        </div>
      </section>

      <section className="section" id="superior-room-content">
        <div className="container">
          <div className="room-detail-card" style={{ border: '1px solid var(--primary)', boxShadow: '0 10px 30px rgba(197, 160, 89, 0.15)' }}>
            <RoomGallery thumbnails={thumbnails} />

            <div className="room-details-side">
              <div>
                <div className="room-meta-tags">
                  <span className="room-meta-tag"><i className="fa-solid fa-crown"></i> &nbsp;Premium</span>
                  <span className="room-meta-tag"><i className="fa-solid fa-users"></i> &nbsp;1-3 Guests</span>
                  <span className="room-meta-tag"><i className="fa-solid fa-hot-tub-person"></i> &nbsp;Sauna & Jacuzzi</span>
                </div>
                <h2 className="room-title-large">Your 65m² Private Oasis</h2>
                <p className="room-long-desc">
                  The Superior Room with a King-size bed is the jewel of Vila Kruna. Meticulously designed down to the finest details, it offers you complete relaxation with a private Finnish sauna and an in-room hydro-massage jacuzzi tub.
                </p>
                <p className="room-long-desc" style={{ marginTop: '-15px' }}>
                  It is ideal for couples seeking a romantic getaway, celebrating special occasions, or travelers who want a touch of premium luxury during their visit to Belgrade. The room includes an additional sofa bed and a fully stocked minibar.
                </p>

                <div className="room-specs-list">
                  <div className="room-spec-item"><i className="fa-solid fa-expand"></i> <span>65 m² Area</span></div>
                  <div className="room-spec-item"><i className="fa-solid fa-snowflake"></i> <span>Air Conditioning</span></div>
                  <div className="room-spec-item"><i className="fa-solid fa-hot-tub-person"></i> <span>Jacuzzi Tub</span></div>
                  <div className="room-spec-item"><i className="fa-solid fa-fire"></i> <span>Private Sauna</span></div>
                  <div className="room-spec-item"><i className="fa-solid fa-martini-glass"></i> <span>Mini-bar</span></div>
                  <div className="room-spec-item"><i className="fa-solid fa-bath"></i> <span>Private Bathroom</span></div>
                  <div className="room-spec-item"><i className="fa-solid fa-tv"></i> <span>Flat-screen TV</span></div>
                  <div className="room-spec-item"><i className="fa-solid fa-wifi"></i> <span>Free WiFi</span></div>
                </div>
              </div>

              <div className="room-booking-panel">
                <div className="room-price" style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Rates from</span>
                  <span style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)', fontFamily: 'var(--font-playfair)' }}>5,750 RSD <span style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 'normal' }}>/ night</span></span>
                  <Link href="/en/pricing" className="room-pricing-link" style={{ marginTop: '6px' }}>
                    View full pricing sheet
                  </Link>
                </div>
                <Link href="/en/booking" className="btn btn-primary" style={{ padding: '16px 32px' }}>
                  Book Superior Room &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
