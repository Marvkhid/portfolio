export type Project = {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  Image: string;
  gradient: string;
  accentColor: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    id: '01',
    tag: 'Tourism',
    title: 'Ekiti Tourism',
    subtitle: 'Showcasing culture, nature & travel across Ekiti State',
    description:
      'A vibrant destination website that puts Ekiti State on the digital map. Built to inspire visitors and drive tourism through immersive visuals, smooth UX, and performance-first design.',
    Image: '/ekiti.png',
    gradient: 'from-sky-400/30 via-emerald-300/20 to-teal-500/30',
    accentColor: '#38bdf8',
    tags: ['UI/UX', 'Tourism', 'Performance'],
  },
  {
    id: '02',
    tag: 'SaaS Dashboard',
    title: 'Curano Dashboard',
    subtitle: 'Clean analytics built for clarity and speed',
    description:
      'Curano needed a powerful internal tool that felt effortless to use. We stripped away complexity and built a dashboard where every number, every chart, every interaction tells a clear story.',
    Image: '/curano.png',
    gradient: 'from-violet-400/30 via-pink-300/20 to-purple-500/30',
    accentColor: '#c084fc',
    tags: ['Dashboard', 'SaaS', 'Data Viz'],
  },
 {
  id: '03',
  tag: 'Tech Education & Innovation',
  title: 'JMTech Solutions Initiative',
  subtitle: 'Empowering the next generation of African tech talent',
  description:
    'I collaborated with the JMTech Solutions team to support a platform focused on training and developing young people in IT. Working alongside multinational partners, institutions, and government bodies, we contributed to building systems and experiences that make tech education more accessible, practical, and impactful.',
  Image: '/jmtech.png',
  gradient: 'from-blue-500/30 via-sky-400/20 to-indigo-500/30',
  accentColor: '#3b82f6',
  tags: ['EdTech', 'Training', 'Innovation', 'Collaboration'],
},
  {
  id: '04',
  tag: 'Marketplace',
  title: 'KOVA Shop',
  subtitle: 'A trusted marketplace for digital services',
  description:
    'KOVA Shop is a full-stack marketplace connecting buyers and sellers of digital services. Built with trust, clarity, and speed at its core, it simplifies how people discover, order, and deliver digital work online.',
  Image: '/kova.png',
  gradient: 'from-slate-400/30 via-blue-400/20 to-indigo-500/30',
  accentColor: '#60a5fa',
  tags: ['Marketplace', 'Full-stack', 'Digital Services'],
},
  {
    id: '05',
    tag: 'Fitness & Wellness',
    title: 'Marcus Reid Fitness',
    subtitle: 'Personalized fitness coaching and training',
    description:
      'Marcus Reid Fitness is a full-stack platform for personalized fitness coaching, offering tailored workout plans, progress tracking, and client management.',
    Image: '/marcus-reid.png',
    gradient: 'from-green-400/30 via-emerald-300/20 to-teal-500/30',
    accentColor: '#10b981',
    tags: ['Fitness', 'Wellness', 'Coaching'],
  },
];