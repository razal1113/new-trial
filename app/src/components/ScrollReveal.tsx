import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className = ''
}: ScrollRevealProps) {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directions[direction]
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0
      }}
      viewport={{ once: true, margin: '-5%' }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.33, 1, 0.68, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
