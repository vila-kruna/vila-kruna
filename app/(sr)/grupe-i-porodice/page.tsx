import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Smeštaj za grupe i porodice u Beogradu | Vila Kruna',
  description: 'Tražite smeštaj za porodicu ili grupu prijatelja u Beogradu? Vila Kruna nudi prostrane sobe, kapacitete do 20+ osoba i obezbeđen besplatan parking.',
  alternates: {
    canonical: '/grupe-i-porodice',
  },
  openGraph: {
    title: 'Smeštaj za grupe i porodice u Beogradu | Vila Kruna',
    description: 'Prostrane i udobne sobe za porodice i veće grupe u Beogradu. Besplatan parking za automobile i kombi vozila. Kontaktirajte nas za ponudu.',
    url: '/grupe-i-porodice',
  },
};

export default function GrupeIPorodicePage() {
  return (
    <>
      <section className="page-header" id="groups-families-header">
        <div className="container">
          <h1>Smeštaj za grupe i porodice u Beogradu — Vila Kruna</h1>
          <p>Udobne, prostrane i povezane sobe idealne za porodična putovanja i grupne posete Beogradu.</p>
        </div>
      </section>

      <section className="section" id="groups-families-content">
        <div className="container">
          <div className="about-grid" style={{ marginBottom: '60px' }}>
            <div className="about-text">
              <h2 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '20px' }}>
                Zajedno na putu, sa punim komforom
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '15px' }}>
                Putovanje sa porodicom ili u grupi zahteva dobru organizaciju i smeštaj koji može da pruži komfor svima. U Vili Kruna nudimo prostrane sobe površine od 30m² do 65m² koje su savršene za smeštaj više osoba.
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '25px' }}>
                Naše sobe su opremljene udobnim bračnim krevetima i dodatnim kaučima na razvlačenje, što omogućava fleksibilan raspored spavanja. Ceo objekat može primiti veće grupe (sajmovi, svadbe, proslave, sportska takmičenja, turističke grupe) uz obezbeđen parking za sva vozila.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-users" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Kapacitet do 20+ gostiju</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-bed" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Fleksibilni kreveti</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-square-parking" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Parking za kombije & bus</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-percent" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Popusti za grupe</span>
                </div>
              </div>
            </div>

            <div
              className="about-img"
              style={{
                backgroundImage: "url('https://utfs.io/f/7BAyoiVHGCJetedZrS3gEFV8uPekhloUQDIBTXZRYH4riAm2')",
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-lg)'
              }}
            ></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '50px' }}>
            <div style={{ background: 'var(--white)', padding: '30px', borderRadius: 'var(--border-radius)', border: '1px solid var(--border-color)' }}>
              <h3 style={{ color: 'var(--primary)', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fa-solid fa-baby-carriage"></i> Za Porodice
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Naše Deluxe i Superior sobe nude dovoljno prostora za decu i roditelje. Uz besplatan brzi internet, TV sa kablovskim kanalima i mirno okruženje bez buke, Vaša porodica će se osećati kao kod kuće. Takođe, lokacija je idealna jer smo blizu obilaznice i lako se stiže do svih delova grada.
              </p>
            </div>

            <div style={{ background: 'var(--white)', padding: '30px', borderRadius: 'var(--border-radius)', border: '1px solid var(--border-color)' }}>
              <h3 style={{ color: 'var(--primary)', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fa-solid fa-people-group"></i> Za Organizovane Grupe
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Bilo da organizujete smeštaj za svadbene goste, sportske ekipe, radnike ili turiste, Vila Kruna nudi odličan odnos cene i kvaliteta. Naš veliki privatni parking može primiti kombije, minibuseve i više automobila odjednom, potpuno besplatno i bezbedno pod video nadzorom.
              </p>
            </div>
          </div>

          <div className="price-note-box" style={{ marginBottom: '40px' }}>
            <p style={{ textAlign: 'center' }}>
              <i className="fa-solid fa-circle-info" style={{ color: 'var(--accent)', marginRight: '8px', fontSize: '1.1rem' }}></i>
              <strong>Planirate dolazak grupe?</strong> Kontaktirajte nas direktno za specijalne cene, popuste i uslove prilagođene Vašim potrebama i dužini boravka.
            </p>
          </div>

          <div className="text-center">
            <Link href="/rezervacija" className="btn btn-primary" style={{ padding: '16px 36px' }}>
              <i className="fa-solid fa-envelope" style={{ marginRight: '8px' }}></i> Pošaljite upit za grupe
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
