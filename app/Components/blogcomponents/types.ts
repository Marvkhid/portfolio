export type Category =
  | 'All'
  | 'AI'
  | 'Web Dev'
  | 'Industry Trends'
  | 'Productivity';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: Exclude<Category, 'All'>;
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  editorsPick?: boolean;
  trending?: boolean;
  tag?: string;
}