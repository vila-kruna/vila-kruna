import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import FaqSection from '../../../components/FaqSection';

const faqDataEn = [
  {
    question: 'Do you provide corporate B2B invoicing and bank transfers?',
    answer: 'Yes, absolutely. For all construction, engineering, and field work companies, we issue official business invoices and receipts for bank transfer payments.',
  },
  {
    question: 'Is there enough parking space in the courtyard for work vans?',
    answer: 'Yes, our gated private parking has full width and height clearance for cargo vans, pickups, and work vehicles under 24/7 video surveillance.',
  },
  {
    question: 'What is the bedding layout for work crews?',
    answer: 'We offer multi-bed rooms with individual single beds where every worker has their own dedicated bed, with a private en-suite bathroom in every room.',
  },
];

export const metadata: Metadata = {
  title: 'Workers Accommodation Belgrade | Work Crew Lodging — Vila Kruna',
  description: 'Affordable accommodation for workers and construction companies in Belgrade. Spacious rooms, secure van parking, B2B invoicing, and fiber WiFi.',
  alternates: {
    canonical: '/en/services/workers-accommodation',
  },
  openGraph: {
    title: 'Workers Accommodation Belgrade | Work Crew Lodging — Vila Kruna',
    description: 'Work crew & corporate lodging in Belgrade. Gated van parking under CCTV, B2B invoicing, fast WiFi, and laundry.',
    url: '/en/services/workers-accommodation',
  },
};

export default function WorkersAccommodationPageEn() {
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
    name: 'Workers & Corporate Crew Accommodation',
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
    description: 'Affordable and dignified lodging for work teams and companies with corporate B2B invoicing and large van parking.',
  };

  return (
    <>
      <Script
        id="faq-schema-workers-en"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="service-schema-workers-en"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section className="page-header" id="workers-header-en">
        <div className="container">
          <h1>Workers & Corporate Crew Accommodation — Vila Kruna</h1>
          <p>Dignified, clean, and economical lodging with van parking and B2B corporate billing.</p>
        </div>
      </section>

      <section className="section" id="workers-content-en">
        <div className="container">
          {/* Intro */}
          <div className="about-grid" style={{ marginBottom: '60px' }}>
            <div className="about-text">
              <h2 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '20px' }}>
                Quality Rest for Your Field Crew
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '15px', lineHeight: '1.7' }}>
                Managing field projects in Belgrade requires a lodging partner that understands business requirements: official B2B invoices, secure parking for work vans and tools, and clean, warm rooms where workers can truly recharge.
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '25px', lineHeight: '1.7' }}>
                At Vila Kruna, we offer spacious rooms with private bathrooms, 24/7 hot water, climate control/heating, and fast fiber WiFi so workers can stay in touch with their families.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-file-invoice-dollar" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>B2B Corporate Invoice</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-van-shuttle" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Work Van Parking</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-shirt" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Work Clothes Laundry</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-percent" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Corporate Rates</span>
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

          {/* Pros & Guidelines */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginBottom: '50px' }}>
            <div style={{ background: 'var(--white)', padding: '30px', borderRadius: 'var(--border-radius)', border: '1px solid var(--border-color)' }}>
              <h3 style={{ color: '#2e7d32', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fa-solid fa-circle-check"></i> Why Companies Choose Vila Kruna
              </h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.8', listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>Large gated courtyard parking under CCTV keeps tools and vehicles safe.</li>
                <li>Bank transfer payment terms for registered businesses.</li>
                <li>Continuous 24/7 hot water, regular cleaning, and towel replacement.</li>
                <li>In-house laundry service for washing and drying work overalls.</li>
              </ul>
            </div>

            <div style={{ background: 'var(--white)', padding: '30px', borderRadius: 'var(--border-radius)', border: '1px solid var(--border-color)' }}>
              <h3 style={{ color: '#d32f2f', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fa-solid fa-clipboard-list"></i> Things to Keep in Mind
              </h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.8', listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>For crew reservations larger than 10 workers, advance booking 5–7 days prior is recommended.</li>
                <li>Please submit corporate tax registration details prior to arrival for invoicing.</li>
              </ul>
            </div>
          </div>

          {/* Differentiation */}
          <div style={{ background: 'rgba(212, 175, 55, 0.05)', padding: '35px', borderRadius: 'var(--border-radius)', border: '1px solid rgba(212, 175, 55, 0.2)', marginBottom: '50px' }}>
            <h3 style={{ color: 'var(--primary)', fontSize: '1.6rem', marginBottom: '15px' }}>
              Dignified Rooms Instead of Cramped Worker Barracks
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '15px' }}>
              Well-rested crews work safer and more efficiently. At Vila Kruna, we offer bright, clean rooms with private en-suite bathrooms, TV, and fiber WiFi instead of overcrowded dormitories with hallway facilities.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              Companies can review Serbian trade regulations via the <a href="https://pks.rs/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Chamber of Commerce and Industry of Serbia</a>.
            </p>
          </div>

          {/* Internal links */}
          <div style={{ marginBottom: '50px' }}>
            <h3 style={{ color: 'var(--primary)', fontSize: '1.6rem', marginBottom: '20px' }}>
              Related Pages & Services
            </h3>
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <Link href="/en/services/extended-stay" className="btn btn-secondary">
                <i className="fa-solid fa-calendar-days" style={{ marginRight: '8px' }}></i> Long-Stay Discounts
              </Link>
              <Link href="/en/services/laundry-service" className="btn btn-secondary">
                <i className="fa-solid fa-shirt" style={{ marginRight: '8px' }}></i> Laundry Service
              </Link>
              <Link href="/en/services/group-accommodation" className="btn btn-secondary">
                <i className="fa-solid fa-users" style={{ marginRight: '8px' }}></i> Group Accommodation
              </Link>
              <Link href="/en/pricing" className="btn btn-secondary">
                <i className="fa-solid fa-tags" style={{ marginRight: '8px' }}></i> Corporate Rates
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <div style={{ marginBottom: '60px' }}>
            <h3 style={{ color: 'var(--primary)', fontSize: '1.6rem', marginBottom: '25px', textAlign: 'center' }}>
              Frequently Asked Questions — Crew Lodging
            </h3>
            <FaqSection items={faqDataEn} />
          </div>

          {/* CTA */}
          <div className="text-center" style={{ background: 'var(--white)', padding: '40px', borderRadius: 'var(--border-radius)', border: '1px solid var(--border-color)' }}>
            <h3 style={{ color: 'var(--primary)', fontSize: '1.8rem', marginBottom: '15px' }}>
              Request a Corporate Crew Quote
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '25px' }}>
              Send us your company details and crew size for a fast rate calculation.
            </p>
            <Link href="/en/booking" className="btn btn-primary" style={{ padding: '16px 36px', fontSize: '1.1rem' }}>
              <i className="fa-solid fa-file-signature" style={{ marginRight: '10px' }}></i> Request Corporate Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
