import type { BlogPost, Category } from './types';

export const categories: Category[] = [
  'All',
  'AI',
  'Web Dev',
  'Industry Trends',
  'Productivity',
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Claude 3.7 Is Here — And It Just Changed What AI Can Do for Developers',
    excerpt:
      'Anthropic just shipped Claude 3.7 with extended thinking mode and a 200K context window that actually holds up. After two weeks of real-world testing, here is what it means for how we build software.',
    category: 'AI',
    author: 'Marvel Adeniyi',
    date: 'Apr 18, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80',
    featured: true,
    editorsPick: true,
    tag: "Editor's Pick",
  },
  {
    id: '2',
    title: 'Figma AI is Rewriting the Designer-Developer Handoff',
    excerpt:
      'Figma shipped its most ambitious AI update yet — auto layout suggestions, component generation from prompts, and a dev mode that writes production-ready CSS. The workflow gap between design and code just got a lot smaller.',
    category: 'Web Dev',
    author: 'Marvel Adeniyi',
    date: 'Apr 10, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    trending: true,
    tag: 'Trending',
  },
  {
    id: '3',
    title: 'Canva\'s Code Export Feature Is Quietly Threatening No-Code Competitors',
    excerpt:
      'Canva now lets you export pixel-perfect, responsive HTML and CSS from any design. It is not ready for production Next.js apps — but it is already good enough to launch landing pages in minutes. Here is the honest breakdown.',
    category: 'Industry Trends',
    author: 'Marvel Adeniyi',
    date: 'Apr 2, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80',
    trending: true,
    tag: 'Trending',
  },
  {
    id: '4',
    title: 'GPT-5 vs Claude 3.7 vs Gemini 2.5 — The 2026 Model War Has a Clear Leader',
    excerpt:
      'Three frontier models. Hundreds of real coding tasks. One honest verdict. After months of building actual products on each API, here is which model earns a permanent place in your stack and which ones disappoint.',
    category: 'AI',
    author: 'Marvel Adeniyi',
    date: 'Mar 24, 2026',
    readTime: '8 min read',
    image: '/marvellogohead.jpg',
  },
  {
    id: '5',
    title: 'Next.js 16 and the New Era of Partial Prerendering',
    excerpt:
      'Vercel just stabilised Partial Prerendering in Next.js 16 and it is a genuine paradigm shift. Static shells, dynamic slots, zero layout shift — here is a practical guide to understanding and implementing PPR today.',
    category: 'Web Dev',
    author: 'Marvel Adeniyi',
    date: 'Mar 15, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
  },
  {
    id: '6',
    title: 'How I Closed 3 High-Ticket Clients in 30 Days Without Sending a Single Cold Email',
    excerpt:
      'No cold outreach. No paid ads. Just a sharp portfolio, a one-page case study, and a referral loop that runs itself. Here is the exact system I used — and how you can copy it this week.',
    category: 'Productivity',
    author: 'Marvel Adeniyi',
    date: 'Mar 5, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80',
    editorsPick: true,
    tag: "Editor's Pick",
  },
  {
    id: '7',
    title: "Africa's Tech Talent Is Going Global — And That Is Both Good and Complicated",
    excerpt:
      'Nigerian, Kenyan, and Ghanaian developers are landing roles at Meta, Google, and top European startups at record rates. The brain drain is real. So is the opportunity. Here is the full picture heading into 2026.',
    category: 'Industry Trends',
    author: 'Marvel Adeniyi',
    date: 'Feb 20, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800&q=80',
  },
  {
    id: '8',
    title: 'The TypeScript Patterns That Will Save Your 2026 Codebase',
    excerpt:
      'Discriminated unions, branded types, inferred generics from zod schemas — these are not interview tricks. They are the patterns that prevent production bugs and make large codebases actually navigable. A practical guide.',
    category: 'Web Dev',
    author: 'Marvel Adeniyi',
    date: 'Feb 10, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80',
  },
];