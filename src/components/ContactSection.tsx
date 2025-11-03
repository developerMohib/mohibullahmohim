'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Mail } from 'lucide-react';
import { useTheme } from 'next-themes';
import { BookForm } from './Bookform';
import { useRouter } from 'next/navigation';
const ContactSection = () => {

    const { theme } = useTheme();
    const [isBookFormOpen, setIsBookFormOpen] = useState(false);
    const openBookForm = () => setIsBookFormOpen(true);
    const closeBookForm = () => setIsBookFormOpen(false);
    const router = useRouter();

    const allProjectlinkup = () => {
        router.push('/all-projects');
    }
    // Text color classes based on theme
    const getTextColor = (type: 'primary' | 'secondary' = 'primary') => {
        if (type === 'primary') {
            return theme === 'light' ? 'text-gray-900' : 'text-white';
        }
        return theme === 'light' ? 'text-gray-600' : 'text-gray-400';
    };


    // CTA section background based on theme
    const getCTABackground = () => {
        return theme === 'light'
            ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20"
            : "bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20";
    };
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
                    className={`${getCTABackground()} rounded-3xl p-12 backdrop-blur-sm`}
                >
                    <h2 className={`text-3xl md:text-4xl font-bold ${getTextColor('primary')} mb-4`}>
                        Ready to Bring Your Idea to Life?
                    </h2>
                    <p className={`text-xl ${getTextColor('secondary')} mb-8 max-w-2xl mx-auto`}>
                        Let&apos;s collaborate to create something extraordinary. Your vision, my expertise - together we can build the future.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button onClick={openBookForm} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                            <Mail className="w-5 h-5 mr-2" />
                            Start a Project
                        </Button>
                        <Button onClick={allProjectlinkup}
                            variant="outline"
                            className={`${theme === 'light'
                                ? 'border-gray-400 text-gray-700 hover:bg-gray-200'
                                : 'border-gray-600 text-gray-300 hover:bg-gray-800'
                                } px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300`}
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