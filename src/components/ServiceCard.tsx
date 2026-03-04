import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import {
  Map,
  Network,
  CreditCard,
  LayoutGrid,
  Layers,
  GitBranch,
  Shield,
  Briefcase,
} from 'lucide-react';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  index: number;
}

const iconMap: Record<string, LucideIcon> = {
  Map,
  Network,
  CreditCard,
  LayoutGrid,
  Layers,
  GitBranch,
  Shield,
  Briefcase,
};

export function ServiceCard({ icon, title, description, index }: ServiceCardProps) {
  const IconComponent = iconMap[icon] || Briefcase;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className="group flex flex-col items-center text-center px-4"
    >
      <div className="mb-5 transition-transform duration-300 group-hover:scale-110">
        <IconComponent
          className="h-10 w-10 text-white/90"
          strokeWidth={1}
        />
      </div>
      <p className="mb-4 uppercase tracking-nav text-white">
        {title}
      </p>
      <p className="leading-relaxed text-white/70 whitespace-pre-line">
        {description}
      </p>
    </motion.div>
  );
}
