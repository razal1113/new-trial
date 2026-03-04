import { ScrollReveal } from './ScrollReveal';
import { ContactForm } from './ContactForm';
import { contactContent } from '@/data/content';
import { Linkedin, Mail, Phone } from 'lucide-react';

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

        <div className="grid gap-10 lg:grid-cols-3 lg:gap-8">
          {/* Company Info */}
          <ScrollReveal direction="up" delay={0}>
            <div>
              <img
                src={`${import.meta.env.BASE_URL}images/repower-logo.png`}
                alt="rePWER"
                className="mb-6 h-12 w-auto object-contain brightness-0 invert opacity-80"
              />
              <div className="space-y-1 text-white/70 text-base">
                <p>{contactContent.address.street}</p>
                <p>{contactContent.address.city}</p>
              </div>

              <div className="space-y-4 text-base mt-6">
                <a
                  href={`mailto:${contactContent.email}`}
                  className="flex items-center gap-3 text-white/70 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                  {contactContent.email}
                </a>
                {contactContent.phone && (
                  <a
                    href={`tel:${contactContent.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-3 text-white/70 transition-colors hover:text-white"
                  >
                    <Phone className="h-4 w-4" />
                    {contactContent.phone}
                  </a>
                )}
              </div>

              <a
                href="https://www.linkedin.com/in/andreaskbjork/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-gray-600 transition-opacity hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </ScrollReveal>

          {/* Contact blurb */}
          <ScrollReveal direction="up" delay={0.1}>
            <div className="space-y-6">
              <p className="leading-relaxed text-white/70 text-base">
                {contactContent.blurb}
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
