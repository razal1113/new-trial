import { motion, useScroll, useTransform } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const distanceLogo = isMobile ? 20 : 30; // Slightly reduced from native sizes
  const distanceContent = isMobile ? 15 : 20;

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
          initial={{ opacity: 0, y: distanceLogo, scale: 0.95 }}
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
          initial={{ opacity: 0, y: distanceContent }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.2, // Incremented delay from 0.8 to 1.2
            duration: 1.0,
            ease: [0.33, 1, 0.68, 1]
          }}
          className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6"
        >
          <a
            href="#contact"
            className="inline-block border border-white px-4 py-1.5 text-[10px] sm:px-6 sm:py-2 sm:text-xs font-medium uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white hover:text-primary"
          >
            Get in touch
          </a>
          <a
            href="https://www.linkedin.com/in/andreaskbjork/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/50 px-3 py-1.5 text-[10px] sm:px-5 sm:py-2 sm:text-xs font-medium uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-white hover:bg-white/10"
          >
            <Linkedin className="h-3 w-3 sm:h-4 sm:w-4" />
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
