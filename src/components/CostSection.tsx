import { Linkedin } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { costContent } from '@/data/content';

export function CostSection() {
  return (
    <section id="intro" className="bg-white">
      <div className="grid lg:grid-cols-2">
        {/* Text Content */}
        <ScrollReveal direction="left" className="flex items-center">
          <div className="py-16 px-8 md:py-20 md:px-12 lg:py-24 lg:px-16">
            <h2 className="mb-8 font-serif text-2xl font-normal uppercase leading-tight tracking-section text-primary md:text-3xl lg:text-4xl">
              {costContent.heading}
            </h2>
            <div className="space-y-6 text-sm leading-relaxed text-gray-600 md:text-base">
              {costContent.body.split('\n\n').map((paragraph, index) => (
                <p key={index} className={index === 0 ? "font-medium text-primary text-lg" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="https://www.linkedin.com/in/andreasbjork/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-primary px-8 py-3 text-sm font-medium uppercase tracking-[0.2em] text-primary transition-all duration-300 hover:bg-primary hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Image */}
        <ScrollReveal direction="right" delay={0.2} className="relative min-h-[400px] lg:min-h-full">
          <img
            src={`${import.meta.env.BASE_URL}images/andreas-about.jpg`}
            alt="Andreas Björk"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
