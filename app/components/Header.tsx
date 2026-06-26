'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { sendGTMEvent } from '@next/third-parties/google';

interface NavSubItem {
  href: string;
  label: string;
  id: string;
}

interface NavItem {
  href?: string;
  label: string;
  id: string;
  subItems?: NavSubItem[];
}

const navItems: Record<string, { left: NavItem[]; right: NavItem[] }> = {
  sr: {
    left: [
      { href: '/smestaj', label: 'Smeštaj', id: 'nav-accommodation' },
      { href: '/cenovnik', label: 'Cenovnik', id: 'nav-pricing' },
      {
        label: 'Korisno',
        id: 'nav-recommendations',
        subItems: [
          { href: '/kako-do-nas-sa-autoputa', label: 'Kako do nas sa auto-puta', id: 'nav-sub-highway' },
          { href: '/superior-soba', label: 'Superior soba', id: 'nav-sub-superior' },
          { href: '/tih-miran-kutak-sa-parkingom', label: 'Miran kutak sa parkingom', id: 'nav-sub-quiet' },
          { href: '/dnevni-smestaj', label: 'Dnevni smeštaj', id: 'nav-sub-dayuse' },
          { href: '/grupe-i-porodice', label: 'Za grupe i porodice', id: 'nav-sub-groups' },
        ],
      },
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
      {
        label: 'Explore',
        id: 'nav-explore',
        subItems: [
          { href: '/en/how-to-reach-us-from-highway', label: 'How to reach us from highway', id: 'nav-sub-highway' },
          { href: '/en/superior-room', label: 'Superior Room', id: 'nav-sub-superior' },
          { href: '/en/quiet-peaceful-corner-with-parking', label: 'Quiet corner with parking', id: 'nav-sub-quiet' },
          { href: '/en/day-use-accommodation', label: 'Day use', id: 'nav-sub-dayuse' },
          { href: '/en/groups-and-families', label: 'Groups and families', id: 'nav-sub-groups' },
        ],
      },
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
  const [expandedDropdowns, setExpandedDropdowns] = useState<Record<string, boolean>>({});

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

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setExpandedDropdowns({});
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
    setExpandedDropdowns({});
  };

  const toggleMobileDropdown = (id: string) => {
    if (window.innerWidth <= 768) {
      setExpandedDropdowns((prev) => ({
        ...prev,
        [id]: !prev[id],
      }));
    }
  };

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
              {items.left.map((item) => {
                if (item.subItems) {
                  const isExpanded = expandedDropdowns[item.id] || false;
                  return (
                    <li key={item.id} className="nav-item-dropdown">
                      <button
                        className="nav-link dropdown-trigger"
                        id={item.id}
                        onClick={() => toggleMobileDropdown(item.id)}
                        aria-expanded={isExpanded}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
                      >
                        <span>{item.label}</span>
                        <i className="fa-solid fa-chevron-down caret-icon" style={{ fontSize: '0.75rem', transition: 'transform 0.3s ease', transform: isExpanded ? 'rotate(180deg)' : 'none' }}></i>
                      </button>
                      <ul className={`dropdown-menu-list ${isExpanded ? 'mobile-show' : ''}`}>
                        {item.subItems.map((sub) => (
                          <li key={sub.id}>
                            <Link
                              href={sub.href}
                              className="dropdown-item-link"
                              id={sub.id}
                              onClick={() => {
                                closeMenu();
                                sendGTMEvent({ event: 'nav_click', destination: sub.id });
                              }}
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                }
                return (
                  <li key={item.id}>
                    <Link 
                      href={item.href || '#'} 
                      className="nav-link" 
                      id={item.id} 
                      onClick={() => {
                        closeMenu();
                        sendGTMEvent({ event: 'nav_click', destination: item.id });
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </div>
            <div className="nav-right">
              {items.right.map((item) => (
                <li key={item.id}>
                  <Link 
                    href={item.href || '#'} 
                    className="nav-link" 
                    id={item.id} 
                    onClick={() => {
                      closeMenu();
                      sendGTMEvent({ event: 'nav_click', destination: item.id });
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
              onClick={() => sendGTMEvent({ event: 'lang_switch', language: 'sr' })}
            >
              SR
            </Link>
            <Link
              href="/en"
              className={`lang-btn${lang === 'en' ? ' active' : ''}`}
              id="lang-btn-en"
              onClick={() => sendGTMEvent({ event: 'lang_switch', language: 'en' })}
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
