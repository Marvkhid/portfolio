'use client';

import { useEffect, useRef, useState } from 'react';
import type { BlogPost } from './types';
import BlogCard from './blogcard';

type Props = { posts: BlogPost[] };

export default function BlogGrid({ posts }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  if (posts.length === 0) {
    return (
      <div style={{
        textAlign: 'center',
        padding: '80px 20px',
        color: 'rgba(255,255,255,0.25)',
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 15,
      }}>
        No articles in this category yet.
      </div>
    );
  }

  return (
    <div
      ref={ref}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: 24,
      }}
    >
      {posts.map((post, i) => (
        <BlogCard key={post.id} post={post} index={i} visible={visible} />
      ))}
    </div>
  );
}