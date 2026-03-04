import { motion } from 'framer-motion';
import type { TeamMember } from '@/types';

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

export function TeamCard({ member, index }: TeamCardProps) {
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
      className="group"
    >
      {/* Info */}
      <div>
        <p className="mb-1 font-serif uppercase tracking-section text-primary">
          {member.name}
        </p>
        <p className="mb-3 uppercase tracking-nav text-gray-500">
          {member.title}
        </p>
        <p className="leading-relaxed text-gray-500 whitespace-pre-line">
          {member.bio}
        </p>
      </div>
    </motion.div>
  );
}
