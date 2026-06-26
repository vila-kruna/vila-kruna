import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kako do nas sa auto-puta — Mini-vodič | Vila Kruna Beograd',
  description: 'Saznajte kako najlakše stići do Vile Kruna sa auto-puta ili beogradske obilaznice. Detaljna uputstva za vozače, udaljenosti i besplatan parking.',
  alternates: {
    canonical: '/kako-do-nas-sa-autoputa',
  },
  openGraph: {
    title: 'Kako do nas sa auto-puta — Mini-vodič | Vila Kruna Beograd',
    description: 'Najbrži i najlakši način da nas pronađete sa auto-puta ili beogradske obilaznice. Detaljna uputstva i besplatan parking pod nadzorom.',
    url: '/kako-do-nas-sa-autoputa',
  },
};

export default function KakoDoNasPage() {
  return (
    <>
      <section className="page-header" id="highway-guide-header">
        <div className="container">
          <h1>Kako do nas sa auto-puta</h1>
          <p>Kratak i jednostavan vodič za brzi dolazak do Vile Kruna sa glavnih putnih pravaca.</p>
        </div>
      </section>

      <section className="section" id="highway-guide-content">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="section-title text-center">Savršena Lokacija za Tranzit i Odmor</h2>
          <p className="section-subtitle text-center">
            Vila Kruna se nalazi u Rakovici, na mirnoj lokaciji koja je izuzetno dobro povezana sa obilaznicom oko Beograda i auto-putem E-75.
          </p>

          <div style={{ marginBottom: '40px' }}>
            <div style={{ background: 'var(--white)', padding: '30px', borderRadius: 'var(--border-radius)', border: '1px solid var(--border-color)', marginBottom: '30px' }}>
              <h3 style={{ color: 'var(--primary)', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fa-solid fa-map-location-dot"></i> Iz pravca Zagreba / Novog Sada (E-70 / E-75)
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '15px' }}>
                Ukoliko dolazine iz pravca Hrvatske ili severa Srbije, pratite obilaznicu oko Beograda (smer ka Nišu).
              </p>
              <ol style={{ paddingLeft: '20px', color: 'var(--text-primary)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>Isključite se na petlji <strong>Orlovača</strong> ka Ibarskoj magistrali (smer Rakovica/Centar).</li>
                <li>Nastavite pravo ulicom Patrijarha Dimitrija.</li>
                <li>Skrenite desno u ulicu Svetozara Ivačkovića gde se nalazi Vila Kruna.</li>
              </ol>
            </div>

            <div style={{ background: 'var(--white)', padding: '30px', borderRadius: 'var(--border-radius)', border: '1px solid var(--border-color)', marginBottom: '30px' }}>
              <h3 style={{ color: 'var(--primary)', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fa-solid fa-road"></i> Iz pravca Niša / Kragujevca (E-75)
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '15px' }}>
                Za goste koji dolaze sa juga Srbije, najlakši put vodi preko obilaznice oko Beograda kako biste izbegli gradsku gužvu.
              </p>
              <ol style={{ paddingLeft: '20px', color: 'var(--text-primary)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>Pratite obilaznicu ka Zagrebu/Ostružnici i isključite se na petlji <strong>Kružni put Kijevo</strong> ili <strong>Orlovača</strong>.</li>
                <li>Pratite putokaze ka Rakovici.</li>
                <li>Vila se nalazi na svega 5-7 minuta vožnje od obilaznice.</li>
              </ol>
            </div>

            <div style={{ background: 'var(--white)', padding: '30px', borderRadius: 'var(--border-radius)', border: '1px solid var(--border-color)' }}>
              <h3 style={{ color: 'var(--primary)', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fa-solid fa-city"></i> Iz centra Beograda
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '15px' }}>
                Ako dolazite iz samog centra grada, preporučujemo put preko Topčidera.
              </p>
              <ol style={{ paddingLeft: '20px', color: 'var(--text-primary)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>Vozite Bulevarom vojvode Mišića pored Sajma, pa preko Topčiderske reke prođite pored parka Topčider.</li>
                <li>Nastavite pravo Bulevarom Patrijarha Pavla i Patrijarha Dimitrija direktno ka Rakovici.</li>
                <li>Put je direktan, brz i bez komplikovanih skretanja.</li>
              </ol>
            </div>
          </div>

          <div className="price-note-box" style={{ marginBottom: '40px' }}>
            <p>
              <i className="fa-solid fa-square-parking" style={{ color: 'var(--accent)', marginRight: '8px', fontSize: '1.1rem' }}></i>
              <strong>Besplatan i siguran parking:</strong> Kada stignete, na raspolaganju Vam je naš veliki ograđeni privatni parking sa video nadzorom. Parking je potpuno besplatan za sve goste i može primiti i veća vozila (kombije, SUV vozila, vozila sa prikolicom).
            </p>
          </div>

          <div className="text-center" style={{ marginTop: '30px' }}>
            <Link href="/rezervacija" className="btn btn-primary">
              <i className="fa-solid fa-calendar-check"></i> Rezervišite smeštaj
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
