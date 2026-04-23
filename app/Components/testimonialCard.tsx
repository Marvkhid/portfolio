'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { Testimonial } from '../services/types';
import { useInView } from '../hooks/useInView';

export default function TestimonialCard({ t, index }: { t: Testimonial; index: number }) {
  const { ref, visible } = useInView(0.1);
  const [avatarHovered, setAvatarHovered] = useState(false);

  return (
    <div
      ref={ref}
      style={{
        background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(16px)',
        border: '1.5px solid rgba(14,165,197,0.15)', borderRadius: 20,
        padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 16,
        boxShadow: '0 8px 32px rgba(14,165,197,0.08)',
        transition: 'transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s, opacity 0.7s',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transitionDelay: `${index * 0.08}s`,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = 'translateY(-5px)';
        el.style.boxShadow = '0 18px 48px rgba(14,165,197,0.16)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = 'translateY(0)';
        el.style.boxShadow = '0 8px 32px rgba(14,165,197,0.08)';
      }}
    >
      {/* Stars */}
      <div style={{ display: 'flex', gap: 3 }}>
        {[...Array(5)].map((_, i) => (
          <span key={i} style={{ color: '#fbbf24', fontSize: 14 }}>★</span>
        ))}
      </div>

      {/* Quote */}
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: '#0c4a6e', lineHeight: 1.72, margin: 0, flex: 1, opacity: 0.88, fontStyle: 'italic' }}>
        &quot;{t.text}&quot;
      </p>

      {/* Author */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div
          onMouseEnter={() => setAvatarHovered(true)}
          onMouseLeave={() => setAvatarHovered(false)}
          style={{
            width: 48, height: 48, borderRadius: '50%', flexShrink: 0,
            overflow: 'hidden', cursor: 'pointer', position: 'relative',
            border: avatarHovered ? '3px solid white' : '3px solid rgba(14,165,197,0.2)',
            boxShadow: avatarHovered ? '0 4px 18px rgba(14,165,197,0.3)' : '0 4px 12px rgba(0,0,0,0.1)',
            transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
            boxSizing: 'border-box',
            transform: avatarHovered ? 'scale(1.1)' : 'scale(1)',
          }}
        >
          <Image
            src={t.image}
            alt={t.name}
            fill
            sizes="48px"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 14, color: '#0c4a6e' }}>{t.name}</div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: '#0ea5c5', fontWeight: 500 }}>
            {t.role}, {t.company}
          </div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: '#64748b' }}>{t.country}</div>
        </div>
      </div>
    </div>
  );
}