'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function ConsultationBanner() {
  const [imgHovered, setImgHovered] = useState(false);

  return (
    <section style={{
      background: 'linear-gradient(135deg, #f0feff 0%, #e0f7ff 50%, #f8fdff 100%)',
      padding: '80px 5%',
      borderTop: '1px solid rgba(14,165,197,0.1)',
      borderBottom: '1px solid rgba(14,165,197,0.1)',
    }}>
      <div style={{
        maxWidth: 1000, margin: '0 auto',
        display: 'flex', alignItems: 'center',
        gap: 60, flexWrap: 'wrap', justifyContent: 'center',
      }}>
        {/* Image */}
        <div
          onMouseEnter={() => setImgHovered(true)}
          onMouseLeave={() => setImgHovered(false)}
          style={{
            width: 200, height: 240, flexShrink: 0, cursor: 'pointer',
            borderRadius: imgHovered ? '20px' : '50% 50% 45% 45% / 40% 40% 55% 55%',
            overflow: 'hidden',
            border: imgHovered ? '5px solid white' : '5px solid transparent',
            boxShadow: imgHovered ? '0 24px 60px rgba(14,165,197,0.28)' : '0 20px 50px rgba(14,165,197,0.18)',
            transition: 'all 0.35s cubic-bezier(0.22,1,0.36,1)',
            boxSizing: 'border-box',
            position: 'relative',
          }}
        >
          <Image
            src="/marveldevround.jpg"
            alt="Book a free consultation"
            fill
            sizes="200px"
            style={{
              objectFit: 'cover',
              transform: imgHovered ? 'scale(1.07)' : 'scale(1)',
              transition: 'transform 0.35s cubic-bezier(0.22,1,0.36,1)',
            }}
          />
        </div>

        {/* Text */}
        <div style={{ flex: '1 1 380px', maxWidth: 500 }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(26px, 4vw, 40px)',
            fontWeight: 700, color: '#0c4a6e', margin: '0 0 14px', lineHeight: 1.25,
          }}>
            Not sure which{' '}
            <span style={{ color: '#0ea5c5', fontStyle: 'italic' }}>package is right for you?</span>
          </h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: '#0369a1',
            lineHeight: 1.75, margin: '0 0 28px', opacity: 0.85,
          }}>
            Book a free 15-minute consultation to get clarity and personalised
            recommendations for your brand.
          </p>
          <a
            href="tel:08107387326"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'linear-gradient(135deg, #38bdf8, #0ea5c5)',
              color: '#fff', padding: '14px 30px', borderRadius: 50,
              fontSize: 14, fontWeight: 700, textDecoration: 'none',
              fontFamily: "'DM Sans', sans-serif",
              boxShadow: '0 6px 22px rgba(14,165,197,0.38)',
              transition: 'transform 0.25s, box-shadow 0.25s',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = 'translateY(-3px) scale(1.03)';
              el.style.boxShadow = '0 12px 32px rgba(14,165,197,0.52)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = 'translateY(0) scale(1)';
              el.style.boxShadow = '0 6px 22px rgba(14,165,197,0.38)';
            }}
          >
            Schedule a Meeting
          </a>
        </div>
      </div>
    </section>
  );
}