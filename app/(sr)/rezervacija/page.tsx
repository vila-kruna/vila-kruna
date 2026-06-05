import Script from 'next/script';
import ContactForm from '../../components/ContactForm';

export default function RezervacijaPage() {
  return (
    <>
      <section className="page-header" id="contact-header">
        <div className="container">
          <h1>Rezervacija</h1>
          <p>Rezervišite Vaš boravak brzo i jednostavno. Za dodatna pitanja, kontaktirajte nas.</p>
        </div>
      </section>

      <section className="section" id="contact-info-section">
        <div className="container">

          <div className="booking-widget-container" style={{ marginBottom: '40px', position: 'relative', zIndex: 100 }}>
            <div className="w-full engine-widget-custom-css" id="engineForm"></div>
          </div>

          <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" strategy="afterInteractive" />
          <Script id="ew-1" src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js" strategy="afterInteractive" />
          <Script src="https://app.otasync.me/utils/engineWidget/v3/script.js?v=16" strategy="afterInteractive" />
          <Script id="booking-init" strategy="afterInteractive" dangerouslySetInnerHTML={{
            __html: `
              var checkEngine = setInterval(function() {
                if (window.jQuery && typeof window.displayEngineForm === 'function') {
                  clearInterval(checkEngine);
                  displayEngineForm("#engineForm", "4829", "#1a1a1a", "#ffffff", {
                      view: "horizontal",
                      fixedTopPosition: false,
                      fixedBottomPosition: false,
                      enableChildren: true,
                      enablePromo: false,
                      language: "rs",
                      gradient: "",
                      backgroundImage: "",
                      searchButtonBackgroundColor: "#c9a84c",
                      calendarDrops: "down",
                      propertyType: "single",
                      borderRadius: "12",
                      inputBorderRadius: "8",
                      buttonBorderRadius: "50",
                      widgetBorderColor: "#c9a84c",
                      inputBorderColor: "#3b3b3b",
                      buttonBorderColor: "#c9a84c",
                      widgetBorderThickness: "1",
                      inputBorderThickness: "1",
                      buttonBorderThickness: "0",
                      textAlignment: "center",
                      height: "",
                      widgetXPadding: "32",
                      widgetYPadding: "24",
                      enableDropdownGuest: false,
                      openInEngineSameTab: false,
                      custom_domain: "",
                      openEngineInPopup: false
                  });
                  document.getElementById('engineForm').style.fontFamily = 'Inter, sans-serif';
                }
              }, 100);
            `
          }} />

          <div className="contact-grid">
            <div className="contact-info-card" id="contact-details-box">
              <h3>Podaci za Kontakt</h3>
              <ul className="contact-details-list">
                <li className="contact-detail-item">
                  <span className="contact-detail-icon"><i className="fa-solid fa-location-dot"></i></span>
                  <div className="contact-detail-text">
                    <h4 className="font-weight-bold">Naša Adresa</h4>
                    <p>Svetozara Ivačkovića 4, Rakovica,<br />11090 Beograd, Srbija</p>
                  </div>
                </li>
                <li className="contact-detail-item">
                  <span className="contact-detail-icon"><i className="fa-solid fa-phone"></i></span>
                  <div className="contact-detail-text">
                    <h4 className="font-weight-bold">Broj Telefona</h4>
                    <p>+381643339555</p>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Dostupni na Viber i WhatsApp</p>
                  </div>
                </li>
                <li className="contact-detail-item">
                  <span className="contact-detail-icon"><i className="fa-solid fa-envelope"></i></span>
                  <div className="contact-detail-text">
                    <h4 className="font-weight-bold">Email Adresa</h4>
                    <p>info@vilakruna.rs</p>
                  </div>
                </li>
              </ul>
            </div>

            <ContactForm lang="sr" />
          </div>

          <div className="price-note-box" style={{ marginBottom: '40px' }} id="directions-box">
            <h4 style={{ color: 'var(--primary)', marginBottom: '8px', fontWeight: 700 }}>
              <i className="fa-solid fa-diamond-turn-right" style={{ marginRight: '8px' }}></i>Kako doći do nas?
            </h4>
            <p>
              <strong>Sa ibarske magistrale isključite se na izlazu za Rakovicu na kružnom putu</strong>, vozite pravo i sa
              desne strane nakon otprilike kilometar ćete uočiti putokaz za Vilu Kruna.
              Vila Kruna se nalazi u mirnoj sporednoj ulici sa dosta besplatnog parking prostora u neposrednoj blizini
              smeštaja.
            </p>
          </div>

          <div className="location-map" style={{ height: '450px' }} id="contact-page-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2835.142612058042!2d20.4251005!3d44.7167009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7300301bef03%3A0x28d880306c3cd2fe!2sVila%20Kruna!5e0!3m2!1ssr!2srs!4v1779915179102!5m2!1ssr!2srs"
              width="100%" height="450" style={{ border: 0 }} allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
