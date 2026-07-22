import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import FaqSection from '../../../components/FaqSection';

const faqData = [
  {
    question: 'Kako se dogovara prevoz i aerodromski transfer do Vile Kruna?',
    answer: 'Transfer možete zatražiti prilikom popunjavanja forme za rezervaciju sobe ili pozivom/porukom našem osoblju najmanje 24h pre dolaska. Dovoljno je da dostavite broj leta ili planirano vreme dolaska.',
  },
  {
    question: 'Da li je cena prevoza fiksna i ugovorena unapred?',
    answer: 'Da! Sve cene transfera su unapred ugovorene i garantovano fiksne. Nema nepredviđenih troškova, taksimetara niti doplate za prtljag.',
  },
  {
    question: 'Da li organizujete prevoz i za veće grupe i više putnika (kombi)?',
    answer: 'Da, pored putničkih automobila za 1 do 4 osobe, po dogovoru organizujemo i prevoz putničkim kombi vozilima za veće porodice, timove i grupe.',
  },
];

export const metadata: Metadata = {
  title: 'Prevoz i transferi Beograd | Aerodromski transfer — Vila Kruna',
  description: 'Pouzdan privatni transfer od/do Aerodroma Nikola Tesla ili glavnih stanica u Beogradu. Fiksne garantovane cene bez taksimetarskih iznenađenja.',
  alternates: {
    canonical: '/usluge/organizacija-prevoza',
  },
  openGraph: {
    title: 'Prevoz i transferi Beograd | Aerodromski transfer — Vila Kruna',
    description: 'Pouzdan prevoz i aerodromski transferi po fiksnoj ceni za goste Vile Kruna u Beogradu.',
    url: '/usluge/organizacija-prevoza',
  },
};

