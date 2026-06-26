'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface RoomDetailCardProps {
  id: string;
  title: string;
  metaTags: React.ReactNode;
  description: string;
  specs: React.ReactNode;
  price: string;
  mainImage: string;
  thumbnails: string[];
  bgData: string;
  bookingUrl: string;
}

export default function RoomDetailCard({
  id,
  title,
  metaTags,
  description,
  specs,
  price,
  mainImage,
  thumbnails,
  bookingUrl,
}: RoomDetailCardProps) {
  const [activeImg, setActiveImg] = useState(mainImage);

  return (
    <div className="room-detail-card" id={id}>
      <div className="room-gallery-wrapper">
        <div
          className="room-main-img"
          style={{ backgroundImage: `url('${activeImg}')` }}
        ></div>
        <div className="room-thumbnails">
          {thumbnails.map((thumb, idx) => (
            <div
              key={idx}
              className={`room-thumb ${activeImg === thumb ? 'active' : ''}`}
              style={{ backgroundImage: `url('${thumb}')` }}
              onClick={() => setActiveImg(thumb)}
            ></div>
          ))}
        </div>
      </div>
      <div className="room-details-side">
        <div>
          <div className="room-meta-tags">{metaTags}</div>
          <h2 className="room-title-large">{title}</h2>
          <p className="room-long-desc">{description}</p>
          <div className="room-specs-list">{specs}</div>
        </div>
        <div className="room-booking-panel">
          <div className="room-price" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span>{price}</span>
            <Link
              href={bookingUrl.startsWith('/en') ? '/en/pricing' : '/cenovnik'}
              className="room-pricing-link"
            >
              {bookingUrl.startsWith('/en') ? 'View full pricing list' : 'Pogledajte kompletan cenovnik'}
            </Link>
          </div>
          <Link href={bookingUrl} className="btn btn-primary">
            {bookingUrl.startsWith('/en') ? 'Book Now' : 'Rezerviši smeštaj'} &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
