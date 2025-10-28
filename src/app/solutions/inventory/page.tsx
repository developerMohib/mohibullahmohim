'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Package, BarChart, TrendingUp, Users, Clock, Shield, Database, Search, Bell, RefreshCw, Layers } from 'lucide-react';
import { useEffect, useState } from 'react';

const InventoryManagementPage = () => {
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
            icon: Package,
            title: 'Stock Tracking',
            description: 'Real-time inventory tracking with automatic stock level updates'
        },
        {
            icon: BarChart,
            title: 'Analytics Dashboard',
            description: 'Comprehensive insights into inventory performance and trends'
        },
        {
            icon: TrendingUp,
            title: 'Demand Forecasting',
            description: 'AI-powered predictions for optimal stock levels and reordering'
        },
        {
            icon: Users,
            title: 'Multi-Warehouse',
            description: 'Manage inventory across multiple locations seamlessly'
        },
        {
            icon: Clock,
            title: 'Real-time Updates',
            description: 'Instant synchronization across all platforms and devices'
        },
        {
            icon: Shield,
            title: 'Security & Backup',
            description: 'Secure data storage with automated backup systems'
        }
    ];

    const modules = [
        {
            icon: Database,
            title: 'Inventory Control',
            description: 'Complete stock management with batch tracking and expiry dates',
            features: ['Stock Levels', 'Batch Tracking', 'Expiry Management', 'Stock Transfers']
        },
        {
            icon: Search,
            title: 'Asset Tracking',
            description: 'Track assets with barcode and QR code scanning capabilities',
            features: ['Barcode Scanning', 'QR Codes', 'Asset Locations', 'Maintenance History']
        },
        {
            icon: Bell,
            title: 'Alert System',
            description: 'Automated notifications for low stock and important events',
            features: ['Low Stock Alerts', 'Reorder Points', 'Expiry Alerts', 'Custom Notifications']
        }
    ];

    const technologies = [
        { name: 'React/Next.js', color: 'from-blue-500 to-cyan-500' },
        { name: 'Node.js', color: 'from-green-500 to-emerald-500' },
        { name: 'MongoDB', color: 'from-green-600 to-lime-500' },
        { name: 'PostgreSQL', color: 'from-blue-700 to-indigo-600' },
        { name: 'Redis', color: 'from-red-500 to-orange-500' },
        { name: 'Docker', color: 'from-blue-500 to-cyan-400' },
        { name: 'AWS', color: 'from-orange-500 to-yellow-500' },
        { name: 'WebSocket', color: 'from-purple-500 to-pink-500' }
    ];

    const capabilities = [
        'Real-time Stock Monitoring',
        'Automated Reordering',
        'Multi-location Inventory',
        'Barcode/QR Code Support',
        'Supplier Management',
        'Purchase Order Tracking',
        'Sales Analytics',
        'Inventory Valuation',
        'Stock Movement History',
        'Custom Reporting',
        'API Integration',
        'Mobile Access'
    ];

    // Animation variants
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

    // Continuous animations
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

    const bounceAnimation = {
        y: [0, -15, 0],
        transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse" as const,
            ease: "easeInOut" as const
        }
    };

    const rotateAnimation = {
        rotate: [0, 180, 0],
        transition: {
            duration: 8,
            repeat: Infinity,
            ease: "linear" as const
        }
    };

    const slideAnimation = {
        x: [0, 20, 0],
        transition: {
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse" as const,
            ease: "easeInOut" as const
        }
    };

    const bgElement1Animation = {
        y: [0, -30, 0],
        x: [0, 15, 0],
        opacity: [0.2, 0.6, 0.2],
        transition: {
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse" as const,
            ease: "easeInOut" as const
        }
    };

    const bgElement2Animation = {
        y: [0, 40, 0],
        x: [0, -20, 0],
        opacity: [0.3, 0.1, 0.3],
        transition: {
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse" as const,
            ease: "easeInOut" as const,
            delay: 2
        }
    };

    // Inventory-specific counting animation
    const countingAnimation = {
        scale: [1, 1.2, 1],
        opacity: [1, 0.8, 1],
        transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse" as const,
            ease: "easeInOut" as const
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
                        <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto">
                            <Package className="w-10 h-10 text-white" />
                        </div>
                    </motion.div>
                    
                    <motion.h1 
                        variants={fadeInUp}
                        className={`text-4xl md:text-5xl font-bold mb-4 ${getTextColor('primary')}`}
                    >
                        Inventory Management
                    </motion.h1>
                    
                    <motion.p 
                        variants={fadeInUp}
                        className={`text-xl max-w-2xl mx-auto ${getTextColor('secondary')}`}
                    >
                        Advanced inventory solutions that streamline operations, 
                        reduce costs, and provide real-time visibility into your stock.
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
                                    className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:from-indigo-600 group-hover:to-purple-600 transition-colors"
                                >
                                    <Icon className="w-6 h-6 text-white" />
                                </motion.div>
                                <motion.h3 
                                    className={`text-lg font-semibold mb-2 ${getTextColor('primary')}`}
                                    whileHover={{ color: theme === 'light' ? '#4f46e5' : '#818cf8' }}
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

                {/* Modules Section with enhanced animations */}
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
                        Core Modules
                    </motion.h2>
                    
                    <motion.div 
                        variants={staggerChildren}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {modules.map((module) => {
                            const Icon = module.icon;
                            return (
                                <motion.div
                                    key={module.title}
                                    variants={itemVariants}
                                    whileHover={{ 
                                        y: -5,
                                        transition: { type: "spring" as const, stiffness: 300 }
                                    }}
                                    className={`p-6 rounded-xl ${getCardStyle()} hover:shadow-xl transition-all duration-300 cursor-pointer`}
                                >
                                    <motion.div
                                        animate={bounceAnimation}
                                        className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4"
                                    >
                                        <Icon className="w-8 h-8 text-white" />
                                    </motion.div>
                                    <motion.h3 
                                        className={`text-xl font-semibold mb-3 ${getTextColor('primary')}`}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {module.title}
                                    </motion.h3>
                                    <motion.p 
                                        className={`mb-4 ${getTextColor('secondary')}`}
                                        initial={{ opacity: 0.8 }}
                                        whileHover={{ opacity: 1 }}
                                    >
                                        {module.description}
                                    </motion.p>
                                    <div className="space-y-2">
                                        {module.features.map((feature, featureIndex) => (
                                            <motion.div
                                                key={feature}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: featureIndex * 0.1 }}
                                                className="flex items-center space-x-2 text-sm"
                                            >
                                                <motion.div
                                                    whileHover={{ scale: 1.3, rotate: 180 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="w-2 h-2 bg-indigo-500 rounded-full"
                                                />
                                                <span className={getTextColor('secondary')}>{feature}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </motion.div>

                {/* Technologies Section */}
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
                        Technology Stack
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

                {/* Capabilities Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                    className={`max-w-4xl mx-auto p-8 rounded-2xl ${getCardStyle()} mb-16`}
                >
                    <motion.h2 
                        variants={fadeInUp}
                        className={`text-2xl md:text-3xl font-bold text-center mb-8 ${getTextColor('primary')}`}
                    >
                        Inventory Capabilities
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
                                    animate={countingAnimation}
                                    className="w-2 h-2 bg-indigo-500 rounded-full flex-shrink-0 group-hover:bg-purple-500 transition-colors"
                                />
                                <motion.span 
                                    className={`${getTextColor('primary')} group-hover:text-indigo-500 transition-colors`}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    {capability}
                                </motion.span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Stats Section with Inventory-themed animations */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
                >
                    {[
                        { value: '99.9%', label: 'Accuracy Rate', icon: Shield },
                        { value: '50%', label: 'Cost Reduction', icon: TrendingUp },
                        { value: '24/7', label: 'Real-time Tracking', icon: RefreshCw },
                        { value: '1000+', label: 'Items Managed', icon: Layers }
                    ].map((stat) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={stat.label}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                className={`p-6 rounded-xl ${getCardStyle()}`}
                            >
                                <motion.div 
                                    className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3"
                                    animate={rotateAnimation}
                                >
                                    <Icon className="w-6 h-6 text-white" />
                                </motion.div>
                                <motion.div 
                                    className="text-2xl md:text-3xl font-bold text-indigo-500 mb-2"
                                    animate={slideAnimation}
                                >
                                    {stat.value}
                                </motion.div>
                                <div className={getTextColor('secondary')}>{stat.label}</div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Floating decorative elements */}
                <motion.div
                    animate={bgElement1Animation}
                    className="fixed top-1/4 left-10 w-4 h-4 bg-indigo-300 rounded-full opacity-20 pointer-events-none"
                />
                <motion.div
                    animate={bgElement2Animation}
                    className="fixed bottom-1/4 right-10 w-6 h-6 bg-purple-300 rounded-full opacity-30 pointer-events-none"
                />
            </div>
        </div>
    );
};

export default InventoryManagementPage;