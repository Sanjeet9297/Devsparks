export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  ctaText: string;
  ctaHref: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  artLabel: string;
  description: string;
  tags: string[];
  gradientTheme: string;
}

export interface ProcessStep {
  step: string;
  phase: string;
  title: string;
  description: string;
}

export interface WhyItem {
  icon: string;
  title: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  service: string;
  message: string;
}

