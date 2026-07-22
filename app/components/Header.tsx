'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
        label: 'Usluge',
        id: 'nav-services',
        href: '/usluge',
        subItems: [
          { href: '/usluge', label: 'Sve usluge', id: 'nav-sub-all-services' },
          { href: '/usluge/dnevni-smestaj', label: 'Dnevni smeštaj', id: 'nav-sub-dayuse' },
          { href: '/usluge/produzeni-boravak', label: 'Produženi boravak', id: 'nav-sub-longstay' },
          { href: '/usluge/pranje-vesa-za-goste', label: 'Pranje veša za goste', id: 'nav-sub-laundry' },
          { href: '/usluge/organizacija-prevoza', label: 'Organizacija prevoza', id: 'nav-sub-transport' },
          { href: '/usluge/smestaj-za-radnike', label: 'Smeštaj za radnike', id: 'nav-sub-workers' },
          { href: '/usluge/smestaj-za-organizovane-grupe', label: 'Smeštaj za grupe', id: 'nav-sub-groups-service' },
        ],
      },
      {
        label: 'Korisno',
        id: 'nav-recommendations',
        subItems: [
          { href: '/kako-do-nas-sa-autoputa', label: 'Kako do nas sa auto-puta', id: 'nav-sub-highway' },
          { href: '/superior-soba', label: 'Superior soba', id: 'nav-sub-superior' },
          { href: '/tih-miran-kutak-sa-parkingom', label: 'Miran kutak sa parkingom', id: 'nav-sub-quiet' },
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
        label: 'Services',
        id: 'nav-services-en',
        href: '/en/services',
        subItems: [
          { href: '/en/services', label: 'All Services', id: 'nav-sub-all-services-en' },
          { href: '/en/services/day-use-accommodation', label: 'Day Use Accommodation', id: 'nav-sub-dayuse-en' },
          { href: '/en/services/extended-stay', label: 'Extended Stay', id: 'nav-sub-longstay-en' },
          { href: '/en/services/laundry-service', label: 'Laundry Service', id: 'nav-sub-laundry-en' },
          { href: '/en/services/transportation-service', label: 'Transportation & Transfers', id: 'nav-sub-transport-en' },
          { href: '/en/services/workers-accommodation', label: 'Workers Accommodation', id: 'nav-sub-workers-en' },
          { href: '/en/services/group-accommodation', label: 'Group Accommodation', id: 'nav-sub-groups-service-en' },
        ],
      },
      {
        label: 'Explore',
        id: 'nav-explore',
        subItems: [
          { href: '/en/how-to-reach-us-from-highway', label: 'How to reach us from highway', id: 'nav-sub-highway' },
          { href: '/en/superior-room', label: 'Superior Room', id: 'nav-sub-superior' },
          { href: '/en/quiet-peaceful-corner-with-parking', label: 'Quiet corner with parking', id: 'nav-sub-quiet' },
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
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

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

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
    if (typeof document !== 'undefined' && document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  // Close menu on route change
  useEffect(() => {
    closeMenu();
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setOpenDropdown(null);
  };

  const toggleDropdown = (id: string) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
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
                  const isExpanded = openDropdown === item.id;
                  return (
                    <li
                      key={item.id}
                      className="nav-item-dropdown"
                      onMouseEnter={() => {
                        if (typeof window !== 'undefined' && window.innerWidth > 768) {
                          setOpenDropdown(item.id);
                        }
                      }}
                      onMouseLeave={() => {
                        if (typeof window !== 'undefined' && window.innerWidth > 768) {
                          setOpenDropdown(null);
                        }
                      }}
                    >
                      <button
                        className="nav-link dropdown-trigger"
                        id={item.id}
                        onClick={() => toggleDropdown(item.id)}
                        aria-expanded={isExpanded}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
                      >
                        <span>{item.label}</span>
                        <i className="fa-solid fa-chevron-down caret-icon" style={{ fontSize: '0.75rem', transition: 'transform 0.3s ease', transform: isExpanded ? 'rotate(180deg)' : 'none' }}></i>
                      </button>
                      <ul className={`dropdown-menu-list ${isExpanded ? 'open' : ''}`}>
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
