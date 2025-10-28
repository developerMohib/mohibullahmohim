'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Wrench, Shield, Zap, Clock, RefreshCw, Eye, Bug, Server } from 'lucide-react';
import { useEffect, useState } from 'react';

const MaintenancePage = () => {
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
      icon: Wrench,
      title: 'Proactive Maintenance',
      description: 'Regular updates and optimizations to keep your systems running smoothly'
    },
    {
      icon: Shield,
      title: 'Security Updates',
      description: 'Continuous security monitoring and vulnerability patching'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Ongoing performance tuning and speed enhancements'
    },
    {
      icon: Clock,
      title: '24/7 Monitoring',
      description: 'Round-the-clock system monitoring and alert management'
    },
    {
      icon: Bug,
      title: 'Bug Fixing',
      description: 'Quick resolution of issues and unexpected behavior'
    },
    {
      icon: RefreshCw,
      title: 'Regular Updates',
      description: 'Keep your software current with the latest features and fixes'
    }
  ];

  const supportTiers = [
    {
      icon: Eye,
      title: 'Basic Monitoring',
      description: 'Essential monitoring and maintenance for stable applications',
      features: ['Security Updates', 'Bug Fixes', 'Performance Monitoring', 'Monthly Reports'],
      response: '48 hours'
    },
    {
      icon: Shield,
      title: 'Proactive Care',
      description: 'Comprehensive maintenance with regular health checks',
      features: ['Priority Support', 'Proactive Updates', 'Performance Optimization', 'Weekly Reports'],
      response: '24 hours'
    },
    {
      icon: Zap,
      title: 'Enterprise Support',
      description: 'Full-scale maintenance with dedicated resources',
      features: ['24/7 Support', 'Emergency Response', 'Dedicated Engineer', 'Custom SLAs'],
      response: '2-4 hours'
    }
  ];

  const technologies = [
    { name: 'React/Next.js', color: 'from-blue-500 to-cyan-500' },
    { name: 'Node.js', color: 'from-green-500 to-emerald-500' },
    { name: 'MongoDB', color: 'from-green-600 to-lime-500' },
    { name: 'PostgreSQL', color: 'from-blue-700 to-indigo-600' },
    { name: 'AWS', color: 'from-orange-500 to-yellow-500' },
    { name: 'Docker', color: 'from-blue-500 to-cyan-400' },
    { name: 'Redis', color: 'from-red-500 to-orange-500' },
    { name: 'Linux Server', color: 'from-yellow-600 to-yellow-700' }
  ];

  const capabilities = [
    'Security Patch Management',
    'Performance Monitoring',
    'Database Optimization',
    'Server Maintenance',
    'Backup Management',
    'Uptime Monitoring',
    'Error Tracking',
    'Log Analysis',
    'Dependency Updates',
    'SSL Certificate Renewal',
    'CDN Configuration',
    'Disaster Recovery'
  ];

  const monitoringFeatures = [
    {
      metric: '99.9%',
      label: 'Uptime Guarantee',
      icon: Server
    },
    {
      metric: '< 1s',
      label: 'Response Time',
      icon: Zap
    },
    {
      metric: '24/7',
      label: 'Monitoring',
      icon: Eye
    },
    {
      metric: '30min',
      label: 'Emergency Response',
      icon: Clock
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


  const heartbeatAnimation = {
    scale: [1, 1.1, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut" as const
    }
  };

  const bgElement1Animation = {
    y: [0, -20, 0],
    x: [0, 15, 0],
    opacity: [0.2, 0.5, 0.2],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut" as const
    }
  };

  const bgElement2Animation = {
    y: [0, 25, 0],
    x: [0, -12, 0],
    opacity: [0.3, 0.1, 0.3],
    transition: {
      duration: 7,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut" as const,
      delay: 2
    }
  };

  // Maintenance-specific animations
  const gearAnimation = {
    rotate: [0, -360],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "linear" as const
    }
  };

  const monitoringAnimation = {
    opacity: [0.3, 1, 0.3],
    scale: [1, 1.05, 1],
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
            <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto">
              <Wrench className="w-10 h-10 text-white" />
            </div>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className={`text-4xl md:text-5xl font-bold mb-4 ${getTextColor('primary')}`}
          >
            Maintenance & Support
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className={`text-xl max-w-2xl mx-auto ${getTextColor('secondary')}`}
          >
            Keep your applications running smoothly with comprehensive maintenance
            and reliable support services.
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
                  className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:from-teal-600 group-hover:to-cyan-600 transition-colors"
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>
                <motion.h3
                  className={`text-lg font-semibold mb-2 ${getTextColor('primary')}`}
                  whileHover={{ color: theme === 'light' ? '#0d9488' : '#2dd4bf' }}
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

        {/* Support Tiers Section */}
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
            Support Plans
          </motion.h2>

          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {supportTiers.map((tier, index) => {
              const Icon = tier.icon;
              return (
                <motion.div
                  key={tier.title}
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    transition: { type: "spring" as const, stiffness: 300 }
                  }}
                  className={`p-6 rounded-xl ${getCardStyle()} hover:shadow-xl transition-all duration-300 cursor-pointer border-2 ${index === 1 ? 'border-teal-400 shadow-xl scale-105' : 'border-transparent'
                    }`}
                >
                  <motion.div
                    animate={index === 1 ? heartbeatAnimation : bounceAnimation}
                    className="w-16 h-16 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <motion.h3
                    className={`text-xl font-semibold mb-3 ${getTextColor('primary')}`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tier.title}
                  </motion.h3>
                  <motion.p
                    className={`mb-4 ${getTextColor('secondary')}`}
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {tier.description}
                  </motion.p>
                  <div className="mb-4 p-3 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
                    <motion.div
                      className="text-sm font-semibold text-teal-700 dark:text-teal-300"
                      animate={monitoringAnimation}
                    >
                      Response Time: {tier.response}
                    </motion.div>
                  </div>
                  <div className="space-y-2">
                    {tier.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                        className="flex items-center space-x-2 text-sm"
                      >
                        <motion.div
                          whileHover={{ scale: 1.3 }}
                          className="w-2 h-2 bg-teal-500 rounded-full"
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

        {/* Monitoring Features Section */}
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
            System Monitoring
          </motion.h2>

          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {monitoringFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.label}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className={`p-6 rounded-xl text-center ${getCardStyle()}`}
                >
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-3"
                    animate={gearAnimation}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <motion.div
                    className="text-2xl md:text-3xl font-bold text-teal-500 mb-2"
                    animate={pulseAnimation}
                  >
                    {feature.metric}
                  </motion.div>
                  <div className={getTextColor('secondary')}>{feature.label}</div>
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
            Maintenance Capabilities
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
                  animate={heartbeatAnimation}
                  className="w-2 h-2 bg-teal-500 rounded-full flex-shrink-0 group-hover:bg-cyan-500 transition-colors"
                />
                <motion.span
                  className={`${getTextColor('primary')} group-hover:text-teal-500 transition-colors`}
                  whileHover={{ scale: 1.02 }}
                >
                  {capability}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Emergency Support Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className={`p-8 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-center`}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-bold mb-4"
          >
            Emergency Support Available
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl mb-6 opacity-90"
          >
            24/7 emergency response for critical issues affecting your business operations
          </motion.p>
          <motion.div
            animate={heartbeatAnimation}
            className="inline-flex items-center px-6 py-3 bg-white text-teal-600 font-bold rounded-lg"
          >
            <Zap className="w-5 h-5 mr-2" />
            Emergency Contact
          </motion.div>
        </motion.div>

        {/* Floating decorative elements */}
        <motion.div
          animate={bgElement1Animation}
          className="fixed top-1/4 left-10 w-4 h-4 bg-teal-300 rounded-full opacity-20 pointer-events-none"
        />
        <motion.div
          animate={bgElement2Animation}
          className="fixed bottom-1/4 right-10 w-6 h-6 bg-cyan-300 rounded-full opacity-30 pointer-events-none"
        />
      </div>
    </div>
  );
};

export default MaintenancePage;