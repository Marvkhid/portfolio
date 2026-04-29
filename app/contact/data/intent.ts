// app/contact/data/intents.ts

export type Intent = "website" | "consult" | "project" | "speak";

export const INTENTS: {
  id: Intent;
  label: string;
  icon: string;
  desc: string;
}[] = [
  { id: "website", label: "Need a Website",     icon: "🌐", desc: "Build or redesign" },
  { id: "consult", label: "Consult Me",          icon: "💡", desc: "Strategy session" },
  { id: "project", label: "Add Me to a Project", icon: "🤝", desc: "Collaboration" },
  { id: "speak",   label: "Invite Me to Speak",  icon: "🎤", desc: "Events & talks" },
];

export const INTENT_COPY: Record<Intent, { title: string; sub: string }> = {
  website: {
    title: "Let&apos;s Build Your Dream Website",
    sub:   "Tell me about your project and I&apos;ll craft the perfect digital home for your brand.",
  },
  consult: {
    title: "Book a Strategy Session",
    sub:   "Got a challenge? Let&apos;s solve it together — one focused session at a time.",
  },
  project: {
    title: "Add Marvel to Your Team",
    sub:   "Looking for a skilled collaborator? Share the scope and let&apos;s create something remarkable.",
  },
  speak: {
    title: "Invite Me to Your Event",
    sub:   "Conferences, webinars, workshops — let&apos;s get your audience inspired.",
  },
};

export const WEBSITE_TYPES = ["Ecommerce", "Portfolio", "Brand Website", "Landing Page", "Blog", "Other"];
export const BUDGET_OPTIONS = ["$150–$300", "$300–$500", "$500–$1000", "$1000–$2000", "$2000+"];
export const CONSULT_TOPICS = ["Website Review", "Technical Advice", "Design Feedback", "Branding Strategy", "Something Else"];
export const DURATION_OPTIONS = ["15 mins", "30 mins", "60 mins"];
export const ROLE_OPTIONS = ["Frontend Dev", "Fullstack Dev", "UI/UX", "Web Designer", "Other"];
export const PROJECT_BUDGET_OPTIONS = ["$500–$1000", "$1000–$3000", "$3000–$5000", "$5000–$10000", "$10000+"];
export const EVENT_TYPES = ["Conference", "Webinar", "Workshop", "Panel", "Podcast", "Other"];
export const SERVICE_TYPES = [
  "Get Me Online",
  "Website",
  "Glow Up / Revamp",
  "One-Day Website",
  "Ecommerce (Shop & Sell)",
  "Do It All For Me",
];