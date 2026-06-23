'use client';
import { useState, useEffect } from 'react';
import { sendGTMEvent } from '@next/third-parties/google';

interface AnnouncementData {
  enabled: boolean;
  title_sr?: string;
  title_en?: string;
  body_sr?: string;
  body_en?: string;
  image?: string;
  link?: string;
  link_text_sr?: string;
  link_text_en?: string;
}

export default function Announcement({ lang }: { lang: 'sr' | 'en' }) {
  const [data, setData] = useState<AnnouncementData | null>(null);

  useEffect(() => {
    fetch('/content/settings/announcement.json')
      .then((r) => r.json())
      .then((d: AnnouncementData) => {
        if (d.enabled) setData(d);
      })
      .catch(() => {
        // Silently fail — announcement is optional
      });
  }, []);

  if (!data) return null;

  const title = lang === 'en' ? data.title_en : data.title_sr;
  const body = lang === 'en' ? data.body_en : data.body_sr;
  if (!title && !body) return null;

  const linkText = lang === 'en'
    ? (data.link_text_en || 'Learn more')
    : (data.link_text_sr || 'Saznaj više');

  return (
    <section className="announcement-section">
      <div className="container">
        <div className="announcement-card">
          {data.image && (
            <div
              className="announcement-img"
              style={{ backgroundImage: `url('/${data.image}')` }}
            />
          )}
          <div className="announcement-content">
            {title && <h3>{title}</h3>}
            {body && <p>{body}</p>}
            {data.link && (
              <a 
                href={data.link} 
                className="btn btn-primary announcement-cta"
                onClick={() => sendGTMEvent({ event: 'select_promotion', promotion_name: 'announcement' })}
              >
                {linkText}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
