import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import FaqSection from '../../../components/FaqSection';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Šta podrazumeva dnevni smeštaj (dnevni odmor)?",
    answer: "Dnevni smeštaj ili dnevni odmor je usluga iznajmljivanja sobe na nekoliko sati u toku dana, bez prenoćišta. Savršen je za putnike u tranzitu kojima je potreban kratak predah, tuširanje ili nekoliko sati sna pre nego što nastave put."
  },
  {
    question: "Koje je standardno vreme za korišćenje dnevnog odmora?",
    answer: "Standardni termini za dnevni odmor su u periodu između 10:00 i 18:00 časova. Ukoliko imate specifične potrebe u vezi sa vremenom dolaska, slobodno nas kontaktirajte radi dogovora."
  },
  {
    question: "Da li je u cenu dnevnog smeštaja uključen parking?",
    answer: "Da, svi naši gosti imaju pravo na besplatno korišćenje našeg privatnog, ograđenog parkinga pokrivenog video nadzorom tokom trajanja boravka."
  },
  {
    question: "Da li je garantovana diskrecija?",
    answer: "Apsolutno. Vila Kruna garantuje maksimalnu privatnost, diskreciju i mir za sve goste koji koriste naše usluge."
  },
  {
    question: "Koje sobe su dostupne za dnevni odmor?",
    answer: "Za dnevni odmor možete rezervisati bilo koju od naših slobodnih soba u tom trenutku — od ekonomičnih dvokrevetnih, preko standardnih, pa sve do luksuznih superior soba sa saunom i đakuzijem."
  },
  {
    question: "Kako mogu rezervisati dnevni smeštaj?",
    answer: "Rezervaciju možete izvršiti popunjavanjem forme na našoj stranici za rezervaciju, slanjem e-maila ili direktnim pozivom na naš telefon +381643339555."
  }
];

export const metadata: Metadata = {
  title: 'Dnevni smeštaj i dnevni odmor u Beogradu | Vila Kruna',
  description: 'Tražite dnevni smeštaj ili dnevni odmor na nekoliko sati u Beogradu? Vila Kruna nudi komforne, klimatizovane sobe sa parkingom i potpunom diskrecijom.',
  alternates: {
    canonical: '/usluge/dnevni-smestaj',
  },
  openGraph: {
    title: 'Dnevni smeštaj i dnevni odmor u Beogradu | Vila Kruna',
    description: 'Tražite dnevni smeštaj ili dnevni odmor na nekoliko sati u Beogradu? Vila Kruna nudi komforne, klimatizovane sobe sa parkingom.',
    url: '/usluge/dnevni-smestaj',
  },
};

export default function DnevniSmestajPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };

  return (
    <>
      <Script
        id="faq-schema-day-use"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="page-header" id="day-use-header">
        <div className="container">
          <h1>Dnevni smeštaj i dnevni odmor u Beogradu — Vila Kruna</h1>
          <p>Potreban Vam je kratak predah tokom dana? Rezervišite sobu za odmor, tuširanje i osveženje.</p>
        </div>
      </section>

      <section className="section" id="day-use-content">
        <div className="container">
          <div className="about-grid" style={{ marginBottom: '60px' }}>
            <div 
              className="about-img" 
              style={{ 
                backgroundImage: "url('https://utfs.io/f/7BAyoiVHGCJenc84FCkO3WXfeNzPAUHa8t91oGIrqb7YRShF')",
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-lg)'
              }}
            ></div>

            <div className="about-text">
              <h2 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '20px' }}>
                Savršen predah u toku dana
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '15px' }}>
                Bilo da ste u tranzitu kroz Beograd, čekate let, dolazite na poslovni sastanak ili Vam je jednostavno potreban miran prostor za rad i osveženje na nekoliko sati — naša usluga dnevnog smeštaja je idealno rešenje.
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '25px' }}>
                Nudimo Vam moderne, klimatizovane i besprekorno čiste sobe sa kupatilom, brzim WiFi internetom i kablovskom televizijom, gde se možete opustiti i pripremiti za nastavak Vaših aktivnosti.
              </p>

              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <div style={{ background: 'rgba(197, 160, 89, 0.08)', padding: '15px 20px', borderRadius: '8px', borderLeft: '3px solid var(--primary)', flex: '1 1 200px' }}>
                  <h4 style={{ color: 'var(--primary)', marginBottom: '5px' }}><i className="fa-solid fa-clock"></i> Fleksibilno vreme</h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Termini prilagođeni Vama u toku dana.</p>
                </div>
                <div style={{ background: 'rgba(197, 160, 89, 0.08)', padding: '15px 20px', borderRadius: '8px', borderLeft: '3px solid var(--primary)', flex: '1 1 200px' }}>
                  <h4 style={{ color: 'var(--primary)', marginBottom: '5px' }}><i className="fa-solid fa-user-shield"></i> Potpuna diskrecija</h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Garantovana privatnost tokom Vašeg boravka.</p>
                </div>
              </div>
            </div>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto 60px' }}>
            <h2 className="section-title text-center" style={{ marginBottom: '30px' }}>Često Postavljana Pitanja (FAQ)</h2>
            <FaqSection items={faqData} />
          </div>

          <div className="text-center">
            <Link href="/rezervacija" className="btn btn-primary" style={{ padding: '16px 36px' }}>
              <i className="fa-solid fa-calendar-check" style={{ marginRight: '8px' }}></i> Rezervišite dnevni odmor
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
