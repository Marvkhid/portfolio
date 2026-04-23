import RevealBlock from './revealblock';

export default function ProjectsHero() {
  return (
    <section className="relative pt-28 pb-16 px-6 text-center overflow-hidden">
      {/* Ambient blobs */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(56,189,248,0.18) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(232,121,160,0.14) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <RevealBlock>
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-4"
          style={{ color: '#e879a0' }}
        >
          Selected Work
        </p>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.4rem, 6vw, 4rem)',
            fontWeight: 700,
            color: '#0c2d48',
            lineHeight: 1.15,
          }}
        >
          Projects I&apos;ve Built
        </h1>
        <p
          className="mt-4 mx-auto max-w-xl text-base"
          style={{ color: '#4a7a95', lineHeight: 1.8 }}
        >
          Real clients. Real deadlines. Real results. Here&apos;s a look at some of
          the work I&apos;m proud of — and the stories behind them.
        </p>
      </RevealBlock>
    </section>
  );
}