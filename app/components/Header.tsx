'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { sendGAEvent } from '@next/third-parties/google';

interface NavItem {
  href: string;
  label: string;
  id: string;
}

const navItems: Record<string, { left: NavItem[]; right: NavItem[] }> = {
  sr: {
    left: [
      { href: '/smestaj', label: 'Smeštaj', id: 'nav-accommodation' },
      { href: '/cenovnik', label: 'Cenovnik', id: 'nav-pricing' },
    ],
    right: [
      { href: '/galerija', label: 'Galerija', id: 'nav-gallery' },
      { href: '/novosti', label: 'Novosti', id: 'nav-news' },
      { href: '/rezervacija', label: 'Rezervacija', id: 'nav-contact' },
    ],
  },
  en: {
    left: [
      { href: '/en/accommodation', label: 'Accommodation', id: 'nav-accommodation' },
      { href: '/en/pricing', label: 'Pricing', id: 'nav-pricing' },
    ],
    right: [
      { href: '/en/gallery', label: 'Gallery', id: 'nav-gallery' },
      { href: '/en/news', label: 'News', id: 'nav-news' },
      { href: '/en/booking', label: 'Booking', id: 'nav-contact' },
    ],
  },
};

export default function Header({ lang }: { lang: 'sr' | 'en' }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Sticky header on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial scroll position
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change (when component unmounts/remounts)
  useEffect(() => {
    setIsMenuOpen(false);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const items = navItems[lang];
  const homeHref = lang === 'en' ? '/en' : '/';

  return (
    <header className={`header${isScrolled ? ' scrolled' : ''}`} id="main-header">
      <div className="container">
        <Link href={homeHref} className="logo" id="logo-link">
          <div className="logo-img-container">
            <img src="/assets/logo.svg" alt="Vila Kruna Logo" className="logo-img" />
          </div>
        </Link>

        <nav className="nav-bar" id="navbar">
          <ul className={`nav-menu${isMenuOpen ? ' active' : ''}`} id="nav-menu-list">
            <div className="nav-left">
              {items.left.map((item) => (
                <li key={item.id}>
                  <Link 
                    href={item.href} 
                    className="nav-link" 
                    id={item.id} 
                    onClick={() => {
                      closeMenu();
                      sendGAEvent({ event: 'nav_click', destination: item.id });
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </div>
            <div className="nav-right">
              {items.right.map((item) => (
                <li key={item.id}>
                  <Link 
                    href={item.href} 
                    className="nav-link" 
                    id={item.id} 
                    onClick={() => {
                      closeMenu();
                      sendGAEvent({ event: 'nav_click', destination: item.id });
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </div>
          </ul>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div className="lang-switch" id="language-switcher">
            <Link
              href="/"
              className={`lang-btn${lang === 'sr' ? ' active' : ''}`}
              id="lang-btn-sr"
              onClick={() => sendGAEvent({ event: 'lang_switch', language: 'sr' })}
            >
              SR
            </Link>
            <Link
              href="/en"
              className={`lang-btn${lang === 'en' ? ' active' : ''}`}
              id="lang-btn-en"
              onClick={() => sendGAEvent({ event: 'lang_switch', language: 'en' })}
            >
              EN
            </Link>
          </div>

          <button
            className="hamburger"
            id="hamburger-menu-btn"
            aria-label={lang === 'en' ? 'Menu' : 'Meni'}
            onClick={toggleMenu}
          >
            <span
              style={
                isMenuOpen
                  ? { transform: 'rotate(45deg) translate(6px, 6px)' }
                  : { transform: 'none' }
              }
            />
            <span style={isMenuOpen ? { opacity: 0 } : { opacity: 1 }} />
            <span
              style={
                isMenuOpen
                  ? { transform: 'rotate(-45deg) translate(6px, -6px)' }
                  : { transform: 'none' }
              }
            />
          </button>
        </div>
      </div>
    </header>
  );
}
