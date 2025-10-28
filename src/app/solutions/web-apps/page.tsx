'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Code, Smartphone, Zap, Shield, Cloud, Users, Cpu, GitBranch } from 'lucide-react';
import { useEffect, useState } from 'react';

const WebAppsPage = () => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

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
            ? 'bg-white shadow-lg border border-gray-100' 
            : 'bg-gray-800 shadow-lg border border-gray-700';
    };

    const features = [
        {
            icon: Code,
            title: 'Custom Web Applications',
            description: 'Tailored solutions built with modern frameworks like React, Next.js, and Vue.js'
        },
        {
            icon: Smartphone,
            title: 'Responsive Design',
            description: 'Flawless experience across all devices and screen sizes'
        },
        {
            icon: Zap,
            title: 'High Performance',
            description: 'Optimized for speed and smooth user interactions'
        },
        {
            icon: Shield,
            title: 'Secure & Reliable',
            description: 'Enterprise-grade security and robust architecture'
        },
        {
            icon: Cloud,
            title: 'Cloud Deployment',
            description: 'Seamless deployment to leading cloud platforms'
        },
        {
            icon: Users,
            title: 'User-Centered',
            description: 'Intuitive interfaces designed with your users in mind'
        }
    ];

    const technologies = [
        { name: 'React/Next.js', color: 'from-blue-500 to-cyan-500' },
        { name: 'TypeScript', color: 'from-blue-600 to-blue-800' },
        { name: 'Node.js', color: 'from-green-500 to-emerald-500' },
        { name: 'Tailwind CSS', color: 'from-teal-500 to-cyan-500' },
        { name: 'MongoDB', color: 'from-green-600 to-lime-500' },
        { name: 'PostgreSQL', color: 'from-blue-700 to-indigo-600' }
    ];

    const developmentTypes = [
        {
            icon: Code,
            title: 'Frontend Development',
            description: 'Modern React/Next.js applications with responsive design and optimal UX'
        },
        {
            icon: Cpu,
            title: 'Full-Stack Solutions',
            description: 'End-to-end applications with robust backend APIs and seamless integration'
        },
        {
            icon: Cloud,
            title: 'Progressive Web Apps',
            description: 'Native-like web experiences with offline capabilities and push notifications'
        }
    ];

    const capabilities = [
        'Responsive Design',
        'Performance Optimization',
        'SEO Optimization',
        'Accessibility (a11y)',
        'Cross-Browser Compatibility',
        'Progressive Enhancement',
        'State Management',
        'API Integration',
        'Real-time Features',
        'Authentication Systems',
        'Payment Integration',
        'Analytics & Tracking'
    ];

    // Corrected Animation variants with proper TypeScript types
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { 
            y: 30, 
            opacity: 0,
            scale: 0.9
        },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring" as const,
                stiffness: 100,
                damping: 12
            }
        }
    };

    const slideInLeft = {
        hidden: { 
            x: -50, 
            opacity: 0 
        },
        visible: { 
            x: 0, 
            opacity: 1,
            transition: {
                type: "spring" as const,
                stiffness: 100,
                damping: 15
            }
        }
    };

    const fadeInUp = {
        hidden: { 
            y: 40, 
            opacity: 0 
        },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: {
                type: "spring" as const,
                stiffness: 100,
                damping: 15
            }
        }
    };

    const staggerChildren = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08
            }
        }
    };

    // Standalone animations (not variants) for continuous animations
    const floatingAnimation = {
        y: [0, -10, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse" as const,
            ease: "easeInOut" as const
        }
    };

    const pulseAnimation = {
        scale: [1, 1.05, 1],
        transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse" as const,
            ease: "easeInOut" as const
        }
    };

    const bgElement1Animation = {
        y: [0, -20, 0],
        opacity: [0.2, 0.4, 0.2],
        transition: {
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse" as const,
            ease: "easeInOut" as const
        }
    };

    const bgElement2Animation = {
        y: [0, 30, 0],
        opacity: [0.3, 0.1, 0.3],
        transition: {
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse" as const,
            ease: "easeInOut" as const,
            delay: 1
        }
    };

    if (!mounted) return null;

    return (
        <div className={`min-h-screen py-12 ${getBackgroundColor()}`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header with enhanced animations */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="text-center mb-16"
                >
                    <motion.div
                        animate={pulseAnimation}
                        className="inline-block mb-4"
                    >
                        <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto">
                            <Code className="w-10 h-10 text-white" />
                        </div>
                    </motion.div>
                    
                    <motion.h1 
                        variants={fadeInUp}
                        className={`text-4xl md:text-5xl font-bold mb-4 ${getTextColor('primary')}`}
                    >
                        Web Applications
                    </motion.h1>
                    
                    <motion.p 
                        variants={fadeInUp}
                        className={`text-xl max-w-2xl mx-auto ${getTextColor('secondary')}`}
                    >
                        Modern, scalable web applications built with cutting-edge technologies 
                        and user-centered design principles.
                    </motion.p>
                </motion.div>

                {/* Features Grid with enhanced animations */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
                >
                    {features.map((feature) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={feature.title}
                                variants={itemVariants}
                                whileHover={{ 
                                    y: -8,
                                    scale: 1.02,
                                    transition: { type: "spring" as const, stiffness: 300 }
                                }}
                                whileTap={{ scale: 0.98 }}
                                className={`p-6 rounded-xl ${getCardStyle()} hover:shadow-2xl transition-all duration-300 cursor-pointer group`}
                            >
                                <motion.div
                                    animate={floatingAnimation}
                                    className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:from-blue-600 group-hover:to-purple-600 transition-colors"
                                >
                                    <Icon className="w-6 h-6 text-white" />
                                </motion.div>
                                <motion.h3 
                                    className={`text-lg font-semibold mb-2 ${getTextColor('primary')}`}
                                    whileHover={{ color: theme === 'light' ? '#2563eb' : '#60a5fa' }}
                                >
                                    {feature.title}
                                </motion.h3>
                                <motion.p 
                                    className={getTextColor('secondary')}
                                    initial={{ opacity: 0.8 }}
                                    whileHover={{ opacity: 1 }}
                                >
                                    {feature.description}
                                </motion.p>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Development Types Section with staggered animations */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                    className="mb-16"
                >
                    <motion.h2 
                        variants={fadeInUp}
                        className={`text-2xl md:text-3xl font-bold text-center mb-12 ${getTextColor('primary')}`}
                    >
                        Development Approaches
                    </motion.h2>
                    
                    <motion.div 
                        variants={staggerChildren}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {developmentTypes.map((devType) => {
                            const Icon = devType.icon;
                            return (
                                <motion.div
                                    key={devType.title}
                                    variants={itemVariants}
                                    whileHover={{ 
                                        y: -5,
                                        transition: { type: "spring" as const, stiffness: 300 }
                                    }}
                                    className={`p-6 rounded-xl text-center ${getCardStyle()} hover:shadow-xl transition-all duration-300 cursor-pointer`}
                                >
                                    <motion.div
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                        className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4"
                                    >
                                        <Icon className="w-8 h-8 text-white" />
                                    </motion.div>
                                    <motion.h3 
                                        className={`text-xl font-semibold mb-3 ${getTextColor('primary')}`}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {devType.title}
                                    </motion.h3>
                                    <motion.p 
                                        className={getTextColor('secondary')}
                                        initial={{ opacity: 0.8 }}
                                        whileHover={{ opacity: 1 }}
                                    >
                                        {devType.description}
                                    </motion.p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </motion.div>

                {/* Technologies Section with wave animation */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                    className="text-center mb-16"
                >
                    <motion.h2 
                        variants={fadeInUp}
                        className={`text-2xl md:text-3xl font-bold mb-8 ${getTextColor('primary')}`}
                    >
                        Technologies & Tools
                    </motion.h2>
                    
                    <motion.div 
                        variants={staggerChildren}
                        className="flex flex-wrap justify-center gap-3"
                    >
                        {technologies.map((tech) => (
                            <motion.span
                                key={tech.name}
                                variants={itemVariants}
                                whileHover={{ 
                                    scale: 1.1,
                                    y: -2,
                                    transition: { type: "spring" as const, stiffness: 400 }
                                }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-4 py-2 bg-gradient-to-r ${tech.color} text-white rounded-full text-sm font-medium cursor-pointer shadow-lg hover:shadow-xl transition-shadow`}
                            >
                                {tech.name}
                            </motion.span>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Capabilities Section with list animations */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                    className={`max-w-4xl mx-auto p-8 rounded-2xl ${getCardStyle()}`}
                >
                    <motion.h2 
                        variants={fadeInUp}
                        className={`text-2xl md:text-3xl font-bold text-center mb-8 ${getTextColor('primary')}`}
                    >
                        Web Development Capabilities
                    </motion.h2>
                    
                    <motion.div 
                        variants={staggerChildren}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                    >
                        {capabilities.map((capability) => (
                            <motion.div
                                key={capability}
                                variants={slideInLeft}
                                whileHover={{ 
                                    x: 5,
                                    transition: { type: "spring" as const, stiffness: 400 }
                                }}
                                className="flex items-center space-x-3 group cursor-pointer"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.5 }}
                                    className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 group-hover:bg-purple-500 transition-colors"
                                />
                                <motion.span 
                                    className={`${getTextColor('primary')} group-hover:text-blue-500 transition-colors`}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    {capability}
                                </motion.span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Process Section with enhanced animations */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                    className={`max-w-4xl mx-auto p-8 rounded-2xl ${getCardStyle()} md:my-16 my-4`}
                >
                    <motion.h2 
                        variants={fadeInUp}
                        className={`text-2xl md:text-3xl font-bold text-center mb-12 ${getTextColor('primary')}`}
                    >
                        Development Process
                    </motion.h2>
                    <motion.div 
                        variants={staggerChildren}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {[
                            { step: '01', title: 'Planning', desc: 'Requirements analysis and architecture design' },
                            { step: '02', title: 'Development', desc: 'Agile development with continuous testing' },
                            { step: '03', title: 'Deployment', desc: 'Production deployment and ongoing support' }
                        ].map((process) => (
                            <motion.div 
                                key={process.step} 
                                className="text-center"
                                variants={itemVariants}
                                whileHover="hover"
                            >
                                <motion.div 
                                    className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                                    whileHover={{ 
                                        scale: 1.15,
                                        rotate: 360,
                                        transition: { duration: 0.6 }
                                    }}
                                >
                                    <span className="text-white font-bold text-lg">{process.step}</span>
                                </motion.div>
                                <h3 className={`font-semibold mb-2 ${getTextColor('primary')}`}>
                                    {process.title}
                                </h3>
                                <p className={getTextColor('secondary')}>
                                    {process.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeInUp}
                    className="text-center"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block"
                    >
                        <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                            Start Your Project
                        </button>
                    </motion.div>
                </motion.div>

                {/* Floating decorative elements */}
                <motion.div
                    animate={bgElement1Animation}
                    className="fixed top-1/4 left-10 w-4 h-4 bg-blue-300 rounded-full opacity-20 pointer-events-none"
                />
                <motion.div
                    animate={bgElement2Animation}
                    className="fixed bottom-1/4 right-10 w-6 h-6 bg-purple-300 rounded-full opacity-30 pointer-events-none"
                />
            </div>
        </div>
    );
};

export default WebAppsPage;