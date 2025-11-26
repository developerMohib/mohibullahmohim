'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Brain, Target, Users, Rocket, BarChart, Shield, Zap, Lightbulb, TrendingUp, Globe, Clock, Award } from 'lucide-react';
import { useEffect, useState } from 'react';

const ConsultingPage = () => {
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

    const services = [
        {
            icon: Brain,
            title: 'Technical Strategy',
            description: 'Architecture planning and technology roadmap development'
        },
        {
            icon: Target,
            title: 'Digital Transformation',
            description: 'Modernize your business processes with cutting-edge solutions'
        },
        {
            icon: Users,
            title: 'Team Mentoring',
            description: 'Upskill your development team with modern practices'
        },
        {
            icon: Rocket,
            title: 'Product Development',
            description: 'End-to-end product strategy and development guidance'
        },
        {
            icon: BarChart,
            title: 'Performance Optimization',
            description: 'Identify and resolve bottlenecks in your applications'
        },
        {
            icon: Shield,
            title: 'Security Audits',
            description: 'Comprehensive security assessment and hardening'
        }
    ];

    const consultingAreas = [
        {
            icon: Zap,
            title: 'Startup Consulting',
            description: 'Accelerate your startup with proven technical strategies',
            features: ['MVP Development', 'Tech Stack Selection', 'Scalability Planning', 'Funding Preparation']
        },
        {
            icon: Lightbulb,
            title: 'Enterprise Solutions',
            description: 'Transform large-scale operations with enterprise architecture',
            features: ['System Architecture', 'Legacy Modernization', 'Team Structure', 'Process Optimization']
        },
        {
            icon: TrendingUp,
            title: 'Growth Strategy',
            description: 'Scale your business with data-driven technical decisions',
            features: ['Performance Scaling', 'Cost Optimization', 'Feature Planning', 'Market Analysis']
        }
    ];

    const technologies = [
        { name: 'System Architecture', color: 'from-blue-500 to-cyan-500' },
        { name: 'Cloud Migration', color: 'from-orange-500 to-yellow-500' },
        { name: 'DevOps Strategy', color: 'from-green-500 to-emerald-500' },
        { name: 'Microservices', color: 'from-purple-500 to-pink-500' },
        { name: 'API Design', color: 'from-red-500 to-orange-500' },
        { name: 'Data Strategy', color: 'from-indigo-500 to-blue-500' },
        { name: 'Security Framework', color: 'from-gray-600 to-gray-800' },
        { name: 'Team Leadership', color: 'from-teal-500 to-cyan-500' }
    ];

    const capabilities = [
        'Technical Architecture Review',
        'Code Quality Assessment',
        'Performance Analysis',
        'Security Vulnerability Assessment',
        'Team Skills Evaluation',
        'Technology Stack Recommendation',
        'Development Process Optimization',
        'Project Rescue & Recovery',
        'Technical Due Diligence',
        'Documentation Strategy',
        'Training & Workshops',
        'Ongoing Advisory'
    ];

    const processSteps = [
        {
            step: '01',
            title: 'Discovery',
            description: 'Deep dive into your current challenges and objectives'
        },
        {
            step: '02',
            title: 'Analysis',
            description: 'Comprehensive assessment of your technical landscape'
        },
        {
            step: '03',
            title: 'Strategy',
            description: 'Customized roadmap and actionable recommendations'
        },
        {
            step: '04',
            description: 'Implementation support and ongoing guidance'
        }
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
        rotate: [0, 360],
        transition: {
            duration: 20,
            repeat: Infinity,
            ease: "linear" as const
        }
    };

    const thoughtAnimation = {
        scale: [1, 1.1, 1],
        opacity: [1, 0.8, 1],
        transition: {
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse" as const,
            ease: "easeInOut" as const
        }
    };

    const bgElement1Animation = {
        y: [0, -25, 0],
        x: [0, 20, 0],
        opacity: [0.2, 0.4, 0.2],
        transition: {
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse" as const,
            ease: "easeInOut" as const
        }
    };

    const bgElement2Animation = {
        y: [0, 30, 0],
        x: [0, -25, 0],
        opacity: [0.3, 0.1, 0.3],
        transition: {
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse" as const,
            ease: "easeInOut" as const,
            delay: 3
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
                        <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto">
                            <Brain className="w-10 h-10 text-white" />
                        </div>
                    </motion.div>
                    
                    <motion.h1 
                        variants={fadeInUp}
                        className={`text-4xl md:text-5xl font-bold mb-4 ${getTextColor('primary')}`}
                    >
                        Technical Consulting
                    </motion.h1>
                    
                    <motion.p 
                        variants={fadeInUp}
                        className={`text-xl max-w-2xl mx-auto ${getTextColor('secondary')}`}
                    >
                        Strategic guidance and expert insights to transform your technology 
                        vision into measurable business success.
                    </motion.p>
                </motion.div>

                {/* Services Grid with enhanced animations */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
                >
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.title}
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
                                    className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:from-amber-600 group-hover:to-orange-600 transition-colors"
                                >
                                    <Icon className="w-6 h-6 text-white" />
                                </motion.div>
                                <motion.h3 
                                    className={`text-lg font-semibold mb-2 ${getTextColor('primary')}`}
                                    whileHover={{ color: theme === 'light' ? '#d97706' : '#f59e0b' }}
                                >
                                    {service.title}
                                </motion.h3>
                                <motion.p 
                                    className={getTextColor('secondary')}
                                    initial={{ opacity: 0.8 }}
                                    whileHover={{ opacity: 1 }}
                                >
                                    {service.description}
                                </motion.p>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Consulting Areas Section */}
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
                        Consulting Specializations
                    </motion.h2>
                    
                    <motion.div 
                        variants={staggerChildren}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {consultingAreas.map((area) => {
                            const Icon = area.icon;
                            return (
                                <motion.div
                                    key={area.title}
                                    variants={itemVariants}
                                    whileHover={{ 
                                        y: -5,
                                        transition: { type: "spring" as const, stiffness: 300 }
                                    }}
                                    className={`p-6 rounded-xl ${getCardStyle()} hover:shadow-xl transition-all duration-300 cursor-pointer`}
                                >
                                    <motion.div
                                        animate={bounceAnimation}
                                        className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4"
                                    >
                                        <Icon className="w-8 h-8 text-white" />
                                    </motion.div>
                                    <motion.h3 
                                        className={`text-xl font-semibold mb-3 ${getTextColor('primary')}`}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {area.title}
                                    </motion.h3>
                                    <motion.p 
                                        className={`mb-4 ${getTextColor('secondary')}`}
                                        initial={{ opacity: 0.8 }}
                                        whileHover={{ opacity: 1 }}
                                    >
                                        {area.description}
                                    </motion.p>
                                    <div className="space-y-2">
                                        {area.features.map((feature, featureIndex) => (
                                            <motion.div
                                                key={feature}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: featureIndex * 0.1 }}
                                                className="flex items-center space-x-2 text-sm"
                                            >
                                                <motion.div
                                                    whileHover={{ scale: 1.3 }}
                                                    animate={thoughtAnimation}
                                                    className="w-2 h-2 bg-amber-500 rounded-full"
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

                {/* Process Section */}
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
                        Consulting Process
                    </motion.h2>
                    
                    <motion.div 
                        variants={staggerChildren}
                        className="grid grid-cols-1 md:grid-cols-4 gap-6"
                    >
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={step.step}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                className={`p-6 rounded-xl text-center ${getCardStyle()} relative`}
                            >
                                <motion.div
                                    animate={rotateAnimation}
                                    className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4"
                                >
                                    <span className="text-white font-bold text-lg">{step.step}</span>
                                </motion.div>
                                <motion.h3 
                                    className={`text-lg font-semibold mb-2 ${getTextColor('primary')}`}
                                    whileHover={{ color: theme === 'light' ? '#d97706' : '#f59e0b' }}
                                >
                                    {step.title}
                                </motion.h3>
                                <motion.p 
                                    className={getTextColor('secondary')}
                                    initial={{ opacity: 0.8 }}
                                    whileHover={{ opacity: 1 }}
                                >
                                    {step.description}
                                </motion.p>
                                
                                {/* Connecting lines between steps */}
                                {index < processSteps.length - 1 && (
                                    <motion.div
                                        className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-amber-300"
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        transition={{ delay: 0.5 + index * 0.2 }}
                                    />
                                )}
                            </motion.div>
                        ))}
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
                        Expertise Areas
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
                        Consulting Capabilities
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
                                    animate={thoughtAnimation}
                                    className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0 group-hover:bg-orange-500 transition-colors"
                                />
                                <motion.span 
                                    className={`${getTextColor('primary')} group-hover:text-amber-500 transition-colors`}
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
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
                >
                    {[
                        { value: '50+', label: 'Projects Consulted', icon: Globe },
                        { value: '98%', label: 'Client Satisfaction', icon: Award },
                        { value: '24/7', label: 'Support Available', icon: Clock },
                        { value: '10+', label: 'Years Experience', icon: TrendingUp }
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
                                    className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-3"
                                    animate={floatingAnimation}
                                >
                                    <Icon className="w-6 h-6 text-white" />
                                </motion.div>
                                <motion.div 
                                    className="text-2xl md:text-3xl font-bold text-amber-500 mb-2"
                                    animate={pulseAnimation}
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
                    className="fixed top-1/4 left-10 w-4 h-4 bg-amber-300 rounded-full opacity-20 pointer-events-none"
                />
                <motion.div
                    animate={bgElement2Animation}
                    className="fixed bottom-1/4 right-10 w-6 h-6 bg-orange-300 rounded-full opacity-30 pointer-events-none"
                />
            </div>
        </div>
    );
};

export default ConsultingPage;