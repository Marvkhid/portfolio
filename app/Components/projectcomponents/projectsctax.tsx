import Link from 'next/link';
import RevealBlock from './revealblock';

export default function ProjectsCTA() {
  return (
    <RevealBlock delay={100}>
      <div className="text-center space-y-6 py-8">
        <p
          className="text-xs font-semibold tracking-widest uppercase"
          style={{ color: '#e879a0' }}
        >
          Your turn
        </p>

        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            color: '#0c2d48',
            lineHeight: 1.2,
          }}
        >
          This could be your project next.
        </h2>

        <p
          className="mx-auto max-w-md text-base"
          style={{ color: '#4a7a95', lineHeight: 1.8 }}
        >
          Whether you&apos;re starting from scratch or redesigning something
          that isn&apos;t working — I&apos;d love to hear about it.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 hover:opacity-90"
            style={{
              background: 'linear-gradient(135deg, #e879a0, #c026d3)',
              color: 'white',
              boxShadow: '0 8px 24px rgba(232,121,160,0.35)',
            }}
          >
            Let&apos;s build yours next →
          </Link>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 hover:bg-white/80"
            style={{
              background: 'rgba(255,255,255,0.6)',
              color: '#0c2d48',
              border: '0.5px solid rgba(56,189,248,0.35)',
              backdropFilter: 'blur(8px)',
            }}
          >
            View services
          </Link>
        </div>
      </div>
    </RevealBlock>
  );
}