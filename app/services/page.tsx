import type { Metadata } from 'next';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import HeroSection from '../Components/heroSection';
import NeedAWebsiteSection from '../Components/needAWebsiteSection';
import ConsultationBanner from '../Components/consultationBanner';
import TestimonialsSection from '../Components/testimonialSection';
import ContactSection from '../Components/contactSection';

export const metadata: Metadata = {
  title: 'Services | Marvel Studio',
  description:
    'Web design and development services for brands at every stage — from simple websites to full ecommerce builds and done-for-you launches.',
  openGraph: {
    title: 'Services | Marvel Studio',
    description:
      'Beautiful websites built for your brand. Explore packages from $150.',
    url: 'https://yourdomain.com/services',
    siteName: 'Marvel Studio',
    images: [{ url: '/og-services.jpg', width: 1200, height: 630, alt: 'Marvel Studio Services' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services | Marvel Studio',
    description: 'Web design & development packages for every brand stage.',
    images: ['/og-services.jpg'],
  },
};

export default function ServicesPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#e0f7ff' }}>
      <Navbar />
      <NeedAWebsiteSection />
      <ConsultationBanner />
      <HeroSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}