export default function OrganizacijaPrevozaPage() {
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
    name: 'Organizacija prevoza i aerodromskih transfera',
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
    description: 'Privatni transferi od i do Aerodroma Nikola Tesla, železničke i autobuske stanice za goste Vile Kruna.',
  };

  return (
    <>
      <Script
        id="faq-schema-prevoz"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="service-schema-prevoz"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section className="page-header" id="prevoz-header">
        <div className="container">
          <h1>Organizacija prevoza i transfera — Vila Kruna</h1>
          <p>Siguran, tačan i udoban prevoz od aerodroma i stanica direktno do našeg smeštaja.</p>
        </div>
      </section>

      <section className="section" id="prevoz-content">
        <div className="container">
          {/* Uvod i opis */}
          <div className="about-grid" style={{ marginBottom: '60px' }}>
            <div className="about-text">
              <h2 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '20px' }}>
                Bezstresan dolazak na željenu destinaciju
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '15px', lineHeight: '1.7' }}>
                Dolazak u nepoznat grad nakon dugog leta ili vožnje vozom često sa sobom nosi brige oko pronalaska pouzdanog taksija, nošenja teškog prtljaga i nepredviđenih visokih cena vožnje bez taksimetra.
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '25px', lineHeight: '1.7' }}>
                U Vili Kruna organizujemo profesionalne privatne transfere i doček gostiju po unapred fiksiranim i garantovanim cenama. Vozač Vas čeka na izlazu sa terminala sa natpisom Vašeg imena i pomaže oko prtljaga.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-plane-arrival" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Aerodromski transfer</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-money-bill-wave" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Fiksna garantovana cena</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-clock" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Doček po voznom redu</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-bus" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Kombi za grupe</span>
                </div>
              </div>
            </div>

            <div
              className="about-img"
              style={{
                backgroundImage: "url('https://utfs.io/f/7BAyoiVHGCJenc84FCkO3WXfeNzPAUHa8t91oGIrqb7YRShF')",
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
                <i className="fa-solid fa-circle-check"></i> Prednosti organizovanog prevoza
              </h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.8', listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>Doček na terminalu sa imenom i vožnja direktno do smeštaja.</li>
                <li>Fiksna cena ugovorena unapred — bez skokova taksimetra i skrivene doplate za kofere.</li>
                <li>Klimatizovana i udobna vozila sa prostranim gepekom za kofere.</li>
                <li>Mogućnost organizacije kombi prevoza za više putnika odjednom.</li>
              </ul>
            </div>

            <div style={{ background: 'var(--white)', padding: '30px', borderRadius: 'var(--border-radius)', border: '1px solid var(--border-color)' }}>
              <h3 style={{ color: '#d32f2f', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fa-solid fa-calendar-day"></i> O čemu voditi računa
              </h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.8', listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>Prevoz je potrebno najaviti i ugovoriti najmanje 24 sata pre dolaska.</li>
                <li>Za najbrži doček neophodno je dostaviti tačan broj leta ili vreme dolaska voza/autobusa.</li>
              </ul>
            </div>
          </div>

          {/* Kontekstualni linkovi ka prevoznicima */}
          <div style={{ background: 'rgba(212, 175, 55, 0.05)', padding: '35px', borderRadius: 'var(--border-radius)', border: '1px solid rgba(212, 175, 55, 0.2)', marginBottom: '50px' }}>
            <h3 style={{ color: 'var(--primary)', fontSize: '1.6rem', marginBottom: '15px' }}>
              Korisne informacije o redu vožnje i letovima
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '15px' }}>
              Zvanični red letenja možete proveriti na sajtu <a href="https://beg.aero/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Aerodroma Nikola Tesla Beograd</a>, dok železničke polaske i dolazak brzih vozova možete pratiti na portalu <a href="https://srbijavoz.rs/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Srbija Voz</a>.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              Ukoliko dolazite sopstvenim automobilom, pročitajte naše detaljno uputstvo <Link href="/kako-do-nas-sa-autoputa" style={{ color: 'var(--primary)', textDecoration: 'underline', fontWeight: '600' }}>Prilaz sa auto-puta do Vile Kruna</Link>.
            </p>
          </div>

          {/* Internal links */}
          <div style={{ marginBottom: '50px' }}>
            <h3 style={{ color: 'var(--primary)', fontSize: '1.6rem', marginBottom: '20px' }}>
              Povezane stranice
            </h3>
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <Link href="/kako-do-nas-sa-autoputa" className="btn btn-secondary">
                <i className="fa-solid fa-route" style={{ marginRight: '8px' }}></i> Prilaz sa auto-puta
              </Link>
              <Link href="/usluge/smestaj-za-radnike" className="btn btn-secondary">
                <i className="fa-solid fa-helmet-safety" style={{ marginRight: '8px' }}></i> Smeštaj za radnike
              </Link>
              <Link href="/usluge/smestaj-za-organizovane-grupe" className="btn btn-secondary">
                <i className="fa-solid fa-users" style={{ marginRight: '8px' }}></i> Smeštaj za grupe
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <div style={{ marginBottom: '60px' }}>
            <h3 style={{ color: 'var(--primary)', fontSize: '1.6rem', marginBottom: '25px', textAlign: 'center' }}>
              Često postavljana pitanja o prevozu
            </h3>
            <FaqSection items={faqData} />
          </div>

          {/* CTA */}
          <div className="text-center" style={{ background: 'var(--white)', padding: '40px', borderRadius: 'var(--border-radius)', border: '1px solid var(--border-color)' }}>
            <h3 style={{ color: 'var(--primary)', fontSize: '1.8rem', marginBottom: '15px' }}>
              Rezervišite smeštaj i prevoz na jednom mestu
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '25px' }}>
              Unesite detalje dolaska u napomenu forme za rezervaciju.
            </p>
            <Link href="/rezervacija" className="btn btn-primary" style={{ padding: '16px 36px', fontSize: '1.1rem' }}>
              <i className="fa-solid fa-car" style={{ marginRight: '10px' }}></i> Rezervišite sobu i prevoz
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
