# Träskbäck & Co - Technical Specification

## 1. Tech Stack Overview

| Category | Technology |
|----------|------------|
| Framework | React 18 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS 3.4 |
| UI Components | shadcn/ui |
| Animation | Framer Motion |
| Icons | Lucide React |
| Fonts | Google Fonts (Cormorant Garamond, Open Sans, Dancing Script) |

## 2. Tailwind Configuration

```javascript
// tailwind.config.js extensions
{
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a4d4d',
          dark: '#0f3333',
          light: '#2d6666',
        },
        teal: {
          overlay: 'rgba(26, 77, 77, 0.85)',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Open Sans', 'sans-serif'],
        script: ['Dancing Script', 'cursive'],
      },
      letterSpacing: {
        'hero': '0.15em',
        'section': '0.1em',
        'nav': '0.1em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'draw': 'draw 1.2s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        draw: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
      },
    },
  },
}
```

## 3. Component Inventory

### Shadcn/UI Components (Pre-installed)
- Button (customized for transparent/outline style)
- Input (customized for underline style)
- Textarea (customized for underline style)
- Sheet (for mobile navigation)

### Custom Components

| Component | Props | Description |
|-----------|-------|-------------|
| `Hero` | - | Full-screen hero with slider |
| `HeroSlider` | slides: Slide[] | Auto-advancing text slider |
| `Navigation` | - | Fixed header with hamburger menu |
| `MobileMenu` | isOpen, onClose | Full-screen mobile navigation |
| `Section` | id, className, children | Wrapper with scroll animations |
| `AboutSection` | - | Two-column about layout |
| `ServicesSection` | - | 6-card service grid |
| `ServiceCard` | icon, title, description | Individual service card |
| `CostSection` | - | Two-column cost/help layout |
| `BarAssociationSection` | - | Membership badge section |
| `TeamSection` | - | 4-column team grid |
| `TeamCard` | member: TeamMember | Individual team member card |
| `ContactSection` | - | Three-column contact layout |
| `ContactForm` | - | Form with validation |
| `Footer` | - | Simple footer |
| `ScrollReveal` | children, delay | Scroll-triggered animation wrapper |

### Type Definitions

```typescript
interface Slide {
  id: number;
  lines: string[];
}

interface TeamMember {
  id: number;
  name: string;
  title: string;
  bio: string;
  image: string;
  phone?: string;
  email?: string;
}

interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
}
```

## 4. Animation Implementation Plan

| Interaction | Tech Choice | Implementation |
|-------------|-------------|----------------|
| Page Load Sequence | Framer Motion | `AnimatePresence` + staggered `motion.div` |
| Hero Logo Draw | CSS + SVG | SVG path animation with `stroke-dasharray` |
| Hero Slider | Framer Motion | `AnimatePresence` with fade transitions |
| Scroll Reveal | Framer Motion | `whileInView` with `viewport={{ once: true }}` |
| Nav Menu Toggle | Framer Motion | `AnimatePresence` for slide-in menu |
| Hamburger to X | CSS Transform | Rotate and translate lines |
| Button Hover | Tailwind + CSS | `before` pseudo-element slide animation |
| Card Hover | Tailwind | `hover:scale-[1.02]` transition |
| Team Photo Hover | Tailwind | `hover:scale-105` on image |
| Form Focus | Tailwind | `focus:border-white` transition |
| Link Underline | CSS | `::after` pseudo-element width animation |

### Animation Timing Reference

| Animation | Duration | Easing | Delay |
|-----------|----------|--------|-------|
| Hero bg fade | 0.8s | ease-out | 0s |
| Logo draw | 1.2s | ease-in-out | 0.3s |
| Tagline fade | 0.6s | ease-out | 0.8s |
| Nav icon fade | 0.4s | ease-out | 1s |
| Slide transition | 0.8s | ease-in-out | - |
| Scroll reveal | 0.6s | cubic-bezier(0.25, 0.1, 0.25, 1) | - |
| Stagger delay | - | - | 0.1s |
| Micro-interactions | 0.3s | ease-out | - |
| Menu slide | 0.3s | ease-in-out | - |

## 5. Project File Structure

```
/mnt/okcomputer/output/app/
├── public/
│   ├── images/
│   │   ├── hero-bg.jpg
│   │   ├── team-photo.jpg
│   │   ├── services-bg.jpg
│   │   ├── books-detail.jpg
│   │   ├── anni-leena.jpg
│   │   ├── anna-maria.jpg
│   │   ├── timo.jpg
│   │   └── nina.jpg
│   └── fonts/ (if needed)
├── src/
│   ├── components/
│   │   ├── ui/ (shadcn components)
│   │   ├── Hero.tsx
│   │   ├── HeroSlider.tsx
│   │   ├── Navigation.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── CostSection.tsx
│   │   ├── BarAssociationSection.tsx
│   │   ├── TeamSection.tsx
│   │   ├── TeamCard.tsx
│   │   ├── ContactSection.tsx
│   │   ├── ContactForm.tsx
│   │   ├── Footer.tsx
│   │   └── ScrollReveal.tsx
│   ├── hooks/
│   │   └── useScrollPosition.ts
│   ├── types/
│   │   └── index.ts
│   ├── data/
│   │   └── content.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## 6. Package Installation List

```bash
# Initialize project
bash /app/.kimi/skills/webapp-building/scripts/init-webapp.sh "Traskback & Co"

# Install animation library
npm install framer-motion

# Install Google Fonts (via CDN in index.html)
# No npm package needed
```

## 7. Key Implementation Notes

### Hero Slider Logic
- Auto-advance every 5 seconds
- Manual navigation dots
- Pause on hover
- Fade transition between slides

### Mobile Menu
- Full-screen overlay
- Slide in from right
- Lock body scroll when open
- Close on link click or outside click

### Scroll Animations
- Use Framer Motion's `whileInView`
- Trigger once per element
- Stagger children by 0.1s
- Respect `prefers-reduced-motion`

### Form Handling
- Client-side validation
- Visual feedback on focus/error
- No actual submission (static site)
- Success message display

### Image Optimization
- Use WebP format where possible
- Lazy load below-fold images
- Provide appropriate srcset for responsive images

## 8. Accessibility Considerations

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus visible states
- Color contrast compliance (WCAG AA)
- Reduced motion support
- Screen reader friendly content
