import Link from 'next/link';

export default function PricingPage() {
  return (
    <>
      <section className="page-header" id="pricing-header">
        <div className="container">
          <h1>Our Room Prices</h1>
          <p>Check the rates for all our rooms.</p>
        </div>
      </section>

      <section className="section prices-section" id="pricing-content-section">
        <div className="container">

          <h2 className="section-title text-center">Accommodation Pricing Overview</h2>
          <p className="section-subtitle text-center">Prices are listed per night for the entire accommodation unit depending on guest capacity.</p>

          <div className="price-table-wrapper">
            <table className="price-table" id="pricing-sheet-table">
              <thead>
                <tr>
                  <th>Accommodation Type</th>
                  <th>Max Capacity</th>
                  <th>Price per Night (RSD)</th>
                  <th>Price per Night (EUR)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Standard Room with Sofa</strong></td>
                  <td><i className="fa-solid fa-user-group"></i> &nbsp;1-3 guests</td>
                  <td className="price-val">2.800 – 3.900 RSD</td>
                  <td className="price-val">~23 – 33 EUR</td>
                </tr>
                <tr>
                  <td><strong>Economy Double Room</strong></td>
                  <td><i className="fa-solid fa-user-group"></i> &nbsp;1-2 guests</td>
                  <td className="price-val">3.300 – 4600 RSD</td>
                  <td className="price-val">~28 – 39 EUR</td>
                </tr>
                <tr>
                  <td><strong>Deluxe Double/Twin Room</strong></td>
                  <td><i className="fa-solid fa-user-group"></i> &nbsp;1-3 guests</td>
                  <td className="price-val">3.300 – 4600 RSD</td>
                  <td className="price-val">~28 – 39 EUR</td>
                </tr>
                <tr>
                  <td><strong>Superior Room with King-size Bed</strong></td>
                  <td><i className="fa-solid fa-user-group"></i> &nbsp;1-3 guests</td>
                  <td className="price-val">5.750 – 7750 RSD</td>
                  <td className="price-val">~48 – 65 EUR</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="price-note-box" id="price-alert-box">
            <p>
              <i className="fa-solid fa-circle-info" style={{ color: 'var(--accent)', marginRight: '8px', fontSize: '1.1rem' }}></i>
              <strong>Please Note:</strong> The listed prices are indicative (reference points only). Actual rates may
              fluctuate depending on season, holidays, and total length of stay. For exact real-time prices and
              availability, please visit our booking page.
            </p>
          </div>

          <div className="text-center mt-4">
            <Link href="/en/booking" className="btn btn-primary btn-accent" style={{ padding: '16px 36px' }} id="pricing-cta-booking">
              <i className="fa-solid fa-calendar-check" style={{ marginRight: '12px' }}></i>
              <span>Book your stay at these rates</span>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
