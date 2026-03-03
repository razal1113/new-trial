import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="bg-primary-dark py-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center text-center"
        >
          <div className="h-6" />
        </motion.div>
      </div>
    </footer>
  );
}
