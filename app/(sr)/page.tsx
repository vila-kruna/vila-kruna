import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import Announcement from '../components/Announcement';
import ReviewsSlider from '../components/ReviewsSlider';

export const metadata: Metadata = {
  title: 'Vila Kruna — Smeštaj u Beogradu | Booking.com rating 9.0',
  description: 'Vila Kruna smeštaj u Rakovici, Beograd. Novo, prostrano, čisto — 15 min od centra. Besplatan parking i WiFi. Ocena 9.0 na Booking.com.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Vila Kruna — Smeštaj u Beogradu | Booking.com rating 9.0',
    description: 'Vila Kruna smeštaj u Rakovici, Beograd. Novo, prostrano, čisto — 15 min od centra. Besplatan parking i WiFi. Ocena 9.0 na Booking.com.',
    url: '/',
  },
};

const srReviews = [
  {
    name: "Bogdanka Vuckovic",
    link: "https://maps.app.goo.gl/bGB9NEs9ogkUuctu9",
    text: "\"Novo, udobno, ljubazni domaćini spremni da vam pomognu u svakom trenutku, hrana je odlična! Smestio sam grupu od 20 ljudi u Vili Kruna pre nekoliko dana i apsolutno niko nema nijednu zamerku! Dakle, idealno mesto za dve, tri, pa i veće grupe ljudi (sajmovi, svadbe, razne proslave) koje nisu iz Srbije! Toplo preporučujem ovu vilu!\""
  },
  {
    name: "Tibi Gal",
    link: "https://maps.app.goo.gl/shwG4KASJJVWiASq8",
    text: "\"Bili smo apsolutno zadovoljni!! Stali smo ovde sa velikom grupom prijatelja, svi su se lepo proveli! Usluga je bila savršena, odnos cene i kvaliteta je takođe veoma dobar, sobe su čiste, bogato opremljene. Bilo nam je super!\""
  },
  {
    name: "Kamo Flage",
    link: "https://maps.app.goo.gl/jjk65m7TkUFe5Eiw9",
    text: "\"Čist, pristupačan hotel sa sigurnim parkingom. ljubazno osoblje. 5 minuta od autoputa, savršeno za prolazak. Vratićemo se sledeće godine.\""
  },
  {
    name: "Gorjana Radoman Kovacevic",
    link: "https://maps.app.goo.gl/84kmrboShvhAgxDM9",
    text: "\"Vila Kruna je vrhunski objekat sa fantastičnim sadržajima u sobama. Sobe su izuzetno prostrane, a neke čak imaju i saunu i đakuzi. Čistoća objekta i ljubaznost osoblja čine da se boravak u Vili Kruna oseća kao da ste jedini gost. Toplo preporučujemo i uvek se vredi vratiti. Lokacija je idealna za svakoga ko prolazi, jer je veoma blizu autoputa i beogradske obilaznice. Veoma smo zadovoljni i redovni gosti.\""
  },
  {
    name: "Bora Özgün",
    link: "https://maps.app.goo.gl/WeGJXHoCstAQ3yeU8",
    text: "\"Miran i pristupačan smeštaj u velikom gradu (potrebni su mi mir i tišina noću). Dobro povezan sa gradom autobusom i osoblje je zaista ljubazno! Mogu samo da preporučim ovo mesto :)\""
  },
  {
    name: "ZLATKO ŠKRABIĆ",
    link: "https://maps.app.goo.gl/NVYsFcuwp8ZQpr6t9",
    text: "\"Sobe su veoma velike i prostrane i najvažnije čiste. Lokacija možda nije najbolja za one koji žele da posete Beograd jer se mora voziti malo duže do centra, ali sve u svemu je veoma dobro. Osoblje je veoma ljubazno i uvek vam je na usluzi😁\""
  }
];

