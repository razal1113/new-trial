import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import type { TeamMember } from '@/types';

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

export function TeamCard({ member, index }: TeamCardProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const distance = isMobile ? 15 : 20;

  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className="group"
    >
      {/* Info */}
      <div>
        <p className="mb-1 font-serif uppercase tracking-section text-primary text-lg md:text-xl">
          {member.name}
        </p>
        <p className="mb-3 uppercase tracking-nav text-gray-500 text-sm md:text-base">
          {member.title}
        </p>
        <p className="leading-relaxed text-gray-500 whitespace-pre-line text-sm md:text-base">
          {member.bio}
        </p>
      </div>
    </motion.div>
  );
}
