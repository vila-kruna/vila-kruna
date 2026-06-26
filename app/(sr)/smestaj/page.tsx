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
          <Link href="/rezervacija" className="btn btn-primary">Rezerviši smeštaj &rarr;</Link>
        </div>
      </div>
    </div>
  );
}

export default function SmestajPage() {
  return (
    <>
      <section className="page-header" id="accommodation-header">
        <div className="container">
          <h1>Smeštaj</h1>
          <p>Upoznajte se sa našim prostranim sobama opremljenim za Vaš maksimalan komfor.</p>
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
            title="Superior Soba s King-sajz Krevetom"
            description="Naša najraskošnija jedinica od 65m² kreirana za pravo uživanje. Sadrži jedan ekstra veliki bračni krevet i udoban kauč na razvlačenje. Opustite se uz privatnu saunu, hidromasažnu kadu i mini-bar koji su deo ovog jedinstvenog smeštaja."
            price="Od 5.750 RSD"
            metaTags={
              <>
                <span className="room-meta-tag"><i className="fa-solid fa-crown"></i> &nbsp;Premium</span>
                <span className="room-meta-tag"><i className="fa-solid fa-users"></i> &nbsp;1-3 Osobe</span>
                <span className="room-meta-tag"><i className="fa-solid fa-hot-tub-person"></i> &nbsp;Sauna & Đakuzi</span>
              </>
            }
            specs={
              <>
                <div className="room-spec-item"><i className="fa-solid fa-expand"></i> <span>65 m²</span></div>
                <div className="room-spec-item"><i className="fa-solid fa-snowflake"></i> <span>Klima uređaj</span></div>
                <div className="room-spec-item"><i className="fa-solid fa-hot-tub-person"></i> <span>Hidromasažna kada</span></div>
                <div className="room-spec-item"><i className="fa-solid fa-fire"></i> <span>Sauna</span></div>
                <div className="room-spec-item"><i className="fa-solid fa-martini-glass"></i> <span>Mini-bar</span></div>
                <div className="room-spec-item"><i className="fa-solid fa-bath"></i> <span>Kupatilo u jedinici</span></div>
                <div className="room-spec-item"><i className="fa-solid fa-tv"></i> <span>Flat-screen TV</span></div>
                <div className="room-spec-item"><i className="fa-solid fa-wifi"></i> <span>Besplatan WiFi</span></div>
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
            title="Deluks Dvokrevetna Soba"
            description="Prostranija deluks soba od 35m² savršena je za goste koji vole veće prostranstvo. Opremljena je sa bračnim krevetom i udobnim kaučem na razvlačenje."
            price="Od 3.500 RSD"
            metaTags={
              <>
                <span className="room-meta-tag"><i className="fa-solid fa-bed"></i> &nbsp;Deluks</span>
                <span className="room-meta-tag"><i className="fa-solid fa-users"></i> &nbsp;1-3 Osobe</span>
                <span className="room-meta-tag"><i className="fa-solid fa-square-parking"></i> &nbsp;Besplatan parking</span>
              </>
            }
            specs={
              <>
                <div className="room-spec-item"><i className="fa-solid fa-expand"></i> <span>35 m²</span></div>
                <div className="room-spec-item"><i className="fa-solid fa-snowflake"></i> <span>Klima uređaj</span></div>
                <div className="room-spec-item"><i className="fa-solid fa-bath"></i> <span>Kupatilo u jedinici</span></div>
                <div className="room-spec-item"><i className="fa-solid fa-tv"></i> <span>Flat-screen TV</span></div>
                <div className="room-spec-item"><i className="fa-solid fa-volume-xmark"></i> <span>Zvučna izolacija</span></div>
                <div className="room-spec-item"><i className="fa-solid fa-wifi"></i> <span>Besplatan WiFi</span></div>
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
            title="Economy Dvokrevetna Soba"
            description="Naša economy soba od 30m² pruža odličan komfor po pristupačnoj ceni. Sadrži jedan ekstra veliki bračni krevet i idealna je za parove i kraće boravke u gradu."
            price="Od 3.300 RSD"
            metaTags={
              <>
                <span className="room-meta-tag"><i className="fa-solid fa-bed"></i> &nbsp;Soba</span>
                <span className="room-meta-tag"><i className="fa-solid fa-users"></i> &nbsp;1-2 Osobe</span>
                <span className="room-meta-tag"><i className="fa-solid fa-square-parking"></i> &nbsp;Besplatan parking</span>
              </>
            }
            specs={
              <>
                <div className="room-spec-item"><i className="fa-solid fa-expand"></i> <span>30 m²</span></div>
                <div className="room-spec-item"><i className="fa-solid fa-snowflake"></i> <span>Klima uređaj</span></div>
                <div className="room-spec-item"><i className="fa-solid fa-bath"></i> <span>Kupatilo u jedinici</span></div>
                <div className="room-spec-item"><i className="fa-solid fa-tv"></i> <span>Flat-screen TV</span></div>
                <div className="room-spec-item"><i className="fa-solid fa-volume-xmark"></i> <span>Zvučna izolacija</span></div>
                <div className="room-spec-item"><i className="fa-solid fa-wifi"></i> <span>Besplatan WiFi</span></div>
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
            title="Standardna Soba sa Sofom"
            description="Ova soba površine 30m² opremljena je sa dva udobna kreveta za jednu osobu i dodatnim kaučem na razvlačenje. Soba se nalazi na višem spratu, pruža mir i opremljena je svim potrebnim sadržajima za prijatan boravak."
            price="Od 2.800 RSD"
            metaTags={
              <>
                <span className="room-meta-tag"><i className="fa-solid fa-bed"></i> &nbsp;Soba</span>
                <span className="room-meta-tag"><i className="fa-solid fa-users"></i> &nbsp;1-3 Osobe</span>
                <span className="room-meta-tag"><i className="fa-solid fa-square-parking"></i> &nbsp;Besplatan parking</span>
              </>
            }
            specs={
              <>
                <div className="room-spec-item"><i className="fa-solid fa-expand"></i> <span>30 m²</span></div>
                <div className="room-spec-item"><i className="fa-solid fa-snowflake"></i> <span>Klima uređaj</span></div>
                <div className="room-spec-item"><i className="fa-solid fa-bath"></i> <span>Kupatilo u jedinici</span></div>
                <div className="room-spec-item"><i className="fa-solid fa-tv"></i> <span>Flat-screen TV</span></div>
                <div className="room-spec-item"><i className="fa-solid fa-volume-xmark"></i> <span>Zvučna izolacija</span></div>
                <div className="room-spec-item"><i className="fa-solid fa-wifi"></i> <span>Besplatan WiFi</span></div>
              </>
            }
          />

        </div>
      </section>
    </>
  );
}
