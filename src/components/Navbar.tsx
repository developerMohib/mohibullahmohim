'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import SolutionsMegaMenu from './Megamenu';
import Logo from './common/Logo';
import { ModeToggle } from './ThemeController';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    // const { theme, systemTheme } = useTheme();

    // Determine current theme for color calculations   
    // const currentTheme = theme === 'system' ? systemTheme : theme;
    // const isDark = currentTheme === 'dark';

 
    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        {
            name: 'Solutions',
            component: SolutionsMegaMenu
        },
        { name: 'Support', href: '/support' },
        { name: 'Blogs', href: '/blogs' },
    ];

    const isActive = (path: string) => pathname === path;

    // Animation variants with proper TypeScript types
    const navVariants: Variants = {
        hidden: { y: -100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 20,
            }
        }
    };

    const mobileMenuVariants: Variants = {
        closed: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        open: {
            opacity: 1,
            height: "auto",
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };

    const menuItemVariants: Variants = {
        closed: {
            x: -50,
            opacity: 0
        },
        open: (i: number) => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: i * 0.1,
                duration: 0.3,
                ease: "easeOut"
            }
        })
    };

    const iconVariants: Variants = {
        closed: { rotate: 0 },
        open: { rotate: 180 }
    };

    const pathVariants: Variants = {
        closed: { pathLength: 0 },
        open: { pathLength: 1 }
    };

    return (
        <motion.nav
            initial="hidden"
            animate="visible"
            variants={navVariants}
            className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700"
        >
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo */}
                    <Logo />

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navigation?.map((item, index) => {
                            if (item.component) {
                                const Component = item.component;
                                return (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 + 0.3 }}
                                    >
                                        <Component />
                                    </motion.div>
                                );
                            }
                            return (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 + 0.3 }}
                                >
                                    <Link
                                        href={item.href}
                                        className="relative px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                                    >
                                        <motion.span
                                            className={`relative z-10 ${isActive(item.href)
                                                    ? 'text-blue-600 dark:text-blue-400'
                                                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                                                }`}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {item.name}
                                        </motion.span>

                                        {isActive(item.href) && (
                                            <motion.div
                                                className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30 rounded-md"
                                                layoutId="activeBackground"
                                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* CTA Button - Desktop */}
                    <div className="hidden md:flex items-center space-x-4">
                        <motion.button
                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-md text-sm font-medium shadow-lg cursor-pointer"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.4)'
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                        >
                            <Link href={'/contact'}>Hire Me</Link>
                        </motion.button>
                        <ModeToggle />
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center space-x-2">
                        <motion.button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <motion.svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                                variants={iconVariants}
                                animate={isOpen ? "open" : "closed"}
                                transition={{ duration: 0.3 }}
                            >
                                {isOpen ? (
                                    <motion.path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                        variants={pathVariants}
                                        initial="closed"
                                        animate="open"
                                        transition={{ duration: 0.3 }}
                                    />
                                ) : (
                                    <motion.path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                        variants={pathVariants}
                                        initial="closed"
                                        animate="open"
                                        transition={{ duration: 0.3 }}
                                    />
                                )}
                            </motion.svg>
                        </motion.button>
                        <ModeToggle />
                    </div>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            variants={mobileMenuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="md:hidden overflow-hidden"
                        >
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                                {navigation?.map((item, i) => (
                                    <motion.div
                                        key={item.name}
                                        variants={menuItemVariants}
                                        initial="closed"
                                        animate="open"
                                        exit="closed"
                                        custom={i}
                                    >
                                        <Link
                                            href={item.component ? '/solutions' : item.href}
                                            className={`block px-3 py-3 rounded-md text-base font-medium transition-colors duration-200 ${item.href && isActive(item.href)
                                                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 dark:border-blue-400'
                                                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                                                }`}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <motion.span
                                                whileHover={{ x: 10 }}
                                                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                                                className="block"
                                            >
                                                {item.name}
                                            </motion.span>
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div
                                    variants={menuItemVariants}
                                    initial="closed"
                                    animate="open"
                                    exit="closed"
                                    custom={navigation.length}
                                    className="px-3 py-2"
                                >
                                    <motion.button
                                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-3 rounded-md text-sm font-medium shadow-lg cursor-pointer"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Link href={'/contact'} onClick={() => setIsOpen(false)}>
                                            Hire Me
                                        </Link>
                                    </motion.button>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;