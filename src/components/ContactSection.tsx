'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { BookForm } from './Bookform';

const ContactSection = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isBookFormOpen, setIsBookFormOpen] = useState(false);
  const router = useRouter();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Render SSR-safe fallback, no theme-based classes
    return (
      <section className="rounded-3xl p-12">
        <h2 className="text-3xl md:text-4xl font-bold opacity-0">Please Wait</h2>
      </section>
    );
  }

  const openBookForm = () => setIsBookFormOpen(true);
  const closeBookForm = () => setIsBookFormOpen(false);
  const allProjectlinkup = () => router.push('/all-projects');

  // theme-safe classes AFTER mounted
  const textPrimary = theme === 'light' ? 'text-gray-900' : 'text-white';
  const textSecondary = theme === 'light' ? 'text-gray-600' : 'text-gray-400';
  const buttonOutline =
    theme === 'light'
      ? 'border-gray-400 text-gray-700 hover:bg-gray-200'
      : 'border-gray-600 text-gray-300 hover:bg-gray-800';

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-3xl p-12 backdrop-blur-sm"
        >
          <h2 className={`text-3xl md:text-4xl font-bold ${textPrimary} mb-4`}>
            Ready to Bring Your Idea to Life?
          </h2>

          <p className={`text-xl ${textSecondary} mb-8 max-w-2xl mx-auto`}>
            Let&apos;s collaborate to create something extraordinary. Your vision,
            my expertise - together we can build the future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={openBookForm}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <Mail className="w-5 h-5 mr-2" />
              Start a Project
            </Button>

            <Button
              onClick={allProjectlinkup}
              variant="outline"
              className={`${buttonOutline} px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300`}
            >
              View My Work
            </Button>
          </div>
        </motion.div>
      </div>

      <BookForm isOpen={isBookFormOpen} onClose={closeBookForm} />
    </motion.section>
  );
};

export default ContactSection;
