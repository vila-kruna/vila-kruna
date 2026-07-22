import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import FaqSection from '../../../components/FaqSection';

const faqData = [
  {
    question: 'Koliko traje pranje i sušenje veša u objektu?',
    answer: 'Standardno vreme obrade veša je između 12 i 24 sata. Ako veš predate osoblju ujutru do 10:00h, često je spreman i složen već istog dana uveče.',
  },
  {
    question: 'Da li nudite i uslugu peglanja garderobe?',
    answer: 'Da! Pored mašinskog pranja i sušenja, na zahtev vršimo i peglanje košulja, pantalona i svečane garderobe.',
  },
  {
    question: 'Koje deterdžente i omekšivače koristite?',
    answer: 'Koristimo isključivo profesionalne, dermatološki testirane i hipoalergenske deterdžente koji čuvaju kvalitet tkanine i ne izazivaju iritacije kože.',
  },
];

export const metadata: Metadata = {
  title: 'Pranje veša za goste | Usluga pranja i peglanja — Vila Kruna',
  description: 'Vila Kruna nudi brzu internu uslugu pranja, mašinskog sušenja i peglanja veša za svoje goste. Hipoalergenski deterdženti i brza obrada.',
  alternates: {
    canonical: '/usluge/pranje-vesa-za-goste',
  },
  openGraph: {
    title: 'Pranje veša za goste | Usluga pranja i peglanja — Vila Kruna',
    description: 'Interna usluga pranja, sušenja i peglanja veša direktno u objektu Vila Kruna u Beogradu.',
    url: '/usluge/pranje-vesa-za-goste',
  },
};

export default function PranjeVesaZaGostePage() {
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
    name: 'Usluga pranja i peglanja veša za goste',
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
    description: 'Interna usluga pranja, mašinskog sušenja i peglanja garderobe za goste Vile Kruna.',
  };

  return (
    <>
      <Script
        id="faq-schema-pranje-vesa"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="service-schema-pranje-vesa"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section className="page-header" id="pranje-vesa-header">
        <div className="container">
          <h1>Pranje i peglanje veša za goste — Vila Kruna</h1>
          <p>Čista i mirišljava odeća bez gubljenja vremena po javnim vešerajima u gradu.</p>
        </div>
      </section>

      <section className="section" id="pranje-vesa-content">
        <div className="container">
          {/* Uvod i opis */}
          <div className="about-grid" style={{ marginBottom: '60px' }}>
            <div className="about-text">
              <h2 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '20px' }}>
                Čista i složena garderoba nadohvat ruke
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '15px', lineHeight: '1.7' }}>
                Kada boravite van kuće duže od nekoliko dana, pranje veša brzo postaje neophodnost. Traženje samouslužnih perionica po nepoznatom gradu oduzima dragoceno vreme i zahteva nošenje teških torbi sa vešom kroz gradski prevoz.
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '25px', lineHeight: '1.7' }}>
                U Vili Kruna pružamo kompletnu uslugu pranja, sušenja i peglanja veša direktno u objektu. Dovoljno je da kesu sa vešom predate našem osoblju i preuzmete čist i složen veš spreman za nošenje.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-soap" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Profesionalno pranje</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-wind" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Mašinsko sušenje</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-shirt" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Peglanje na zahtev</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-bolt" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Rok 12–24h</span>
                </div>
              </div>
            </div>

            <div
              className="about-img"
              style={{
                backgroundImage: "url('https://utfs.io/f/7BAyoiVHGCJeCt235AnJqLhaVXvwsKWTQ24RuMo5NZF79DUf')",
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
                <i className="fa-solid fa-circle-check"></i> Prednosti interne usluge pranja
              </h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.8', listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>Maksimalna ušteda vremena bez napuštanja smeštajnog objekta.</li>
                <li>Hipoalergenski kvalitetni deterdženti nežni prema koži i odeći.</li>
                <li>Idealno za goste na produženom boravku, terenske radnike i sportske ekipe.</li>
                <li>Pažljivo složena i ispeglana garderoba vraća se direktno u Vašu sobu.</li>
              </ul>
            </div>

            <div style={{ background: 'var(--white)', padding: '30px', borderRadius: 'var(--border-radius)', border: '1px solid var(--border-color)' }}>
              <h3 style={{ color: '#d32f2f', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fa-solid fa-clock"></i> O čemu voditi računa
              </h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.8', listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>Predaja veša osoblju u jutarnjim satima (do 10:00h) garantuje najbrži završetak i vraćanje istog dana.</li>
                <li>Za osetljivu garderobu koja zahteva pranje na nižim temperaturama preporučuje se da naglasite osoblju.</li>
              </ul>
            </div>
          </div>

          {/* Internal links */}
          <div style={{ marginBottom: '50px' }}>
            <h3 style={{ color: 'var(--primary)', fontSize: '1.6rem', marginBottom: '20px' }}>
              Povezane usluge
            </h3>
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <Link href="/usluge/produzeni-boravak" className="btn btn-secondary">
                <i className="fa-solid fa-calendar-days" style={{ marginRight: '8px' }}></i> Produženi boravak
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
              Često postavljana pitanja o pranju veša
            </h3>
            <FaqSection items={faqData} />
          </div>

          {/* CTA */}
          <div className="text-center" style={{ background: 'var(--white)', padding: '40px', borderRadius: 'var(--border-radius)', border: '1px solid var(--border-color)' }}>
            <h3 style={{ color: 'var(--primary)', fontSize: '1.8rem', marginBottom: '15px' }}>
              Zatražite uslugu pranja veša tokom boravka
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '25px' }}>
              Naše ljubazno osoblje stoji Vam na raspolaganju u svakom trenutku.
            </p>
            <Link href="/rezervacija" className="btn btn-primary" style={{ padding: '16px 36px', fontSize: '1.1rem' }}>
              <i className="fa-solid fa-calendar-check" style={{ marginRight: '10px' }}></i> Rezervišite smeštaj
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
