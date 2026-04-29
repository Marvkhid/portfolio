import type { Metadata } from 'next';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import BlogSection from '../Components/blogcomponents/blogsection';

export const metadata: Metadata = {
  title: 'Blog & Insights | Marvel Adeniyi',
  description:
    'Thoughts on AI, frontend engineering, and the ever-shifting landscape of building for the web.',
  openGraph: {
    title: 'Blog & Insights | Marvel Adeniyi',
    description:
      'Honest takes on frontend engineering, AI tooling, and tech trends.',
    url: 'https://yourdomain.com/blog',
    siteName: 'Marvel Adeniyi',
    images: [{ url: '/og-blog.jpg', width: 1200, height: 630, alt: 'Marvel Adeniyi Blog' }],
    type: 'website',
  },
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <BlogSection />
      </main>
      <Footer />
    </>
  );
}