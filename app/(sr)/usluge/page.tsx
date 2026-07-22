import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Usluge smeštaja i ugostiteljstva u Beogradu | Vila Kruna',
  description: 'Pregled svih specijalizovanih usluga Vile Kruna: porodične i višekrevetne sobe, pet-friendly smeštaj, produženi boravak, smeštaj za radnike, sportske i TV ekipe.',
  alternates: {
    canonical: '/usluge',
  },
  openGraph: {
    title: 'Usluge smeštaja i ugostiteljstva u Beogradu | Vila Kruna',
    description: 'Specijalizovane usluge smeštaja u Vili Kruna: porodične sobe, prevoz, boravak za radnike, sportske i TV ekipe, pet-friendly smeštaj i produženi boravak.',
    url: '/usluge',
  },
};

const servicesList = [
  {
    title: 'Dnevni Smeštaj i Odmor',
    slug: '/usluge/dnevni-smestaj',
    icon: 'fa-clock',
    desc: 'Iznajmljivanje sobe na nekoliko sati u toku dana za kratak odmor, tuširanje ili osveženje uz potpunu diskreciju i besplatan parking.',
  },
  {
    title: 'Produženi Boravak',
    slug: '/usluge/produzeni-boravak',
    icon: 'fa-calendar-days',
    desc: 'Posebne ugovorene cene sa svim uračunatim režijama za goste koji ostaju 7, 14, 30 ili više dana u Beogradu.',
  },
  {
    title: 'Pranje Veša za Goste',
    slug: '/usluge/pranje-vesa-za-goste',
    icon: 'fa-shirt',
    desc: 'Brza i profesionalna usluga pranja, mašinskog sušenja i peglanja odeće i veša direktno u objektu sa hipoalergenskim deterdžentima.',
  },
  {
    title: 'Organizacija Prevoza',
    slug: '/usluge/organizacija-prevoza',
    icon: 'fa-car',
    desc: 'Pouzdan doček i transfer po fiksiranim cenama od/do Aerodroma Nikola Tesla, železničke i autobuske stanice.',
  },
  {
    title: 'Smeštaj za Radnike',
    slug: '/usluge/smestaj-za-radnike',
    icon: 'fa-helmet-safety',
    desc: 'Prilagođen smeštaj za terenske radnike i građevinske firme: velika dvorišta za kombije pod nadzorom i izdavanje B2B računa.',
  },
  {
    title: 'Smeštaj za Organizovane Grupe',
    slug: '/usluge/smestaj-za-organizovane-grupe',
    icon: 'fa-users',
    desc: 'Smeštaj celih grupa do 20+ gostiju (svadbe, seminari, ekskurzije) na jednom mestu uz jedan zbirni račun i parking za minibuseve.',
  },
];

export default function UslugeHubPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Hotel and Lodging Services',
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
    areaServed: {
      '@type': 'City',
      name: 'Beograd',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Usluge Vile Kruna',
      itemListElement: servicesList.map((s, i) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.title,
          description: s.desc,
        },
        position: i + 1,
      })),
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Koje sve specijalizovane usluge nudi Vila Kruna?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nudimo porodične i višekrevetne sobe, produženi boravak, smeštaj za terenske radnike, sportske i TV ekipe, pet-friendly smeštaj, pranje veša i organizaciju prevoza.',
        },
      },
      {
        '@type': 'Question',
        name: 'Da li se usluge u objektu mogu platiti preko računa firme?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Da, pružamo mogućnost B2B fakturisanja i plaćanja preko računa za pravna lica.',
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="usluge-hub-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="usluge-hub-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="page-header" id="services-hub-header">
        <div className="container">
          <h1>Sve usluge Vile Kruna u Beogradu</h1>
          <p>
            Prilagođena rešenja za porodična putovanja, poslovne boravke, terenske radnike, sportske i TV ekipe, ljubimce i organizovane grupe.
          </p>
        </div>
      </section>

      <section className="section" id="services-hub-content">
        <div className="container">
          <div className="about-text" style={{ maxWidth: '900px', margin: '0 auto 50px auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.2rem', color: 'var(--primary)', marginBottom: '20px' }}>
              Usluge prema najvišim ugostiteljskim standardima
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7' }}>
              U Vili Kruna ponosni smo što svakom gostu pružamo tačno onakav vid usluge kakav mu je potreban. Sve naše usluge sinhronizovane su sa uslugama navedenim na našem zvaničnom Google Business profilu, garantujući proveren kvalitet, besprekornu čistoću, privatnost i vrhunsku fleksibilnost.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '30px', marginBottom: '60px' }}>
            {servicesList.map((service, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--white)',
                  padding: '30px',
                  borderRadius: 'var(--border-radius)',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'var(--transition)',
                }}
              >
                <div>
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: 'rgba(212, 175, 55, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                    }}
                  >
                    <i className={`fa-solid ${service.icon}`} style={{ color: 'var(--primary)', fontSize: '1.5rem' }}></i>
                  </div>
                  <h3 style={{ fontSize: '1.35rem', color: 'var(--primary)', marginBottom: '12px' }}>
                    {service.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '20px' }}>
                    {service.desc}
                  </p>
                </div>
                <Link
                  href={service.slug}
                  className="btn btn-secondary"
                  style={{ width: '100%', textAlign: 'center', marginTop: 'auto', display: 'inline-block' }}
                >
                  Saznajte više <i className="fa-solid fa-arrow-right" style={{ marginLeft: '6px' }}></i>
                </Link>
              </div>
            ))}
          </div>

          <div
            style={{
              background: 'var(--white)',
              padding: '40px',
              borderRadius: 'var(--border-radius)',
              border: '1px solid var(--border-color)',
              marginBottom: '50px',
            }}
          >
            <h2 style={{ fontSize: '1.8rem', color: 'var(--primary)', marginBottom: '20px' }}>
              Korisni resursi i brzi linkovi
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: '1.6' }}>
              Pored specijalizovanih usluga, preporučujemo da pogledate i ostale ključne delove našeg prezentacionog portala radi kompletiranja Vašeg plana putovanja i boravka u Beogradu:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '15px' }}>
              <Link href="/smestaj" style={{ color: 'var(--primary)', fontWeight: '600', textDecoration: 'underline' }}>
                <i className="fa-solid fa-bed" style={{ marginRight: '8px' }}></i> Pregled svih smeštajnih jedinica
              </Link>
              <Link href="/cenovnik" style={{ color: 'var(--primary)', fontWeight: '600', textDecoration: 'underline' }}>
                <i className="fa-solid fa-tags" style={{ marginRight: '8px' }}></i> Zvanični cenovnik Vile Kruna
              </Link>
              <Link href="/kako-do-nas-sa-autoputa" style={{ color: 'var(--primary)', fontWeight: '600', textDecoration: 'underline' }}>
                <i className="fa-solid fa-route" style={{ marginRight: '8px' }}></i> Uputstvo za dolazak sa auto-puta
              </Link>
              <Link href="/usluge/dnevni-smestaj" style={{ color: 'var(--primary)', fontWeight: '600', textDecoration: 'underline' }}>
                <i className="fa-solid fa-clock" style={{ marginRight: '8px' }}></i> Usluga dnevnog odmora
              </Link>
            </div>
          </div>

          <div className="text-center" style={{ marginTop: '40px' }}>
            <Link href="/rezervacija" className="btn btn-primary" style={{ padding: '16px 36px', fontSize: '1.1rem' }}>
              <i className="fa-solid fa-calendar-check" style={{ marginRight: '10px' }}></i> Rezervišite Vaš boravak odmah
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
