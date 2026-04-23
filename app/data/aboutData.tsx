import {
  Code2,
  Zap,
  Globe,
  Terminal,
  Box,
  Cpu,
  Figma,
  GitBranch,
  Database,
  Coffee,
  Target,
  Heart,
  Layers,
} from 'lucide-react';
import type { ReactNode } from 'react';

export const marqueeTopics = [
  'Frontend Engineer', 'React', 'Next.js', 'TypeScript', 'Node.js', 'Redux Toolkit', 'APIs',
  'UI/UX', 'Performance', 'Clean Code', 'Computer Engineering Graduate', 'Nigeria 🇳🇬',
  'Frontend Engineer', 'React', 'Next.js', 'TypeScript', 'Node.js',
  'Responsiveness', 'Performance', 'Clean Code', 'Computer Engineering Graduate', 'Nigeria 🇳🇬',
];

export type StatItem = { value: string; label: string; icon: ReactNode };
export const stats: StatItem[] = [
  { value: '3+',   label: 'Years of Experience',  icon: <Coffee size={20} /> },
  { value: '20+',  label: 'Projects Shipped',      icon: <Target size={20} /> },
  { value: '100%', label: 'TypeScript Believer',   icon: <Code2  size={20} /> },
  { value: '∞',    label: 'Iterations & Counting', icon: <Zap    size={20} /> },
];

export type SkillItem = { label: string; level: number };
export const skillsList: SkillItem[] = [
  { label: 'React',          level: 5 },
  { label: 'Next.js',        level: 5 },
  { label: 'TypeScript',     level: 4 },
  { label: 'Node.js',        level: 4 },
  { label: 'Tailwind CSS',   level: 5 },
  { label: 'Framer Motion',  level: 4 },
  { label: 'PostgreSQL',     level: 3 },
  { label: 'Git & GitHub',   level: 5 },
  { label: 'Figma',          level: 3 },
];

export type TimelineEntry = { year: string; title: string; company: string; desc: string; delay: number };
export const timeline: TimelineEntry[] = [
  {
    delay: 0,
    year: '2025 – Present',
    title: 'Frontend Engineer',
    company: 'Freelance · Remote',
    desc: 'Working with clients and remote teams to build modern, scalable web applications. Delivering responsive, high-performance interfaces using Next.js and TypeScript, while managing the full frontend lifecycle from concept to deployment.',
  },
  {
    delay: 100,
    year: '2024 (Feb – Aug)',
    title: 'Lead Frontend Developer',
    company: 'JMTech · Ekiti',
    desc: 'Led frontend development on multiple projects, collaborating with backend teams to deliver clean, user-focused interfaces. Took ownership of UI architecture, code quality, and overall user experience across products.',
  },
  {
    delay: 200,
    year: '2023 (Aug) – 2024 (Jan)',
    title: 'Frontend Intern',
    company: 'HNG Internship',
    desc: 'Gained hands-on experience working in a fast-paced, collaborative environment. Built real-world projects, improved problem-solving skills, and strengthened my understanding of scalable frontend architecture.',
  },
  {
    delay: 300,
    year: '2023 (May – Aug)',
    title: 'Frontend Trainee',
    company: 'Unique Classics Digital Hub · Ado-Ekiti',
    desc: 'Started my journey into web development. Learned core frontend fundamentals including HTML, CSS, JavaScript, and began building structured, responsive web interfaces.',
  },
  {
    delay: 400,
    year: '2019 – 2024',
    title: 'Computer Engineering Graduate',
    company: 'Ekiti State University',
    desc: 'Built a strong technical foundation while independently developing a deep interest in web technologies. Combined academic knowledge with hands-on projects to grow into a frontend-focused developer.',
  },
];

export type ToolItem = { icon: ReactNode; label: string };
export const tools: ToolItem[] = [
  { icon: <Terminal size={22} />, label: 'CLI'       },
  { icon: <GitBranch size={22} />, label: 'Git'      },
  { icon: <Database size={22} />, label: 'Postgres'  },
  { icon: <Globe size={22} />,    label: 'REST APIs' },
  { icon: <Figma size={22} />,    label: 'Figma'     },
  { icon: <Box size={22} />,      label: 'Docker'    },
  { icon: <Cpu size={22} />,      label: 'Vercel'    },
  { icon: <Layers size={22} />,   label: 'Shadcn'    },
];

export type FaqItem = { question: string; answer: string };
export const faqs: FaqItem[] = [
  {
    question: 'What kind of projects do you take on?',
    answer: 'I work best on product-focused web applications — dashboards, SaaS products, portfolio systems, and e-commerce platforms. I\'m particularly drawn to projects where the UI has to do heavy lifting: complex state, real-time data, high interactivity. I bring both engineering discipline and design sensibility to every project.',
  },
  {
    question: 'Do you work remotely or on-site?',
    answer: 'I\'m open to any but fully remote is my sweet spot. I\'ve been working remotely for years and have the systems, tools, and communication habits to make it seamless. I use async-first communication, detailed handoffs, and proactive updates to keep everyone aligned regardless of time zone.',
  },
  {
    question: 'How do you approach a new project?',
    answer: 'I start by understanding the problem deeply before touching code. What does success look like? Who is the user? What are the constraints? Then I move fast: scaffold, prototype, get feedback, iterate. I don\'t spend three weeks setting up the perfect file structure — I ship a working version and refine from there.',
  },
  {
    question: 'Are you open to full-time roles?',
    answer: 'Yes — I\'m open to both freelance contracts and full-time frontend engineer roles. If you\'re building something ambitious and need someone who can own the frontend end-to-end, let\'s talk. I work best in teams that value speed, quality, and honest communication.',
  },
  {
    question: 'What makes you different from other frontend devs?',
    answer: 'I care about the craft at every layer. I\'m not just someone who wires up components — I think about performance budgets, accessibility, component API design, and the developer experience of the code I leave behind. I also move fast without creating chaos. That balance — speed plus quality — is rare and it\'s what I bring to every project.',
  },
  {
    question: 'How will a website improve my brand?',
    answer: 'A well-designed website serves as a digital storefront for your brand, creating a positive first impression and establishing credibility. It showcases your products or services effectively, provides a seamless user experience, and helps build trust with potential customers. Additionally, a strong online presence can significantly boost your visibility in search engine results, driving more traffic and potential leads to your business.',
  },
];

export type ValueItem = { icon: ReactNode; title: string; body: string; delay: number };
export const values: ValueItem[] = [
  {
    delay: 0,
    icon: <Zap size={20} />,
    title: 'Ship Fast, Iterate Faster',
    body: "I don't believe in perfection before launch. I believe in momentum. Get it live, get it in front of users, gather signal, and make it better. The best products are built in cycles, not in isolation. Every deploy is data. Every user interaction is feedback. I treat shipping as the beginning of the process, not the end.",
  },
  {
    delay: 120,
    icon: <Heart size={20} />,
    title: 'Build for Humans First',
    body: 'Technology is a means, not an end. Every component I build, every interaction I design, every loading state I craft — it all exists to serve a real person on the other side of the screen. I hold myself to the standard of the least patient, most distracted user imaginable. If it works for them, it works for everyone.',
  },
  {
    delay: 240,
    icon: <Code2 size={20} />,
    title: 'Code That Communicates',
    body: "I write code for the next developer who reads it, not just for the machine that runs it. Clean variable names, purposeful abstractions, documented edge cases — these aren't luxuries, they're professional responsibility. Technical debt is a choice, and I choose not to impose it on future teammates or future me.",
  },
];