import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import FaqSection from '../../../components/FaqSection';

const faqData = [
  {
    question: 'Da li vršite izdavanje B2B faktura za pravna lica i radničke grupe?',
    answer: 'Da, apsolutno. Za sve građevinske, inženjerske i terenske firme vršimo izdavanje B2B faktura i računovodstvenih računa sa mogućnošću bezgotovinskog plaćanja prenosom na račun (virman).',
  },
  {
    question: 'Da li u dvorištu ima dovoljno mesta za radničke kombije i vozila sa opremom?',
    answer: 'Da, naš privatni ograđeni parking ima punu širinu i visinu za parkiranje teretnih kombija, pikapova i terenskih vozila pod 24/7 video nadzorom.',
  },
  {
    question: 'Kakav je raspored kreveta u radničkim sobama?',
    answer: 'Nudimo višekrevetne sobe sa pojedinačnim krevetima gde svaki radnik ima sopstveni ležaj i privatno kupatilo sa uvek toplom vodom unutar sobe.',
  },
  {
    question: 'Da li nudite pranje radnih odela i uniformi?',
    answer: 'Da, radnici mogu predati radna odela i uniformu na pranje i sušenje po izuzetno povoljnim ugovorenim cenama.',
  },
];

export const metadata: Metadata = {
  title: 'Smeštaj za radnike Beograd | Terenski radnici i B2B — Vila Kruna',
  description: 'Povoljan smeštaj za terenske radnike i građevinske firme u Beogradu. Prostrane sobe sa kupatilom, parking za kombije pod kamerama i B2B računi.',
  alternates: {
    canonical: '/usluge/smestaj-za-radnike',
  },
  openGraph: {
    title: 'Smeštaj za radnike Beograd | Terenski radnici i B2B — Vila Kruna',
    description: 'Smeštaj za radnike i terenske timove u Beogradu. Ograđen parking za kombije pod video nadzorom, B2B računi i brzi WiFi.',
    url: '/usluge/smestaj-za-radnike',
  },
};

