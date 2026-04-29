'use client';

import Image from 'next/image';
import Accordion from '../accordion';
import { faqs } from '@/app/data/aboutData';
import { useInView } from '@/app/hooks/useInView';

export default function FaqSection() {
  const { ref, visible } = useInView(0.1);

  return (
    <section
      ref={ref}
      className={`px-6 md:px-16 lg:px-24 py-20 border-t border-sky-100 grid grid-cols-1 md:grid-cols-2 gap-16 items-start transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Image */}
      <div className="relative hidden md:block">
        <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl bg-blue-100 border border-blue-200" />
        <div className="relative w-full aspect-square rounded-3xl overflow-hidden border-2 border-white shadow-xl shadow-sky-100">
          <Image
            src="/marvelhead.jpg"
            alt="Marvel Adeniyi"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 0px, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-transparent" />

          <div className="absolute top-5 left-5 bg-white/90 backdrop-blur rounded-2xl p-3 border border-sky-100 shadow-sm">
            <div className="text-xs text-slate-400 mb-0.5">Availability</div>
            <div className="text-sm font-bold text-green-600 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Open to offers
            </div>
          </div>

          <div className="absolute bottom-5 right-5 bg-white/90 backdrop-blur rounded-2xl p-3 border border-sky-100 shadow-sm">
            <div className="text-xs text-slate-400 mb-0.5">Based in</div>
            <div className="text-sm font-bold text-slate-700">Lagos, Nigeria 🇳🇬</div>
          </div>
        </div>
      </div>

      {/* Accordion */}
      <div>
        <div className="text-xs tracking-widest uppercase text-sky-500 font-semibold mb-3">
          Quick Answers
        </div>
        <h2 className="font-serif text-4xl font-bold text-slate-800 mb-8">Common Questions</h2>
        <div className="bg-white/70 backdrop-blur rounded-2xl border border-sky-100 px-6 shadow-sm">
          {faqs.map((f) => (
            <Accordion key={f.question} question={f.question} answer={f.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}