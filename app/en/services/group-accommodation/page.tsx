import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import FaqSection from '../../../components/FaqSection';

const faqDataEn = [
  {
    question: 'What is Vila Kruna’s maximum capacity for organized groups?',
    answer: 'Vila Kruna can comfortably host groups of 20+ guests arranged across spacious double, triple, and quadruple rooms as well as suites.',
  },
  {
    question: 'Can you provide a single consolidated invoice for the entire group?',
    answer: 'Yes! We issue a single consolidated invoice or B2B invoice for travel planners, agencies, or event hosts.',
  },
  {
    question: 'Can an entire floor or the full property be booked exclusively?',
    answer: 'Yes, with advance booking, we offer exclusive floor or property buyouts for complete group privacy.',
  },
];

export const metadata: Metadata = {
  title: 'Group Accommodation Belgrade | Discounts for Groups — Vila Kruna',
  description: 'Organizing a group trip to Belgrade? Vila Kruna offers group lodging for tour groups, wedding guests, seminars, and excursions up to 20+ guests with parking.',
  alternates: {
    canonical: '/en/services/group-accommodation',
  },
  openGraph: {
    title: 'Group Accommodation Belgrade | Discounts for Groups — Vila Kruna',
    description: 'Lodging for larger group visits in Belgrade. Private minibus parking, group discounts, and corporate invoicing at Vila Kruna.',
    url: '/en/services/group-accommodation',
  },
};

export default function GroupAccommodationPageEn() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqDataEn.map((item) => ({
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
    name: 'Group Accommodation in Belgrade',
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
    description: 'Accommodation for tourist & business groups, wedding parties, seminars, and excursions with private minibus parking.',
  };

  return (
    <>
      <Script
        id="faq-schema-group-en"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="service-schema-group-en"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section className="page-header" id="group-header-en">
        <div className="container">
          <h1>Group Accommodation in Belgrade — Vila Kruna</h1>
          <p>Comfortable lodging for groups of up to 20+ guests with private parking and special group rates.</p>
        </div>
      </section>

      <section className="section" id="group-content-en">
        <div className="container">
          {/* Intro */}
          <div className="about-grid" style={{ marginBottom: '60px' }}>
            <div className="about-text">
              <h2 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '20px' }}>
                Everyone Together in One Convenient Location
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '15px', lineHeight: '1.7' }}>
                Organizing group lodging — whether for wedding guests, conference delegates, tour groups, or school trips — requires a property with ample capacity and easy vehicle parking.
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '25px', lineHeight: '1.7' }}>
                At Vila Kruna, we house whole groups in one building. Our rooms are spacious, air-conditioned, and feature private bathrooms, while our enclosed courtyard parking holds minivans and multiple cars at once.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-users" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>20+ Guests Capacity</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-bus" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Minibus Parking</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-building" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Floor Buyout Options</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-file-invoice" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Consolidated Invoicing</span>
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

          {/* Pros & Guidelines */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginBottom: '50px' }}>
            <div style={{ background: 'var(--white)', padding: '30px', borderRadius: 'var(--border-radius)', border: '1px solid var(--border-color)' }}>
              <h3 style={{ color: '#2e7d32', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fa-solid fa-circle-check"></i> Operational Group Advantages
              </h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.8', listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>Single consolidated group invoice eliminating individual billing hassle.</li>
                <li>Exclusive floor buyout option for total group privacy.</li>
                <li>Flexible rooming list management and quick bed layout adjustments.</li>
                <li>Free CCTV private parking for passenger minivans and accompanying vehicles.</li>
              </ul>
            </div>

            <div style={{ background: 'var(--white)', padding: '30px', borderRadius: 'var(--border-radius)', border: '1px solid var(--border-color)' }}>
              <h3 style={{ color: '#d32f2f', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fa-solid fa-handshake"></i> Things to Keep in Mind
              </h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.8', listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>Group bookings require advance deposit confirmation to hold multiple rooms.</li>
                <li>Submitting a finalized rooming list at least 3 days prior to arrival is recommended.</li>
              </ul>
            </div>
          </div>

          {/* Internal links */}
          <div style={{ marginBottom: '50px' }}>
            <h3 style={{ color: 'var(--primary)', fontSize: '1.6rem', marginBottom: '20px' }}>
              Related Pages
            </h3>
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <Link href="/en/services/day-use-accommodation" className="btn btn-secondary">
                <i className="fa-solid fa-clock" style={{ marginRight: '8px' }}></i> Day Use Accommodation
              </Link>
              <Link href="/en/services/extended-stay" className="btn btn-secondary">
                <i className="fa-solid fa-calendar-days" style={{ marginRight: '8px' }}></i> Extended Stay
              </Link>
              <Link href="/en/how-to-reach-us-from-highway" className="btn btn-secondary">
                <i className="fa-solid fa-route" style={{ marginRight: '8px' }}></i> Highway Access
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <div style={{ marginBottom: '60px' }}>
            <h3 style={{ color: 'var(--primary)', fontSize: '1.6rem', marginBottom: '25px', textAlign: 'center' }}>
              Frequently Asked Questions — Group Stays
            </h3>
            <FaqSection items={faqDataEn} />
          </div>

          {/* CTA */}
          <div className="text-center" style={{ background: 'var(--white)', padding: '40px', borderRadius: 'var(--border-radius)', border: '1px solid var(--border-color)' }}>
            <h3 style={{ color: 'var(--primary)', fontSize: '1.8rem', marginBottom: '15px' }}>
              Planning a Group Visit to Belgrade?
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '25px' }}>
              Request your group quote with special discounts today.
            </p>
            <Link href="/en/booking" className="btn btn-primary" style={{ padding: '16px 36px', fontSize: '1.1rem' }}>
              <i className="fa-solid fa-envelope" style={{ marginRight: '10px' }}></i> Send Group Inquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
