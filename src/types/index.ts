export interface ActionLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface StoryPoint {
  title: string;
  description: string;
}

export interface ServiceCategory {
  title: string;
  description: string;
  services: string[];
}

export interface GalleryCard {
  title: string;
  description: string;
  tone: "warm" | "neutral" | "dark";
}

export interface TestimonialCard {
  quote: string;
  source: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ExperienceCard {
  eyebrow: string;
  title: string;
  description: string;
}
