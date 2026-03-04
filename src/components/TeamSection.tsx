import { TeamCard } from './TeamCard';
import { teamMembers } from '@/data/content';
import { ScrollReveal } from './ScrollReveal';

export function TeamSection() {
  return (
    <section id="team" className="bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" className="mb-12">
          <h2 className="font-serif leading-tight tracking-section text-primary text-4xl break-words hyphens-auto">
            Recommendations
          </h2>
        </ScrollReveal>
        <div className="grid gap-8 sm:grid-cols-2 lg:gap-12">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={member.id}
              member={member}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
