import { ScrollReveal } from './ScrollReveal';
import { aboutContent } from '@/data/content';

export function AboutSection() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        {/* Text Content */}
        <ScrollReveal direction="up" className="flex items-center">
          <div>
            <h2 className="mb-8 font-serif uppercase leading-tight tracking-section text-primary">
              {aboutContent.heading}
            </h2>
            <div className="space-y-6 leading-relaxed text-gray-600">
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
