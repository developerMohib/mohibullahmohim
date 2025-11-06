"use client";

import React, { useState, useEffect } from 'react';
import { Facebook, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { motion } from 'framer-motion';
import Logo from './common/Logo';
import { useTheme } from "next-themes";

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { theme } = useTheme();

  // Initialize with client-side only
  useEffect(() => {
    setIsMounted(true);

    const timer = setInterval(() => {
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Subscribed with email:', email);
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const navigationLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/all-projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/mohibullah-mohim', icon: Linkedin },
    { name: 'Facebook', href: 'https://www.facebook.com/mohibullah.jubileean', icon: Facebook },
    { name: 'GitHub', href: 'https://github.com/developerMohib', icon: Github },
    { name: 'Twitter', href: 'https://twitter.com/Mohib333', icon: Twitter },
    { name: 'Instagram', href: 'https://instagram.com/mohib_the_maziest', icon: Instagram },
  ];

  // Helper functions for theme-based styling
  const getBorderColor = () => {
    return theme === 'light' ? 'border-gray-200' : 'border-gray-800';
  };

  const getTextColor = (type: 'primary' | 'secondary' = 'secondary') => {
    if (type === 'primary') {
      return theme === 'light' ? 'text-gray-900' : 'text-gray-300';
    }
    return theme === 'light' ? 'text-gray-600' : 'text-gray-400';
  };

  const getHoverTextColor = () => {
    return theme === 'light' ? 'hover:text-gray-900' : 'hover:text-white';
  };

  const getBackgroundColor = () => {
    return theme === 'light' ? 'bg-white' : 'bg-gray-900';
  };

  const getInputBackground = () => {
    return theme === 'light' ? 'bg-gray-50 border-gray-300' : 'bg-gray-900 border-gray-700';
  };

  const getTooltipStyle = () => {
    return theme === 'light' 
      ? 'bg-white text-gray-900 border-gray-200' 
      : 'bg-gray-800 text-white border-gray-700';
  };

  const getCurrentYear = () => {
    return isMounted ? new Date().getFullYear() : '2024';
  };

  return (
    <footer className={`border-t ${getBorderColor()} ${getBackgroundColor()}`}>
      {/* Main Footer Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">

          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Logo />
            <motion.h1
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-3xl font-bold mb-6 tracking-wide"
            >
              developer<span className="text-blue-500">Mohib</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >

              {/* Dynamic Time Display */}
              <div className="mb-6">
                <div className={`text-sm ${getTextColor('secondary')} mt-1`}>
                  <p>To businesses and entrepreneurs bring their digital ideas to life by building full-stack web applications with the MERN stack. My service covers everything from UI/UX design implementation with React to creating secure server infrastructure, ensuring you get a complete, high-performance product that engages users and drives growth.</p>
                </div>
              </div>

              {/* Social Links with Tooltips */}
              <div className="flex space-x-4 relative">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.div
                      key={social.name}
                      className="relative group"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.a
                        href={social.href}
                        className={`w-10 h-10 ${
                          theme === 'light' 
                            ? 'bg-gray-900 text-white hover:bg-gray-700' 
                            : 'bg-white text-black hover:bg-gray-200'
                        } rounded-full flex items-center justify-center text-lg transition-colors duration-200 group-hover:animate-spin`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon className='' size={18} />
                      </motion.a>

                      {/* Tooltip */}
                      <div className={`
                        absolute -top-12 left-1/2 transform -translate-x-1/2
                        ${getTooltipStyle()}
                        text-xs font-semibold px-3 py-2 
                        rounded-lg shadow-xl border
                        opacity-0 group-hover:opacity-100
                        transition-all duration-300 ease-out
                        pointer-events-none
                        whitespace-nowrap
                        z-50
                      `}>
                        {social.name}

                        {/* Tooltip arrow */}
                        <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 ${
                          theme === 'light' ? 'bg-white' : 'bg-gray-800'
                        } rotate-45`} />
                      </div>
                    </motion.div>
                  );
                })}
              </div>

            </motion.div>
          </div>

          <div className='grid grid-cols-2'>
            {/* Navigation Links */}
            <div className='grid-cols-1'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h4 className={`text-lg font-semibold mb-4 ${getTextColor('primary')}`}>Navigation</h4>
                <ul className="space-y-3">
                  {navigationLinks.map((link) => (
                    <li key={link.name}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 5 }}
                        className={`${getTextColor('secondary')} ${getHoverTextColor()} transition-colors duration-200 flex items-center group`}
                      >
                        <span className="w-1 h-1 bg-red-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Legal Links */}
            <div className='grid-cols-1'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className={`text-lg font-semibold mb-4 ${getTextColor('primary')}`}>Legal</h4>
                <ul className="space-y-3">
                  {legalLinks.map((link) => (
                    <li key={link.name}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 5 }}
                        className={`${getTextColor('secondary')} ${getHoverTextColor()} transition-colors duration-200 flex items-center group`}
                      >
                        <span className="w-1 h-1 bg-red-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className={`text-lg font-semibold mb-4 ${getTextColor('primary')}`}>Stay Updated</h4>
              <p className={`${getTextColor('secondary')} mb-4 text-sm`}>
                Get the latest updates and insights delivered to your inbox.
              </p>

              {isSubscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 text-center"
                >
                  <div className="text-green-400 font-semibold">🎉 Subscribed!</div>
                  <div className="text-green-400/70 text-sm mt-1">
                    Thank you for subscribing!
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className={`w-full px-4 py-3 ${getInputBackground()} rounded-lg ${
                        theme === 'light' ? 'text-gray-900 placeholder-gray-500' : 'text-white placeholder-gray-400'
                      } focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200`}
                      required
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full ${
                      theme === 'light' 
                        ? 'bg-gray-900 text-white hover:bg-gray-700' 
                        : 'bg-white text-black hover:bg-gray-200'
                    } font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2`}
                  >
                    <span>Subscribe</span>
                    <span>→</span>
                  </motion.button>
                </form>
              )}

              <div className={`mt-4 text-xs ${getTextColor('secondary')}`}>
                No spam. Unsubscribe at any time.
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={`border-t ${getBorderColor()}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className={`text-sm ${getTextColor('secondary')}`}>
              © {getCurrentYear()} Mohibullah Mohim. All rights reserved.
            </div>

            {/* Additional mini navigation */}
            <div className="flex items-center space-x-6 text-sm">
              <a 
                href="/sitemap" 
                className={`${getTextColor('secondary')} ${getHoverTextColor()} transition-colors duration-200`}
              >
                Sitemap
              </a>
              <a 
                href="/accessibility" 
                className={`${getTextColor('secondary')} ${getHoverTextColor()} transition-colors duration-200`}
              >
                Accessibility
              </a>
              <div className={theme === 'light' ? 'text-gray-400' : 'text-gray-600'}>|</div>
              <div className={getTextColor('secondary')}>
                Made with <span className="text-red-400">♥</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;