import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import FaqSection from '../../../components/FaqSection';

const faqData = [
  {
    question: 'Koliki je maksimalni kapacitet Vile Kruna za organizovane grupe?',
    answer: 'Vila Kruna može udobno smestiti grupe od 20 i više gostiju raspoređenih po prostranim dvokrevetnim, trokrevetnim, četvorokrevetnim sobama i apartmanima.',
  },
  {
    question: 'Da li pružate jedan zbirni račun za celu grupu i organizatora?',
    answer: 'Da! Vršimo izdavanje jednog zbirnog računa ili B2B fakture za organizatora putovanja, agenciju ili firmu.',
  },
  {
    question: 'Da li je moguće zakupiti ceo sprat ili objekat ekskluzivno za našu grupu?',
    answer: 'Da, uz blagovremenu rezervaciju nudimo mogućnost zakupa celog sprata ili objekta radi potpune privatnosti i mira Vaše grupe.',
  },
];

export const metadata: Metadata = {
  title: 'Smeštaj za organizovane grupe Beograd | Popusti — Vila Kruna',
  description: 'Smeštaj za turističke grupe, svadbe, seminare i ekskurzije u Beogradu do 20+ gostiju. Privatni parking za minibuseve i zbirno fakturisanje.',
  alternates: {
    canonical: '/usluge/smestaj-za-organizovane-grupe',
  },
  openGraph: {
    title: 'Smeštaj za organizovane grupe Beograd | Popusti — Vila Kruna',
    description: 'Organizovan smeštaj za grupe posetioca u Beogradu. Privatni parking za minibuseve, zbirno fakturisanje i ugovoreni popusti.',
    url: '/usluge/smestaj-za-organizovane-grupe',
  },
};

export default function SmestajZaOrganizovaneGrupePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Smeštaj za organizovane grupe u Beogradu',
    provider: {
      '@type': 'LodgingBusiness',
      name: 'Vila Kruna',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Beograd',
        addressCountry: 'RS',
      },
      telephone: '+381643339555',
    },
    description: 'Smeštaj za turističke i poslovne grupe, svadbene zvanice, seminare i ekskurzije sa privatnim parkingom za minibuseve.',
  };

  return (
    <>
      <Script
        id="faq-schema-grupe"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="service-schema-grupe"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section className="page-header" id="grupe-header">
        <div className="container">
          <h1>Smeštaj za organizovane grupe u Beogradu — Vila Kruna</h1>
          <p>Udoban smeštaj za grupe do 20+ gostiju sa privatnim parkingom, zbirnim računom i zakupom sprata.</p>
        </div>
      </section>

      <section className="section" id="grupe-content">
        <div className="container">
          {/* Uvod i opis */}
          <div className="about-grid" style={{ marginBottom: '60px' }}>
            <div className="about-text">
              <h2 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '20px' }}>
                Svi na jednom mestu uz jednostavnu organizaciju
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '15px', lineHeight: '1.7' }}>
                Organizovanje grupnog smeštaja — bilo da je reč o gostima na svadbi, učesnicima seminara, turističkim grupama ili đacima na ekskurziji — zahteva objekat sa dovoljnim kapacitetima i mogućnošću parkiranja većih vozila.
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '25px', lineHeight: '1.7' }}>
                U Vili Kruna omogućavamo smeštaj celih grupa u jednom objektu. Naše sobe su prostrane, klimatizovane i opremljene sopstvenim kupatilima, dok ograđeno dvorište prima minibuseve i više putničkih automobila istovremeno.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-users" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Kapacitet 20+ osoba</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-bus" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Parking za minibuseve</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-building" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Zakup celog sprata</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-file-invoice" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Zbirni račun za grupu</span>
                </div>
              </div>
            </div>

            <div
              className="about-img"
              style={{
                backgroundImage: "url('https://utfs.io/f/7BAyoiVHGCJetedZrS3gEFV8uPekhloUQDIBTXZRYH4riAm2')",
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-lg)',
                minHeight: '350px',
                borderRadius: 'var(--border-radius)',
              }}
            ></div>
          </div>

          {/* Prednosti vs O čemu voditi računa */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginBottom: '50px' }}>
            <div style={{ background: 'var(--white)', padding: '30px', borderRadius: 'var(--border-radius)', border: '1px solid var(--border-color)' }}>
              <h3 style={{ color: '#2e7d32', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fa-solid fa-circle-check"></i> Operativne prednosti za grupe
              </h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.8', listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>Jedan zbirni račun za celu grupu bez pojedinačnih računa za svakog gosta.</li>
                <li>Mogućnost zakupa celog sprata za potpunu privatnost grupe.</li>
                <li>Fleksibilna rooming lista i brza promena rasporeda gostiju po sobama.</li>
                <li>Besplatan privatni parking za minibuseve pod 24/7 video nadzorom.</li>
              </ul>
            </div>

            <div style={{ background: 'var(--white)', padding: '30px', borderRadius: 'var(--border-radius)', border: '1px solid var(--border-color)' }}>
              <h3 style={{ color: '#d32f2f', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fa-solid fa-handshake"></i> O čemu voditi računa
              </h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.8', listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>Grupne rezervacije zahtevaju avansnu uplatnu potvrdu radi blokiranja više soba.</li>
                <li>Dostavljanje konačne rooming liste preporučuje se najmanje 3 dana pre dolaska.</li>
              </ul>
            </div>
          </div>

          {/* Internal links */}
          <div style={{ marginBottom: '50px' }}>
            <h3 style={{ color: 'var(--primary)', fontSize: '1.6rem', marginBottom: '20px' }}>
              Povezane stranice
            </h3>
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <Link href="/usluge/dnevni-smestaj" className="btn btn-secondary">
                <i className="fa-solid fa-clock" style={{ marginRight: '8px' }}></i> Dnevni smeštaj
              </Link>
              <Link href="/usluge/produzeni-boravak" className="btn btn-secondary">
                <i className="fa-solid fa-calendar-days" style={{ marginRight: '8px' }}></i> Produženi boravak
              </Link>
              <Link href="/kako-do-nas-sa-autoputa" className="btn btn-secondary">
                <i className="fa-solid fa-route" style={{ marginRight: '8px' }}></i> Prilaz sa auto-puta
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <div style={{ marginBottom: '60px' }}>
            <h3 style={{ color: 'var(--primary)', fontSize: '1.6rem', marginBottom: '25px', textAlign: 'center' }}>
              Često postavljana pitanja o grupnom smeštaju
            </h3>
            <FaqSection items={faqData} />
          </div>

          {/* CTA */}
          <div className="text-center" style={{ background: 'var(--white)', padding: '40px', borderRadius: 'var(--border-radius)', border: '1px solid var(--border-color)' }}>
            <h3 style={{ color: 'var(--primary)', fontSize: '1.8rem', marginBottom: '15px' }}>
              Planirate dolazak grupe u Beograd?
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '25px' }}>
              Zatražite ponudu sa popustima za grupe i proverite raspoloživost.
            </p>
            <Link href="/rezervacija" className="btn btn-primary" style={{ padding: '16px 36px', fontSize: '1.1rem' }}>
              <i className="fa-solid fa-envelope" style={{ marginRight: '10px' }}></i> Pošaljite upit za grupu
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
