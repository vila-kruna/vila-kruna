'use client';

import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FaqSection({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
      {items.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            style={{
              background: 'var(--white)',
              borderRadius: 'var(--border-radius)',
              border: '1px solid var(--border-color)',
              overflow: 'hidden',
              transition: 'var(--transition)',
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
                gap: '15px',
              }}
            >
              <span>{faq.question}</span>
              <i
                className="fa-solid fa-chevron-down"
                style={{
                  color: 'var(--primary)',
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                }}
              ></i>
            </button>
            {isOpen && (
              <div
                style={{
                  padding: '0 24px 20px 24px',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6',
                  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                  paddingTop: '15px',
                }}
              >
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
