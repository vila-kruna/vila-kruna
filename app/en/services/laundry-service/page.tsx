import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import FaqSection from '../../../components/FaqSection';

const faqDataEn = [
  {
    question: 'How fast can laundry be washed and dried?',
    answer: 'Standard turnaround time is between 12 and 24 hours. If laundry is handed to staff by 10:00 AM, it is often ready and folded by the same evening.',
  },
  {
    question: 'Do you offer ironing services?',
    answer: 'Yes! In addition to washing and machine drying, we offer garment ironing upon request for shirts, trousers, and formal clothing.',
  },
  {
    question: 'What detergents and fabric softeners do you use?',
    answer: 'We use professional, dermatologically tested, hypo-allergenic laundry detergents that preserve garment quality and fabric texture.',
  },
];

export const metadata: Metadata = {
  title: 'Guest Laundry Service | Washing & Ironing — Vila Kruna Belgrade',
  description: 'Vila Kruna offers fast and efficient in-house washing, drying, and ironing services for guests. Ideal for long stays, business travelers, and work crews.',
  alternates: {
    canonical: '/en/services/laundry-service',
  },
  openGraph: {
    title: 'Guest Laundry Service | Washing & Ironing — Vila Kruna Belgrade',
    description: 'Professional guest laundry, washing, drying, and ironing directly at Vila Kruna Belgrade.',
    url: '/en/services/laundry-service',
  },
};

export default function LaundryServicePageEn() {
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
    name: 'Guest Laundry & Ironing Service',
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
    description: 'In-house clothes washing, machine drying, and ironing service for Vila Kruna guests.',
  };

  return (
    <>
      <Script
        id="faq-schema-laundry-en"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="service-schema-laundry-en"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section className="page-header" id="laundry-header-en">
        <div className="container">
          <h1>Guest Laundry & Ironing Service — Vila Kruna Belgrade</h1>
          <p>Fresh, clean clothes without searching for public laundromats around the city.</p>
        </div>
      </section>

      <section className="section" id="laundry-content-en">
        <div className="container">
          {/* Intro */}
          <div className="about-grid" style={{ marginBottom: '60px' }}>
            <div className="about-text">
              <h2 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '20px' }}>
                Fresh Clothes Right at Your Doorstep
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '15px', lineHeight: '1.7' }}>
                Staying away from home for more than a few days means dirty laundry quickly piles up. Searching for self-service laundromats in an unfamiliar city wastes valuable time and requires hauling heavy laundry bags across town.
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '25px', lineHeight: '1.7' }}>
                Vila Kruna provides full in-house laundry, drying, and ironing services right inside the facility. Simply hand your laundry bag to our friendly staff and receive clean, fresh, neatly folded clothes back.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-soap" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Professional Washing</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-wind" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Machine Drying</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-shirt" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Ironing on Request</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-bolt" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>12–24h Turnaround</span>
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

          {/* Pros & Guidelines */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginBottom: '50px' }}>
            <div style={{ background: 'var(--white)', padding: '30px', borderRadius: 'var(--border-radius)', border: '1px solid var(--border-color)' }}>
              <h3 style={{ color: '#2e7d32', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fa-solid fa-circle-check"></i> Advantages of In-House Laundry
              </h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.8', listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>Maximum time savings — no transporting clothes around Belgrade.</li>
                <li>Hypo-allergenic quality detergents gentle on sensitive skin and fabrics.</li>
                <li>Ideal for extended stay guests, field crews, and sports teams.</li>
                <li>Neatly folded garments returned ready for your wardrobe.</li>
              </ul>
            </div>

            <div style={{ background: 'var(--white)', padding: '30px', borderRadius: 'var(--border-radius)', border: '1px solid var(--border-color)' }}>
              <h3 style={{ color: '#d32f2f', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fa-solid fa-clock"></i> Things to Keep in Mind
              </h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.8', listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>Morning drop-off before 10:00 AM ensures fastest same-day or next-morning return.</li>
                <li>Please notify staff about delicate garments requiring low-temperature wash cycles.</li>
              </ul>
            </div>
          </div>

          {/* Internal links */}
          <div style={{ marginBottom: '50px' }}>
            <h3 style={{ color: 'var(--primary)', fontSize: '1.6rem', marginBottom: '20px' }}>
              Related Services
            </h3>
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <Link href="/en/services/extended-stay" className="btn btn-secondary">
                <i className="fa-solid fa-calendar-days" style={{ marginRight: '8px' }}></i> Extended Stay Stays
              </Link>
              <Link href="/en/services/workers-accommodation" className="btn btn-secondary">
                <i className="fa-solid fa-helmet-safety" style={{ marginRight: '8px' }}></i> Work Crew Lodging
              </Link>
              <Link href="/en/services/group-accommodation" className="btn btn-secondary">
                <i className="fa-solid fa-users" style={{ marginRight: '8px' }}></i> Group Accommodation
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <div style={{ marginBottom: '60px' }}>
            <h3 style={{ color: 'var(--primary)', fontSize: '1.6rem', marginBottom: '25px', textAlign: 'center' }}>
              Frequently Asked Questions — Guest Laundry
            </h3>
            <FaqSection items={faqDataEn} />
          </div>

          {/* CTA */}
          <div className="text-center" style={{ background: 'var(--white)', padding: '40px', borderRadius: 'var(--border-radius)', border: '1px solid var(--border-color)' }}>
            <h3 style={{ color: 'var(--primary)', fontSize: '1.8rem', marginBottom: '15px' }}>
              Request Laundry Service During Your Stay
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '25px' }}>
              Our front desk team is ready to assist you anytime.
            </p>
            <Link href="/en/booking" className="btn btn-primary" style={{ padding: '16px 36px', fontSize: '1.1rem' }}>
              <i className="fa-solid fa-calendar-check" style={{ marginRight: '10px' }}></i> Book Your Stay
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
