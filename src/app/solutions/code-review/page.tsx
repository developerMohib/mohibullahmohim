'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Code, Shield, Zap, Search, Bug, Clock, CheckCircle, GitBranch, Cpu, FileText, Users } from 'lucide-react';
import { useEffect, useState } from 'react';

const CodeReviewPage = () => {
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
            icon: Search,
            title: 'Comprehensive Analysis',
            description: 'In-depth code examination covering architecture, patterns, and best practices'
        },
        {
            icon: Shield,
            title: 'Security Audit',
            description: 'Identify vulnerabilities and security risks before they become threats'
        },
        {
            icon: Zap,
            title: 'Performance Optimization',
            description: 'Spot performance bottlenecks and suggest optimizations for faster execution'
        },
        {
            icon: Bug,
            title: 'Bug Detection',
            description: 'Catch potential bugs and edge cases that automated tools might miss'
        },
        {
            icon: Code,
            title: 'Code Quality',
            description: 'Ensure clean, maintainable code following industry standards and conventions'
        },
        {
            icon: GitBranch,
            title: 'Best Practices',
            description: 'Enforce coding standards and architectural patterns for scalable development'
        }
    ];

    const reviewTypes = [
        {
            icon: FileText,
            title: 'Pull Request Review',
            description: 'Real-time code review for GitHub, GitLab, and Bitbucket pull requests'
        },
        {
            icon: Cpu,
            title: 'Architecture Review',
            description: 'High-level system design and architecture assessment for scalability'
        },
        {
            icon: Users,
            title: 'Team Mentoring',
            description: 'Guidance and knowledge sharing to improve team coding standards'
        }
    ];

    const technologies = [
        { name: 'JavaScript/TypeScript', color: 'from-yellow-500 to-orange-500' },
        { name: 'Python', color: 'from-blue-500 to-cyan-500' },
        { name: 'React/Next.js', color: 'from-cyan-500 to-blue-500' },
        { name: 'Node.js', color: 'from-green-500 to-emerald-500' },
        { name: 'Java/Kotlin', color: 'from-red-500 to-orange-500' },
        { name: 'Go', color: 'from-cyan-600 to-blue-600' },
        { name: 'Rust', color: 'from-orange-500 to-red-500' },
        { name: 'SQL/Databases', color: 'from-blue-600 to-indigo-600' }
    ];

    const processSteps = [
        {
            step: '01',
            title: 'Code Submission',
            description: 'Share your codebase or specific modules for review',
            icon: Code
        },
        {
            step: '02',
            title: 'Comprehensive Analysis',
            description: 'In-depth examination of code quality and architecture',
            icon: Search
        },
        {
            step: '03',
            title: 'Detailed Report',
            description: 'Actionable insights and recommendations delivered',
            icon: FileText
        },
        {
            step: '04',
            title: 'Follow-up Support',
            description: 'Guidance on implementation and improvements',
            icon: Users
        }
    ];

    const benefits = [
        'Improved code quality and maintainability',
        'Early bug detection and prevention',
        'Enhanced security and vulnerability protection',
        'Better performance and optimization',
        'Knowledge sharing and team growth',
        'Consistent coding standards',
        'Reduced technical debt',
        'Faster development cycles',
        'Higher code reliability',
        'Better onboarding for new developers',
        'Improved system architecture',
        'Cost savings in long-term maintenance'
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

    const codeTypingAnimation = {
        opacity: [0, 1, 0],
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
                        <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto">
                            <Code className="w-10 h-10 text-white" />
                        </div>
                    </motion.div>
                    
                    <motion.h1 
                        variants={fadeInUp}
                        className={`text-4xl md:text-5xl font-bold mb-4 ${getTextColor('primary')}`}
                    >
                        Expert Code Review
                    </motion.h1>
                    
                    <motion.p 
                        variants={fadeInUp}
                        className={`text-xl max-w-2xl mx-auto mb-8 ${getTextColor('secondary')}`}
                    >
                        Elevate your code quality with comprehensive reviews from senior developers. 
                        Catch issues early and build better software.
                    </motion.p>

                    {/* Animated Code Snippet */}
                    <motion.div
                        variants={fadeInUp}
                        className={`max-w-2xl mx-auto p-6 rounded-xl ${getCardStyle()} font-mono text-sm mb-8`}
                    >
                        <div className="flex space-x-4 mb-4">
                            <div className="flex space-x-2">
                                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <motion.div 
                                animate={codeTypingAnimation}
                                className="text-green-400"
                            >
                                <span className="text-blue-400">function</span> calculateTotal(items) {'{'}
                            </motion.div>
                            <motion.div 
                                animate={codeTypingAnimation}
                                transition={{ delay: 0.5 }}
                                className="ml-4 text-yellow-300"
                            >
                                return items.reduce((acc, item) {'==>'} acc + item.price, 0);
                            </motion.div>
                            <motion.div 
                                animate={codeTypingAnimation}
                                transition={{ delay: 1 }}
                                className="text-green-400"
                            >
                                {'}'}
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={fadeInUp}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Request Code Review
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-8 py-3 rounded-full font-semibold text-lg border-2 ${theme === 'light' ? 'border-gray-300 text-gray-700' : 'border-gray-600 text-gray-300'} hover:border-purple-500 hover:text-purple-500 transition-all duration-300`}
                        >
                            View Sample Report
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
                        { value: '50%', label: 'Fewer Bugs', icon: Bug },
                        { value: '3x', label: 'Faster Development', icon: Zap },
                        { value: '40%', label: 'Quality Improvement', icon: CheckCircle },
                        { value: '24h', label: 'Average Turnaround', icon: Clock }
                    ].map((stat) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={stat.label}
                                variants={itemVariants}
                                className={`text-center p-6 rounded-xl ${getCardStyle()}`}
                            >
                                <motion.div
                                    animate={floatingAnimation}
                                    className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4"
                                >
                                    <Icon className="w-6 h-6 text-white" />
                                </motion.div>
                                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                                    {stat.value}
                                </div>
                                <div className={getTextColor('secondary')}>{stat.label}</div>
                            </motion.div>
                        );
                    })}
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
                                    className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:from-purple-600 group-hover:to-pink-600 transition-colors"
                                >
                                    <Icon className="w-6 h-6 text-white" />
                                </motion.div>
                                <motion.h3 
                                    className={`text-lg font-semibold mb-2 ${getTextColor('primary')}`}
                                    whileHover={{ color: theme === 'light' ? '#7c3aed' : '#a78bfa' }}
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

                {/* Review Types */}
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
                        Types of Code Reviews
                    </motion.h2>
                    
                    <motion.div 
                        variants={staggerChildren}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {reviewTypes.map((reviewType) => {
                            const Icon = reviewType.icon;
                            return (
                                <motion.div
                                    key={reviewType.title}
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
                                        className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4"
                                    >
                                        <Icon className="w-8 h-8 text-white" />
                                    </motion.div>
                                    <motion.h3 
                                        className={`text-xl font-semibold mb-3 ${getTextColor('primary')}`}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {reviewType.title}
                                    </motion.h3>
                                    <motion.p 
                                        className={getTextColor('secondary')}
                                        initial={{ opacity: 0.8 }}
                                        whileHover={{ opacity: 1 }}
                                    >
                                        {reviewType.description}
                                    </motion.p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </motion.div>

                {/* Technologies */}
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
                        Supported Technologies
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

                {/* Process Steps */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                    className={`max-w-4xl mx-auto p-8 rounded-2xl ${getCardStyle()} mb-16`}
                >
                    <motion.h2 
                        variants={fadeInUp}
                        className={`text-2xl md:text-3xl font-bold text-center mb-12 ${getTextColor('primary')}`}
                    >
                        Our Review Process
                    </motion.h2>
                    
                    <motion.div 
                        variants={staggerChildren}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {processSteps.map((step) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={step.step}
                                    variants={itemVariants}
                                    className="text-center group"
                                >
                                    <motion.div 
                                        className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                                        whileHover={{ 
                                            scale: 1.15,
                                            rotate: 360,
                                            transition: { duration: 0.6 }
                                        }}
                                    >
                                        <span className="text-white font-bold text-lg">{step.step}</span>
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-3"
                                    >
                                        <Icon className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                                    </motion.div>
                                    <h3 className={`font-semibold mb-2 ${getTextColor('primary')}`}>
                                        {step.title}
                                    </h3>
                                    <p className={getTextColor('secondary')}>
                                        {step.description}
                                    </p>
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
                        Benefits of Code Review
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
                                    className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0 group-hover:bg-pink-500 transition-colors"
                                />
                                <motion.span 
                                    className={`${getTextColor('primary')} group-hover:text-purple-500 transition-colors`}
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
                    className={`text-center p-8 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white`}
                >
                    <motion.h2 
                        variants={fadeInUp}
                        className="text-2xl md:text-3xl font-bold mb-4"
                    >
                        Ready to Improve Your Code Quality?
                    </motion.h2>
                    <motion.p 
                        variants={fadeInUp}
                        className="text-lg mb-6 opacity-90"
                    >
                        Get expert eyes on your code and build better, more reliable software.
                    </motion.p>
                    <motion.div
                        variants={fadeInUp}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Start Code Review
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
                        >
                            Book Consultation
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Floating decorative elements */}
                <motion.div
                    animate={bgElement1Animation}
                    className="fixed top-1/4 left-10 w-4 h-4 bg-purple-300 rounded-full opacity-20 pointer-events-none"
                />
                <motion.div
                    animate={bgElement2Animation}
                    className="fixed bottom-1/4 right-10 w-6 h-6 bg-pink-300 rounded-full opacity-30 pointer-events-none"
                />
            </div>
        </div>
    );
};

export default CodeReviewPage;