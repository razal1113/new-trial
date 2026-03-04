import { useState } from 'react';
import { motion } from 'framer-motion';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1 block uppercase tracking-nav text-white/60">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="input-underline"
          placeholder=""
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block uppercase tracking-nav text-white/60">
          Email or Phone
        </label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="input-underline"
          placeholder=""
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block uppercase tracking-nav text-white/60">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={3}
          className="input-underline resize-none"
          placeholder=""
        />
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="btn-outline mt-6 w-full"
        disabled={isSubmitted}
      >
        <span>
          {isSubmitted ? 'Thank you! Message sent.' : 'SEND MESSAGE'}
        </span>
      </motion.button>
    </form>
  );
}
