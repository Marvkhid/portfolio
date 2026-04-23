'use client';

export default function ContactSection() {
  return (
    <section id="contact" style={{ background: '#e0f7ff', padding: '100px 5%', textAlign: 'center' }}>
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 700,
          color: '#0ea5c5', letterSpacing: 2, textTransform: 'uppercase', margin: '0 0 12px',
        }}>
          Let&apos;s Connect
        </p>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(30px, 5vw, 50px)',
          fontWeight: 700, color: '#0c4a6e', margin: '0 0 18px', lineHeight: 1.2,
        }}>
          Ready to Build Your{' '}
          <span style={{ fontFamily: "'Pacifico', cursive", color: '#0ea5c5' }}>Dream Website?</span>
        </h2>
        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: '#0369a1',
          lineHeight: 1.75, margin: '0 0 40px', opacity: 0.85,
        }}>
          Let&apos;s have a quick chat and figure out the best package for your brand.
          I&apos;d love to hear about your vision!
        </p>

        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="tel:08107387326"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'linear-gradient(135deg, #38bdf8, #0ea5c5)',
              color: '#fff', padding: '16px 36px', borderRadius: 50,
              fontSize: 15, fontWeight: 700, textDecoration: 'none',
              fontFamily: "'DM Sans', sans-serif",
              boxShadow: '0 8px 28px rgba(14,165,197,0.4)',
              transition: 'transform 0.25s, box-shadow 0.25s',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = 'translateY(-3px) scale(1.04)';
              el.style.boxShadow = '0 16px 40px rgba(14,165,197,0.55)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = 'translateY(0) scale(1)';
              el.style.boxShadow = '0 8px 28px rgba(14,165,197,0.4)';
            }}
          >
            📞 Call — 08107387326
          </a>
          <a
            href="#services"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'rgba(255,255,255,0.75)', backdropFilter: 'blur(10px)',
              color: '#0c4a6e', padding: '16px 36px', borderRadius: 50,
              fontSize: 15, fontWeight: 700, textDecoration: 'none',
              fontFamily: "'DM Sans', sans-serif",
              border: '2px solid rgba(14,165,197,0.3)',
              transition: 'transform 0.25s, border-color 0.25s',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = 'translateY(-3px)';
              el.style.borderColor = 'rgba(14,165,197,0.6)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = 'translateY(0)';
              el.style.borderColor = 'rgba(14,165,197,0.3)';
            }}
          >
            View Services
          </a>
        </div>
      </div>
    </section>
  );
}