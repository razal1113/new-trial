import { ServiceCard } from './ServiceCard';
import { services } from '@/data/content';
import { ScrollReveal } from './ScrollReveal';

export function ServicesSection() {
  return (
    <section id="services" className="relative py-16 md:py-20 lg:py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-primary" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <ScrollReveal direction="up" className="mb-12 text-center">
          <h2 className="font-serif text-2xl font-normal uppercase tracking-section text-white md:text-3xl lg:text-4xl">
            What I do
          </h2>
        </ScrollReveal>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
