import type { Metadata } from 'next';
import Link from 'next/link';
import Gallery from '../../components/Gallery';

export const metadata: Metadata = {
  title: 'Galerija slika — Vila Kruna Beograd',
  description: 'Pogledajte slike Vile Kruna u Beogradu. Slike eksterijera, moderno opremljenih soba i luksuznih kupatila.',
};

export default function GalerijaPage() {
  return (
    <>
      <section className="page-header" id="gallery-header">
        <div className="container">
          <h1>Galerija Fotografija</h1>
          <p>Zavirite u naš smeštaj kroz fotografije i osetite toplu atmosferu Vile Kruna.</p>
        </div>
      </section>

      <section className="section" id="gallery-section">
        <Gallery lang="sr" />

        <div className="container text-center" style={{ marginTop: '50px' }}>
          <Link href="/rezervacija" className="btn btn-primary" id="gallery-cta-booking">
            <i className="fa-solid fa-calendar-check"></i>
            <span>Pogledaj slobodne termine</span>
          </Link>
        </div>
      </section>
    </>
  );
}
