import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems } from '@/data/content';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.4 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-6 right-6 z-50 flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition-colors duration-300 ${isScrolled && !isOpen ? 'bg-primary/80' : ''
          }`}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <motion.span
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 8 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="block h-0.5 w-6 bg-white"
        />
        <motion.span
          animate={{
            opacity: isOpen ? 0 : 1,
          }}
          transition={{ duration: 0.3 }}
          className="block h-0.5 w-6 bg-white"
        />
        <motion.span
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? -8 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="block h-0.5 w-6 bg-white"
        />
      </motion.button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-40 bg-primary"
          >
            <div className="flex h-full flex-col items-center justify-center">
              <nav className="flex flex-col items-center gap-8">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    onClick={handleLinkClick}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                    className="text-xl font-medium uppercase tracking-nav text-white transition-opacity hover:opacity-70"
                  >
                    {item.label}
                  </motion.a>
                ))}

              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
