'use client';

import Image from 'next/image';
import { Code2, Zap, ArrowUpRight, ChevronDown, Star } from 'lucide-react';
import { useInView } from '@/app/hooks/useInView';

export default function AboutHero() {
  const { ref, visible } = useInView(0.05);

  return (
    <section
      ref={ref}
      className={`px-6 md:px-16 lg:px-24 pt-20 pb-16 grid grid-cols-1 md:grid-cols-2 gap-14 items-center transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* TEXT SIDE */}
      <div className="flex flex-col gap-6 order-2 md:order-1">
        <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-sky-500 bg-sky-50 border border-sky-200 px-4 py-2 rounded-full self-start">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
          Available for you
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-slate-800">
          Hi, I&apos;m<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
            Marvel
          </span>{' '}
          Adeniyi.
        </h1>

        <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-lg">
          A Frontend Engineer who graduated with a Computer Engineering degree and immediately fell in love
          with the craft of promoting brands by building for the web. I live at the intersection of clean
          engineering and pixel-perfect design — obsessed with turning complex problems into experiences
          that feel effortless.
        </p>

        <p className="text-slate-400 text-sm leading-relaxed max-w-lg">
          My philosophy is simple: ship fast, iterate faster. I don&apos;t wait for perfect conditions.
          Beyond writing codes, i see front-end web development as a way of promoting brands and offering
          digital solutions to te society. Every line of code I write is intentional, every component is
          reusable, and every UI is built with the end user&apos;s experience as the north star.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white text-sm font-semibold px-6 py-3 rounded-xl hover:scale-105 transition-transform shadow-md shadow-sky-200"
          >
            Hire Me <ArrowUpRight size={15} />
          </a>
          <a
            href="#story"
            className="inline-flex items-center gap-2 border border-sky-200 text-sky-600 text-sm font-medium px-6 py-3 rounded-xl hover:bg-sky-50 transition-colors"
          >
            Marvel&apos;s Story <ChevronDown size={15} />
          </a>
        </div>
      </div>

      {/* IMAGE SIDE */}
      <div className="relative order-1 md:order-2 flex justify-center">
        {/* Decorative rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border border-sky-200/50 animate-spin-slow" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-56 h-56 md:w-72 md:h-72 rounded-full border border-sky-100/70"
            style={{ animation: 'spin 20s linear infinite reverse' }}
          />
        </div>

        {/* Floating badges */}
        <div className="absolute top-4 -left-2 md:left-4 bg-white border border-sky-100 rounded-xl px-3 py-2 shadow-sm flex items-center gap-2 z-10">
          <Code2 size={14} className="text-sky-500" />
          <span className="text-xs font-semibold text-slate-700">React · Next.js</span>
        </div>
        <div className="absolute bottom-8 -right-2 md:right-4 bg-white border border-sky-100 rounded-xl px-3 py-2 shadow-sm flex items-center gap-2 z-10">
          <Star size={14} className="text-amber-400" />
          <span className="text-xs font-semibold text-slate-700">3+ yrs exp</span>
        </div>
        <div className="absolute top-1/2 -right-3 md:right-0 bg-sky-500 rounded-xl px-3 py-2 shadow-md flex items-center gap-2 z-10">
          <Zap size={13} className="text-white" />
          <span className="text-xs font-bold text-white">Ship Fast</span>
        </div>

        {/* Main image */}
        <div className="relative w-60 h-60 md:w-80 md:h-80 rounded-3xl overflow-hidden border-4 border-white shadow-2xl shadow-sky-200 z-10">
          <Image
            src="/coren.jpg"
            alt="Marvel Adeniyi"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 768px) 240px, 320px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-sky-900/20 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}