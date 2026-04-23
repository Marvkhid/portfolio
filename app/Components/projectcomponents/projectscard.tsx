'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useScrollReveal } from '@/app/hooks/usescrollreveal';
import type { Project } from '@/app/data/projects';

type Props = {
  project: Project;
  reverse?: boolean;
};

export default function ProjectCard({ project, reverse }: Props) {
  const [hovered, setHovered] = useState(false);
  const { ref, visible } = useScrollReveal();

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
      }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
    >
      {/* Image */}
      <div
        className="relative overflow-hidden rounded-2xl cursor-pointer"
        style={{ aspectRatio: '16/10', order: reverse ? 2 : 1 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Gradient fallback */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} backdrop-blur-sm`}
        />

        {/* Project image */}
        <Image
          src={project.Image}
          alt={project.title}
          fill
          className="object-cover"
          style={{
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
            transition: 'transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            opacity: 0.85,
          }}
          sizes="(max-width: 1024px) 100vw, 50vw"
        />

        {/* Hover glow */}
        <div
          className="absolute inset-0 rounded-2xl transition-all duration-500"
          style={{
            boxShadow: hovered
              ? `inset 0 0 60px ${project.accentColor}22, 0 0 40px ${project.accentColor}18`
              : 'none',
          }}
        />

        {/* Project number watermark */}
        <div
          className="absolute top-4 left-5"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '3.5rem',
            fontWeight: 700,
            color: 'rgba(255,255,255,0.12)',
            lineHeight: 1,
          }}
        >
          {project.id}
        </div>

        {/* Tag pills */}
        <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap">
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-xs font-medium px-3 py-1 rounded-full"
              style={{
                background: 'rgba(255,255,255,0.15)',
                backdropFilter: 'blur(8px)',
                color: 'rgba(255,255,255,0.9)',
                border: '0.5px solid rgba(255,255,255,0.2)',
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Info */}
      <div
        className="flex flex-col gap-4"
        style={{ order: reverse ? 1 : 2 }}
      >
        <span
          className="text-xs font-semibold tracking-widest uppercase"
          style={{ color: '#e879a0' }}
        >
          {project.tag}
        </span>

        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
            fontWeight: 700,
            color: '#0c2d48',
            lineHeight: 1.2,
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '1rem',
            color: '#64a0c0',
            fontWeight: 400,
            lineHeight: 1.5,
          }}
        >
          {project.subtitle}
        </p>

        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.95rem',
            color: '#4a7a95',
            lineHeight: 1.8,
          }}
        >
          {project.description}
        </p>

        <div className="pt-2">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold group"
            style={{ color: project.accentColor }}
          >
            View project
            <span
              className="transition-transform duration-300 group-hover:translate-x-1"
              style={{ fontSize: '1.1rem' }}
            >
              →
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}