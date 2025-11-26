'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from 'next-themes';

const SolutionsPage = () => {
    const { theme } = useTheme();

    // Helper functions for theme-based styling
    const getBackgroundColor = () => {
        return theme === 'light' ? 'bg-gray-50' : 'bg-gray-900';
    };

    const getTextColor = (type: 'primary' | 'secondary' = 'primary') => {
        if (type === 'primary') {
            return theme === 'light' ? 'text-gray-900' : 'text-white';
        }
        return theme === 'light' ? 'text-gray-600' : 'text-gray-400';
    };

    const getCardStyle = () => {
        return theme === 'light' 
            ? 'bg-white shadow-lg hover:shadow-xl' 
            : 'bg-gray-800 shadow-lg hover:shadow-xl';
    };

    const getFeatureBadgeStyle = () => {
        return theme === 'light' 
            ? 'bg-blue-100 text-blue-800' 
            : 'bg-blue-500/20 text-blue-300';
    };

    const getCTAStyle = () => {
        return theme === 'light'
            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
            : 'bg-gradient-to-r from-blue-700 to-purple-700 text-white';
    };

    const solutions = [
        {
            category: 'Web Development',
            icon: '💻',
            items: [
                {
                    title: 'Frontend Development',
                    description: 'Modern React, Vue, and Angular applications with responsive design',
                    features: ['React/Next.js', 'Vue/Nuxt.js', 'TypeScript', 'Tailwind CSS'],
                    href: '/contact'
                },
                {
                    title: 'Backend Development',
                    description: 'Robust server-side applications and API development',
                    features: ['Node.js', 'Python/Django', 'REST APIs', 'Database Design'],
                    href: '/contact'
                },
                {
                    title: 'Full-Stack Solutions',
                    description: 'End-to-end web application development',
                    features: ['MERN Stack', 'Complete Deployment', 'Performance Optimization'],
                    href: '/contact'
                }
            ]
        },
        {
            category: 'E-Commerce',
            icon: '🛒',
            items: [
                {
                    title: 'Online Stores',
                    description: 'Custom e-commerce solutions with secure payment integration',
                    features: ['Shopify', 'WooCommerce', 'Payment Gateways', 'Inventory Management'],
                    href: '/contact'
                },
                {
                    title: 'Product Catalogs',
                    description: 'Beautiful product displays with advanced filtering',
                    features: ['Product Search', 'Category Management', 'User Reviews'],
                    href: '/contact'
                }
            ]
        },
        {
            category: 'Mobile Apps',
            icon: '📱',
            items: [
                {
                    title: 'Cross-Platform Apps',
                    description: 'Native-like mobile applications for iOS and Android',
                    features: ['React Native', 'Flutter', 'App Store Deployment'],
                    href: '/contact'
                },
                {
                    title: 'Progressive Web Apps',
                    description: 'Web applications that work like native apps',
                    features: ['Offline Functionality', 'Push Notifications', 'Mobile Optimization'],
                    href: '/contact'
                }
            ]
        },
        {
            category: 'Services',
            icon: '🔧',
            items: [
                {
                    title: 'Technical Consulting',
                    description: 'Expert advice on architecture and technology decisions',
                    features: ['Code Review', 'System Architecture', 'Tech Stack Selection'],
                    href: '/contact'
                },
                {
                    title: 'Maintenance & Support',
                    description: 'Ongoing website maintenance and technical support',
                    features: ['Security Updates', 'Bug Fixes', 'Performance Monitoring'],
                    href: '/contact'
                }
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <div className={`min-h-screen py-12 ${getBackgroundColor()}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className={`text-4xl font-bold mb-4 ${getTextColor('primary')}`}>
                        My Solutions & Services
                    </h1>
                    <p className={`text-xl max-w-3xl mx-auto ${getTextColor('secondary')}`}>
                        Comprehensive web development services tailored to your business needs.
                        From concept to deployment, I deliver high-quality solutions.
                    </p>
                </motion.div>

                {/* Solutions Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                >
                    {solutions.map((section, sectionIndex) => (
                        <motion.div
                            key={section.category}
                            variants={itemVariants}
                            className={`rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 ${getCardStyle()}`}
                        >
                            {/* Section Header */}
                            <div className={`p-6 ${getCTAStyle()}`}>
                                <div className="flex items-center space-x-3">
                                    <span className="text-2xl">{section.icon}</span>
                                    <h2 className="text-2xl font-bold text-white">
                                        {section.category}
                                    </h2>
                                </div>
                            </div>

                            {/* Services List */}
                            <div className="p-6 space-y-6">
                                {section.items.map((service, serviceIndex) => (
                                    <motion.div
                                        key={service.title}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: (sectionIndex * 0.3) + (serviceIndex * 0.1) + 0.5 }}
                                        className="border-l-4 border-blue-500 pl-4"
                                    >
                                        <h3 className={`text-lg font-semibold mb-2 ${getTextColor('primary')}`}>
                                            {service.title}
                                        </h3>
                                        <p className={`mb-3 ${getTextColor('secondary')}`}>
                                            {service.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {service.features.map((feature) => (
                                                <span
                                                    key={feature}
                                                    className={`px-3 py-1 text-sm rounded-full ${getFeatureBadgeStyle()}`}
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Link
                                                href={service.href}
                                                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                                            >
                                                Get Started
                                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </Link>
                                        </motion.div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className={`text-center mt-16 rounded-2xl p-8 ${getCTAStyle()}`}
                >
                    <h2 className="text-3xl font-bold mb-4">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-xl mb-6 opacity-90">
                        Let&apos;s discuss how I can help bring your ideas to life.
                    </p>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            href="/contact"
                            className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                        >
                            Contact Me Today
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default SolutionsPage;