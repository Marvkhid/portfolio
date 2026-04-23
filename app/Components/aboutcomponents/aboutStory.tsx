'use client';

import Image from 'next/image';
import { useInView } from '@/app/hooks/useInView';

export default function AboutStory() {
  const { ref, visible } = useInView(0.1);

  return (
    <section
      id="story"
      ref={ref}
      className={`px-6 md:px-16 lg:px-24 py-20 border-t border-sky-100 grid grid-cols-1 md:grid-cols-2 gap-16 items-center transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Image */}
      <div className="relative">
        <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl bg-sky-100 border border-sky-200" />
        <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden border-2 border-white shadow-xl shadow-sky-100">
          <Image
            src="/marvelblue.jfif"
            alt="Marvel Adeniyi at work"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-sky-900/30 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur rounded-2xl p-4 border border-sky-100">
            <div className="text-xs text-sky-500 font-semibold tracking-widest uppercase mb-1">Currently</div>
            <div className="text-sm font-bold text-slate-800">Building production-grade UIs</div>
            <div className="text-xs text-slate-400 mt-0.5">Lagos, Nigeria 🇳🇬</div>
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col gap-6">
        <div className="text-xs tracking-widest uppercase text-sky-500 font-semibold">My Story</div>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
          From Studying Computer Engineering to Shipping Real Products
        </h2>
        <p className="text-slate-500 text-sm leading-loose">
          I didn&apos;t just study Computer Engineering — I lived it. From the first algorithm I ever
          debugged at 2am to the first time I deployed a Next.js app and watched real users interact
          with something I built from scratch, this journey has never felt like work. It&apos;s always felt
          like discovery. My Computer Engineering degree gave me the foundation: data structures,
          algorithms, system design thinking. But the web gave me the canvas.
        </p>
        <p className="text-slate-500 text-sm leading-loose">
          I fell in love with frontend because it&apos;s the rare discipline where rigorous engineering and
          creative expression live side by side. You can architect a flawless component system in the
          morning and obsess over a 4px border radius in the afternoon — and both decisions matter
          equally. That duality is what keeps me deeply engaged every single day. I&apos;m not just writing
          code; I&apos;m crafting the layer of software that humans actually touch.
        </p>
        <p className="text-slate-500 text-sm leading-loose">
          Based in Lagos, Nigeria, I&apos;ve worked across different project scales, from solo freelance
          builds shipped in tight timelines to collaborative team projects with design systems, code
          reviews, and CI/CD pipelines. Every engagement has sharpened my instincts and deepened my
          conviction: great frontend work is where empathy, craft, and speed converge.
        </p>
      </div>
    </section>
  );
}