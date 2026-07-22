import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import FaqSection from '../../../components/FaqSection';

const faqDataEn = [
  {
    question: 'How do I book an airport transfer to Vila Kruna?',
    answer: 'You can request an airport transfer when filling out your room booking or by messaging/calling our team at least 24 hours prior to landing. Simply provide your flight number and arrival time.',
  },
  {
    question: 'Is the transfer price fixed in advance?',
    answer: 'Yes! All transfer rates are agreed upon in advance and guaranteed fixed. There are no hidden meter surcharges or luggage fees.',
  },
  {
    question: 'Do you arrange transfers for larger groups (minivans)?',
    answer: 'Yes, we arrange private transfers for solo travelers, couples, as well as passenger minivans for larger families and groups.',
  },
];

export const metadata: Metadata = {
  title: 'Transportation & Airport Transfers Belgrade | Vila Kruna',
  description: 'Need a reliable transfer to/from Nikola Tesla Airport or train/bus stations? Vila Kruna organizes fast, fixed-rate transfers for guests.',
  alternates: {
    canonical: '/en/services/transportation-service',
  },
  openGraph: {
    title: 'Transportation & Airport Transfers Belgrade | Vila Kruna',
    description: 'Punctual, fixed-rate airport transfers to/from Nikola Tesla Airport and main stations for Vila Kruna guests.',
    url: '/en/services/transportation-service',
  },
};

export default function TransportationServicePageEn() {
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
    name: 'Transportation & Airport Transfers',
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
    description: 'Private transfer organization to/from Belgrade Nikola Tesla Airport, train, and bus stations for Vila Kruna guests.',
  };

  return (
    <>
      <Script
        id="faq-schema-transport-en"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="service-schema-transport-en"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section className="page-header" id="transport-header-en">
        <div className="container">
          <h1>Transportation & Airport Transfers — Vila Kruna Belgrade</h1>
          <p>Punctual, safe, and comfortable transfers from airport and stations straight to our doorstep.</p>
        </div>
      </section>

      <section className="section" id="transport-content-en">
        <div className="container">
          {/* Intro */}
          <div className="about-grid" style={{ marginBottom: '60px' }}>
            <div className="about-text">
              <h2 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '20px' }}>
                Arrive Hassle-Free at Your Destination
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '15px', lineHeight: '1.7' }}>
                Arriving in an unfamiliar city after a long flight or train journey often brings worries over finding reliable taxis, handling heavy bags, and navigating inflated unmetered fares.
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '25px', lineHeight: '1.7' }}>
                Vila Kruna organizes professional private transfers and airport pickups at pre-agreed, fixed prices. Your driver greets you at the terminal exit with a name sign and assists with your luggage.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-plane-arrival" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Airport Transfer</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-money-bill-wave" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Fixed Guaranteed Rate</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-clock" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Scheduled Pickup</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-bus" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Minivan for Groups</span>
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

          {/* Pros & Guidelines */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginBottom: '50px' }}>
            <div style={{ background: 'var(--white)', padding: '30px', borderRadius: 'var(--border-radius)', border: '1px solid var(--border-color)' }}>
              <h3 style={{ color: '#2e7d32', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fa-solid fa-circle-check"></i> Transfer Advantages
              </h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.8', listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>Terminal meet-and-greet with direct transport to Vila Kruna.</li>
                <li>Fixed pre-agreed rate — no taximeter surcharges or hidden costs.</li>
                <li>Comfortable air-conditioned vehicles with spacious luggage boots.</li>
                <li>Minivan options for families and groups with heavy luggage.</li>
              </ul>
            </div>

            <div style={{ background: 'var(--white)', padding: '30px', borderRadius: 'var(--border-radius)', border: '1px solid var(--border-color)' }}>
              <h3 style={{ color: '#d32f2f', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fa-solid fa-calendar-day"></i> Things to Keep in Mind
              </h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.8', listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>Transfers should be requested at least 24 hours prior to arrival.</li>
                <li>Please share exact flight numbers or train arrival schedules for smooth pickup.</li>
              </ul>
            </div>
          </div>

          {/* Relevant links */}
          <div style={{ background: 'rgba(212, 175, 55, 0.05)', padding: '35px', borderRadius: 'var(--border-radius)', border: '1px solid rgba(212, 175, 55, 0.2)', marginBottom: '50px' }}>
            <h3 style={{ color: 'var(--primary)', fontSize: '1.6rem', marginBottom: '15px' }}>
              Flight & Train Schedules
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '15px' }}>
              You can check live arrivals and departures on the official <a href="https://beg.aero/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Belgrade Nikola Tesla Airport</a> portal and <a href="https://srbijavoz.rs/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Srbija Voz</a> railway website.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              If driving your own vehicle, check our <Link href="/en/how-to-reach-us-from-highway" style={{ color: 'var(--primary)', textDecoration: 'underline', fontWeight: '600' }}>Highway Directions Guide</Link>.
            </p>
          </div>

          {/* Internal links */}
          <div style={{ marginBottom: '50px' }}>
            <h3 style={{ color: 'var(--primary)', fontSize: '1.6rem', marginBottom: '20px' }}>
              Related Pages
            </h3>
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <Link href="/en/how-to-reach-us-from-highway" className="btn btn-secondary">
                <i className="fa-solid fa-route" style={{ marginRight: '8px' }}></i> Highway Access
              </Link>
              <Link href="/en/services/workers-accommodation" className="btn btn-secondary">
                <i className="fa-solid fa-helmet-safety" style={{ marginRight: '8px' }}></i> Workers Accommodation
              </Link>
              <Link href="/en/services/group-accommodation" className="btn btn-secondary">
                <i className="fa-solid fa-users" style={{ marginRight: '8px' }}></i> Group Accommodation
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <div style={{ marginBottom: '60px' }}>
            <h3 style={{ color: 'var(--primary)', fontSize: '1.6rem', marginBottom: '25px', textAlign: 'center' }}>
              Frequently Asked Questions — Transfers
            </h3>
            <FaqSection items={faqDataEn} />
          </div>

          {/* CTA */}
          <div className="text-center" style={{ background: 'var(--white)', padding: '40px', borderRadius: 'var(--border-radius)', border: '1px solid var(--border-color)' }}>
            <h3 style={{ color: 'var(--primary)', fontSize: '1.8rem', marginBottom: '15px' }}>
              Book Your Transfer & Room Package
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '25px' }}>
              Include flight or train details in your booking request form.
            </p>
            <Link href="/en/booking" className="btn btn-primary" style={{ padding: '16px 36px', fontSize: '1.1rem' }}>
              <i className="fa-solid fa-car" style={{ marginRight: '10px' }}></i> Book Room & Transfer
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
