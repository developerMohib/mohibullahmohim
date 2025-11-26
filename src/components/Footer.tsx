"use client";

import React, { useState, useEffect } from "react";
import { Facebook, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import Logo from "./common/Logo";
import { useTheme } from "next-themes";
import AppLoader from "./AppLoader";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);


  if (!isMounted) {
    return (
      <AppLoader />
    );
  }

  // ✔️ Theme-safe helper classes (only run after mount)
  const borderColor = theme === "light" ? "border-gray-200" : "border-gray-800";
  const backgroundColor = theme === "light" ? "bg-white" : "bg-gray-900";
  const textPrimary = theme === "light" ? "text-gray-900" : "text-gray-300";
  const textSecondary = theme === "light" ? "text-gray-600" : "text-gray-400";
  const hoverText = theme === "light" ? "hover:text-gray-900" : "hover:text-white";
  const inputBg = theme === "light" ? "bg-gray-50 border-gray-300" : "bg-gray-900 border-gray-700";
  const tooltipBg =
    theme === "light"
      ? "bg-white text-gray-900 border-gray-200"
      : "bg-gray-800 text-white border-gray-700";

  const getCurrentYear = () => new Date().getFullYear();

  const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/mohibullah-mohim", icon: Linkedin },
    { name: "Facebook", href: "https://www.facebook.com/mohibullah.jubileean", icon: Facebook },
    { name: "GitHub", href: "https://github.com/developerMohib", icon: Github },
    { name: "Twitter", href: "https://twitter.com/Mohib333", icon: Twitter },
    { name: "Instagram", href: "https://instagram.com/mohib_the_maziest", icon: Instagram },
  ];

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/all-projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ];

  return (
    <footer className={`border-t ${borderColor} ${backgroundColor}`}>
      <div className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Branding */}
          <div>
            <Logo />
            <motion.h1
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold mb-6 tracking-wide"
            >
              developer<span className="text-blue-500">Mohib</span>
            </motion.h1>

            <p className={`text-sm ${textSecondary} mb-6`}>
              To businesses and entrepreneurs bring their digital ideas to life by building
              full-stack web applications with the MERN stack.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.name}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="relative group"
                  >
                    <a
                      href={item.href}
                      target="_blank"
                      className={`w-10 h-10 ${
                        theme === "light"
                          ? "bg-gray-900 text-white hover:bg-gray-700"
                          : "bg-white text-black hover:bg-gray-200"
                      } rounded-full flex items-center justify-center transition`}
                    >
                      <Icon size={18} />
                    </a>

                    {/* Tooltip */}
                    <div
                      className={`
                        ${tooltipBg}
                        absolute -top-12 left-1/2 -translate-x-1/2
                        opacity-0 group-hover:opacity-100
                        transition-all px-3 py-2 rounded-lg border text-xs z-50
                      `}
                    >
                      {item.name}
                      <div
                        className={`
                          absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2
                          ${theme === "light" ? "bg-white" : "bg-gray-800"} rotate-45
                        `}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2">
            <div>
              <h4 className={`text-lg font-semibold mb-4 ${textPrimary}`}>Navigation</h4>
              <ul className="space-y-3">
                {navigationLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className={`${textSecondary} ${hoverText} transition`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className={`text-lg font-semibold mb-4 ${textPrimary}`}>Legal</h4>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className={`${textSecondary} ${hoverText} transition`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className={`text-lg font-semibold mb-4 ${textPrimary}`}>Stay Updated</h4>
            <p className={`${textSecondary} mb-4 text-sm`}>
              Get the latest updates right in your inbox.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setIsSubscribed(true);
                setEmail("");
                setTimeout(() => setIsSubscribed(false), 3000);
              }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border ${inputBg} ${
                  theme === "light" ? "text-gray-900" : "text-white"
                }`}
              />

              <button
                type="submit"
                className={`w-full mt-3 py-3 rounded-lg font-semibold ${
                  theme === "light"
                    ? "bg-gray-900 text-white hover:bg-gray-700"
                    : "bg-white text-black hover:bg-gray-200"
                }`}
              >
                Subscribe →
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={`border-t ${borderColor}`}>
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between text-sm">
          <span className={textSecondary}>© {getCurrentYear()} Mohibullah Mohim</span>

          <div className="flex space-x-6">
            <a className={`${textSecondary} ${hoverText}`} href="/sitemap">
              Sitemap
            </a>
            <a className={`${textSecondary} ${hoverText}`} href="/accessibility">
              Accessibility
            </a>
            <span className={textSecondary}>Made with ❤️</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
