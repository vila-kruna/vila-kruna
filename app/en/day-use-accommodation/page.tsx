'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is day use accommodation (day rest)?",
    answer: "Day use or day rest is a service that allows you to rent a hotel room for a few hours during the day, without staying overnight. It is perfect for transit travelers who need a short break, a shower, or a few hours of sleep before continuing their journey."
  },
  {
    question: "What are the standard hours for day rest?",
    answer: "Standard hours for day use are between 10:00 AM and 6:00 PM. If you have specific needs regarding your arrival or departure time, feel free to contact us directly to make arrangements."
  },
  {
    question: "Is parking included in the day use price?",
    answer: "Yes, all our guests are entitled to free use of our private, fenced parking lot monitored by video surveillance during their stay."
  },
  {
    question: "Is discretion guaranteed?",
    answer: "Absolutely. Vila Kruna guarantees maximum privacy, discretion, and peace for all guests using our day use services."
  },
  {
    question: "Which rooms are available for day use?",
    answer: "You can book any of our currently vacant rooms for day rest — from economy double rooms and standard rooms to our luxury superior rooms with a private sauna and jacuzzi."
  },
  {
    question: "How can I book day use accommodation?",
    answer: "You can book by filling out the form on our booking page, sending an email, or calling us directly at +381643339555."
  }
];

export default function DayUsePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="page-header" id="day-use-header">
        <div className="container">
          <h1>Day Use & Day Rest Accommodation</h1>
          <p>Need a short break during the day? Book a room for rest, shower, and refreshment.</p>
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
                Perfect Daytime Break
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '15px' }}>
                Whether you are transiting through Belgrade, waiting for a flight, attending a business meeting, or simply need a quiet, comfortable space to work and freshen up for a few hours — our day use service is the ideal solution.
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '25px' }}>
                We offer modern, air-conditioned, and spotlessly clean rooms with private bathrooms, high-speed WiFi, and cable TV, where you can relax and prepare for the rest of your day.
              </p>

              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <div style={{ background: 'rgba(197, 160, 89, 0.08)', padding: '15px 20px', borderRadius: '8px', borderLeft: '3px solid var(--primary)', flex: '1 1 200px' }}>
                  <h4 style={{ color: 'var(--primary)', marginBottom: '5px' }}><i className="fa-solid fa-clock"></i> Flexible Hours</h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Time slots customized to your schedule during the day.</p>
                </div>
                <div style={{ background: 'rgba(197, 160, 89, 0.08)', padding: '15px 20px', borderRadius: '8px', borderLeft: '3px solid var(--primary)', flex: '1 1 200px' }}>
                  <h4 style={{ color: 'var(--primary)', marginBottom: '5px' }}><i className="fa-solid fa-user-shield"></i> Full Discretion</h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Guaranteed privacy and quiet during your stay.</p>
                </div>
              </div>
            </div>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto 60px' }}>
            <h2 className="section-title text-center" style={{ marginBottom: '30px' }}>Frequently Asked Questions (FAQ)</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {faqData.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    style={{
                      background: 'var(--white)',
                      borderRadius: 'var(--border-radius)',
                      border: '1px solid var(--border-color)',
                      overflow: 'hidden',
                      transition: 'var(--transition)'
                    }}
                  >
                    <button
                      onClick={() => toggleFAQ(idx)}
                      style={{
                        width: '100%',
                        padding: '20px 24px',
                        background: 'none',
                        border: 'none',
                        textAlign: 'left',
                        color: 'var(--text-primary)',
                        fontSize: '1.05rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '15px'
                      }}
                    >
                      <span>{faq.question}</span>
                      <i className={`fa-solid fa-chevron-down`} style={{ color: 'var(--primary)', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}></i>
                    </button>
                    {isOpen && (
                      <div
                        style={{
                          padding: '0 24px 20px 24px',
                          color: 'var(--text-secondary)',
                          lineHeight: '1.6',
                          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                          paddingTop: '15px'
                        }}
                      >
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center">
            <Link href="/en/booking" className="btn btn-primary" style={{ padding: '16px 36px' }}>
              <i className="fa-solid fa-calendar-check" style={{ marginRight: '8px' }}></i> Book Your Day Rest
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
