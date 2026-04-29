'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { BlogPost } from './types';

const categoryColors: Record<string, string> = {
  AI: '#0284c7',
  'Web Dev': '#047857',
  'Industry Trends': '#b45309',
  Productivity: '#6d28d9',
};

type Props = {
  post: BlogPost;
  index: number;
  visible: boolean;
};

export default function BlogCard({ post, index, visible }: Props) {
  const [hovered, setHovered] = useState(false);
  const accent = categoryColors[post.category] ?? '#0284c7';

  return (
    <a
      href={`/blog/${post.id}`}
      style={{ textDecoration: 'none', display: 'block' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          background: hovered ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.80)',
          border: `1px solid ${hovered ? accent + '66' : 'rgba(14,165,233,0.15)'}`,
          borderRadius: 20,
          overflow: 'hidden',
          cursor: 'pointer',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(28px)',
          transition: `opacity 0.6s ease ${0.05 * index}s, transform 0.6s ease ${0.05 * index}s, background 0.25s, border-color 0.25s, box-shadow 0.25s`,
          boxShadow: hovered
            ? `0 16px 48px rgba(14,165,233,0.18), 0 0 0 1px ${accent}22`
            : '0 4px 20px rgba(14,165,233,0.08)',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Image */}
        <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', flexShrink: 0 }}>
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              objectFit: 'cover',
              transform: hovered ? 'scale(1.07)' : 'scale(1)',
              transition: 'transform 0.65s cubic-bezier(0.25,0.46,0.45,0.94)',
            }}
          />
          {/* Overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(4,10,20,0.55) 0%, transparent 60%)',
          }} />

          {/* Tag badge */}
          {post.tag && (
            <div style={{
              position: 'absolute', top: 12, left: 12,
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 9, fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '4px 10px', borderRadius: 99,
              background: 'rgba(255,255,255,0.92)',
              backdropFilter: 'blur(8px)',
              border: `1px solid ${accent}44`,
              color: accent,
            }}>
              ✦ {post.tag}
            </div>
          )}
        </div>

        {/* Content */}
        <div style={{
          padding: '20px 22px 24px',
          display: 'flex', flexDirection: 'column', gap: 12, flex: 1,
        }}>
          {/* Category + read time */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 10, fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: accent,
            }}>
              {post.category}
            </span>
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 11, color: '#64a0bc',
            }}>
              {post.readTime}
            </span>
          </div>

          {/* Title */}
          <h3 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
            fontWeight: 700, color: '#0c2d48',
            lineHeight: 1.35, margin: 0,
            transition: 'color 0.2s',
          }}>
            {post.title}
          </h3>

          {/* Excerpt */}
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 13, color: '#3d6e8a',
            lineHeight: 1.65, margin: 0,
            flex: 1,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}>
            {post.excerpt}
          </p>

          {/* Thin accent divider */}
          <div style={{
            height: 1,
            background: hovered
              ? `linear-gradient(90deg, ${accent}88, transparent)`
              : 'rgba(14,165,233,0.12)',
            transition: 'background 0.3s ease',
          }} />

          {/* Author + date */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{
                width: 26, height: 26, borderRadius: '50%',
                background: `linear-gradient(135deg, ${accent}, ${accent}99)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 11, fontWeight: 700, color: '#fff',
                fontFamily: "'DM Sans', sans-serif",
                flexShrink: 0,
              }}>
                M
              </div>
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 12, fontWeight: 600,
                color: '#2d6a8f',
              }}>
                {post.date}
              </span>
            </div>

            {/* Read more arrow */}
            <span style={{
              fontSize: 14,
              color: accent,
              opacity: hovered ? 1 : 0,
              transform: hovered ? 'translateX(0)' : 'translateX(-6px)',
              transition: 'opacity 0.25s ease, transform 0.25s ease',
            }}>
              →
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}