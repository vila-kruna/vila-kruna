import Link from 'next/link';
import Announcement from '../components/Announcement';
import ReviewsSlider from '../components/ReviewsSlider';

const enReviews = [
  {
    name: "Bogdanka Vuckovic",
    link: "https://maps.app.goo.gl/bGB9NEs9ogkUuctu9",
    text: "\"New, comfortable, friendly hosts ready to help you at any time, the food is excellent! I accommodated a group of 20 people in Villa Kruna a few days ago and absolutely no one has a single complaint! So, an ideal place for two, three, or even larger groups of people (fairs, weddings, various celebrations) who are not from Serbia! I highly recommend this villa!\""
  },
  {
    name: "Tibi Gal",
    link: "https://maps.app.goo.gl/shwG4KASJJVWiASq8",
    text: "\"We were absolutely satisfied!! We stopped here with a large group of friends, everyone had a great time! The service was perfect, the price-quality ratio is also very good, the rooms are clean, richly equipped. We had a great time!\""
  },
  {
    name: "Kamo Flage",
    link: "https://maps.app.goo.gl/jjk65m7TkUFe5Eiw9",
    text: "\"Clean, affordable hotel with secure parking. friendly staff. 5 minutes from the highway, perfect for passing through. We will return next year.\""
  }
];

