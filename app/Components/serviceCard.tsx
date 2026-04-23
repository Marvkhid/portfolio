'use client';

import Image from 'next/image';
import { useState } from 'react';
import type  {Service } from '../services/types';
import { useInView } from '../hooks/useInView';
import AccordionItem from './accordionItem';

export default function ServiceCard({ service, index }: { service: Service; index: number }) {
  const { ref, visible } = useInView(0.12);
  const [imgHovered, setImgHovered] = useState(false);

  return (
    <div
      ref={ref}
      style={{
        background: 'rgba(255,255,255,0.82)',
        backdropFilter: 'blur(14px)',
        border: '1.5px solid rgba(14,165,197,0.18)',
        borderRadius: 24,
        padding: '24px 22px',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 8px 32px rgba(14,165,197,0.08)',
        transition: 'transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s, opacity 0.7s',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : `translateY(${30 + index * 5}px)`,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = 'translateY(-6px) scale(1.012)';
        el.style.boxShadow = '0 22px 55px rgba(14,165,197,0.16)';
        el.style.borderColor = 'rgba(14,165,197,0.38)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = 'translateY(0) scale(1)';
        el.style.boxShadow = '0 8px 32px rgba(14,165,197,0.08)';
        el.style.borderColor = 'rgba(14,165,197,0.18)';
      }}
    >
      {/* Tag pill */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        background: 'rgba(56,189,248,0.1)', border: '1px solid rgba(14,165,197,0.22)',
        borderRadius: 50, padding: '5px 12px', marginBottom: 14, alignSelf: 'flex-start',
      }}>
        <span style={{ fontSize: 11 }}>{service.tagIcon}</span>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, fontWeight: 700, color: '#0ea5c5', letterSpacing: 0.5, textTransform: 'uppercase' }}>
          {service.tag}
        </span>
      </div>

      {/* Image */}
      <div
        style={{
          width: '100%', height: 150, borderRadius: 14, marginBottom: 14,
          overflow: 'hidden', cursor: 'pointer', position: 'relative',
        }}
        onMouseEnter={() => setImgHovered(true)}
        onMouseLeave={() => setImgHovered(false)}
      >
        <Image
          src={service.image}
          alt={`${service.title1} ${service.title2}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 33vw"
          style={{
            objectFit: 'cover',
            transition: 'transform 0.35s cubic-bezier(0.22,1,0.36,1), border-radius 0.35s',
            transform: imgHovered ? 'scale(1.07)' : 'scale(1)',
            borderRadius: imgHovered ? 18 : 14,
          }}
        />
        {/* Overlay label */}
        <div style={{
          position: 'absolute', bottom: 10, left: 10,
          background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(8px)',
          borderRadius: 8, padding: '4px 10px', pointerEvents: 'none', zIndex: 1,
        }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: '#0c4a6e' }}>{service.title1} </span>
          <span style={{ fontFamily: "'Pacifico', cursive", fontSize: 13, color: '#0ea5c5' }}>{service.title2}</span>
        </div>
      </div>

      {/* Description */}
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: '#0369a1', lineHeight: 1.65, margin: '0 0 14px', opacity: 0.85 }}>
        {service.description}
      </p>

      {/* Accordions */}
      <div>
        {service.faqs.map((faq, fi) => (
          <AccordionItem key={fi} faq={faq} />
        ))}
      </div>
    </div>
  );
}