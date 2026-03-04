import { ScrollReveal } from './ScrollReveal';
import { aboutContent } from '@/data/content';

export function AboutSection() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-6xl widescreen:max-w-[1200px] px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        {/* Text Content */}
        <ScrollReveal direction="up" className="flex items-center">
          <div>
            <h2 className="mb-8 font-serif leading-tight tracking-section text-primary text-2xl md:text-4xl">
              {aboutContent.heading}
            </h2>
            <div className="space-y-6 leading-relaxed text-gray-600 text-base">
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
