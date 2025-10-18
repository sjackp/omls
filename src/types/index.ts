export interface NavLink {
  href: string;
  label: string;
}

export interface HeaderContent {
  navLinks: NavLink[];
  enroll: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  cta: string;
}

export interface AboutContent {
  title: string;
  p1: string;
  p2: string;
}

export interface ProgramItem {
  title: string;
  description: string;
}

export interface ProgramsContent {
  title: string;
  subtitle: string;
  items: ProgramItem[];
}

export interface Feature {
  title: string;
  description: string;
}

export interface WhyUsContent {
  title: string;
  subtitle: string;
  features: Feature[];
}

export interface Testimonial {
  name: string;
  quote: string;
}

export interface TestimonialsContent {
  title: string;
  items: Testimonial[];
}

export interface FooterContent {
  contactTitle: string;
  address: string;
  phone: string;
  email: string;
  linksTitle: string;
  link1: string;
  link2: string;
  link3: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaButton: string;
  copyright: string;
}

export interface ModalContent {
  title: string;
  subtitle: string;
  parentName: string;
  parentPlaceholder: string;
  childName: string;
  childPlaceholder: string;
  grade: string;
  gradePlaceholder: string;
  email: string;
  emailPlaceholder: string;
  phone: string;
  phonePlaceholder: string;
  submit: string;
  successMessage: string;
}

export interface Translations {
  languageName: string;
  header: HeaderContent;
  hero: HeroContent;
  about: AboutContent;
  programs: ProgramsContent;
  whyUs: WhyUsContent;
  testimonials: TestimonialsContent;
  footer: FooterContent;
  modal: ModalContent;
}

export interface LanguageContextType {
  language: 'en' | 'ar';
  setLanguage: (lang: 'en' | 'ar') => void;
  content: Translations;
}
