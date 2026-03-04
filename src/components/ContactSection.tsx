import { ScrollReveal } from './ScrollReveal';
import { ContactForm } from './ContactForm';
import { contactInfo } from '@/data/content';
import { Linkedin } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="relative py-16 md:py-20 lg:py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-primary" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <ScrollReveal direction="up" className="mb-12">
          <h2 className="font-serif text-2xl font-normal uppercase tracking-section text-white md:text-3xl lg:text-4xl">
            Get in Touch
          </h2>
        </ScrollReveal>

        <div className="grid gap-10 lg:grid-cols-3 lg:gap-8">
          {/* Company Info */}
          <ScrollReveal direction="up" delay={0}>
            <div>
              <img
                src={`${import.meta.env.BASE_URL}images/repower-logo.png`}
                alt="rePWER"
                className="mb-6 h-12 w-auto object-contain brightness-0 invert opacity-80"
              />
              <div className="space-y-1 text-xs text-white/60">
                <p className="font-medium text-white/80">{contactInfo.address}</p>
                {contactInfo.email && (
                  <p className="mt-3">
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="link-underline hover:text-white"
                    >
                      {contactInfo.email}
                    </a>
                  </p>
                )}
              </div>

              <div className="mt-6 space-y-3">
                <a
                  href="https://calendly.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-white/40 px-4 py-2 text-xs font-medium uppercase tracking-nav text-white/80 transition-all duration-300 hover:border-white hover:text-white"
                >
                  Get in touch
                </a>
              </div>

              <a
                href="https://www.linkedin.com/in/andreaskbjork/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-white/60 transition-opacity hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </ScrollReveal>

          {/* Contact blurb */}
          <ScrollReveal direction="up" delay={0.1}>
            <div>
              <p className="text-sm md:text-base leading-relaxed text-white/60">
                I work with a small number of clients at a time. If you're facing a high-stakes delivery challenge, a platform transformation or a program that needs to move faster — I'd like to hear about it.
              </p>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="up" delay={0.2}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
