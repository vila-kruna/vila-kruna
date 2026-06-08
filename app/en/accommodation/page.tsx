'use client';

import React, { useState } from 'react';

import Link from 'next/link';

function RoomDetailCard({
  id, title, metaTags, description, specs, price, mainImage, thumbnails, bgData
}: {
  id: string, title: string, metaTags: React.ReactNode, description: string, specs: React.ReactNode, price: string, mainImage: string, thumbnails: string[], bgData: string
}) {
  const [activeImg, setActiveImg] = useState(mainImage);

  return (
    <div className="room-detail-card" id={id}>
      <div className="room-gallery-wrapper">
        <div className="room-main-img"
          style={{ backgroundImage: `url('${activeImg}')` }}></div>
        <div className="room-thumbnails">
          {thumbnails.map((thumb, idx) => (
            <div key={idx} className={`room-thumb ${activeImg === thumb ? 'active' : ''}`}
              style={{ backgroundImage: `url('${thumb}')` }}
              onClick={() => setActiveImg(thumb)}></div>
          ))}
        </div>
      </div>
      <div className="room-details-side">
        <div>
          <div className="room-meta-tags">
            {metaTags}
          </div>
          <h2 className="room-title-large">{title}</h2>
          <p className="room-long-desc">{description}</p>
          <div className="room-specs-list">
            {specs}
          </div>
        </div>
        <div className="room-booking-panel">
          <div className="room-price">
            <span>{price}</span>
          </div>
          <Link href="/en/booking" className="btn btn-primary">Book Now &rarr;</Link>
        </div>
      </div>
    </div>
  );
}

