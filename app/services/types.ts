export interface FAQ {
  q: string;
  a: string;
  isList?: boolean;
  listItems?: string[];
  prefix?: string;
}

export interface Service {
  id: number;
  tag: string;
  tagIcon: string;
  title1: string;
  title2: string;
  description: string;
  image: string;
  faqs: FAQ[];
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  country: string;
  text: string;
  initials: string;
  image: string;
}