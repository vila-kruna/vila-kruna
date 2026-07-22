import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import FaqSection from '../../../components/FaqSection';

const faqDataEn = [
  {
    question: 'What is the minimum stay for extended stay discounts?',
    answer: 'Long-term negotiated rates kick in starting from 7 consecutive nights, with 14-day and 30-day stays unlocking the highest savings compared to standard daily rates.',
  },
  {
    question: 'Are utilities and high-speed internet included in the price?',
    answer: 'Yes! All utilities are included: electricity, heating, air conditioning, hot water, fiber optic WiFi, cable TV, room cleaning, and regular linen changes.',
  },
  {
    question: 'Do you offer corporate B2B invoicing for long stays?',
    answer: 'Yes, we provide official corporate invoicing and bank transfer options for registered companies.',
  },
];

export const metadata: Metadata = {
  title: 'Extended Stay Belgrade | Long-Term Accommodation — Vila Kruna',
  description: 'Need long-term accommodation in Belgrade for a week, month, or more? Enjoy special extended stay discounts with all utilities included at Vila Kruna.',
  alternates: {
    canonical: '/en/services/extended-stay',
  },
  openGraph: {
    title: 'Extended Stay Belgrade | Long-Term Accommodation — Vila Kruna',
    description: 'Special long-stay rates for 7, 14, and 30+ days in Belgrade. All utilities, fiber WiFi, room cleaning, and private parking included.',
    url: '/en/services/extended-stay',
  },
};

export default function ExtendedStayPageEn() {
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
    name: 'Extended Stay Accommodation in Belgrade',
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
    description: 'Long-term lodging in Belgrade with all inclusive utilities, room cleaning, and free private video-monitored parking.',
  };

  return (
    <>
      <Script
        id="faq-schema-extended-stay-en"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="service-schema-extended-stay-en"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section className="page-header" id="extended-stay-header-en">
        <div className="container">
          <h1>Extended Stay in Belgrade — Vila Kruna</h1>
          <p>Save on multi-week and monthly lodging with complete comfort and all utilities included.</p>
        </div>
      </section>

      <section className="section" id="extended-stay-content-en">
        <div className="container">
          {/* Intro */}
          <div className="about-grid" style={{ marginBottom: '60px' }}>
            <div className="about-text">
              <h2 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '20px' }}>
                Your Comfortable Home Away From Home
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '15px', lineHeight: '1.7' }}>
                Whether you are staying in Belgrade for an extended business assignment, field project, medical treatments, home renovations, or long-term travel — paying full daily rack rates over multiple weeks accumulates substantial costs.
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '25px', lineHeight: '1.7' }}>
                At Vila Kruna, our **Extended Stay** package gives you a fully furnished room with private bath, fast fiber WiFi, and free gated parking at custom negotiated weekly and monthly rates.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-handshake" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Negotiated Rates</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-bolt" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>All Utilities Included</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-broom" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Regular Cleaning</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-file-invoice" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>B2B Corporate Invoicing</span>
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

          {/* Pros & Guidelines */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginBottom: '50px' }}>
            <div style={{ background: 'var(--white)', padding: '30px', borderRadius: 'var(--border-radius)', border: '1px solid var(--border-color)' }}>
              <h3 style={{ color: '#2e7d32', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fa-solid fa-circle-check"></i> Extended Stay Advantages
              </h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.8', listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>No security deposits, agency finder fees, or surprise winter heating bills.</li>
                <li>Included room cleaning and regular fresh linen/towel replacements.</li>
                <li>Free video-monitored private courtyard parking throughout your stay.</li>
                <li>In-house laundry service available for washing and ironing clothes.</li>
              </ul>
            </div>

            <div style={{ background: 'var(--white)', padding: '30px', borderRadius: 'var(--border-radius)', border: '1px solid var(--border-color)' }}>
              <h3 style={{ color: '#d32f2f', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fa-solid fa-triangle-exclamation"></i> Things to Keep in Mind
              </h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.8', listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>To lock in maximum long-term discounts, defining your expected stay duration is required.</li>
                <li>Early checkout prior to 7 days reverts to standard daily pricing.</li>
              </ul>
            </div>
          </div>

          {/* Differentiation */}
          <div style={{ background: 'rgba(212, 175, 55, 0.05)', padding: '35px', borderRadius: 'var(--border-radius)', border: '1px solid rgba(212, 175, 55, 0.2)', marginBottom: '50px' }}>
            <h3 style={{ color: 'var(--primary)', fontSize: '1.6rem', marginBottom: '15px' }}>
              Vila Kruna vs. Standard Apartment Leases in Belgrade
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              Renting an apartment short-term in Belgrade usually demands hefty upfront deposits (1-2 months&apos; rent), 12-month lease commitments, and complex utility bill transfers. At Vila Kruna, there are no deposits or utility bills — you pay one flat negotiated price that includes housecleaning and secure parking!
            </p>
          </div>

          {/* Internal links */}
          <div style={{ marginBottom: '50px' }}>
            <h3 style={{ color: 'var(--primary)', fontSize: '1.6rem', marginBottom: '20px' }}>
              Complementary Services
            </h3>
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <Link href="/en/services/laundry-service" className="btn btn-secondary">
                <i className="fa-solid fa-shirt" style={{ marginRight: '8px' }}></i> Guest Laundry Service
              </Link>
              <Link href="/en/services/workers-accommodation" className="btn btn-secondary">
                <i className="fa-solid fa-helmet-safety" style={{ marginRight: '8px' }}></i> Corporate Crew Accommodation
              </Link>
              <Link href="/en/quiet-peaceful-corner-with-parking" className="btn btn-secondary">
                <i className="fa-solid fa-square-parking" style={{ marginRight: '8px' }}></i> Private Parking Details
              </Link>
              <Link href="/en/pricing" className="btn btn-secondary">
                <i className="fa-solid fa-tags" style={{ marginRight: '8px' }}></i> Pricing List
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <div style={{ marginBottom: '60px' }}>
            <h3 style={{ color: 'var(--primary)', fontSize: '1.6rem', marginBottom: '25px', textAlign: 'center' }}>
              Frequently Asked Questions — Extended Stay
            </h3>
            <FaqSection items={faqDataEn} />
          </div>

          {/* CTA */}
          <div className="text-center" style={{ background: 'var(--white)', padding: '40px', borderRadius: 'var(--border-radius)', border: '1px solid var(--border-color)' }}>
            <h3 style={{ color: 'var(--primary)', fontSize: '1.8rem', marginBottom: '15px' }}>
              Request Your Extended Stay Quote
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '25px' }}>
              Send us your requested dates for a custom long-term rate calculation.
            </p>
            <Link href="/en/booking" className="btn btn-primary" style={{ padding: '16px 36px', fontSize: '1.1rem' }}>
              <i className="fa-solid fa-envelope" style={{ marginRight: '10px' }}></i> Send Long-Stay Inquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
