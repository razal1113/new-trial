import type { Slide, TeamMember, Service, NavItem } from '@/types';

export const navItems: NavItem[] = [
  { id: 'services', label: 'WHAT I DO', href: '#services' },
  { id: 'recommendations', label: 'RECOMMENDATIONS', href: '#team' },
  { id: 'about', label: 'ABOUT', href: '#about' },
  { id: 'contact', label: 'CONTACT', href: '#contact' },
];

export const heroSlides: Slide[] = [];

export const services: Service[] = [
  {
    id: 1,
    icon: 'Map',
    title: 'PRODUCT & PROGRAM LEADERSHIP',
    description: 'Driving execution from strategy to delivery. Leading roadmaps, dependencies and outcomes across multiple teams and stakeholders. Acting as the connective tissue between executive intent and day-to-day delivery.',
  },
  {
    id: 2,
    icon: 'Network',
    title: 'COMPLEX SYSTEMS & PLATFORM DELIVERY',
    description: 'Leading initiatives involving multiple platforms, integrations and legacy constraints including migrations, platform modernisation and operating model changes.',
  },
  {
    id: 3,
    icon: 'CreditCard',
    title: 'FINTECH & PAYMENTS DOMAIN EXPERTISE',
    description: 'Hands-on leadership in card and credit products including authorisation flows, clearing and settlement, ledgers, balances and sub-balances, billing cycles, interest and repayment mechanics.',
  },
  {
    id: 4,
    icon: 'LayoutGrid',
    title: 'SOLUTION DESIGN & ORGANISATIONAL ALIGNMENT',
    description: 'Facilitating structured solution design across product, engineering, operations and leadership. Creating shared definitions, documentation and decision frameworks that reduce ambiguity and accelerate execution.',
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Monika Liikamaa',
    title: 'Co-Founder & CEO, Enfuce',
    bio: '"I very rarely write official recommendations — I\'m critical by nature and hold the bar high. But Andreas absolutely earns this one.\n\nOver the past 1.5 years, I\'ve had the pleasure of working with Andreas on a very high-stakes initiative, and I\'m immensely grateful for the impact he\'s made. He\'s one of the sharpest, most effective consultants I\'ve worked with.\n\nAndreas brings clarity, structure and momentum exactly when it\'s needed most. Whether delivery is blocked, teams are misaligned, or a critical program needs acceleration, he steps in, takes ownership and gets things moving. What truly sets him apart is his deep expertise in payments and banking combined with his ability to align business and technical priorities in complex, fast-paced environments. He doesn\'t just advise — he leads, commits and delivers real results.\n\nIf you\'re taking on a critical, cross-functional initiative and need someone who can drive it from day one — Andreas is the person to call."',
    image: 'images/monika.jpg',
  },
  {
    id: 2,
    name: 'Matias Sandås',
    title: 'Business Transformation, Mirka',
    bio: '"My experience of working with Andreas was excellent. He has a strong ability to understand complex situations — also outside of IT and software development — and make them simple. He clarifies agility in a pedagogical and practical way so that different people can understand how it applies to them.\n\nDuring his 1.5 years in our Customer Experience Program, Andreas made a significant impact. In a hands-on way, he helped us kick-start our agile transformation journey. I highly recommend Andreas to any organisation that is serious about creating an agile, continuous learning and collaborative team culture."',
    image: 'images/matias.jpg',
  },
];

export const aboutContent = {
  heading: 'ABOUT',
  body: `I'm Andreas Björk, an independent consultant operating through rePWER.

I specialise in complex product and technology initiatives where clarity, structure and execution matter. I typically work at the intersection of business, product and engineering, helping organisations turn ambitious plans into working products.

Although I've focused on fintech and payments in recent years, my core strength is leading complex delivery regardless of domain, aligning leadership, creating shared understanding and keeping execution moving in environments with many dependencies.

My style is hands-on and structured. I focus on building clarity early, reducing risk through transparency and helping teams deliver real outcomes, not just plans.

Based in Vaasa, Finland. Remote-first, available for on-site work when needed.`,
};

export const costContent = {
  heading: 'Product & program leadership for complex IT delivery',
  body: `Proven in fintech and payments

I help organisations deliver high-stakes, complex IT initiatives where multiple systems, teams and stakeholders must move in the same direction.

My background is primarily in fintech and payments, but my core expertise is leading complex product and program delivery, aligning business, technology and operations to turn ambitious plans into working outcomes.

Independent consultant based in Finland.`,
};

export const contactInfo = {
  company: 'rePWER',
  address: 'Vaasa, Finland',
  postalCode: '',
  phone: '',
  email: 'andreas@repwer.fi',
  businessId: '',
};

export const contactContent = {
  heading: 'GET IN TOUCH',
  address: {
    street: 'Vaasa',
    city: 'Finland',
    country: ''
  },
  email: 'andreas@repwer.fi',
  phone: '',
  blurb: "I work with a small number of clients at a time. If you're facing a high-stakes delivery challenge, a platform transformation or a program that needs to move faster — I'd like to hear about it."
};