export default function SmestajZaRadnikePage() {
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
    name: 'Smeštaj za radnike i građevinske timove',
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
    description: 'Povoljan i dostojanstven smeštaj za terenske radnike i firme sa B2B fakturisanjem i velikim dvorišnim parkingom za kombije.',
  };

  return (
    <>
      <Script
        id="faq-schema-radnici"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="service-schema-radnici"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section className="page-header" id="radnici-header">
        <div className="container">
          <h1>Smeštaj za terenske radnike i firme — Vila Kruna</h1>
          <p>Dostojanstven, čist i ekonomičan smeštaj sa besplatnim parkingom za kombije i B2B fakturisanjem.</p>
        </div>
      </section>

      <section className="section" id="radnici-content">
        <div className="container">
          {/* Uvod i opis */}
          <div className="about-grid" style={{ marginBottom: '60px' }}>
            <div className="about-text">
              <h2 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '20px' }}>
                Kvalitetan odmor za Vaš terenski tim
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '15px', lineHeight: '1.7' }}>
                Za uspešnu realizaciju građevinskih i terenskih projekata u Beogradu neophodan je partner koji razume poslovne zahteve firmi: B2B račune i ugovore, siguran parking za radne kombije i alate, te čiste i tople sobe u kojima se radnici mogu kvalitetno odmoriti nakon napornog radnog dana.
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '25px', lineHeight: '1.7' }}>
                U Vili Kruna nudimo prostrane višekrevetne i dvokrevetne sobe sa sopstvenim kupatilom, uvek toplom vodom, grejanjem/klimom i brzim optičkim WiFi internetom kako bi radnici bili u kontaktu sa svojim porodicama.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-file-invoice-dollar" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>B2B fakturisanje za firme</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-van-shuttle" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Parking za radne kombije</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-shirt" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Pranje radnih odela</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-percent" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Ugovoreni popusti</span>
                </div>
              </div>
            </div>

            <div
              className="about-img"
              style={{
                backgroundImage: "url('https://utfs.io/f/7BAyoiVHGCJe28vDdJsjWxN9zdEUKa1O4mc8He07DiboJvLk')",
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
                <i className="fa-solid fa-circle-check"></i> Zašto firme biraju Vilu Kruna
              </h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.8', listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>Ogromno ograđeno dvorište pod video nadzorom garantuje bezbednost vozila i alata.</li>
                <li>Mogućnost odloženog i bezgotovinskog plaćanja (virman) po ugovoru za firme.</li>
                <li>Topla voda 24/7, redovno čišćenje i zamena čiste posteljine.</li>
                <li>Interni vešeraj za pranje i mašinsko sušenje radničkih odela.</li>
              </ul>
            </div>

            <div style={{ background: 'var(--white)', padding: '30px', borderRadius: 'var(--border-radius)', border: '1px solid var(--border-color)' }}>
              <h3 style={{ color: '#d32f2f', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fa-solid fa-clipboard-list"></i> O čemu voditi računa
              </h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.8', listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>Za radničke grupe veće od 10 osoba preporučujemo rezervaciju 5 do 7 dana unapred.</li>
                <li>Potrebno je pre dolaska dostaviti podatke firme (PIB) radi izrade predračuna/fakture.</li>
              </ul>
            </div>
          </div>

          {/* Po čemu se razlikujemo od drugih */}
          <div style={{ background: 'rgba(212, 175, 55, 0.05)', padding: '35px', borderRadius: 'var(--border-radius)', border: '1px solid rgba(212, 175, 55, 0.2)', marginBottom: '50px' }}>
            <h3 style={{ color: 'var(--primary)', fontSize: '1.6rem', marginBottom: '15px' }}>
              Dostojanstvene sobe umesto neuslovnih radničkih baraka
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '15px' }}>
              Odmoran radnik radi bezbednije i efikasnije. U Vili Kruna ne nudimo prenagomilane spavaonice sa zajedničkim kupatilima u hodniku, već svetle, tople sobe sa sopstvenim kupatilom, TV-om i brzim internetom.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              Privredne subjekte upućujemo i na zvanični portal <a href="https://pks.rs/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Privredne komore Srbije</a> za proveru propisa u poslovanju.
            </p>
          </div>

          {/* Internal links */}
          <div style={{ marginBottom: '50px' }}>
            <h3 style={{ color: 'var(--primary)', fontSize: '1.6rem', marginBottom: '20px' }}>
              Povezane usluge
            </h3>
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <Link href="/usluge/produzeni-boravak" className="btn btn-secondary">
                <i className="fa-solid fa-calendar-days" style={{ marginRight: '8px' }}></i> Popusti za dugotrajne boravke
              </Link>
              <Link href="/usluge/pranje-vesa-za-goste" className="btn btn-secondary">
                <i className="fa-solid fa-shirt" style={{ marginRight: '8px' }}></i> Pranje radnih odela
              </Link>
              <Link href="/usluge/smestaj-za-organizovane-grupe" className="btn btn-secondary">
                <i className="fa-solid fa-users" style={{ marginRight: '8px' }}></i> Smeštaj za grupe
              </Link>
              <Link href="/cenovnik" className="btn btn-secondary">
                <i className="fa-solid fa-tags" style={{ marginRight: '8px' }}></i> Cenovnik za firme
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <div style={{ marginBottom: '60px' }}>
            <h3 style={{ color: 'var(--primary)', fontSize: '1.6rem', marginBottom: '25px', textAlign: 'center' }}>
              Često postavljana pitanja firmi i radnika
            </h3>
            <FaqSection items={faqData} />
          </div>

          {/* CTA */}
          <div className="text-center" style={{ background: 'var(--white)', padding: '40px', borderRadius: 'var(--border-radius)', border: '1px solid var(--border-color)' }}>
            <h3 style={{ color: 'var(--primary)', fontSize: '1.8rem', marginBottom: '15px' }}>
              Zatražite ponudu za radnički smeštaj
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '25px' }}>
              Dostavite nam podatke Vaše firme i broj radnika za brzi proračun cene.
            </p>
            <Link href="/rezervacija" className="btn btn-primary" style={{ padding: '16px 36px', fontSize: '1.1rem' }}>
              <i className="fa-solid fa-file-signature" style={{ marginRight: '10px' }}></i> Zatražite B2B ponudu
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
