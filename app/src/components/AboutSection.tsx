import { ScrollReveal } from './ScrollReveal';
import { aboutContent } from '@/data/content';

export function AboutSection() {
  return (
    <section id="about" className="bg-white">
      <div className="grid lg:grid-cols-2">
        {/* Text Content */}
        <ScrollReveal direction="left" className="flex items-center">
          <div className="py-16 px-8 md:py-20 md:px-12 lg:py-24 lg:px-16">
            <h2 className="mb-8 font-serif text-2xl font-normal uppercase leading-tight tracking-section text-primary md:text-3xl lg:text-4xl">
              {aboutContent.heading}
            </h2>
            <div className="space-y-6 text-sm leading-relaxed text-gray-600 md:text-base">
              {aboutContent.body.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Image */}
        <ScrollReveal direction="right" delay={0.2} className="relative min-h-[400px] lg:min-h-full">
          <img
            src={`${import.meta.env.BASE_URL}images/andreas-about.jpg`}
            alt="Andreas Björk, independent consultant"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
