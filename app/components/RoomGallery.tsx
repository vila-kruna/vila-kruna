'use client';

import React, { useState } from 'react';

export default function RoomGallery({ thumbnails }: { thumbnails: string[] }) {
  const [activeImg, setActiveImg] = useState(thumbnails[0]);

  return (
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
  );
}
