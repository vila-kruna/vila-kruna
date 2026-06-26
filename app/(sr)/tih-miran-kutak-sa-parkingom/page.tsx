import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tih, miran kutak sa besplatnim parkingom | Vila Kruna Beograd',
  description: 'Uživajte u mirnom i tihom smeštaju u Beogradu. Vila Kruna nudi prostrane sobe i obezbeđen besplatan privatni parking pod video nadzorom.',
  alternates: {
    canonical: '/tih-miran-kutak-sa-parkingom',
  },
  openGraph: {
    title: 'Tih, miran kutak sa besplatnim parkingom | Vila Kruna Beograd',
    description: 'Smeštaj sa besplatnim privatnim parkingom i video nadzorom u mirnom delu Beograda. Savršeno mesto za tranzitne putnike i parove.',
    url: '/tih-miran-kutak-sa-parkingom',
  },
};

export default function MiranKutakPage() {
  return (
    <>
      <section className="page-header" id="quiet-corner-header">
        <div className="container">
          <h1>Tih i miran kutak sa parkingom</h1>
          <p>Odmorite se u mirnom okruženju sa obezbeđenim besplatnim privatnim parkingom za Vaš automobil.</p>
        </div>
      </section>

      <section className="section" id="quiet-corner-content">
        <div className="container">
          <div className="about-grid" style={{ marginBottom: '60px' }}>
            <div className="about-text">
              <h2 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '20px' }}>
                Vaša sigurna luka u Beogradu
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '15px' }}>
                Pronalaženje smeštaja sa sigurnim i pristupačnim parkingom u Beogradu može biti veliki izazov. U Vili Kruna smo taj problem rešili u potpunosti. Nudimo Vam mirnu lokaciju i besplatan, prostran i ograđen privatni parking za sve naše goste.
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '25px' }}>
                Nalazimo se u Rakovici, u tihoj ulici Svetozara Ivačkovića 4, izolovanoj od gradske vreve i buke saobraćaja, što garantuje miran san i potpun odmor nakon dugog putovanja ili napornog radnog dana.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <i className="fa-solid fa-shield-halved" style={{ color: 'var(--accent)', fontSize: '1.5rem', marginTop: '3px' }}></i>
                  <div>
                    <h4 style={{ color: 'var(--primary)', marginBottom: '5px' }}>Video nadzor</h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Parking je pokriven kamerama 24/7 za Vašu potpunu bezbednost.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <i className="fa-solid fa-expand" style={{ color: 'var(--accent)', fontSize: '1.5rem', marginTop: '3px' }}></i>
                  <div>
                    <h4 style={{ color: 'var(--primary)', marginBottom: '5px' }}>Prostranost</h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Bez brige o tesnim mestima — mesta ima dovoljno za sve goste.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <i className="fa-solid fa-truck" style={{ color: 'var(--accent)', fontSize: '1.5rem', marginTop: '3px' }}></i>
                  <div>
                    <h4 style={{ color: 'var(--primary)', marginBottom: '5px' }}>Za veća vozila</h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Pogodno za kombije, SUV vozila, terence i vozila sa prikolicom.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <i className="fa-solid fa-volume-xmark" style={{ color: 'var(--accent)', fontSize: '1.5rem', marginTop: '3px' }}></i>
                  <div>
                    <h4 style={{ color: 'var(--primary)', marginBottom: '5px' }}>Izuzetan mir</h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Zvučna izolacija u sobama i tiha lokacija bez bučnih saobraćajnica.</p>
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
              Idealan smeštaj za tranzitne putnike
            </h3>
            <p style={{ color: 'var(--text-secondary)', textAlign: 'center', maxWidth: '800px', margin: '0 auto 20px', lineHeight: '1.7' }}>
              Bez obzira da li putujete na more u Grčku, Crnu Goru ili tranzitirate kroz Srbiju ka Evropi, Vila Kruna je idealna lokacija za noćenje. Nalazimo se blizu obilaznice oko Beograda i petlje Orlovača, što Vam omogućava da ujutru nastavite putovanje bez upadanja u jutarnji špic i gradske gužve.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', marginTop: '30px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>0 RSD</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Cena Parkinga</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>100%</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Obezbeđen Mir</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>5 min</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Od Obilaznice</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/rezervacija" className="btn btn-primary" style={{ padding: '16px 36px' }}>
              <i className="fa-solid fa-calendar-check" style={{ marginRight: '8px' }}></i> Rezervišite miran boravak
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
