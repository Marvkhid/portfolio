import type { Metadata } from 'next';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import AboutMarquee from '../Components/aboutcomponents/aboutMarquee';
import AboutHero from '../Components/aboutcomponents/aboutHero';
import StatsRow from '../Components/aboutcomponents/statsRow';
import AboutStory from '../Components/aboutcomponents/aboutStory';
import ValuesSection from '../Components/aboutcomponents/valuesSection';
import SkillsAndTimeline from '../Components/aboutcomponents/skillsAndTimeline';
import ToolsStrip from '../Components/aboutcomponents/toolsStrip';
import FaqSection from '../Components/aboutcomponents/faqSection';
import AboutCTA from '../Components/aboutcomponents/aboutCTA';

export const metadata: Metadata = {
  title: 'About | Marvel Adeniyi — Frontend Engineer',
  description:
    'Frontend Engineer based in Lagos, Nigeria. Computer Engineering graduate specialising in React, Next.js, and TypeScript. Available for freelance and full-time roles.',
  openGraph: {
    title: 'About | Marvel Adeniyi — Frontend Engineer',
    description:
      'Meet Marvel Adeniyi — a Frontend Engineer who ships fast, builds clean, and cares deeply about user experience.',
    url: 'https://yourdomain.com/about',
    siteName: 'Marvel Adeniyi',
    images: [
      {
        url: '/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'Marvel Adeniyi — Frontend Engineer',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Marvel Adeniyi — Frontend Engineer',
    description: 'Frontend Engineer. React · Next.js · TypeScript. Lagos, Nigeria.',
    images: ['/og-about.jpg'],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-blue-100 overflow-x-hidden">
      <Navbar />
      <AboutMarquee />
      <AboutHero />
      <StatsRow />
      <AboutStory />
      <ValuesSection />
      <SkillsAndTimeline />
      <ToolsStrip />
      <FaqSection />
      <AboutCTA />
      <Footer />

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin 30s linear infinite;
        }
        .font-serif {
          font-family: 'Georgia', 'Times New Roman', serif;
        }
      `}</style>
    </div>
  );
}