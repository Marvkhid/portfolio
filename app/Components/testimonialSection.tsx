import { TESTIMONIALS } from '../data/servicesData';
import TestimonialCard from './testimonialCard';

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      style={{
        background: 'linear-gradient(160deg, #e0f7ff 0%, #bae6fd 50%, #e0f7ff 100%)',
        padding: '100px 5%',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ marginBottom: 56 }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 700,
            color: '#0ea5c5', letterSpacing: 2, textTransform: 'uppercase', margin: '0 0 10px',
          }}>
            Testimonials
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 700, color: '#0c4a6e', margin: 0, lineHeight: 1.2,
          }}>
            From{' '}
            <span style={{ color: '#0ea5c5', fontStyle: 'italic' }}>The Brands</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: 24 }}>
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}