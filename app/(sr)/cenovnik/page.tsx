import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cenovnik — Vila Kruna Beograd',
  description: 'Pogledajte cene smeštaja u Vili Kruna. Standardna soba od 2.800 RSD, economy soba od 3.300 RSD, deluks od 3.500 RSD, superior od 5.750 RSD. Najpovoljnije cene u Beogradu.',
  alternates: {
    canonical: '/cenovnik',
  },
  openGraph: {
    title: 'Cenovnik — Vila Kruna Beograd',
    description: 'Pogledajte cene smeštaja u Vili Kruna. Standardna soba od 2.800 RSD, economy soba od 3.300 RSD, deluks od 3.500 RSD, superior od 5.750 RSD.',
    url: '/cenovnik',
  },
};

export default function CenovnikPage() {
  return (
    <>
      <section className="page-header" id="pricing-header">
        <div className="container">
          <h1>Cenovnik smeštaja u Beogradu — Vila Kruna</h1>
          <p>Proverite cene za sve naše sobe.</p>
        </div>
      </section>

      <section className="section prices-section" id="pricing-content-section">
        <div className="container">
          <h2 className="section-title text-center">Pregled Cena Smeštaja</h2>
          <p className="section-subtitle text-center">Cene su formirane po noćenju za celokupnu smeštajnu jedinicu u zavisnosti
            od kapaciteta.</p>

          <div className="price-table-wrapper">
            <table className="price-table" id="pricing-sheet-table">
              <thead>
                <tr>
                  <th>Tip smeštaja</th>
                  <th>Maksimalan Kapacitet</th>
                  <th>Cena po noćenju (RSD)</th>
                  <th>Cena po noćenju (EUR)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Standardna Soba sa Sofom</strong>
                  </td>
                  <td>
                    <i className="fa-solid fa-user-group"></i> &nbsp;1-3 osobe
                  </td>
                  <td className="price-val">2.800 – 3.900 RSD</td>
                  <td className="price-val">~23 – 33 EUR</td>
                </tr>
                <tr>
                  <td>
                    <strong>Economy Dvokrevetna Soba</strong>
                  </td>
                  <td>
                    <i className="fa-solid fa-user-group"></i> &nbsp;1-2 osobe
                  </td>
                  <td className="price-val">3.300 – 4600 RSD</td>
                  <td className="price-val">~28 – 39 EUR</td>
                </tr>
                <tr>
                  <td>
                    <strong>Deluks Dvokrevetna Soba</strong>
                  </td>
                  <td>
                    <i className="fa-solid fa-user-group"></i> &nbsp;1-3 osobe
                  </td>
                  <td className="price-val">3.300 – 4.600 RSD</td>
                  <td className="price-val">~28 – 39 EUR</td>
                </tr>
                <tr>
                  <td>
                    <strong>Superior Soba s King-sajz Krevetom</strong>
                  </td>
                  <td>
                    <i className="fa-solid fa-user-group"></i> &nbsp;1-3 osobe
                  </td>
                  <td className="price-val">5.750 – 7750 RSD</td>
                  <td className="price-val">~48 – 65 EUR</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="price-note-box" id="price-alert-box">
            <p>
              <i className="fa-solid fa-circle-info" style={{ color: 'var(--accent)', marginRight: '8px', fontSize: '1.1rem' }}></i>
              <strong>Napomena:</strong> Navedene cene su informativnog (okvirnog) karaktera. Stvarne cene mogu varirati u
              zavisnosti od sezone, praznika i dužine boravka. Za tačne cene i trenutnu dostupnost u realnom vremenu
              posetite našu stranicu za rezervacije.
            </p>
          </div>

          <div className="text-center mt-4">
            <Link href="/rezervacija" className="btn btn-primary btn-accent" style={{ padding: '16px 36px' }} id="pricing-cta-booking">
              <i className="fa-solid fa-calendar-check" style={{ marginRight: '12px' }}></i>
              <span>Rezerviši smeštaj po ovim cenama</span>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
