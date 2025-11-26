'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { ShoppingCart, CreditCard, Truck, Shield, Smartphone, TrendingUp, Zap, Users,Globe } from 'lucide-react';
import { useEffect, useState } from 'react';

const EcommercePage = () => {
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
            icon: ShoppingCart,
            title: 'Online Storefront',
            description: 'Beautiful, responsive online stores optimized for conversions'
        },
        {
            icon: CreditCard,
            title: 'Payment Integration',
            description: 'Secure payment gateways with multiple payment options'
        },
        {
            icon: Truck,
            title: 'Order Management',
            description: 'Complete order processing and inventory management system'
        },
        {
            icon: Shield,
            title: 'Security & Trust',
            description: 'SSL encryption and secure checkout processes'
        },
        {
            icon: Smartphone,
            title: 'Mobile Commerce',
            description: 'Mobile-optimized shopping experiences'
        },
        {
            icon: TrendingUp,
            title: 'Sales Analytics',
            description: 'Comprehensive analytics and sales reporting'
        }
    ];

    const platforms = [
        {
            icon: Zap,
            title: 'Custom Ecommerce',
            description: 'Fully custom-built online stores with unique features',
            features: ['Tailored Design', 'Custom Features', 'Scalable Architecture']
        },
        {
            icon: Users,
            title: 'Shopify Stores',
            description: 'Professional Shopify stores with custom themes',
            features: ['Shopify Themes', 'App Integration', 'Payment Setup']
        },
        {
            icon: Globe,
            title: 'WooCommerce',
            description: 'WordPress ecommerce solutions with WooCommerce',
            features: ['WordPress Integration', 'Plugin Setup', 'Custom Themes']
        }
    ];

    const technologies = [
        { name: 'Shopify', color: 'from-green-500 to-emerald-500' },
        { name: 'WooCommerce', color: 'from-orange-500 to-red-500' },
        { name: 'React/Next.js', color: 'from-blue-500 to-cyan-500' },
        { name: 'Node.js', color: 'from-green-600 to-lime-500' },
        { name: 'Stripe', color: 'from-purple-500 to-indigo-500' },
        { name: 'PayPal', color: 'from-blue-600 to-blue-800' },
        { name: 'MongoDB', color: 'from-green-600 to-emerald-600' },
        { name: 'PostgreSQL', color: 'from-blue-700 to-indigo-600' }
    ];

    const capabilities = [
        'Product Catalog Management',
        'Shopping Cart & Checkout',
        'User Accounts & Profiles',
        'Order Tracking System',
        'Inventory Management',
        'Customer Reviews & Ratings',
        'Discount & Coupon System',
        'Shipping Integration',
        'Tax Calculation',
        'Multi-language Support',
        'SEO Optimization',
        'Analytics Dashboard'
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
        rotate: [0, 5, 0, -5, 0],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut" as const
        }
    };

    const bgElement1Animation = {
        y: [0, -25, 0],
        x: [0, 10, 0],
        opacity: [0.2, 0.5, 0.2],
        transition: {
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse" as const,
            ease: "easeInOut" as const
        }
    };

    const bgElement2Animation = {
        y: [0, 35, 0],
        x: [0, -15, 0],
        opacity: [0.3, 0.1, 0.3],
        transition: {
            duration: 7,
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
                        <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto">
                            <ShoppingCart className="w-10 h-10 text-white" />
                        </div>
                    </motion.div>
                    
                    <motion.h1 
                        variants={fadeInUp}
                        className={`text-4xl md:text-5xl font-bold mb-4 ${getTextColor('primary')}`}
                    >
                        Ecommerce Solutions
                    </motion.h1>
                    
                    <motion.p 
                        variants={fadeInUp}
                        className={`text-xl max-w-2xl mx-auto ${getTextColor('secondary')}`}
                    >
                        Complete online store solutions that drive sales and provide 
                        seamless shopping experiences across all devices.
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
                                    className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:from-orange-600 group-hover:to-pink-600 transition-colors"
                                >
                                    <Icon className="w-6 h-6 text-white" />
                                </motion.div>
                                <motion.h3 
                                    className={`text-lg font-semibold mb-2 ${getTextColor('primary')}`}
                                    whileHover={{ color: theme === 'light' ? '#ea580c' : '#fb923c' }}
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

                {/* Platforms Section with enhanced animations */}
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
                        Ecommerce Platforms
                    </motion.h2>
                    
                    <motion.div 
                        variants={staggerChildren}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {platforms.map((platform) => {
                            const Icon = platform.icon;
                            return (
                                <motion.div
                                    key={platform.title}
                                    variants={itemVariants}
                                    whileHover={{ 
                                        y: -5,
                                        transition: { type: "spring" as const, stiffness: 300 }
                                    }}
                                    className={`p-6 rounded-xl text-center ${getCardStyle()} hover:shadow-xl transition-all duration-300 cursor-pointer`}
                                >
                                    <motion.div
                                        animate={bounceAnimation}
                                        className="w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4"
                                    >
                                        <Icon className="w-8 h-8 text-white" />
                                    </motion.div>
                                    <motion.h3 
                                        className={`text-xl font-semibold mb-3 ${getTextColor('primary')}`}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {platform.title}
                                    </motion.h3>
                                    <motion.p 
                                        className={`mb-4 ${getTextColor('secondary')}`}
                                        initial={{ opacity: 0.8 }}
                                        whileHover={{ opacity: 1 }}
                                    >
                                        {platform.description}
                                    </motion.p>
                                    <div className="space-y-2">
                                        {platform.features.map((feature, featureIndex) => (
                                            <motion.div
                                                key={feature}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: featureIndex * 0.1 }}
                                                className="flex items-center justify-center space-x-2 text-sm"
                                            >
                                                <motion.div
                                                    whileHover={{ scale: 1.2 }}
                                                    className="w-2 h-2 bg-orange-500 rounded-full"
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

                {/* Technologies Section with enhanced animations */}
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
                        Ecommerce Technologies
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

                {/* Capabilities Section with enhanced animations */}
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
                        Ecommerce Capabilities
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
                                    whileHover={{ scale: 1.5, rotate: 90 }}
                                    className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0 group-hover:bg-pink-500 transition-colors"
                                />
                                <motion.span 
                                    className={`${getTextColor('primary')} group-hover:text-orange-500 transition-colors`}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    {capability}
                                </motion.span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mt-16"
                >
                    {[
                        { value: '99.9%', label: 'Uptime Guarantee' },
                        { value: '24/7', label: 'Support' },
                        { value: '50+', label: 'Stores Built' },
                        { value: '98%', label: 'Client Satisfaction' }
                    ].map((stat) => (
                        <motion.div
                            key={stat.label}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            className={`p-6 rounded-xl ${getCardStyle()}`}
                        >
                            <motion.div 
                                className="text-2xl md:text-3xl font-bold text-orange-500 mb-2"
                                animate={rotateAnimation}
                            >
                                {stat.value}
                            </motion.div>
                            <div className={getTextColor('secondary')}>{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Floating decorative elements */}
                <motion.div
                    animate={bgElement1Animation}
                    className="fixed top-1/4 left-10 w-4 h-4 bg-orange-300 rounded-full opacity-20 pointer-events-none"
                />
                <motion.div
                    animate={bgElement2Animation}
                    className="fixed bottom-1/4 right-10 w-6 h-6 bg-pink-300 rounded-full opacity-30 pointer-events-none"
                />
            </div>
        </div>
    );
};

export default EcommercePage;