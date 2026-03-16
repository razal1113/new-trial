import { ScrollReveal } from './ScrollReveal';
import { contactContent } from '@/data/content';
import { Linkedin, Mail } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="relative py-16 md:py-20 lg:py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-primary" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl widescreen:max-w-[1200px] px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Title */}
        <ScrollReveal direction="up" className="mb-12">
          <h2 className="font-serif leading-tight tracking-section text-primary text-4xl">
            {contactContent.heading}
          </h2>
        </ScrollReveal>

        <div className="flex flex-col items-center justify-center max-w-2xl mx-auto">
          {/* Company Info column */}
          <ScrollReveal direction="up" delay={0}>
            <div className="space-y-10 flex flex-col items-center">
              <div className="flex flex-col items-center">
                <img
                  src={`${import.meta.env.BASE_URL}images/repower-logo.png`}
                  alt="rePWER"
                  className="mb-8 h-12 w-auto object-contain mix-blend-screen"
                />

                <div className="space-y-8 flex flex-col items-center">
                  {/* Address & Email */}
                  <div className="space-y-4 flex flex-col items-center">
                    <div className="space-y-1 uppercase tracking-nav text-lg text-white/70">
                      <p>{contactContent.address.street}</p>
                      <p>{contactContent.address.city}</p>
                    </div>

                    <a
                      href={`mailto:${contactContent.email}`}
                      className="flex items-center gap-3 uppercase tracking-nav text-lg text-white/70 transition-colors hover:text-white"
                    >
                      <Mail className="h-5 w-5" />
                      {contactContent.email}
                    </a>
                  </div>

                  {/* Blurb Paragraph */}
                  <div className="max-w-md">
                    <p className="leading-relaxed text-white/70 text-base">
                      {contactContent.blurb}
                    </p>
                  </div>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/andreaskbjork/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white/50 transition-opacity hover:text-white"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="uppercase tracking-nav text-xs">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
