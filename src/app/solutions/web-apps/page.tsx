'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Code, Smartphone, Zap, Shield, Cloud, Users } from 'lucide-react';

const WebAppsPage = () => {
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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
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
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${getTextColor('primary')}`}>
                        Web Applications
                    </h1>
                    <p className={`text-xl max-w-2xl mx-auto ${getTextColor('secondary')}`}>
                        Modern, scalable web applications built with cutting-edge technologies 
                        and user-centered design principles.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
                >
                    {features.map((feature) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={feature.title}
                                variants={itemVariants}
                                className={`p-6 rounded-xl ${getCardStyle()} hover:shadow-xl transition-all duration-300`}
                            >
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                                    <Icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className={`text-lg font-semibold mb-2 ${getTextColor('primary')}`}>
                                    {feature.title}
                                </h3>
                                <p className={getTextColor('secondary')}>
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Technologies Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className={`text-2xl md:text-3xl font-bold mb-8 ${getTextColor('primary')}`}>
                        Technologies I Use
                    </h2>
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {technologies.map((tech) => (
                            <span
                                key={tech.name}
                                className={`px-4 py-2 bg-gradient-to-r ${tech.color} text-white rounded-full text-sm font-medium`}
                            >
                                {tech.name}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Process Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className={`max-w-4xl mx-auto p-8 rounded-2xl ${getCardStyle()}`}
                >
                    <h2 className={`text-2xl md:text-3xl font-bold text-center mb-8 ${getTextColor('primary')}`}>
                        Development Process
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { step: '01', title: 'Planning', desc: 'Requirements analysis and architecture design' },
                            { step: '02', title: 'Development', desc: 'Agile development with continuous testing' },
                            { step: '03', title: 'Deployment', desc: 'Production deployment and ongoing support' }
                        ].map((process) => (
                            <div key={process.step} className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-lg">{process.step}</span>
                                </div>
                                <h3 className={`font-semibold mb-2 ${getTextColor('primary')}`}>
                                    {process.title}
                                </h3>
                                <p className={getTextColor('secondary')}>
                                    {process.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default WebAppsPage;