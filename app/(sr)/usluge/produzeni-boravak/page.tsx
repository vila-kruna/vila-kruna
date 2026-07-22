import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import FaqSection from '../../../components/FaqSection';

const faqData = [
  {
    question: 'Koji je minimalan broj dana za ostvarivanje popusta na produženi boravak?',
    answer: 'Posebne ugovorene cene i pogodnosti na produženi boravak obračunavaju se već od 7 vezanih noćenja, dok boravci od 14 i 30 dana donose najveće uštede u odnosu na standardne dnevne cene.',
  },
  {
    question: 'Da li su sve komunalije i brzi internet uračunati u cenu?',
    answer: 'Da! U cenu su uključeni svi troškovi: električna energija, grejanje, klimatizacija, topla voda 24/7, optički internet, kablovska TV, čišćenje sobe i redovna zamena posteljine.',
  },
  {
    question: 'Da li izdajete B2B fakture za poslovna lica pri dugotrajnom boravku?',
    answer: 'Da, vršimo izdavanje B2B faktura i računovodstvenih računa prenosom na račun za pravna lica i firme.',
  },
];

export const metadata: Metadata = {
  title: 'Produženi boravak Beograd | Povoljan dugoročni smeštaj — Vila Kruna',
  description: 'Tražite dugoročni smeštaj u Beogradu? Uštedite novac uz specijalne ugovorene cene za boravke duže od 7, 14 i 30 dana. Sve režije, WiFi i parking uračunati.',
  alternates: {
    canonical: '/usluge/produzeni-boravak',
  },
  openGraph: {
    title: 'Produženi boravak Beograd | Povoljan dugoročni smeštaj — Vila Kruna',
    description: 'Posebni uslovi za produženi boravak od 7, 14 i 30+ dana u Beogradu. Sve režije, optički internet, čišćenje i privatni parking uključeni u cenu.',
    url: '/usluge/produzeni-boravak',
  },
};

