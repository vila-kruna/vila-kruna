'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { sendGAEvent } from '@next/third-parties/google';

interface GalleryImage {
  name: string;
  alt: string;
  alt_eng: string;
  category: string;
  path: string;
  small: string;
  medium: string;
  large: string;
}

export default function Gallery({ lang }: { lang: 'sr' | 'en' }) {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [filter, setFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(12);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    fetch('/assets/images.json')
      .then((r) => r.json())
      .then((data) => setImages(data))
      .catch((err) => console.error('Failed to load images:', err));
  }, []);

  const filteredImages = filter === 'all'
    ? images
    : images.filter((img) => img.category === filter);

  const displayedImages = filteredImages.slice(0, visibleCount);

  // Close lightbox on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && lightboxIndex !== null) {
        setLightboxIndex(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  const loadMore = () => setVisibleCount((prev) => prev + 12);

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => ((prev as number) + 1) % filteredImages.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        (prev as number) === 0 ? filteredImages.length - 1 : (prev as number) - 1
      );
    }
  };

  const filterLabels = lang === 'en'
    ? { all: 'All', enterijer: 'Interior', sobe: 'Rooms', kupatilo: 'Bathrooms', sauna: 'Sauna', eksterijer: 'Exterior' }
    : { all: 'Sve', enterijer: 'Enterijer', sobe: 'Sobe', kupatilo: 'Kupatila', sauna: 'Sauna', eksterijer: 'Eksterijer' };

  return (
    <div className="container">
      {/* Filters */}
      <div className="gallery-filters" id="gallery-tabs">
        {Object.entries(filterLabels).map(([key, label]) => (
          <button
            key={key}
            className={`filter-btn ${filter === key ? 'active' : ''}`}
            onClick={() => {
              setFilter(key);
              setVisibleCount(12); // reset count on filter change
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="gallery-grid" id="main-gallery-grid">
        {displayedImages.map((img, idx) => (
          <div
            key={img.name}
            className="gallery-item show"
            onClick={() => {
              setLightboxIndex(idx);
              sendGAEvent({ event: 'engagement', action: 'view_lightbox' });
            }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setLightboxIndex(idx);
                sendGAEvent({ event: 'engagement', action: 'view_lightbox' });
              }
            }}
          >
            <div className="gallery-img-wrapper">
              <img
                src={img.small}
                alt={lang === 'en' ? img.alt_eng : img.alt}
                loading="lazy"
                className="gallery-img"
              />
            </div>
            <div className="gallery-overlay">
              <div className="zoom-icon">
                <i className="fa-solid fa-magnifying-glass-plus"></i>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < filteredImages.length && (
        <div className="text-center" style={{ marginTop: '45px' }}>
          <button className="btn btn-secondary" onClick={loadMore}>
            <i className="fa-solid fa-images" style={{ marginRight: '8px' }}></i>
            <span>{lang === 'en' ? 'View more' : 'Vidi više'}</span>
          </button>
        </div>
      )}

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="lightbox active" onClick={() => setLightboxIndex(null)}>
          <button
            className="lightbox-close"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(null);
            }}
          >
            &times;
          </button>
          <img
            src={filteredImages[lightboxIndex].large}
            alt={lang === 'en' ? filteredImages[lightboxIndex].alt_eng : filteredImages[lightboxIndex].alt}
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()} // Prevent close on click inside image
          />
          <div
            className="lightbox-nav lightbox-prev"
            onClick={prevImage}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </div>
          <div
            className="lightbox-nav lightbox-next"
            onClick={nextImage}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </div>
      )}
    </div>
  );
}
