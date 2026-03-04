import { ScrollReveal } from './ScrollReveal';
import { ContactForm } from './ContactForm';
import { contactContent } from '@/data/content';
import { Linkedin, Mail } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="relative py-16 md:py-20 lg:py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-primary" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl widescreen:max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <ScrollReveal direction="up" className="mb-12">
          <h2 className="font-serif leading-tight tracking-section text-primary text-4xl">
            {contactContent.heading}
          </h2>
        </ScrollReveal>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Company Info column */}
          <ScrollReveal direction="up" delay={0}>
            <div className="space-y-10">
              <div>
                <img
                  src={`${import.meta.env.BASE_URL}images/repower-logo.png`}
                  alt="rePWER"
                  className="mb-8 h-12 w-auto object-contain brightness-0 invert opacity-80"
                />

                <div className="space-y-8">
                  {/* Address & Email */}
                  <div className="space-y-4">
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

          {/* Contact Form column */}
          <ScrollReveal direction="up" delay={0.2}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
