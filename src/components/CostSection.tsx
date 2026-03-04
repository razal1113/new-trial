import { Linkedin } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { costContent } from '@/data/content';

export function CostSection() {
  return (
    <section id="intro" className="bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text Content */}
          <ScrollReveal direction="up">
            <div className="max-w-xl">
              <h2 className="mb-12 font-serif leading-tight tracking-section text-primary text-4xl">
                {costContent.heading}
              </h2>
              <div className="space-y-6 leading-relaxed text-gray-600 text-base">
                {costContent.body.split('\n\n').map((paragraph, index) => (
                  <p key={index}>
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-10">
                <a
                  href="https://www.linkedin.com/in/andreaskbjork/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-primary px-8 py-3 font-medium uppercase tracking-[0.2em] text-primary transition-all duration-300 hover:bg-primary hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Image Container */}
          <ScrollReveal direction="up" delay={0.2} className="relative w-full">
            <div className="relative aspect-square overflow-hidden bg-gray-50 lg:aspect-[4/5] xl:aspect-square">
              <img
                src={`${import.meta.env.BASE_URL}images/andreas-about.jpg`}
                alt="Andreas Björk"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