export default function ProduzeniBoravakPage() {
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
    name: 'Produženi boravak u Beogradu',
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
    description: 'Dugoročni smeštaj u Beogradu za sedmodnevne, dvonedeljne i mesečne boravke sa uključenim režijama i parkingom.',
  };

  return (
    <>
      <Script
        id="faq-schema-produzeni-boravak"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="service-schema-produzeni-boravak"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section className="page-header" id="produzeni-boravak-header">
        <div className="container">
          <h1>Produženi boravak u Beogradu — Vila Kruna</h1>
          <p>Uštedite pri višenedeljem ili mesečnom boravku uz sve uračunate troškove i potpunu udobnost.</p>
        </div>
      </section>

      <section className="section" id="produzeni-boravak-content">
        <div className="container">
          {/* Uvod i opis */}
          <div className="about-grid" style={{ marginBottom: '60px' }}>
            <div className="about-text">
              <h2 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '20px' }}>
                Vaš udoban dom van doma na više nedelja
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '15px', lineHeight: '1.7' }}>
                Bilo da boravite u Beogradu zbog dužeg poslovnog angažmana, radova na terenu, medicinskih pregleda, renoviranja sopstvenog stana ili dužeg odmora — plaćanje standardne dnevne cene tokom više nedelja stvara nepotrebno opterećenje budžeta.
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '25px', lineHeight: '1.7' }}>
                U Vili Kruna paket **Produženi boravak** omogućava Vam iznajmljivanje kompletno opremljene sobe sa sopstvenim kupatilom, brzim optičkim WiFi internetom i besplatnim dvorišnim parkingom po ugovorenim cenama prilagođenim dužini boravka.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-handshake" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Ugovorene niske cene</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-bolt" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Sve režije uključene</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-broom" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Redovno čišćenje</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-file-invoice" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>B2B fakturisanje za firme</span>
                </div>
              </div>
            </div>

            <div
              className="about-img"
              style={{
                backgroundImage: "url('https://utfs.io/f/7BAyoiVHGCJeAHoBZb3Ee2cMNEHvPDR0mzldWLfVIotjhbaY')",
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
                <i className="fa-solid fa-circle-check"></i> Prednosti produženog boravka
              </h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.8', listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>Bez depozita, agencijskih provizija i nepredvidivih zimskih računa za grejanje.</li>
                <li>Uračunato redovno čišćenje sobe i zamena čiste posteljine i peškira.</li>
                <li>Privatni parking unutar ograđenog dvorišta sa video nadzorom besplatan je tokom celog boravka.</li>
                <li>Interna usluga pranja i peglanja veša na raspolaganju gostima.</li>
              </ul>
            </div>

            <div style={{ background: 'var(--white)', padding: '30px', borderRadius: 'var(--border-radius)', border: '1px solid var(--border-color)' }}>
              <h3 style={{ color: '#d32f2f', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fa-solid fa-triangle-exclamation"></i> O čemu voditi računa
              </h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.8', listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>Da bi se ostvario najpovoljniji ugovoreni paket, potrebno je unapred definisati okvirno trajanje boravka.</li>
                <li>U slučaju ranijeg prekida boravka pre navršenih 7 dana, obračun se vrši po redovnom cenovniku.</li>
              </ul>
            </div>
          </div>

          {/* Po čemu se razlikujemo od drugih */}
          <div style={{ background: 'rgba(212, 175, 55, 0.05)', padding: '35px', borderRadius: 'var(--border-radius)', border: '1px solid rgba(212, 175, 55, 0.2)', marginBottom: '50px' }}>
            <h3 style={{ color: 'var(--primary)', fontSize: '1.6rem', marginBottom: '15px' }}>
              Vila Kruna vs. Mesečno iznajmljivanje stana u Beogradu
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              Kratkoročno iznajmljivanje stana u Beogradu obično zahteva unapred plaćanje depozita u visini jedne do dve stanarine, ugovore na minimum godinu dana i komplikovanu proceduru prenosa računa. U Vili Kruna nema depozita i računa — plaćate jednu dogovorenu cenu u kojoj imate uračunato čišćenje, posteljinu i bezbedan dvorišni parking!
            </p>
          </div>

          {/* Internal links */}
          <div style={{ marginBottom: '50px' }}>
            <h3 style={{ color: 'var(--primary)', fontSize: '1.6rem', marginBottom: '20px' }}>
              Povezane usluge i informacije
            </h3>
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <Link href="/usluge/pranje-vesa-za-goste" className="btn btn-secondary">
                <i className="fa-solid fa-shirt" style={{ marginRight: '8px' }}></i> Pranje i peglanje veša
              </Link>
              <Link href="/usluge/smestaj-za-radnike" className="btn btn-secondary">
                <i className="fa-solid fa-helmet-safety" style={{ marginRight: '8px' }}></i> Smeštaj za radnike i firme
              </Link>
              <Link href="/tih-miran-kutak-sa-parkingom" className="btn btn-secondary">
                <i className="fa-solid fa-square-parking" style={{ marginRight: '8px' }}></i> Besplatan parking u dvorištu
              </Link>
              <Link href="/cenovnik" className="btn btn-secondary">
                <i className="fa-solid fa-tags" style={{ marginRight: '8px' }}></i> Zvanični cenovnik
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <div style={{ marginBottom: '60px' }}>
            <h3 style={{ color: 'var(--primary)', fontSize: '1.6rem', marginBottom: '25px', textAlign: 'center' }}>
              Često postavljana pitanja o produženom boravku
            </h3>
            <FaqSection items={faqData} />
          </div>

          {/* CTA */}
          <div className="text-center" style={{ background: 'var(--white)', padding: '40px', borderRadius: 'var(--border-radius)', border: '1px solid var(--border-color)' }}>
            <h3 style={{ color: 'var(--primary)', fontSize: '1.8rem', marginBottom: '15px' }}>
              Zatražite ponudu za produženi boravak
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '25px' }}>
              Pošaljite nam željene datume i trajanje boravka za izradu najpovoljnije ponude.
            </p>
            <Link href="/rezervacija" className="btn btn-primary" style={{ padding: '16px 36px', fontSize: '1.1rem' }}>
              <i className="fa-solid fa-envelope" style={{ marginRight: '10px' }}></i> Zatražite ponudu za više dana
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
