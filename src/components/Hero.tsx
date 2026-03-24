import { motion, useScroll, useTransform } from 'framer-motion';
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
        className="absolute inset-0 z-0"
      >
        <img
          src={`${import.meta.env.BASE_URL}images/new-hero.jpg`}
          alt="Hero Background"
          className="h-full w-full object-cover grayscale contrast-125"
        />
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-[#292927]/70 mix-blend-multiply"
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
            src={`${import.meta.env.BASE_URL}images/repwer-logo.png`}
            alt="rePWER"
            className="mx-auto h-32 w-auto object-contain md:h-44 lg:h-56 mix-blend-screen"
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
          className="text-center px-4 md:px-0"
        >
          <p className="text-white text-lg md:text-2xl lg:text-3xl font-medium tracking-wide max-w-3xl mx-auto drop-shadow-sm">
            Product &amp; program leadership for complex IT delivery
          </p>
        </motion.div>
      </div>
    </section>
  );
}
