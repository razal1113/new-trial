import { motion } from 'framer-motion';

export function BarAssociationSection() {
  return (
    <section className="relative py-16 md:py-20 lg:py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-primary" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col items-center text-center"
        >
          {/* Fintech / Payments Icon */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="mb-6"
          >
            <svg
              viewBox="0 0 100 100"
              className="h-20 w-20 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              {/* Card shape */}
              <rect x="15" y="28" width="70" height="44" rx="4" />
              {/* Magnetic stripe / chip */}
              <rect x="15" y="40" width="70" height="10" />
              {/* Card number dots */}
              <circle cx="30" cy="62" r="2" fill="currentColor" />
              <circle cx="40" cy="62" r="2" fill="currentColor" />
              <circle cx="50" cy="62" r="2" fill="currentColor" />
              <circle cx="60" cy="62" r="2" fill="currentColor" />
              {/* Settlement arrows */}
              <path d="M20 20 L35 12 L35 28 Z" />
              <path d="M80 80 L65 88 L65 72 Z" />
              {/* Connection line */}
              <line x1="35" y1="20" x2="65" y2="80" strokeDasharray="3,3" />
            </svg>
          </motion.div>

          <p className="font-serif uppercase tracking-section text-white">
            Fintech & Payments · Platform Delivery · Program Leadership
          </p>
        </motion.div>
      </div>
    </section>
  );
}
