import type { Metadata } from 'next';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ProjectsHero from '../Components/projectcomponents/projecthero';
import ProjectsFlow from '../Components/projectcomponents/projectsflow';

export const metadata: Metadata = {
  title: 'Projects | Marvel Dev',
  description:
    'Real projects. Real clients. Explore the websites and digital products built by Marvel Studio — from tourism platforms to SaaS dashboards and security websites.',
  openGraph: {
    title: 'Projects | Marvel Dev',
    description:
      'Explore the work of Marvel Studio — premium web design and development for ambitious brands.',
    url: 'https://yourdomain.com/projects',
    siteName: 'Marvel Dev',
    images: [
      {
        url: '/og-projects.jpg',
        width: 1200,
        height: 630,
        alt: 'Marvel Studio — Selected Projects',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects | Marvel Dev',
    description:
      'Premium web design and development. See the work.',
    images: ['/og-projects.jpg'],
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main
        className="min-h-screen"
        style={{
          background:
            'linear-gradient(160deg, #e8f4fd 0%, #f0e8fa 40%, #e0f0fb 70%, #fbe8f4 100%)',
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        <ProjectsHero />
        <ProjectsFlow />
      </main>

      <Footer />
    </>
  );
}