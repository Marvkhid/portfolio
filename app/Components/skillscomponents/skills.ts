export type SkillLevel = 'expert' | 'advanced' | 'intermediate' | 'familiar';

export interface Skill {
  name: string;
  icon: string;        // emoji or image path
  useImage?: boolean;  // if true, icon is an image path
  level: SkillLevel;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  accent: string;       // Tailwind color token e.g. 'sky'
  accentHex: string;    // raw hex for inline styles
  bgFrom: string;       // gradient from class
  bgTo: string;         // gradient to class
  borderColor: string;  // border class
  icon: string;         // category emoji
  skills: Skill[];
}