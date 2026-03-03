import { ScrollReveal } from './ScrollReveal';
import { aboutContent } from '@/data/content';

export function AboutSection() {
  return (
    <section id="about" className="bg-white">
      <div className="max-w-3xl px-8 py-16 md:px-12 md:py-20 lg:px-16 lg:py-24">
        {/* Text Content */}
        <ScrollReveal direction="left" className="flex items-center">
          <div>
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
      </div>
    </section>
  );
}
