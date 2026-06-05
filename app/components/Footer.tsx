import Link from 'next/link';

interface FooterLink {
  href: string;
  label: string;
}

const footerData: Record<string, {
  aboutTitle: string;
  aboutDesc: string;
  navTitle: string;
  navLinks: FooterLink[];
  accomTitle: string;
  accomLinks: FooterLink[];
  contactTitle: string;
  copyright: string;
  creditLabel: string;
}> = {
  sr: {
    aboutTitle: 'Vila Kruna',
    aboutDesc: 'Vaš miran kutak u Beogradu. Novoopremljene sobe stvorene za vrhunski odmor.',
    navTitle: 'Navigacija',
    navLinks: [
      { href: '/', label: 'Početna' },
      { href: '/smestaj', label: 'Smeštaj' },
      { href: '/cenovnik', label: 'Cenovnik' },
      { href: '/galerija', label: 'Galerija' },
      { href: '/novosti', label: 'Novosti' },
      { href: '/rezervacija', label: 'Rezervacija' },
    ],
    accomTitle: 'Smeštaj',
    accomLinks: [
      { href: '/smestaj', label: 'Naše sobe' },
      { href: '/cenovnik', label: 'Cenovnik usluga' },
      { href: '/rezervacija', label: 'Rezervacija' },
    ],
    contactTitle: 'Kontakt Info',
    copyright: '© 2026 Vila Kruna. Sva prava zadržana.',
    creditLabel: 'Sajt kreirao',
  },
  en: {
    aboutTitle: 'Vila Kruna',
    aboutDesc: 'Your peaceful retreat in Belgrade. Newly furnished rooms designed for supreme comfort.',
    navTitle: 'Navigation',
    navLinks: [
      { href: '/en', label: 'Home' },
      { href: '/en/accommodation', label: 'Accommodation' },
      { href: '/en/pricing', label: 'Pricing' },
      { href: '/en/gallery', label: 'Gallery' },
      { href: '/en/news', label: 'News' },
      { href: '/en/booking', label: 'Booking' },
    ],
    accomTitle: 'Accommodation',
    accomLinks: [
      { href: '/en/accommodation', label: 'Our Rooms' },
      { href: '/en/pricing', label: 'Price List' },
      { href: '/en/booking', label: 'Booking' },
    ],
    contactTitle: 'Contact Info',
    copyright: '© 2026 Vila Kruna. All rights reserved.',
    creditLabel: 'Website by',
  },
};

export default function Footer({ lang }: { lang: 'sr' | 'en' }) {
  const data = footerData[lang];

  return (
    <footer className="footer" id="main-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col footer-about">
            <h3>{data.aboutTitle}</h3>
            <p>{data.aboutDesc}</p>
            <div className="footer-socials">
              <a
                href="https://www.instagram.com/vila.kruna.beograd/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://www.booking.com/hotel/rs/vila-kruna-beograd.sr.html"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Booking"
              >
                <i className="fa-solid fa-b"></i>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>{data.navTitle}</h4>
            <ul className="footer-links">
              {data.navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>{data.accomTitle}</h4>
            <ul className="footer-links">
              {data.accomLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>{data.contactTitle}</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <span className="footer-contact-icon">
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                <span>Svetozara Ivačkovića 4, Rakovica, Beograd</span>
              </li>
              <li className="footer-contact-item">
                <span className="footer-contact-icon">
                  <i className="fa-solid fa-phone"></i>
                </span>
                <span>+381643339555</span>
              </li>
              <li className="footer-contact-item">
                <span className="footer-contact-icon">
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <span>info@vilakruna.rs</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{data.copyright}</p>
          <p>
            {data.creditLabel}{' '}
            <a href="http://bogdankocic.com/" target="_blank" rel="noopener noreferrer">
              Bogdan Kocić
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
