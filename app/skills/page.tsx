import type { Metadata } from 'next';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import SkillsSection from '../Components/skillscomponents/skillsSection';

export const metadata: Metadata = {
  title: 'Skills | Marvel Adeniyi',
  description:
    'A full breakdown of my technical skills, data tools, administrative capabilities, and core professional strengths.',
  openGraph: {
    title: 'Skills | Marvel Adeniyi',
    description:
      'Frontend development, data tools, HR capabilities, and professional strengths — all in one place.',
    url: 'https://marvel-port.vercel.app/skills',
    siteName: 'Marvel Adeniyi',
    images: [{ url: '/og-skills.jpg', width: 1200, height: 630, alt: 'Marvel Adeniyi — Skills' }],
    type: 'website',
  },
};

export default function SkillsPage() {
  return (
    <>
      <Navbar />
      <main>
        <SkillsSection />
      </main>
      <Footer />
    </>
  );
}