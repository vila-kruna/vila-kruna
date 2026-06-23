'use client';

import { useEffect, useRef } from 'react';
import { sendGAEvent } from '@next/third-parties/google';
interface Review {
  name: string;
  text: string;
  link: string;
}

export default function ReviewsSlider({ reviews }: { reviews: Review[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  // Clone review cards for seamless infinite scrolling
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Remove any existing clones first (in case of re-render)
    const originals = Array.from(track.children).filter(
      (el) => !el.hasAttribute('data-clone')
    );

    // Remove old clones
    Array.from(track.children)
      .filter((el) => el.hasAttribute('data-clone'))
      .forEach((el) => el.remove());

    // Clone all original items
    originals.forEach((review) => {
      const clone = review.cloneNode(true) as HTMLElement;
      clone.setAttribute('data-clone', 'true');
      track.appendChild(clone);
    });
  }, [reviews]);

  return (
    <div className="reviews-container">
      <div className="reviews-track" id="reviews-slider-track" ref={trackRef}>
        {reviews.map((review, idx) => (
          <a
            key={idx}
            href={review.link}
            target="_blank"
            rel="noopener noreferrer"
            className="review-card"
            style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
            onClick={() => sendGAEvent({ event: 'engagement', action: 'click_review' })}
          >
            <div className="stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <p className="review-text">{review.text}</p>
            <div className="reviewer-info" style={{ marginTop: 'auto' }}>
              <span className="reviewer-name">{review.name}</span>
              <span className="reviewer-source">
                <i className="fa-brands fa-google" style={{ color: '#EA4335' }}></i> Google
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
