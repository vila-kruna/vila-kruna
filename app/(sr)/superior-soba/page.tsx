import type { Metadata } from 'next';
import Link from 'next/link';
import RoomGallery from '../../components/RoomGallery';

export const metadata: Metadata = {
  title: 'Superior soba sa saunom i đakuzijem u Beogradu | Vila Kruna',
  description: 'Rezervišite superior sobu sa sopstvenom finskom saunom i hidromasažnom đakuzi kadom u Beogradu. 65m² čistog luksuza, besplatan parking i WiFi.',
  alternates: {
    canonical: '/superior-soba',
  },
  openGraph: {
    title: 'Superior soba sa saunom i đakuzijem u Beogradu | Vila Kruna',
    description: 'Rezervišite superior sobu sa sopstvenom finskom saunom i hidromasažnom đakuzi kadom u Beogradu. 65m² čistog luksuza.',
    url: '/superior-soba',
  },
};

export default function SuperiorSobaPage() {
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
          <h1>Superior soba sa saunom i đakuzijem u Beogradu — Vila Kruna</h1>
          <p>Otkrijte naš najluksuzniji smeštaj kreiran za apsolutno uživanje i relaksaciju.</p>
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
                  <span className="room-meta-tag"><i className="fa-solid fa-users"></i> &nbsp;1-3 Osobe</span>
                  <span className="room-meta-tag"><i className="fa-solid fa-hot-tub-person"></i> &nbsp;Sauna i Đakuzi</span>
                </div>
                <h2 className="room-title-large">Vaša privatna oaza od 65m²</h2>
                <p className="room-long-desc">
                  Superior soba sa King-size krevetom je dragulj naše ponude. Dizajnirana sa pažnjom posvećenom svakom detalju, nudi Vam potpuno opuštanje uz privatnu finsku saunu i hidromasažnu đakuzi kadu unutar same jedinice.
                </p>
                <p className="room-long-desc" style={{ marginTop: '-15px' }}>
                  Idealna je za parove na romantičnom putovanju, obeležavanje posebnih trenutaka, ili za goste koji traže dodatni luksuz i udobnost tokom boravka u Beogradu. Soba ima dodatni kauč na razvlačenje i sopstveni mini-bar.
                </p>

                <div className="room-specs-list">
                  <div className="room-spec-item"><i className="fa-solid fa-expand"></i> <span>65 m² prostora</span></div>
                  <div className="room-spec-item"><i className="fa-solid fa-snowflake"></i> <span>Klima uređaj</span></div>
                  <div className="room-spec-item"><i className="fa-solid fa-hot-tub-person"></i> <span>Đakuzi kada</span></div>
                  <div className="room-spec-item"><i className="fa-solid fa-fire"></i> <span>Privatna sauna</span></div>
                  <div className="room-spec-item"><i className="fa-solid fa-martini-glass"></i> <span>Mini-bar</span></div>
                  <div className="room-spec-item"><i className="fa-solid fa-bath"></i> <span>Kupatilo u sobi</span></div>
                  <div className="room-spec-item"><i className="fa-solid fa-tv"></i> <span>Flat-screen TV</span></div>
                  <div className="room-spec-item"><i className="fa-solid fa-wifi"></i> <span>Besplatan WiFi</span></div>
                </div>
              </div>

              <div className="room-booking-panel">
                <div className="room-price" style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Cena već od</span>
                  <span style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)', fontFamily: 'var(--font-playfair)' }}>5.750 RSD <span style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 'normal' }}>/ noć</span></span>
                  <Link href="/cenovnik" className="room-pricing-link" style={{ marginTop: '6px' }}>
                    Pogledajte kompletan cenovnik
                  </Link>
                </div>
                <Link href="/rezervacija" className="btn btn-primary" style={{ padding: '16px 32px' }}>
                  Rezervišite Superior Sobu &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
