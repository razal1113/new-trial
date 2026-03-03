import { motion, useScroll, useTransform } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import { useRef } from 'react';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.2]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <motion.div
        style={{ opacity, scale, y }}
        className="absolute inset-0"
      >
        <img
          src={`${import.meta.env.BASE_URL}images/hero-building.jpg`}
          alt=""
          className="h-full w-full object-cover"
        />
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-[#617c85]/60"
        />
      </motion.div>


      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1.2,
            ease: [0.33, 1, 0.68, 1]
          }}
          className="mb-12 text-center"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/repower-logo.png`}
            alt="RE PWER"
            className="mx-auto h-32 w-auto object-contain md:h-44 lg:h-56"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8,
            duration: 1.0,
            ease: [0.33, 1, 0.68, 1]
          }}
          className="flex flex-col items-center gap-6 sm:flex-row"
        >
          <a
            href="#contact"
            className="inline-block border border-white px-10 py-3 text-sm font-medium uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white hover:text-primary"
          >
            Get in touch
          </a>
          <a
            href="https://www.linkedin.com/in/andreasbjork/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/50 px-8 py-3 text-sm font-medium uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-white hover:bg-white/10"
          >
            <Linkedin className="h-5 w-5" />
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