export default function EnglishHomePage() {
  return (
    <>
      <section className="hero" id="hero-section"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('https://utfs.io/f/7BAyoiVHGCJelvHRDeY43o2rhvXi6WazDQ9IB51uFONndpYx')" }}>
        <div className="hero-content">
          <h1 className="hero-title">Vila Kruna</h1>
          <p className="hero-subtitle">Your peace in Belgrade. Newly furnished, spacious, clean — 15 min from center.</p>
          <div className="hero-buttons">
            <Link href="/en/booking" className="btn btn-primary" id="hero-cta-booking">
              <i className="fa-solid fa-calendar-check"></i>
              Book Now
            </Link>
            <Link href="/en/accommodation" className="btn btn-secondary"
              style={{ borderColor: 'var(--text-primary)', color: 'var(--text-primary)' }} id="hero-cta-accommodation">
              View Accommodation
            </Link>
          </div>
        </div>
      </section>

      <Announcement lang="en" />

      <div className="trust-strip" id="trust-bar">
        <div className="container">
          <div className="trust-flex">
            <div className="trust-item">
              <div className="trust-score">9.0</div>
              <div className="trust-details">
                <h4>Superb</h4>
                <p>326 reviews on Booking.com</p>
              </div>
            </div>
            <div className="trust-item">
              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <div className="trust-details">
                <h4>3-Star Guest House</h4>
                <p>Quality & comfort</p>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-score" style={{ backgroundColor: 'var(--accent)' }}>4.7</div>
              <div className="trust-details">
                <h4>Google Business</h4>
                <p>Excellent guest feedback</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section" id="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Welcome to Vila Kruna</h2>
              <div>
                <p>Vila Kruna is a modernly equipped villa in a peaceful suburban neighborhood, just a fifteen-minute
                  drive from Belgrade city center. Ideal for travelers passing through Belgrade on longer journeys, business
                  guests, couples, or short stays — we offer spacious
                  rooms, warm hospitality, and everything you need for a comfortable rest.</p>
                <p>All rooms are newly furnished, clean, and comfortable. We take pride in spaciousness, modern
                  surroundings, and a friendly atmosphere.</p>
                <p>Free parking and WiFi are included.</p>
              </div>
              <div style={{ marginTop: '32px' }}>
                <Link href="/en/accommodation" className="btn btn-secondary" id="about-learn-more">
                  <span className="font-weight-bold">Explore our accommodation</span>
                </Link>
              </div>
            </div>
            <div className="about-img"
              style={{ backgroundImage: "url('https://utfs.io/f/7BAyoiVHGCJelZLe9FY43o2rhvXi6WazDQ9IB51uFONndpYx')" }}
              id="about-image-card"></div>
          </div>
        </div>
      </section>

      <section className="section alt-bg" id="amenities-section">
        <div className="container">
          <h2 className="section-title text-center">Amenities & Services</h2>
          <p className="section-subtitle text-center">Everything you need for a pleasant and relaxing stay in Belgrade.</p>

          <div className="amenities-grid">
            <div className="amenity-card">
              <span className="amenity-icon"><i className="fa-solid fa-square-parking"></i></span>
              <p>Free parking</p>
            </div>
            <div className="amenity-card">
              <span className="amenity-icon"><i className="fa-solid fa-wifi"></i></span>
              <p>Fast free WiFi</p>
            </div>
            <div className="amenity-card">
              <span className="amenity-icon"><i className="fa-solid fa-paw"></i></span>
              <p>Pets allowed</p>
            </div>
            <div className="amenity-card">
              <span className="amenity-icon"><i className="fa-solid fa-snowflake"></i></span>
              <p>Air conditioning</p>
            </div>
            <div className="amenity-card">
              <span className="amenity-icon"><i className="fa-solid fa-volume-xmark"></i></span>
              <p>Soundproofing</p>
            </div>
            <div className="amenity-card">
              <span className="amenity-icon"><i className="fa-solid fa-clock"></i></span>
              <p>24h Reception</p>
            </div>
            <div className="amenity-card">
              <span className="amenity-icon"><i className="fa-solid fa-tree"></i></span>
              <p>Terrace / Garden</p>
            </div>
            <div className="amenity-card">
              <span className="amenity-icon"><i className="fa-solid fa-ban-smoking"></i></span>
              <p>Non-smoking rooms</p>
            </div>
            <div className="amenity-card">
              <span className="amenity-icon"><i className="fa-solid fa-tv"></i></span>
              <p>TV & multimedia</p>
            </div>
            <div className="amenity-card">
              <span className="amenity-icon"><i className="fa-solid fa-spa"></i></span>
              <p>Sauna</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="rooms-preview-section">
        <div className="container">
          <h2 className="section-title text-center">Rooms & Accommodation</h2>
          <p className="section-subtitle text-center">Choose the accommodation type that best fits your travel needs.</p>

          <div className="rooms-grid">
            <div className="room-card" id="room-card-standard">
              <div className="room-img room-img-standard"
                style={{ backgroundImage: "url('https://utfs.io/f/7BAyoiVHGCJeDWmGdM51KQbfROnw2i9JW8tvksrZUMVBCPly')" }}></div>
              <div className="room-info">
                <h3 className="room-title">Standard Room with Sofa</h3>
                <p className="room-desc">Comfortable 30m² room equipped with two single beds and a cozy sofa bed.</p>
                <div className="room-features">
                  <span className="room-feature"><i className="fa-solid fa-users"></i> 1-3 Pax</span>
                  <span className="room-feature"><i className="fa-solid fa-bed"></i> 2 single + sofa</span>
                  <span className="room-feature"><i className="fa-solid fa-snowflake"></i> AC</span>
                </div>
                <div className="room-footer">
                  <div className="room-price">
                    From <span>2.800 RSD</span>
                  </div>
                  <Link href="/en/accommodation" className="btn btn-primary" id="room-standard-learn-more">Details &rarr;</Link>
                </div>
              </div>
            </div>

            <div className="room-card" id="room-card-economy">
              <div className="room-img room-img-economy"
                style={{ backgroundImage: "url('https://utfs.io/f/7BAyoiVHGCJek2lZAl8hFBCH2ptAzIf1nmqS9eRyl4Xo7Qjd')" }}></div>
              <div className="room-info">
                <h3 className="room-title">Economy Double Room with Double Bed</h3>
                <p className="room-desc">Practical 30m² room with one extra large double bed, ideal for couples and short stays.</p>
                <div className="room-features">
                  <span className="room-feature"><i className="fa-solid fa-users"></i> 1-2 Pax</span>
                  <span className="room-feature"><i className="fa-solid fa-bed"></i> 1 double bed</span>
                  <span className="room-feature"><i className="fa-solid fa-snowflake"></i> AC</span>
                </div>
                <div className="room-footer">
                  <div className="room-price">
                    From <span>3.300 RSD</span>
                  </div>
                  <Link href="/en/accommodation" className="btn btn-primary" id="room-economy-learn-more">Details &rarr;</Link>
                </div>
              </div>
            </div>

            <div className="room-card" id="room-card-deluks">
              <div className="room-img room-img-deluks"
                style={{ backgroundImage: "url('https://utfs.io/f/7BAyoiVHGCJeFPB87c9AMREUBHCxdcopg2rX5AJteL8a9kwZ')" }}>
                <span className="room-badge">Most popular</span>
              </div>
              <div className="room-info">
                <h3 className="room-title">Deluxe Double/Twin Room</h3>
                <p className="room-desc">More spacious room (35m²) equipped with two single beds and a sofa. Great choice for longer stays.</p>
                <div className="room-features">
                  <span className="room-feature"><i className="fa-solid fa-users"></i> 1-3 Pax</span>
                  <span className="room-feature"><i className="fa-solid fa-bed"></i> 2 single + sofa</span>
                  <span className="room-feature"><i className="fa-solid fa-snowflake"></i> AC</span>
                </div>
                <div className="room-footer">
                  <div className="room-price">
                    From <span>3.500 RSD</span>
                  </div>
                  <Link href="/en/accommodation" className="btn btn-primary" id="room-deluks-learn-more">Details &rarr;</Link>
                </div>
              </div>
            </div>

            <div className="room-card" id="room-card-superior">
              <div className="room-img room-img-jacuzzi"
                style={{ backgroundImage: "url('https://utfs.io/f/7BAyoiVHGCJenc84FCkO3WXfeNzPAUHa8t91oGIrqb7YRShF')" }}>
                <span className="room-badge" style={{ backgroundColor: 'var(--accent)' }}>Premium</span>
              </div>
              <div className="room-info">
                <h3 className="room-title">Superior Room with King-size Bed</h3>
                <p className="room-desc">Our most exclusive room of 65m². Includes an extra large double bed, hot tub, sauna, and mini-bar.</p>
                <div className="room-features">
                  <span className="room-feature"><i className="fa-solid fa-users"></i> 1-3 Pax</span>
                  <span className="room-feature"><i className="fa-solid fa-bath"></i> Hot tub & Sauna</span>
                  <span className="room-feature"><i className="fa-solid fa-martini-glass"></i> Mini-bar</span>
                </div>
                <div className="room-footer">
                  <div className="room-price">
                    From <span>5.750 RSD</span>
                  </div>
                  <Link href="/en/accommodation" className="btn btn-primary" id="room-superior-learn-more">Details &rarr;</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center" style={{ marginTop: '48px' }}>
            <Link href="/en/booking" className="btn btn-accent" id="rooms-preview-cta-booking">Book Now &rarr;</Link>
          </div>
        </div>
      </section>

      <section className="reviews-stripe-section" id="reviews-stripe">
        <div className="container">
          <h2 className="section-title text-center">What Our Guests Say</h2>
          <p className="section-subtitle text-center" style={{ color: '#B0B0B0' }}>Reviews pulled from Google. Click to view a specific review.</p>
        </div>

        <ReviewsSlider reviews={enReviews} />
      </section>

      <section className="section" id="location-section">
        <div className="container">
          <div className="location-grid">
            <div className="location-map" id="map-holder">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2835.142612058042!2d20.4251005!3d44.7167009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7300301bef03%3A0x28d880306c3cd2fe!2sVila%20Kruna!5e0!3m2!1ssr!2srs!4v1779915179102!5m2!1ssr!2srs"
                width="100%" height="450" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className="location-details">
              <h3>Where to Find Us</h3>
              <ul className="location-points">
                <li className="location-point">
                  <span className="location-point-icon"><i className="fa-solid fa-map-location-dot"></i></span>
                  <div className="location-point-text">
                    <h4>Address</h4>
                    <p>Svetozara Ivačkovića 4, Rakovica, 11090 Belgrade, Serbia</p>
                  </div>
                </li>
                <li className="location-point">
                  <span className="location-point-icon"><i className="fa-solid fa-car-side"></i></span>
                  <div className="location-point-text">
                    <h4>15 min from city center</h4>
                    <p>Quick and easy access by car from all parts of the city, avoiding downtown congestion.</p>
                  </div>
                </li>
                <li className="location-point">
                  <span className="location-point-icon"><i className="fa-solid fa-road"></i></span>
                  <div className="location-point-text">
                    <h4>Close to Highway</h4>
                    <p>Superbly connected to the Belgrade bypass road and E-75 highway (Rakovica exit).</p>
                  </div>
                </li>
                <li className="location-point">
                  <span className="location-point-icon"><i className="fa-solid fa-tree"></i></span>
                  <div className="location-point-text">
                    <h4>Quiet & Green Neighborhood</h4>
                    <p>Ideal for a perfect night of sleep and rest after a busy day in the capital.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-bottom" id="bottom-booking-banner">
        <div className="container">
          <h2>Ready for Your Stay in Belgrade?</h2>
          <p>Book directly through our website — fast, secure, with no hidden fees and a best-price guarantee.</p>
          <Link href="/en/booking" className="btn btn-accent" id="bottom-cta-booking">
            <i className="fa-solid fa-calendar-days"></i>
            Book Now
          </Link>
        </div>
      </section>
    </>
  );
}
