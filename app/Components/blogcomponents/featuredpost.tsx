'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { BlogPost } from './types';

const categoryColors: Record<string, string> = {
  AI: '#0ea5e9',
  'Web Dev': '#10b981',
  'Industry Trends': '#f59e0b',
  Productivity: '#8b5cf6',
};

type Props = { post: BlogPost };

export default function FeaturedPost({ post }: Props) {
  const [hovered, setHovered] = useState(false);
  const accent = categoryColors[post.category] ?? '#0ea5e9';

  return (
    <a
      href={`/blog/${post.id}`}
      style={{ textDecoration: 'none', display: 'block' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          position: 'relative',
          borderRadius: 24,
          overflow: 'hidden',
          aspectRatio: '16/8',
          minHeight: 380,
          cursor: 'pointer',
          boxShadow: hovered
            ? `0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px ${accent}33`
            : '0 16px 48px rgba(0,0,0,0.35)',
          transition: 'box-shadow 0.4s ease',
        }}
      >
        {/* Background image */}
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: 'cover',
            transform: hovered ? 'scale(1.04)' : 'scale(1)',
            transition: 'transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)',
          }}
        />

        {/* Dark overlay gradient */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(4,10,20,0.97) 0%, rgba(4,10,20,0.6) 50%, rgba(4,10,20,0.15) 100%)',
        }} />

        {/* Accent glow on hover */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `radial-gradient(ellipse at 50% 100%, ${accent}18 0%, transparent 65%)`,
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.4s ease',
        }} />

        {/* Content */}
        <div style={{
          position: 'absolute', inset: 0,
          padding: 'clamp(24px, 5%, 48px)',
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
          gap: 16,
        }}>
          {/* Top badges */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 10, fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '5px 12px', borderRadius: 99,
              background: `${accent}22`,
              border: `1px solid ${accent}55`,
              color: accent,
            }}>
              {post.category}
            </span>
            {post.tag && (
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 10, fontWeight: 700,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                padding: '5px 12px', borderRadius: 99,
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'rgba(255,255,255,0.85)',
              }}>
                ✦ {post.tag}
              </span>
            )}
          </div>

          {/* Title */}
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.4rem, 3.5vw, 2.4rem)',
            fontWeight: 700, color: '#fff',
            lineHeight: 1.2, margin: 0,
            maxWidth: 720,
            textShadow: '0 2px 20px rgba(0,0,0,0.5)',
          }}>
            {post.title}
          </h2>

          {/* Excerpt */}
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(13px, 1.5vw, 15px)',
            color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.7, margin: 0,
            maxWidth: 600,
            opacity: hovered ? 1 : 0.7,
            transition: 'opacity 0.3s ease',
          }}>
            {post.excerpt}
          </p>

          {/* Meta row */}
          <div style={{
            display: 'flex', alignItems: 'center',
            gap: 20, flexWrap: 'wrap',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{
                width: 32, height: 32, borderRadius: '50%',
                background: `linear-gradient(135deg, ${accent}, ${accent}88)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 13, fontWeight: 700, color: '#fff',
                fontFamily: "'DM Sans', sans-serif",
              }}>
                M
              </div>
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.8)',
              }}>
                {post.author}
              </span>
            </div>
            <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: 12 }}>·</span>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>
              {post.date}
            </span>
            <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: 12 }}>·</span>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>
              {post.readTime}
            </span>

            {/* CTA */}
            <div style={{
              marginLeft: 'auto',
              display: 'flex', alignItems: 'center', gap: 6,
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13, fontWeight: 700,
              color: accent,
              opacity: hovered ? 1 : 0,
              transform: hovered ? 'translateX(0)' : 'translateX(-8px)',
              transition: 'opacity 0.3s ease, transform 0.3s ease',
            }}>
              Read article
              <span style={{
                transform: hovered ? 'translateX(3px)' : 'translateX(0)',
                transition: 'transform 0.3s ease',
                display: 'inline-block',
              }}>→</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}