export default function AccommodationPage() {
  return (
    <>
      <section className="page-header" id="accommodation-header">
        <div className="container">
          <h1>Our Accommodation</h1>
          <p>Discover our spacious rooms designed for your maximum comfort.</p>
        </div>
      </section>

      <section className="section" id="accommodation-list-section">
        <div className="container">
          
          <RoomDetailCard
            id="room-detail-superior"
            bgData="https://utfs.io/f/7BAyoiVHGCJenc84FCkO3WXfeNzPAUHa8t91oGIrqb7YRShF"
            mainImage="https://utfs.io/f/7BAyoiVHGCJenc84FCkO3WXfeNzPAUHa8t91oGIrqb7YRShF"
            thumbnails={[
              "https://utfs.io/f/7BAyoiVHGCJenc84FCkO3WXfeNzPAUHa8t91oGIrqb7YRShF",
              "https://utfs.io/f/7BAyoiVHGCJe28vDdJsjWxN9zdEUKa1O4mc8He07DiboJvLk",
              "https://utfs.io/f/7BAyoiVHGCJeAHoBZb3Ee2cMNEHvPDR0mzldWLfVIotjhbaY",
              "https://utfs.io/f/7BAyoiVHGCJeCt235AnJqLhaVXvwsKWTQ24RuMo5NZF79DUf"
            ]}
            title="Superior Room with King-size Bed"
            description="Our most luxurious 65m² unit created for true enjoyment. It features an extra-large double bed and a comfortable pull-out sofa. Relax with a private sauna, hot tub, and mini-bar included in this unique accommodation."
            price="From 5.750 RSD"
            metaTags={
              <>
                <span className="room-meta-tag"><i className="fa-solid fa-crown"></i> &nbsp;Premium</span>
                <span className="room-meta-tag"><i className="fa-solid fa-users"></i> &nbsp;1-3 Guests</span>
                <span className="room-meta-tag"><i className="fa-solid fa-hot-tub-person"></i> &nbsp;Sauna & Hot Tub</span>
              </>
            }
            specs={
              <>
                <div className="room-spec-item"><i className="fa-solid fa-expand"></i> <span>65 m²</span></div>
                <div className="room-spec-item"><i className="fa-solid fa-snowflake"></i> <span>Air conditioning</span></div>
                <div className="room-spec-item"><i className="fa-solid fa-hot-tub-person"></i> <span>Hot tub</span></div>
                <div className="room-spec-item"><i className="fa-solid fa-fire"></i> <span>Sauna</span></div>
                <div className="room-spec-item"><i className="fa-solid fa-martini-glass"></i> <span>Mini-bar</span></div>
                <div className="room-spec-item"><i className="fa-solid fa-bath"></i> <span>Ensuite Bath</span></div>
                <div className="room-spec-item"><i className="fa-solid fa-tv"></i> <span>Flat-screen TV</span></div>
                <div className="room-spec-item"><i className="fa-solid fa-wifi"></i> <span>Free WiFi</span></div>
              </>
            }
          />

          <RoomDetailCard
            id="room-detail-deluxe"
            bgData="https://utfs.io/f/7BAyoiVHGCJeFPB87c9AMREUBHCxdcopg2rX5AJteL8a9kwZ"
            mainImage="https://utfs.io/f/7BAyoiVHGCJeFPB87c9AMREUBHCxdcopg2rX5AJteL8a9kwZ"
            thumbnails={[
              "https://utfs.io/f/7BAyoiVHGCJeFPB87c9AMREUBHCxdcopg2rX5AJteL8a9kwZ",
              "https://utfs.io/f/7BAyoiVHGCJeiVuWtGhre7CqBzTYIkpGSxyQ0f6Pu24NvgFZ",
              "https://utfs.io/f/7BAyoiVHGCJetedZrS3gEFV8uPekhloUQDIBTXZRYH4riAm2",
              "https://utfs.io/f/7BAyoiVHGCJePomEg5Hx8IiVXgY2mu5rspelTc6EkNGOdya1"
            ]}
            title="Deluxe Double/Twin Room"
            description="The more spacious 35m² deluxe room is perfect for guests who like more space. It is equipped with a double bed and a comfortable pull-out sofa."
            price="From 3.500 RSD"
            metaTags={
              <>
                <span className="room-meta-tag"><i className="fa-solid fa-bed"></i> &nbsp;Deluxe</span>
                <span className="room-meta-tag"><i className="fa-solid fa-users"></i> &nbsp;1-3 Guests</span>
                <span className="room-meta-tag"><i className="fa-solid fa-square-parking"></i> &nbsp;Free Parking</span>
              </>
            }
            specs={
              <>
                <div className="room-spec-item"><i className="fa-solid fa-expand"></i> <span>35 m²</span></div>
                <div className="room-spec-item"><i className="fa-solid fa-snowflake"></i> <span>Air conditioning</span></div>
                <div className="room-spec-item"><i className="fa-solid fa-bath"></i> <span>Ensuite Bath</span></div>
                <div className="room-spec-item"><i className="fa-solid fa-tv"></i> <span>Flat-screen TV</span></div>
                <div className="room-spec-item"><i className="fa-solid fa-volume-xmark"></i> <span>Soundproofing</span></div>
                <div className="room-spec-item"><i className="fa-solid fa-wifi"></i> <span>Free WiFi</span></div>
              </>
            }
          />

          <RoomDetailCard
            id="room-detail-economy"
            bgData="https://utfs.io/f/7BAyoiVHGCJek2lZAl8hFBCH2ptAzIf1nmqS9eRyl4Xo7Qjd"
            mainImage="https://utfs.io/f/7BAyoiVHGCJek2lZAl8hFBCH2ptAzIf1nmqS9eRyl4Xo7Qjd"
            thumbnails={[
              "https://utfs.io/f/7BAyoiVHGCJek2lZAl8hFBCH2ptAzIf1nmqS9eRyl4Xo7Qjd",
              "https://utfs.io/f/7BAyoiVHGCJe0RzCesuWe7NcOKCQqHpFrEjSG4mLx8iAdMR5",
              "https://utfs.io/f/7BAyoiVHGCJeEec9h5rPcXMmaOUj8s7kl0rSzFKd5uGAP3hZ",
              "https://utfs.io/f/7BAyoiVHGCJeDWR0zaI1KQbfROnw2i9JW8tvksrZUMVBCPly"
            ]}
            title="Economy Double Room"
            description="Our 30m² economy room offers excellent comfort at an affordable price. It features one extra-large double bed and is ideal for couples and short city stays."
            price="From 3.300 RSD"
            metaTags={
              <>
                <span className="room-meta-tag"><i className="fa-solid fa-bed"></i> &nbsp;Room</span>
                <span className="room-meta-tag"><i className="fa-solid fa-users"></i> &nbsp;1-2 Guests</span>
                <span className="room-meta-tag"><i className="fa-solid fa-square-parking"></i> &nbsp;Free Parking</span>
              </>
            }
            specs={
              <>
                <div className="room-spec-item"><i className="fa-solid fa-expand"></i> <span>30 m²</span></div>
                <div className="room-spec-item"><i className="fa-solid fa-snowflake"></i> <span>Air conditioning</span></div>
                <div className="room-spec-item"><i className="fa-solid fa-bath"></i> <span>Ensuite Bath</span></div>
                <div className="room-spec-item"><i className="fa-solid fa-tv"></i> <span>Flat-screen TV</span></div>
                <div className="room-spec-item"><i className="fa-solid fa-volume-xmark"></i> <span>Soundproofing</span></div>
                <div className="room-spec-item"><i className="fa-solid fa-wifi"></i> <span>Free WiFi</span></div>
              </>
            }
          />

          <RoomDetailCard
            id="room-detail-standard"
            bgData="https://utfs.io/f/7BAyoiVHGCJeDWmGdM51KQbfROnw2i9JW8tvksrZUMVBCPly"
            mainImage="https://utfs.io/f/7BAyoiVHGCJeDWmGdM51KQbfROnw2i9JW8tvksrZUMVBCPly"
            thumbnails={[
              "https://utfs.io/f/7BAyoiVHGCJeDWmGdM51KQbfROnw2i9JW8tvksrZUMVBCPly",
              "https://utfs.io/f/7BAyoiVHGCJeJc20Y0ZDNoA42WU9F7v0bmGizdBhfsLQYn1R",
              "https://utfs.io/f/7BAyoiVHGCJeliRlQTY43o2rhvXi6WazDQ9IB51uFONndpYx",
              "https://utfs.io/f/7BAyoiVHGCJe20uWLKsjWxN9zdEUKa1O4mc8He07DiboJvLk"
            ]}
            title="Standard Room with Sofa"
            description="This 30m² room is equipped with two comfortable single beds and an additional pull-out sofa. Located on a higher floor, it provides a quiet atmosphere and is equipped with all necessary amenities for a pleasant stay."
            price="From 2.800 RSD"
            metaTags={
              <>
                <span className="room-meta-tag"><i className="fa-solid fa-bed"></i> &nbsp;Room</span>
                <span className="room-meta-tag"><i className="fa-solid fa-users"></i> &nbsp;1-3 Guests</span>
                <span className="room-meta-tag"><i className="fa-solid fa-square-parking"></i> &nbsp;Free Parking</span>
              </>
            }
            specs={
              <>
                <div className="room-spec-item"><i className="fa-solid fa-expand"></i> <span>30 m²</span></div>
                <div className="room-spec-item"><i className="fa-solid fa-snowflake"></i> <span>Air conditioning</span></div>
                <div className="room-spec-item"><i className="fa-solid fa-bath"></i> <span>Ensuite Bath</span></div>
                <div className="room-spec-item"><i className="fa-solid fa-tv"></i> <span>Flat-screen TV</span></div>
                <div className="room-spec-item"><i className="fa-solid fa-volume-xmark"></i> <span>Soundproofing</span></div>
                <div className="room-spec-item"><i className="fa-solid fa-wifi"></i> <span>Free WiFi</span></div>
              </>
            }
          />

        </div>
      </section>
    </>
  );
}
