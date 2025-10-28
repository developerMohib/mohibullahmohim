'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { CreditCard, Shield, Zap, Lock, Globe, ShoppingCart, ArrowRight, Smartphone } from 'lucide-react';
import { useEffect, useState } from 'react';

const PaymentSystemPage = () => {
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
            icon: CreditCard,
            title: 'Multiple Payment Methods',
            description: 'Accept credit cards, digital wallets, bank transfers, and cryptocurrency'
        },
        {
            icon: Shield,
            title: 'Bank-Level Security',
            description: 'PCI DSS compliant with end-to-end encryption and fraud detection'
        },
        {
            icon: Zap,
            title: 'Instant Processing',
            description: 'Real-time payment processing with sub-second transaction times'
        },
        {
            icon: Globe,
            title: 'Global Payments',
            description: 'Accept payments in 130+ currencies from anywhere in the world'
        },
        {
            icon: Lock,
            title: 'Secure Transactions',
            description: 'Advanced security measures including 3D Secure and tokenization'
        },
        {
            icon: ShoppingCart,
            title: 'Seamless Checkout',
            description: 'Optimized checkout experience that boosts conversion rates'
        }
    ];

    const paymentMethods = [
        { name: 'Credit Cards', color: 'from-blue-500 to-cyan-500' },
        { name: 'Digital Wallets', color: 'from-purple-500 to-pink-500' },
        { name: 'Bank Transfers', color: 'from-green-500 to-emerald-500' },
        { name: 'Cryptocurrency', color: 'from-orange-500 to-yellow-500' },
        { name: 'Mobile Payments', color: 'from-teal-500 to-blue-500' },
        { name: 'Buy Now Pay Later', color: 'from-red-500 to-pink-500' }
    ];

    const integrations = [
        {
            icon: ShoppingCart,
            title: 'E-commerce Platforms',
            description: 'Shopify, WooCommerce, Magento, and custom store integrations'
        },
        {
            icon: Smartphone,
            title: 'Mobile Apps',
            description: 'iOS and Android SDKs for seamless in-app payments'
        },
        {
            icon: Globe,
            title: 'Web Applications',
            description: 'API-first approach for any web-based payment solution'
        }
    ];

    const benefits = [
        'Increase conversion rates by 35%',
        'Reduce cart abandonment',
        'Global payment acceptance',
        'Real-time fraud detection',
        'Automated reconciliation',
        'Detailed analytics dashboard',
        'Recurring billing support',
        'Multi-currency settlements',
        'Chargeback protection',
        '24/7 customer support',
        'Easy integration',
        'Scalable infrastructure'
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

    // Standalone animations
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

    const cardSwipeAnimation = {
        x: [0, 20, 0],
        transition: {
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse" as const,
            ease: "easeInOut" as const
        }
    };

    if (!mounted) return null;

    return (
        <div className={`min-h-screen py-12 ${getBackgroundColor()}`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
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
                        <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto">
                            <CreditCard className="w-10 h-10 text-white" />
                        </div>
                    </motion.div>
                    
                    <motion.h1 
                        variants={fadeInUp}
                        className={`text-4xl md:text-5xl font-bold mb-4 ${getTextColor('primary')}`}
                    >
                        Secure Payment Solutions
                    </motion.h1>
                    
                    <motion.p 
                        variants={fadeInUp}
                        className={`text-xl max-w-2xl mx-auto mb-8 ${getTextColor('secondary')}`}
                    >
                        Power your online store with enterprise-grade payment processing. 
                        Fast, secure, and designed to boost your conversion rates.
                    </motion.p>

                    <motion.div
                        variants={fadeInUp}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                        >
                            Get Started <ArrowRight className="w-4 h-4" />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-8 py-3 rounded-full font-semibold text-lg border-2 ${theme === 'light' ? 'border-gray-300 text-gray-700' : 'border-gray-600 text-gray-300'} hover:border-green-500 hover:text-green-500 transition-all duration-300`}
                        >
                            View Demo
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                >
                    {[
                        { value: '99.9%', label: 'Uptime' },
                        { value: '2.1s', label: 'Avg. Processing' },
                        { value: '130+', label: 'Currencies' },
                        { value: '35%', label: 'Conversion Boost' }
                    ].map((stat) => (
                        <motion.div
                            key={stat.label}
                            variants={itemVariants}
                            className={`text-center p-6 rounded-xl ${getCardStyle()}`}
                        >
                            <motion.div
                                animate={floatingAnimation}
                                className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent mb-2"
                            >
                                {stat.value}
                            </motion.div>
                            <div className={getTextColor('secondary')}>{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Features Grid */}
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
                                    className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4 group-hover:from-green-600 group-hover:to-emerald-600 transition-colors"
                                >
                                    <Icon className="w-6 h-6 text-white" />
                                </motion.div>
                                <motion.h3 
                                    className={`text-lg font-semibold mb-2 ${getTextColor('primary')}`}
                                    whileHover={{ color: theme === 'light' ? '#10b981' : '#34d399' }}
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

                {/* Payment Methods */}
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
                        Supported Payment Methods
                    </motion.h2>
                    
                    <motion.div 
                        variants={staggerChildren}
                        className="flex flex-wrap justify-center gap-3 mb-12"
                    >
                        {paymentMethods.map((method) => (
                            <motion.span
                                key={method.name}
                                variants={itemVariants}
                                whileHover={{ 
                                    scale: 1.1,
                                    y: -2,
                                    transition: { type: "spring" as const, stiffness: 400 }
                                }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-4 py-2 bg-gradient-to-r ${method.color} text-white rounded-full text-sm font-medium cursor-pointer shadow-lg hover:shadow-xl transition-shadow`}
                            >
                                {method.name}
                            </motion.span>
                        ))}
                    </motion.div>

                    {/* Animated Credit Card */}
                    <motion.div
                        animate={cardSwipeAnimation}
                        className="max-w-md mx-auto bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl p-6 shadow-2xl"
                    >
                        <div className="flex justify-between items-center mb-6">
                            <div className="text-white font-semibold">Payment Card</div>
                            <div className="flex space-x-2">
                                <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
                                <div className="w-8 h-8 bg-red-400 rounded-full"></div>
                            </div>
                        </div>
                        <div className="text-white text-xl font-mono mb-4">•••• •••• •••• 4242</div>
                        <div className="flex justify-between items-center text-white text-sm">
                            <div>John Doe</div>
                            <div>12/25</div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Integration Types */}
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
                        Easy Integration
                    </motion.h2>
                    
                    <motion.div 
                        variants={staggerChildren}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {integrations.map((integration) => {
                            const Icon = integration.icon;
                            return (
                                <motion.div
                                    key={integration.title}
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
                                        className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4"
                                    >
                                        <Icon className="w-8 h-8 text-white" />
                                    </motion.div>
                                    <motion.h3 
                                        className={`text-xl font-semibold mb-3 ${getTextColor('primary')}`}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {integration.title}
                                    </motion.h3>
                                    <motion.p 
                                        className={getTextColor('secondary')}
                                        initial={{ opacity: 0.8 }}
                                        whileHover={{ opacity: 1 }}
                                    >
                                        {integration.description}
                                    </motion.p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </motion.div>

                {/* Benefits Section */}
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
                        Business Benefits
                    </motion.h2>
                    
                    <motion.div 
                        variants={staggerChildren}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                    >
                        {benefits.map((benefit) => (
                            <motion.div
                                key={benefit}
                                variants={slideInLeft}
                                whileHover={{ 
                                    x: 5,
                                    transition: { type: "spring" as const, stiffness: 400 }
                                }}
                                className="flex items-center space-x-3 group cursor-pointer"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.5 }}
                                    className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 group-hover:bg-emerald-500 transition-colors"
                                />
                                <motion.span 
                                    className={`${getTextColor('primary')} group-hover:text-green-500 transition-colors`}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    {benefit}
                                </motion.span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                    className={`text-center p-8 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 text-white`}
                >
                    <motion.h2 
                        variants={fadeInUp}
                        className="text-2xl md:text-3xl font-bold mb-4"
                    >
                        Ready to Transform Your Payment Experience?
                    </motion.h2>
                    <motion.p 
                        variants={fadeInUp}
                        className="text-lg mb-6 opacity-90"
                    >
                        Join thousands of businesses processing millions in transactions every day.
                    </motion.p>
                    <motion.div
                        variants={fadeInUp}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                        >
                            Start Free Trial <ArrowRight className="w-4 h-4" />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-green-600 transition-all duration-300"
                        >
                            Schedule Demo
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Floating decorative elements */}
                <motion.div
                    animate={bgElement1Animation}
                    className="fixed top-1/4 left-10 w-4 h-4 bg-green-300 rounded-full opacity-20 pointer-events-none"
                />
                <motion.div
                    animate={bgElement2Animation}
                    className="fixed bottom-1/4 right-10 w-6 h-6 bg-emerald-300 rounded-full opacity-30 pointer-events-none"
                />
            </div>
        </div>
    );
};

export default PaymentSystemPage;