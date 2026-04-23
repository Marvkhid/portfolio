import { SERVICES } from '../data/servicesData';
import ServiceCard from './serviceCard';

export default function NeedAWebsiteSection() {
  return (
    <section
      id="services"
      style={{
        background: 'linear-gradient(180deg, #f0feff 0%, #e0f7ff 60%, #f0feff 100%)',
        padding: '110px 5% 80px',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 700,
            color: '#0ea5c5', letterSpacing: 2.5, textTransform: 'uppercase', margin: '0 0 14px',
          }}>
            Services
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(36px, 5.5vw, 60px)',
            fontWeight: 700, color: '#0c4a6e', margin: '0 0 18px', lineHeight: 1.1,
          }}>
            Need a{' '}
            <span style={{ fontFamily: "'Pacifico', cursive", color: '#0ea5c5', fontSize: '1.08em' }}>
              Website?
            </span>
          </h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: '#0369a1',
            lineHeight: 1.8, maxWidth: 620, margin: '0 auto', opacity: 0.85,
          }}>
            I offer a range of services to cater for brands at all stages of their
            journey. Can&apos;t find something that is quite right? I&apos;m always happy to
            provide the perfect setup tailored to your brand... just leave a note in the
            enquiry form and I&apos;ll be in touch.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: 28 }}>
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}