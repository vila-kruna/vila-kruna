import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Accommodation & Hospitality Services in Belgrade | Vila Kruna',
  description: 'Explore all specialized lodging services at Vila Kruna: family & multi-bed rooms, pet-friendly stay, extended stay, workers, sports teams & TV crew lodging.',
  alternates: {
    canonical: '/en/services',
  },
  openGraph: {
    title: 'Accommodation & Hospitality Services in Belgrade | Vila Kruna',
    description: 'Specialized lodging services at Vila Kruna Belgrade: family rooms, airport transfers, worker & team stays, pet-friendly options & long stays.',
    url: '/en/services',
  },
};

const servicesListEn = [
  {
    title: 'Day Use Accommodation',
    slug: '/en/services/day-use-accommodation',
    icon: 'fa-clock',
    desc: 'Room rental for a few hours during the day for a short rest, shower, or refreshment with full discretion and free private parking.',
  },
  {
    title: 'Extended Stay',
    slug: '/en/services/extended-stay',
    icon: 'fa-calendar-days',
    desc: 'Special negotiated rates with all utilities, WiFi, and parking included for guests staying 7, 14, 30 or more days in Belgrade.',
  },
  {
    title: 'Guest Laundry Service',
    slug: '/en/services/laundry-service',
    icon: 'fa-shirt',
    desc: 'Fast in-house washing, machine drying, and ironing service using hypo-allergenic detergents with 12-24h turnaround.',
  },
  {
    title: 'Transportation & Transfers',
    slug: '/en/services/transportation-service',
    icon: 'fa-car',
    desc: 'Reliable fixed-rate transfers to/from Nikola Tesla Airport, train/bus stations, and city rides based on flight schedules.',
  },
  {
    title: 'Workers & Crew Accommodation',
    slug: '/en/services/workers-accommodation',
    icon: 'fa-helmet-safety',
    desc: 'Tailored stays for field crews and companies: gated van parking under CCTV, B2B corporate billing, and work uniform laundry.',
  },
  {
    title: 'Group Accommodation',
    slug: '/en/services/group-accommodation',
    icon: 'fa-users',
    desc: 'Capacities for groups of 20+ guests (weddings, seminars, tours) with single consolidated group invoicing and floor buyouts.',
  },
];

export default function ServicesHubPageEn() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Hotel and Lodging Services',
    provider: {
      '@type': 'LodgingBusiness',
      name: 'Vila Kruna',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Belgrade',
        addressCountry: 'RS',
      },
      telephone: '+381643339555',
    },
    areaServed: {
      '@type': 'City',
      name: 'Belgrade',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Vila Kruna Services',
      itemListElement: servicesListEn.map((s, i) => ({
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
        name: 'What specialized lodging services does Vila Kruna provide?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer family rooms, multi-bed rooms, extended stays, worker lodging, sports team lodging, TV crew accommodation, pet-friendly stays, laundry, and airport transfers.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer corporate invoicing for companies?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we provide official corporate invoicing and bank transfer options for companies.',
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="services-hub-schema-en"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="services-hub-faq-schema-en"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="page-header" id="services-hub-header-en">
        <div className="container">
          <h1>All Hospitality & Lodging Services at Vila Kruna</h1>
          <p>
            Tailored solutions for families, business travelers, work crews, sports clubs, film production teams, and pets in Belgrade.
          </p>
        </div>
      </section>

      <section className="section" id="services-hub-content-en">
        <div className="container">
          <div className="about-text" style={{ maxWidth: '900px', margin: '0 auto 50px auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.2rem', color: 'var(--primary)', marginBottom: '20px' }}>
              Hospitality Services Built Around Your Needs
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7' }}>
              At Vila Kruna, we take pride in delivering exact hospitality solutions for every traveler type. All our listed services correspond with our official Google Business profile, ensuring top hygiene, complete privacy, secure parking, and maximum booking flexibility.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '30px', marginBottom: '60px' }}>
            {servicesListEn.map((service, idx) => (
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
                  Learn More <i className="fa-solid fa-arrow-right" style={{ marginLeft: '6px' }}></i>
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
              Useful Quick Links
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '15px' }}>
              <Link href="/en/accommodation" style={{ color: 'var(--primary)', fontWeight: '600', textDecoration: 'underline' }}>
                <i className="fa-solid fa-bed" style={{ marginRight: '8px' }}></i> View All Rooms
              </Link>
              <Link href="/en/pricing" style={{ color: 'var(--primary)', fontWeight: '600', textDecoration: 'underline' }}>
                <i className="fa-solid fa-tags" style={{ marginRight: '8px' }}></i> Price List & Rates
              </Link>
              <Link href="/en/how-to-reach-us-from-highway" style={{ color: 'var(--primary)', fontWeight: '600', textDecoration: 'underline' }}>
                <i className="fa-solid fa-route" style={{ marginRight: '8px' }}></i> Highway Access Directions
              </Link>
              <Link href="/en/services/day-use-accommodation" style={{ color: 'var(--primary)', fontWeight: '600', textDecoration: 'underline' }}>
                <i className="fa-solid fa-clock" style={{ marginRight: '8px' }}></i> Day Use Accommodation
              </Link>
            </div>
          </div>

          <div className="text-center" style={{ marginTop: '40px' }}>
            <Link href="/en/booking" className="btn btn-primary" style={{ padding: '16px 36px', fontSize: '1.1rem' }}>
              <i className="fa-solid fa-calendar-check" style={{ marginRight: '10px' }}></i> Book Your Stay Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
