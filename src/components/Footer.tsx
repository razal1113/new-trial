import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="bg-primary-dark py-6">
      <div className="mx-auto max-w-6xl widescreen:max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center text-center"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/repower-logo.png`}
            alt="rePWER"
            className="h-8 md:h-10 w-auto mb-6 mix-blend-screen opacity-80"
          />
          <div className="pt-8 border-t border-white/10 w-full">
            <div className="flex items-center justify-center">
              <p className="text-center text-[7px] md:text-[12px] text-white/40 md:text-white/50">
                Copyright © Andreas Björk / rePWER. All rights reserved.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
