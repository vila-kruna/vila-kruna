import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Accommodation for Groups and Families in Belgrade | Vila Kruna',
  description: 'Looking for accommodation for a family or group of friends in Belgrade? Vila Kruna offers spacious rooms, capacities up to 20+ guests, and free parking.',
  alternates: {
    canonical: '/en/groups-and-families',
  },
  openGraph: {
    title: 'Accommodation for Groups and Families in Belgrade | Vila Kruna',
    description: 'Spacious and comfortable rooms for families and larger groups in Belgrade. Free secure parking for cars and vans. Contact us for group rates.',
    url: '/en/groups-and-families',
  },
};

export default function GroupsAndFamiliesPage() {
  return (
    <>
      <section className="page-header" id="groups-families-header">
        <div className="container">
          <h1>Accommodation for Groups & Families in Belgrade — Vila Kruna</h1>
          <p>Comfortable, spacious, and connected rooms ideal for family trips and group visits to Belgrade.</p>
        </div>
      </section>

      <section className="section" id="groups-families-content">
        <div className="container">
          <div className="about-grid" style={{ marginBottom: '60px' }}>
            <div className="about-text">
              <h2 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '20px' }}>
                Travel Together, in Complete Comfort
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '15px' }}>
                Traveling with family or in a group requires good organization and accommodation that can provide comfort for everyone. At Vila Kruna, we offer spacious rooms ranging from 30m² to 65m² that are perfect for multiple guests.
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '25px' }}>
                Our rooms are equipped with comfortable double beds and additional sofa beds, allowing for flexible sleeping arrangements. The entire property can accommodate larger groups (fairs, weddings, celebrations, sports events, tourist groups) with secure parking for all vehicles.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-users" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Capacity up to 20+ guests</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-bed" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Flexible bed options</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-square-parking" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Parking for vans & minibuses</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-percent" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Group discounts</span>
                </div>
              </div>
            </div>

            <div
              className="about-img"
              style={{
                backgroundImage: "url('https://utfs.io/f/7BAyoiVHGCJetedZrS3gEFV8uPekhloUQDIBTXZRYH4riAm2')",
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-lg)'
              }}
            ></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '50px' }}>
            <div style={{ background: 'var(--white)', padding: '30px', borderRadius: 'var(--border-radius)', border: '1px solid var(--border-color)' }}>
              <h3 style={{ color: 'var(--primary)', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fa-solid fa-baby-carriage"></i> For Families
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Our Deluxe and Superior rooms offer plenty of space for parents and children. With free high-speed internet, cable TV, and a quiet environment free from traffic noise, your family will feel right at home. Our location is also ideal for quickly reaching all parts of the city.
              </p>
            </div>

            <div style={{ background: 'var(--white)', padding: '30px', borderRadius: 'var(--border-radius)', border: '1px solid var(--border-color)' }}>
              <h3 style={{ color: 'var(--primary)', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fa-solid fa-people-group"></i> For Organized Groups
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Whether you are arranging accommodation for wedding guests, sports teams, tour groups, or corporate stays, Vila Kruna provides an outstanding price-to-quality ratio. Our large private parking lot can accommodate vans, minibuses, and multiple cars safely under video surveillance.
              </p>
            </div>
          </div>

          <div className="price-note-box" style={{ marginBottom: '40px' }}>
            <p style={{ textAlign: 'center' }}>
              <i className="fa-solid fa-circle-info" style={{ color: 'var(--accent)', marginRight: '8px', fontSize: '1.1rem' }}></i>
              <strong>Planning a group stay?</strong> Contact us directly for customized rates, discounts, and terms tailored to your specific requirements and length of stay.
            </p>
          </div>

          <div className="text-center">
            <Link href="/en/booking" className="btn btn-primary" style={{ padding: '16px 36px' }}>
              <i className="fa-solid fa-envelope" style={{ marginRight: '8px' }}></i> Send a Group Inquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
