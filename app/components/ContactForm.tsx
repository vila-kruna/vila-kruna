'use client';

import { useState } from 'react';
import { sendGAEvent } from '@next/third-parties/google';

export default function ContactForm({ lang }: { lang: 'sr' | 'en' }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const nameInput = form.elements.namedItem('form-name') as HTMLInputElement;
    setSubmittedName(nameInput?.value || '');
    setIsSubmitted(true);
    sendGAEvent({ event: 'generate_lead', form_name: 'contact_form' });
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedName('');
  };

  if (isSubmitted) {
    const successTitle = lang === 'en' ? 'Message Sent Successfully!' : 'Poruka uspešno poslata!';
    const successBody = lang === 'en'
      ? `Thank you, ${submittedName}! We have received your inquiry and will contact you within 24 hours.`
      : `Hvala Vam, ${submittedName}! Primili smo Vašu poruku i kontaktiraćemo Vas u roku od 24h.`;
    const resetLabel = lang === 'en' ? 'Send Another Message' : 'Pošaljite novu poruku';

    return (
      <div className="text-center" style={{ padding: '40px 0', animation: 'fadeInUp 0.5s ease' }}>
        <div style={{ fontSize: '4rem', color: 'var(--primary)', marginBottom: '20px' }}>✓</div>
        <h3 style={{ color: 'var(--primary)', marginBottom: '12px' }}>{successTitle}</h3>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '400px', margin: '0 auto 30px' }}>
          {successBody}
        </p>
        <button className="btn btn-secondary" style={{ marginTop: '10px' }} onClick={handleReset}>
          {resetLabel}
        </button>
      </div>
    );
  }

  return (
    <div className="contact-form-wrapper">
      <h3>{lang === 'en' ? 'Send us a Message' : 'Pošaljite nam Poruku'}</h3>
      <p>{lang === 'en' ? 'We respond to all inquiries as soon as possible.' : 'Odgovaramo na sve upite u najkraćem roku.'}</p>

      <form id="contact-form" noValidate onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="form-name" className="form-label">
            {lang === 'en' ? 'Your Full Name *' : 'Vaše Ime i Prezime *'}
          </label>
          <input
            type="text"
            id="form-name"
            name="form-name"
            className="form-control"
            placeholder={lang === 'en' ? 'e.g. John Smith' : 'npr. Marko Marković'}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="form-email" className="form-label">
            {lang === 'en' ? 'Email Address *' : 'Email Adresa *'}
          </label>
          <input
            type="email"
            id="form-email"
            name="form-email"
            className="form-control"
            placeholder={lang === 'en' ? 'e.g. john@gmail.com' : 'npr. marko@gmail.com'}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="form-phone" className="form-label">
            {lang === 'en' ? 'Phone Number' : 'Broj Telefona'}
          </label>
          <input
            type="tel"
            id="form-phone"
            name="form-phone"
            className="form-control"
            placeholder={lang === 'en' ? 'e.g. +381 60 1234567' : 'npr. +381 60 1234567'}
          />
        </div>
        <div className="form-group">
          <label htmlFor="form-message" className="form-label">
            {lang === 'en' ? 'Your Message *' : 'Vaša Poruka *'}
          </label>
          <textarea
            id="form-message"
            name="form-message"
            className="form-control"
            rows={5}
            placeholder="..."
            required
          />
        </div>
        <button type="submit" className="btn btn-primary form-submit-btn" id="btn-submit-form">
          <i className="fa-solid fa-paper-plane"></i>
          <span>{lang === 'en' ? 'Send Message' : 'Pošaljite Poruku'}</span>
        </button>
      </form>
    </div>
  );
}
