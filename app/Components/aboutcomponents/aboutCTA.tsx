'use client';

import { ArrowUpRight } from 'lucide-react';
import { useInView } from '@/app/hooks/useInView';

export default function AboutCTA() {
  const { ref, visible } = useInView(0.1);

  return (
    <section
      ref={ref}
      className={`mx-6 md:mx-16 lg:mx-24 my-20 rounded-3xl bg-gradient-to-br from-sky-500 to-blue-600 p-12 md:p-16 text-center shadow-2xl shadow-sky-200 transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-[0.97]'
      }`}
    >
      <div className="text-sky-200 text-xs tracking-widest uppercase font-semibold mb-4">
        Let&apos;s Build Together
      </div>
      <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
        Got a project in mind?<br />I&apos;d love to hear about it.
      </h2>
      <p className="text-sky-100 text-base max-w-xl mx-auto mb-8 leading-relaxed">
        Whether you need a full frontend build, a design system, or a technical partner who ships —
        I&apos;m available and ready. Let&apos;s make something worth using.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="/contact"
          className="inline-flex items-center gap-2 bg-white text-sky-600 font-bold text-sm px-8 py-4 rounded-2xl hover:scale-105 transition-transform shadow-lg"
        >
          Hire Me <ArrowUpRight size={16} />
        </a>
        <a
          href="https://wa.me/2348107387326"
          className="inline-flex items-center gap-2 border-2 border-white/40 text-white font-semibold text-sm px-8 py-4 rounded-2xl hover:bg-white/10 transition-colors"
        >
          WhatsApp Direct
        </a>
      </div>
    </section>
  );
}