export default function Home() {
  return (
    <>
      <Script
        id="json-ld-motel"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Motel',
            name: 'Vila Kruna',
            image: 'https://utfs.io/f/7BAyoiVHGCJelvHRDeY43o2rhvXi6WazDQ9IB51uFONndpYx',
            '@id': 'https://vilakruna.rs/#motel',
            url: 'https://vilakruna.rs',
            telephone: '+381643339555',
            email: 'info@vilakruna.rs',
            priceRange: '$$',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Svetozara Ivačkovića 4, Rakovica',
              addressLocality: 'Beograd',
              postalCode: '11090',
              addressCountry: 'RS',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 44.7167009,
              longitude: 20.4251005,
            },
            starRating: {
              '@type': 'Rating',
              ratingValue: '3',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '9.0',
              reviewCount: '326',
              bestRating: '10',
              worstRating: '1',
              ratingExplanation: 'Booking.com score',
            },
            sameAs: [
              'https://www.instagram.com/vila.kruna.beograd/',
              'https://www.booking.com/hotel/rs/vila-kruna-beograd.sr.html'
            ],
            amenityFeature: [
              {
                '@type': 'LocationFeatureSpecification',
                name: 'Besplatan Wi-Fi',
                value: true,
              },
              {
                '@type': 'LocationFeatureSpecification',
                name: 'Besplatan privatni parking',
                value: true,
              },
              {
                '@type': 'LocationFeatureSpecification',
                name: 'Sauna',
                value: true,
              },
              {
                '@type': 'LocationFeatureSpecification',
                name: 'Đakuzi',
                value: true,
              },
            ],
          }),
        }}
      />
      {/* Hero Section */}
      <section className="hero" id="hero-section"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('https://utfs.io/f/7BAyoiVHGCJelvHRDeY43o2rhvXi6WazDQ9IB51uFONndpYx')" }}>
        <div className="hero-content">
          <h1 className="hero-title">Vila Kruna — Smeštaj u Beogradu</h1>
          <p className="hero-subtitle">Vaš mir u Beogradu. Novo, prostrano, čisto — 15 min od centra.</p>
          <div className="hero-buttons">
            <Link href="/rezervacija" className="btn btn-primary" id="hero-cta-booking">
              <i className="fa-solid fa-calendar-check"></i>
              Rezerviši smeštaj
            </Link>
            <Link href="/smestaj" className="btn btn-secondary"
              style={{ borderColor: 'var(--text-primary)', color: 'var(--text-primary)' }} id="hero-cta-accommodation">
              Pogledajte smeštaj
            </Link>
          </div>
        </div>
      </section>

      {/* Dynamic Announcement Slot */}
      <Announcement lang="sr" />

      {/* Trust Strip */}
      <div className="trust-strip" id="trust-bar">
        <div className="container">
          <div className="trust-flex">
            <div className="trust-item">
              <div className="trust-score">9.0</div>
              <div className="trust-details">
                <h4>Izvanredno</h4>
                <p>326 recenzija na Booking.com</p>
              </div>
            </div>
            <div className="trust-item">
              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <div className="trust-details">
                <h4>Vila sa 3 zvezdice</h4>
                <p>Kvalitet i udobnost</p>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-score" style={{ backgroundColor: 'var(--accent)' }}>4.7</div>
              <div className="trust-details">
                <h4>Google Business</h4>
                <p>Izuzetna ocena gostiju</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="section" id="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Dobrodošli u Vilu Kruna</h2>

              <div>
                <p>Vila Kruna je moderno opremljena vila u mirnom beogradskom naselju Rakovica, idealna za sve koji traže <Link href="/tih-miran-kutak-sa-parkingom">tih i miran smeštaj sa besplatnim parkingom u Beogradu</Link>. Nalazimo se na odličnoj poziciji pa je stoga izuzetno <Link href="/kako-do-nas-sa-autoputa">lako doći do nas sa auto-puta ili obilaznice</Link> iz svih pravaca.</p>
                <p>Nudimo Vam izuzetno prostrane i klimatizovane sobe stvorene za vrhunski odmor. Bilo da Vam je potreban diskretan <Link href="/dnevni-smestaj">dnevni odmor i dnevni smeštaj</Link> tokom tranzita kroz Srbiju, udoban kutak za parove ili pak komforan <Link href="/grupe-i-porodice">smeštaj za veće grupe i porodična putovanja</Link> — Vila Kruna je Vaš pravi izbor.</p>
                <p>Za one koji traže dodatnu dozu opuštanja, preporučujemo našu premium <Link href="/superior-soba">superior sobu sa saunom i đakuzijem</Link> u kojoj ćete se osvežiti i potpuno regenerisati.</p>
              </div>

              <div style={{ marginTop: '32px' }}>
                <Link href="/smestaj" className="btn btn-secondary" id="about-learn-more">
                  <span className="font-weight-bold">Saznajte više o smeštaju</span>
                </Link>
              </div>
            </div>

            <div className="about-img"
              style={{ backgroundImage: "url('https://utfs.io/f/7BAyoiVHGCJelZLe9FY43o2rhvXi6WazDQ9IB51uFONndpYx')" }}
              id="about-image-card"></div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="section alt-bg" id="amenities-section">
        <div className="container">
          <h2 className="section-title text-center">Sadržaji i Usluge</h2>
          <p className="section-subtitle text-center">Sve što Vam je potrebno za ugodan i opušten boravak u Beogradu.</p>

          <div className="amenities-grid">
            <div className="amenity-card">
              <span className="amenity-icon"><i className="fa-solid fa-square-parking"></i></span>
              <p>Besplatan parking</p>
            </div>
            <div className="amenity-card">
              <span className="amenity-icon"><i className="fa-solid fa-wifi"></i></span>
              <p>Brzi besplatan WiFi</p>
            </div>
            <div className="amenity-card">
              <span className="amenity-icon"><i className="fa-solid fa-paw"></i></span>
              <p>Pet friendly</p>
            </div>
            <div className="amenity-card">
              <span className="amenity-icon"><i className="fa-solid fa-snowflake"></i></span>
              <p>Klima</p>
            </div>
            <div className="amenity-card">
              <span className="amenity-icon"><i className="fa-solid fa-volume-xmark"></i></span>
              <p>Zvučna izolacija</p>
            </div>
            <div className="amenity-card">
              <span className="amenity-icon"><i className="fa-solid fa-clock"></i></span>
              <p>Recepcija 24h</p>
            </div>
            <div className="amenity-card">
              <span className="amenity-icon"><i className="fa-solid fa-tree"></i></span>
              <p>Terasa / Dvorište</p>
            </div>
            <div className="amenity-card">
              <span className="amenity-icon"><i className="fa-solid fa-ban-smoking"></i></span>
              <p>Sobe za nepušače</p>
            </div>
            <div className="amenity-card">
              <span className="amenity-icon"><i className="fa-solid fa-tv"></i></span>
              <p>TV i multimedija</p>
            </div>
            <div className="amenity-card">
              <span className="amenity-icon"><i className="fa-solid fa-spa"></i></span>
              <p>Sauna</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Preview Section */}
      <section className="section" id="rooms-preview-section">
        <div className="container">
          <h2 className="section-title text-center">Sobe i Smeštaj</h2>
          <p className="section-subtitle text-center">Izaberite tip smeštaja koji najbolje odgovara Vašim potrebama.</p>

          <div className="rooms-grid">
            {/* Room 1 */}
            <div className="room-card" id="room-card-standard">
              <div className="room-img room-img-standard"
                style={{ backgroundImage: "url('https://utfs.io/f/7BAyoiVHGCJeDWmGdM51KQbfROnw2i9JW8tvksrZUMVBCPly')" }}></div>
              <div className="room-info">
                <h3 className="room-title">Standardna Soba sa Sofom</h3>
                <p className="room-desc">Udobna soba površine 30m² opremljena sa dva odvojena kreveta za jednu osobu i udobnom
                  sofom na razvlačenje.</p>
                <div className="room-features">
                  <span className="room-feature"><i className="fa-solid fa-users"></i> 1-3 Pax</span>
                  <span className="room-feature"><i className="fa-solid fa-bed"></i> 2 kreveta + sofa</span>
                  <span className="room-feature"><i className="fa-solid fa-snowflake"></i> AC</span>
                </div>
                <div className="room-footer">
                  <div className="room-price">
                    Od <span>2.800 RSD</span>
                  </div>
                  <Link href="/smestaj" className="btn btn-primary" id="room-standard-learn-more">Detalji &rarr;</Link>
                </div>
              </div>
            </div>

            {/* Room 2 */}
            <div className="room-card" id="room-card-economy">
              <div className="room-img room-img-economy"
                style={{ backgroundImage: "url('https://utfs.io/f/7BAyoiVHGCJek2lZAl8hFBCH2ptAzIf1nmqS9eRyl4Xo7Qjd')" }}></div>
              <div className="room-info">
                <h3 className="room-title">Economy Dvokrevetna Soba</h3>
                <p className="room-desc">Praktična soba od 30m² sa jednim ekstra velikim bračnim krevetom, idealna za parove i
                  kraće boravke.</p>
                <div className="room-features">
                  <span className="room-feature"><i className="fa-solid fa-users"></i> 1-2 Pax</span>
                  <span className="room-feature"><i className="fa-solid fa-bed"></i> 1 bračni krevet</span>
                  <span className="room-feature"><i className="fa-solid fa-snowflake"></i> AC</span>
                </div>
                <div className="room-footer">
                  <div className="room-price">
                    Od <span>3.300 RSD</span>
                  </div>
                  <Link href="/smestaj" className="btn btn-primary" id="room-economy-learn-more">Detalji &rarr;</Link>
                </div>
              </div>
            </div>

            {/* Room 3 */}
            <div className="room-card" id="room-card-deluks">
              <div className="room-img room-img-deluks"
                style={{ backgroundImage: "url('https://utfs.io/f/7BAyoiVHGCJeFPB87c9AMREUBHCxdcopg2rX5AJteL8a9kwZ')" }}>
                <span className="room-badge">Najpopularnije</span>
              </div>
              <div className="room-info">
                <h3 className="room-title">Deluks Dvokrevetna Soba</h3>
                <p className="room-desc">Prostranija soba (35m²) opremljena sa dva kreveta za jednu osobu i sofom. Odličan izbor
                  za duže boravke.</p>
                <div className="room-features">
                  <span className="room-feature"><i className="fa-solid fa-users"></i> 1-3 Pax</span>
                  <span className="room-feature"><i className="fa-solid fa-bed"></i> 2 kreveta + sofa</span>
                  <span className="room-feature"><i className="fa-solid fa-snowflake"></i> AC</span>
                </div>
                <div className="room-footer">
                  <div className="room-price">
                    Od <span>3.500 RSD</span>
                  </div>
                  <Link href="/smestaj" className="btn btn-primary" id="room-deluks-learn-more">Detalji &rarr;</Link>
                </div>
              </div>
            </div>

            {/* Room 4 */}
            <div className="room-card" id="room-card-superior">
              <div className="room-img room-img-jacuzzi"
                style={{ backgroundImage: "url('https://utfs.io/f/7BAyoiVHGCJenc84FCkO3WXfeNzPAUHa8t91oGIrqb7YRShF')" }}>
                <span className="room-badge" style={{ backgroundColor: 'var(--accent)' }}>Premium</span>
              </div>
              <div className="room-info">
                <h3 className="room-title">Superior Soba s King-sajz Krevetom</h3>
                <p className="room-desc">Naša najekskluzivnija soba od 65m². Uključuje ekstra veliki bračni krevet, hidromasažnu
                  kadu, saunu i mini-bar.</p>
                <div className="room-features">
                  <span className="room-feature"><i className="fa-solid fa-users"></i> 1-3 Pax</span>
                  <span className="room-feature"><i className="fa-solid fa-bath"></i> Hidromasažna kada & Sauna</span>
                  <span className="room-feature"><i className="fa-solid fa-martini-glass"></i> Mini-bar</span>
                </div>
                <div className="room-footer">
                  <div className="room-price">
                    Od <span>5.750 RSD</span>
                  </div>
                  <Link href="/smestaj" className="btn btn-primary" id="room-superior-learn-more">Detalji &rarr;</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center" style={{ marginTop: '48px' }}>
            <Link href="/rezervacija" className="btn btn-accent"
              id="rooms-preview-cta-booking">Rezerviši smeštaj &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Continuous Moving Reviews Stripe Section */}
      <section className="reviews-stripe-section" id="reviews-stripe">
        <div className="container">
          <h2 className="section-title text-center">Šta Kažu Naši Gosti</h2>
          <p className="section-subtitle text-center" style={{ color: '#B0B0B0' }}>Recenzije preuzete sa Google-a. Kliknite da
            pogledate određenu recenziju.</p>
        </div>

        <ReviewsSlider reviews={srReviews} />
      </section>

      {/* Location Section */}
      <section className="section" id="location-section">
        <div className="container">
          <div className="location-grid">
            <div className="location-map" id="map-holder">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2835.142612058042!2d20.4251005!3d44.7167009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7300301bef03%3A0x28d880306c3cd2fe!2sVila%20Kruna!5e0!3m2!1ssr!2srs!4v1779915179102!5m2!1ssr!2srs"
                width="600" height="450" style={{ border: 0 }} allowFullScreen={true} loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className="location-details">
              <h3>Gde se Nalazimo</h3>

              <ul className="location-points">
                <li className="location-point">
                  <span className="location-point-icon"><i className="fa-solid fa-map-location-dot"></i></span>
                  <div className="location-point-text">
                    <h4>Adresa</h4>
                    <p>Svetozara Ivačkovića 4, Rakovica, 11090 Beograd, Srbija</p>
                  </div>
                </li>
                <li className="location-point">
                  <span className="location-point-icon"><i className="fa-solid fa-car-side"></i></span>
                  <div className="location-point-text">
                    <h4>Samo 15 min od centra</h4>
                    <p>Brz i lagan pristup kolima iz svih delova grada, van saobraćajnih gužvi.</p>
                  </div>
                </li>
                <li className="location-point">
                  <span className="location-point-icon"><i className="fa-solid fa-road"></i></span>
                  <div className="location-point-text">
                    <h4>Blizina autoputa</h4>
                    <p>Odlično povezan sa obilaznicom oko Beograda i autoputem E-75 (izlaz Rakovica).</p>
                  </div>
                </li>
                <li className="location-point">
                  <span className="location-point-icon"><i className="fa-solid fa-tree"></i></span>
                  <div className="location-point-text">
                    <h4>Miran i zelen kraj</h4>
                    <p>Idealno za savršen san i odmor nakon užurbanog dana u gradu.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-bottom" id="bottom-booking-banner">
        <div className="container">
          <h2>Spremni za Boravak u Beogradu?</h2>
          <p>Rezervišite direktno preko našeg sajta — brzo, sigurno i bez skrivenih troškova uz garanciju najbolje cene.</p>
          <Link href="/rezervacija" className="btn btn-accent" id="bottom-cta-booking">
            <i className="fa-solid fa-calendar-days"></i>
            Rezerviši smeštaj
          </Link>
        </div>
      </section>
    </>
  );
}
