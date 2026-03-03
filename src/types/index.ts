export interface Slide {
  id: number;
  lines: string[];
}

export interface TeamMember {
  id: number;
  name: string;
  title: string;
  bio: string;
  image: string;
  phone?: string;
  email?: string;
}

export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}
