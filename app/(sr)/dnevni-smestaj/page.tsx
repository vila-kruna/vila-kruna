'use client';

import React, { useState } from 'react';
import Link from 'next/link';

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

export default function DnevniSmestajPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="page-header" id="day-use-header">
        <div className="container">
          <h1>Dnevni Smeštaj i Dnevni Odmor</h1>
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
            <Link href="/rezervacija" className="btn btn-primary" style={{ padding: '16px 36px' }}>
              <i className="fa-solid fa-calendar-check" style={{ marginRight: '8px' }}></i> Rezervišite dnevni odmor
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
