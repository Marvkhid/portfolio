'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import type { Category } from './types';
import { blogPosts } from './blogdata';
import FeaturedPost from './featuredpost';
import BlogGrid from './bloggrid';
import CategoryTabs from './categorytabs';

function useInView(threshold = 0.08) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

export default function BlogSection() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const header = useInView(0.05);
  const featured = useInView(0.05);

  const featuredPost = blogPosts.find((p) => p.featured)!;

  const gridPosts = blogPosts
    .filter((p) => !p.featured)
    .filter((p) =>
      activeCategory === 'All' ? true : p.category === activeCategory
    );

  const trendingPosts = blogPosts.filter((p) => p.trending).slice(0, 3);

  return (
    <>
      <style>{`
        .blog-heading-gradient {
          background: linear-gradient(135deg, #0369a1, #6366f1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-style: italic;
        }
        @media (max-width: 768px) {
          .blog-header-row { flex-direction: column !important; align-items: flex-start !important; }
          .blog-view-all { width: 100% !important; justify-content: center !important; }
          .blog-trending-grid { grid-template-columns: 1fr !important; }
          .blog-tabs-row { flex-direction: column !important; align-items: flex-start !important; }
        }
      `}</style>

      <section
        style={{
          background: 'linear-gradient(160deg, #e8f4fd 0%, #dbeeff 40%, #f0f8ff 80%, #ffffff 100%)',
          padding: 'clamp(60px, 8vw, 100px) clamp(16px, 5%, 80px) clamp(60px, 8vw, 120px)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* ── Atmospheric blobs ── */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div style={{
            position: 'absolute', top: -180, left: '15%',
            width: 'clamp(280px, 40vw, 560px)', height: 'clamp(280px, 40vw, 560px)',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(14,165,233,0.14) 0%, transparent 65%)',
            filter: 'blur(50px)',
          }} />
          <div style={{
            position: 'absolute', bottom: -120, right: '10%',
            width: 'clamp(240px, 35vw, 480px)', height: 'clamp(240px, 35vw, 480px)',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 65%)',
            filter: 'blur(50px)',
          }} />
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage:
              'linear-gradient(rgba(14,165,233,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.05) 1px, transparent 1px)',
            backgroundSize: '52px 52px',
          }} />
        </div>

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>

          {/* ── Section header ── */}
          <div
            ref={header.ref}
            className="blog-header-row"
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 24,
              marginBottom: 'clamp(32px, 5vw, 56px)',
              opacity: header.visible ? 1 : 0,
              transform: header.visible ? 'translateY(0)' : 'translateY(22px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
            }}
          >
            <div style={{ flex: '1 1 300px' }}>
              {/* Eyebrow badge */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'rgba(14,165,233,0.12)',
                border: '1px solid rgba(14,165,233,0.3)',
                borderRadius: 50, padding: '5px 16px', marginBottom: 20,
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#0ea5e9', display: 'inline-block' }} />
                <span style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 11,
                  fontWeight: 700, color: '#0369a1',
                  letterSpacing: '0.14em', textTransform: 'uppercase',
                }}>
                  Blog Page still under construction
                </span>
              </div>

              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.8rem, 4.5vw, 3.4rem)',
                fontWeight: 700, color: '#0c2d48',
                lineHeight: 1.1, letterSpacing: '-0.02em',
                margin: 0,
              }}>
                Thoughts on{' '}
                {/* FIX: use className instead of inline background+backgroundClip to avoid React shorthand conflict */}
                <span className="blog-heading-gradient">
                  AI &amp; the Web
                </span>
              </h2>

              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 'clamp(13px, 2vw, 15px)',
                color: '#2d6a8f',
                lineHeight: 1.7, marginTop: 14, maxWidth: 480,
              }}>
                Honest takes on frontend engineering, AI tooling, and the ever-shifting
                landscape of building for the web.
              </p>
            </div>

            {/* View all link */}
            <Link
              href="/blog"
              className="blog-view-all"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13, fontWeight: 700,
                color: '#0369a1',
                textDecoration: 'none',
                border: '1px solid rgba(14,165,233,0.35)',
                background: 'rgba(14,165,233,0.08)',
                padding: '10px 20px', borderRadius: 12,
                transition: 'all 0.22s ease',
                flexShrink: 0,
                alignSelf: 'flex-start',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = '#fff';
                el.style.borderColor = '#0ea5e9';
                el.style.background = '#0ea5e9';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = '#0369a1';
                el.style.borderColor = 'rgba(14,165,233,0.35)';
                el.style.background = 'rgba(14,165,233,0.08)';
              }}
            >
              View all articles
              <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* ── Featured post ── */}
          <div
            ref={featured.ref}
            style={{
              marginBottom: 'clamp(40px, 6vw, 64px)',
              opacity: featured.visible ? 1 : 0,
              transform: featured.visible ? 'translateY(0)' : 'translateY(28px)',
              transition: 'opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <div style={{ height: 1, width: 32, background: 'rgba(14,165,233,0.3)' }} />
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 10, fontWeight: 700,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                color: '#5b9bbf',
              }}>
                Featured
              </span>
            </div>
            <FeaturedPost post={featuredPost} />
          </div>

          {/* ── Trending strip ── */}
          {trendingPosts.length > 0 && (
            <div style={{ marginBottom: 'clamp(40px, 6vw, 64px)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <div style={{ height: 1, width: 32, background: 'rgba(14,165,233,0.3)' }} />
                <span style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 10, fontWeight: 700,
                  letterSpacing: '0.14em', textTransform: 'uppercase',
                  color: '#5b9bbf',
                }}>
                  Trending Now
                </span>
              </div>

              <div
                className="blog-trending-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: 1,
                  background: 'rgba(14,165,233,0.1)',
                  borderRadius: 16,
                  overflow: 'hidden',
                  border: '1px solid rgba(14,165,233,0.18)',
                  boxShadow: '0 4px 24px rgba(14,165,233,0.08)',
                }}
              >
                {trendingPosts.map((post, i) => (
                  <TrendingItem key={post.id} post={post} index={i} />
                ))}
              </div>
            </div>
          )}

          {/* ── Category tabs + grid ── */}
          <div>
            <div
              className="blog-tabs-row"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                flexWrap: 'wrap', gap: 16, marginBottom: 32,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ height: 1, width: 32, background: 'rgba(14,165,233,0.3)' }} />
                <span style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 10, fontWeight: 700,
                  letterSpacing: '0.14em', textTransform: 'uppercase',
                  color: '#5b9bbf',
                }}>
                  All Articles
                </span>
              </div>
              <CategoryTabs active={activeCategory} onChange={setActiveCategory} />
            </div>

            <BlogGrid posts={gridPosts} />
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Trending row item ── */
function TrendingItem({ post, index }: { post: import('./types').BlogPost; index: number }) {
  const [hovered, setHovered] = useState(false);
  const categoryColors: Record<string, string> = {
    AI: '#0369a1',
    'Web Dev': '#047857',
    'Industry Trends': '#b45309',
    Productivity: '#6d28d9',
  };
  const accent = categoryColors[post.category] ?? '#0369a1';

  return (
    <a
      href={`/blog/${post.id}`}
      style={{ textDecoration: 'none' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        padding: 'clamp(14px, 3vw, 20px) clamp(16px, 3vw, 24px)',
        background: hovered ? 'rgba(14,165,233,0.12)' : 'rgba(255,255,255,0.7)',
        display: 'flex', alignItems: 'center', gap: 16,
        transition: 'background 0.22s ease',
        cursor: 'pointer',
      }}>
        <span style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(20px, 4vw, 28px)', fontWeight: 700,
          color: hovered ? accent : 'rgba(14,60,90,0.15)',
          transition: 'color 0.25s ease',
          lineHeight: 1, flexShrink: 0,
          minWidth: 36,
        }}>
          {String(index + 1).padStart(2, '0')}
        </span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 10, fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: accent, display: 'block', marginBottom: 4,
          }}>
            {post.category}
          </span>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(12px, 2vw, 13px)', fontWeight: 600,
            color: hovered ? '#0c2d48' : '#1e4d6b',
            lineHeight: 1.4, margin: 0,
            transition: 'color 0.22s ease',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}>
            {post.title}
          </p>
        </div>
        <span style={{
          color: accent,
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateX(0)' : 'translateX(-6px)',
          transition: 'opacity 0.22s, transform 0.22s',
          fontSize: 16, flexShrink: 0,
        }}>
          →
        </span>
      </div>
    </a>
  );
}