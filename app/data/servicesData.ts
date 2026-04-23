import type { Service, Testimonial } from '../services/types';

export const SERVICES: Service[] = [
  {
    id: 1,
    tag: 'Just Get Me Online',
    tagIcon: '🌐',
    title1: 'Get Online',
    title2: 'Website',
    description: 'A simple, polished website — built to get you online, fast.',
    image: '/marvellogohead.jfif',
    faqs: [
      {
        q: 'Tell me more',
        a: 'This package is perfect for beginners, coaches, and service providers who need a clean, professional online presence without the overwhelm. Everything from design to launch is handled.',
      },
      {
        q: 'Who is it for?',
        a: 'Entrepreneurs, coaches, consultants, freelancers, and anyone who needs a professional website to represent their brand online.',
      },
      {
        q: "What's included?",
        isList: true,
        prefix: '1–3 page responsive website (e.g., Home, About, Contact)',
        listItems: [
          'Mobile-friendly design',
          'Custom colors and branding',
          'Contact form or booking link',
          'Social media integration',
          'Basic SEO setup',
          'Domain & hosting guidance (if needed)',
          'Add-ons like blog, store, or extra pages available at an additional cost',
        ],
        a: '',
      },
      {
        q: 'Investment',
        a: 'Starting from $150. (Timeline: 5–7 working days)',
      },
    ],
  },
  {
    id: 2,
    tag: 'Website Clean Up',
    tagIcon: '✨',
    title1: 'Revamp',
    title2: 'Website',
    description: "Give your existing site a fresh, strategic new look you'll love.",
    image: '/marvelrevamp.jfif',
    faqs: [
      {
        q: 'Tell me more',
        a: "Your website exists but it's not converting, or it simply doesn't reflect your brand anymore. We audit, redesign, and relaunch it with a strategic, fresh identity that attracts your dream clients.",
      },
      {
        q: 'Who is it for?',
        a: "Business owners with an existing website that feels outdated, off-brand, or isn't generating leads or sales.",
      },
      {
        q: "What's included?",
        isList: true,
        prefix: 'Full website audit & redesign of up to 7 pages',
        listItems: [
          'Updated copy suggestions',
          'New brand-aligned visuals',
          'Improved UX & user flow',
          'Mobile optimization',
          '2 rounds of revisions',
        ],
        a: '',
      },
      {
        q: 'Investment',
        a: 'Starting from $250. (Timeline: 7–10 business days)',
      },
    ],
  },
  {
    id: 3,
    tag: 'Ecommerce Build',
    tagIcon: '🛒',
    title1: 'Ecommerce',
    title2: 'Website',
    description:
      'A fully functional online store designed to help you sell with confidence — built right, not rushed.',
    image: '/marvelecommerce.jfif',
    faqs: [
      {
        q: 'Tell me more',
        a: 'This is a complete ecommerce website built from the ground up with strategy, structure, and performance in mind. Instead of rushing the process, we focus on creating a smooth shopping experience, setting up payments properly, and ensuring your store is ready to handle real customers from day one.',
      },
      {
        q: 'Who is it for?',
        a: 'Product-based businesses, fashion brands, beauty entrepreneurs, and anyone serious about selling online with a clean, professional, and reliable store.',
      },
      {
        q: "What's included?",
        isList: true,
        prefix:
          'You get a fully set up ecommerce store built to sell from day one — complete with branded pages, optimized product flow, and a seamless checkout experience.',
        listItems: [
          'Brand pages + full ecommerce store',
          'Up to 30 products uploaded and structured',
          'Custom checkout experience',
          'Email capture integration',
          'Shipping and payment setup',
          'Launch support & walkthrough',
        ],
        a: '',
      },
      {
        q: 'Investment',
        a: 'Starting from $500. Timeline: 10–14 business days.',
      },
    ],
  },
  {
    id: 4,
    tag: 'The Shop & Sell',
    tagIcon: '🛍️',
    title1: 'Shop &',
    title2: 'Sell',
    description: 'Everything you need to start selling online beautifully and professionally.',
    image: '/marvelecommerce.jfif',
    faqs: [
      {
        q: 'Tell me more',
        a: 'This package bundles your online presence with a full shop — ideal for brands ready to go from zero to selling without juggling multiple platforms or agencies.',
      },
      {
        q: 'Who is it for?',
        a: 'New and growing product-based businesses who want a complete brand and store setup in one go.',
      },
      {
        q: "What's included?",
        isList: true,
        prefix: 'Brand pages + full ecommerce store',
        listItems: [
          'Up to 30 products uploaded',
          'Custom checkout experience',
          'Email capture integration',
          'Launch support & walkthrough',
        ],
        a: '',
      },
      {
        q: 'Investment',
        a: 'Starting from $600. Includes brand consultation. (Timeline: 14–21 days)',
      },
    ],
  },
  {
    id: 5,
    tag: 'Do It For Me',
    tagIcon: '💼',
    title1: 'Done For',
    title2: 'You',
    description: "Your full online presence handled from start to finish — you don't lift a finger.",
    image: '/marvellaunch.jfif',
    faqs: [
      {
        q: 'Tell me more',
        a: "Hands-off, premium done-for-you experience. You share your vision, and every single detail is handled — strategy, design, copy, launch, and delivery.",
      },
      {
        q: 'Who is it for?',
        a: "Busy CEOs, established brands, and high-level entrepreneurs who value their time and want exceptional results without the back-and-forth.",
      },
      {
        q: "What's included?",
        isList: true,
        prefix: 'Brand strategy session',
        listItems: [
          'Full website design & development',
          'Professional copywriting',
          'SEO optimization',
          'Email integration',
          '60-day post-launch support',
        ],
        a: '',
      },
      {
        q: 'Investment',
        a: "Starting from $700. Premium service, premium results. Let's talk. (Timeline: 21–30 days.)",
      },
    ],
  },
  {
    id: 6,
    tag: 'Keep It Running',
    tagIcon: '🔄',
    title1: 'Monthly',
    title2: 'Retainer',
    description: 'Ongoing care and support to keep your website running beautifully.',
    image: '/marvellogohead.jfif',
    faqs: [
      {
        q: 'Tell me more',
        a: "Your website is live — now what? This monthly retainer ensures your site stays updated, secure, fast, and converting. Think of it as your website's personal maintenance team.",
      },
      {
        q: 'Who is it for?',
        a: "Business owners who want peace of mind knowing their website is always up-to-date, backed up, and performing at its best.",
      },
      {
        q: "What's included?",
        isList: true,
        prefix: 'Monthly updates & security monitoring',
        listItems: [
          'Performance checks',
          'Up to 2 hours of content updates',
          'Backup management',
          'Priority support',
        ],
        a: '',
      },
      {
        q: 'Investment',
        a: 'From $100/month. (Ongoing service, cancel anytime.)',
      },
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Ikechucku Ogbuehi',
    role: 'Co-founder & CEO',
    company: 'Babs Security',
    country: '🇳🇬 Nigeria',
    text: 'He completely transformed how we show up online. The security platform he built for us loads incredibly fast, looks stunning, and has directly increased our conversion rate. Professional, creative, and truly understood our brand from day one.',
    initials: 'IO',
    image: '/testimonial-1.jfif',
  },
  {
    name: 'Amanda Johnson',
    role: 'Founder',
    company: 'Johnson NGO',
    country: '🇳🇬 Nigeria',
    text: 'I had a vague idea of what I wanted and he turned it into something far better than I imagined. The website he built positions us as a serious NGO. Every detail was considered, and the handover process was smooth and thorough.',
    initials: 'AJ',
    image: '/testimonial-2.jfif',
  },
  {
    name: 'Tobi Adeyemi',
    role: 'Creative Director',
    company: 'Cre8tstudio',
    country: '🇳🇬 Nigeria',
    text: 'He crafted a new ui design for us. Our revamped website now reflects where we actually are as a brand — modern, credible, and conversion-focused. Easily one of the best decisions we made in 2025.',
    initials: 'TA',
    image: '/testimonial-5.jfif',
  },
  {
    name: 'Sophia Müller',
    role: 'Head of Growth',
    company: 'Sumup',
    country: '🇩🇪 Germany',
    text: 'No hype, Marvel is good at what he does. He took the time to understand our brand and goals, and the result was a website that not only looks fantastic but also performs exceptionally well. We saw an immediate uptick in user engagement and conversions after launch.',
    initials: 'SM',
    image: '/testimonial-4.jfif',
  },
  {
    name: 'James Okafor',
    role: 'Project Manager',
    company: 'TravelGuide',
    country: '🇨🇦 Canada',
    text: 'He built our entire platform presence from scratch — beautiful design, clean code, and a product that actually reflects our mission. What struck me most was how deeply he cared about getting it right. Not just good enough, but genuinely great.',
    initials: 'JO',
    image: '/trave.png',
  },
  {
    name: 'Priya Nair',
    role: 'Product Manager',
    company: 'Laycomms',
    country: '🇩🇪 Germany',
    text: 'One thing i loved about Marvel was that he took a complicated brief and made it look effortless. The website is sleek, fast, and has earned us real compliments from investors and users alike. He was patient with every revision request and never made us feel like a burden.',
    initials: 'PN',
    image: '/testimonial-6.jfif',
  },
];