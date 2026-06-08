import type { Metadata } from 'next';
import Link from 'next/link';
import Gallery from '../../components/Gallery';

export const metadata: Metadata = {
  title: 'Photo Gallery — Vila Kruna Belgrade',
  description: 'Browse Vila Kruna photo gallery. High-resolution images of the exterior, modern rooms, and stylish bathrooms.',
};

export default function GalleryPage() {
  return (
    <>
      <section className="page-header" id="gallery-header">
        <div className="container">
          <h1>Photo Gallery</h1>
          <p>Take a virtual tour of our property through photos and feel the warm atmosphere of Vila Kruna.</p>
        </div>
      </section>

      <section className="section" id="gallery-section">
        <Gallery lang="en" />

        <div className="container text-center" style={{ marginTop: '50px' }}>
          <Link href="/en/booking" className="btn btn-primary" id="gallery-cta-booking">
            <i className="fa-solid fa-calendar-check"></i>
            <span>Check Available Dates</span>
          </Link>
        </div>
      </section>
    </>
  );
}
