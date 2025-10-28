'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Smartphone, Zap, Shield, Download, Code, Users, Battery, Wifi } from 'lucide-react';

const MobileAppsPage = () => {
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
            icon: Smartphone,
            title: 'Cross-Platform Apps',
            description: 'Single codebase for iOS and Android using React Native and Flutter'
        },
        {
            icon: Zap,
            title: 'Native Performance',
            description: 'Smooth animations and fast performance that feels truly native'
        },
        {
            icon: Shield,
            title: 'App Store Ready',
            description: 'Compliant with Apple App Store and Google Play Store guidelines'
        },
        {
            icon: Download,
            title: 'Offline Capability',
            description: 'Functionality that works even without internet connection'
        },
        {
            icon: Users,
            title: 'User Experience',
            description: 'Intuitive interfaces designed for mobile-first interactions'
        },
        {
            icon: Battery,
            title: 'Optimized Performance',
            description: 'Efficient battery usage and optimized resource consumption'
        }
    ];

    const technologies = [
        { name: 'React Native', color: 'from-blue-500 to-cyan-500' },
        { name: 'Flutter', color: 'from-blue-400 to-indigo-500' },
        { name: 'TypeScript', color: 'from-blue-600 to-blue-800' },
        { name: 'Firebase', color: 'from-yellow-500 to-orange-500' },
        { name: 'Redux', color: 'from-purple-500 to-pink-500' },
        { name: 'GraphQL', color: 'from-pink-500 to-rose-500' }
    ];

    const appTypes = [
        {
            icon: Wifi,
            title: 'Progressive Web Apps',
            description: 'Web apps that work like native apps with offline functionality'
        },
        {
            icon: Code,
            title: 'Hybrid Apps',
            description: 'Cross-platform solutions with access to native device features'
        },
        {
            icon: Download,
            title: 'Native Apps',
            description: 'Platform-specific apps for maximum performance and integration'
        }
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
                        Mobile Applications
                    </h1>
                    <p className={`text-xl max-w-2xl mx-auto ${getTextColor('secondary')}`}>
                        High-performance mobile apps built with modern frameworks, 
                        delivering native-like experiences across all platforms.
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
                                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
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

                {/* App Types Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className={`text-2xl md:text-3xl font-bold text-center mb-12 ${getTextColor('primary')}`}>
                        App Development Approaches
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {appTypes.map((appType, index) => {
                            const Icon = appType.icon;
                            return (
                                <motion.div
                                    key={appType.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                    className={`p-6 rounded-xl text-center ${getCardStyle()} hover:shadow-xl transition-all duration-300`}
                                >
                                    <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className={`text-xl font-semibold mb-3 ${getTextColor('primary')}`}>
                                        {appType.title}
                                    </h3>
                                    <p className={getTextColor('secondary')}>
                                        {appType.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Technologies Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className={`text-2xl md:text-3xl font-bold mb-8 ${getTextColor('primary')}`}>
                        Mobile Technologies
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

                {/* Capabilities Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className={`max-w-4xl mx-auto p-8 rounded-2xl ${getCardStyle()}`}
                >
                    <h2 className={`text-2xl md:text-3xl font-bold text-center mb-8 ${getTextColor('primary')}`}>
                        Mobile Capabilities
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            'Push Notifications',
                            'Camera Integration',
                            'GPS & Location Services',
                            'Biometric Authentication',
                            'Offline Data Sync',
                            'Payment Gateway Integration',
                            'Social Media Integration',
                            'Real-time Updates'
                        ].map((capability, index) => (
                            <motion.div
                                key={capability}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1 + index * 0.1 }}
                                className="flex items-center space-x-3"
                            >
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className={getTextColor('primary')}>{capability}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default MobileAppsPage;