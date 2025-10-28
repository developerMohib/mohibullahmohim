'use client';

import { aboutSkills } from "@/fakedata/aboutskill";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Code, Server, Palette, Database } from "lucide-react";
import { useTheme } from "next-themes";

const AboutPage = () => {
  const { theme } = useTheme();

  const services = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Modern React, Next.js, and TypeScript applications with stunning UI/UX",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Scalable Node.js, Python APIs and microservices architecture",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Optimized PostgreSQL, MongoDB schemas and query performance",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, responsive designs that enhance user experience",
      color: "from-orange-500 to-red-500"
    },
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

  // Background classes based on theme
  const getBackgroundClass = () => {
    switch (theme) {
      case 'dark':
        return "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900";
      case 'light':
        return "bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50";
      default:
        return "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-gray-50 dark:via-gray-100 dark:to-gray-50";
    }
  };

  // Text color classes based on theme
  const getTextColor = (type: 'primary' | 'secondary' = 'primary') => {
    if (type === 'primary') {
      return theme === 'light' ? 'text-gray-900' : 'text-white';
    }
    return theme === 'light' ? 'text-gray-600' : 'text-gray-400';
  };

  // Card background classes based on theme
  const getCardBackground = () => {
    return theme === 'light' 
      ? "bg-white/80 border-gray-200 backdrop-blur-sm hover:bg-white/90" 
      : "bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70";
  };

  // CTA section background based on theme
  const getCTABackground = () => {
    return theme === 'light'
      ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20"
      : "bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20";
  };

  return (
    <div className={`min-h-screen ${getBackgroundClass()}`}>

      {/* Services Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl font-bold ${getTextColor('primary')} mb-4`}>
              Expertise with <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Developing</span>
            </h2>
            <p className={`text-xl ${getTextColor('secondary')} max-w-3xl mx-auto`}>
              Comprehensive web development services tailored to bring your vision to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className={`${getCardBackground()} transition-all duration-300 h-full`}>
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className={`text-xl font-bold ${getTextColor('primary')} mb-3`}>{service.title}</h3>
                      <p className={`${getTextColor('secondary')} leading-relaxed`}>{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl font-bold ${getTextColor('primary')} mb-4`}>
              Technical <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className={`text-xl ${getTextColor('secondary')} max-w-3xl mx-auto`}>
              Mastery across the modern web development stack and cutting-edge technologies
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-20"
          >
            {aboutSkills?.map((category) => (
              <motion.section
                key={category.category}
                variants={itemVariants}
                className="group"
              >
                {/* Enhanced Category Header */}
                <div className="flex items-center mb-12">
                  <div className={`h-px bg-gradient-to-r from-transparent ${theme === 'light' ? 'via-gray-300' : 'via-gray-600'} to-transparent flex-1 mr-6`} />
                  <div className="text-center">
                    <h2 className={`text-2xl md:text-3xl font-bold capitalize ${getTextColor('primary')} whitespace-nowrap bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text`}>
                      {category.category}
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-2"></div>
                  </div>
                  <div className={`h-px bg-gradient-to-r from-transparent ${theme === 'light' ? 'via-gray-300' : 'via-gray-600'} to-transparent flex-1 ml-6`} />
                </div>

                {/* Enhanced Skills Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 md:gap-8">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.05 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="
                        relative group/skill
                        flex flex-col items-center text-center
                        transition-all duration-500 ease-out
                        hover:scale-110 hover:-translate-y-2 capitalize
                      "
                    >
                      {/* Enhanced Background Glow Effect */}
                      <div
                        className="
                          absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 
                          rounded-2xl blur-md opacity-0 group-hover/skill:opacity-100
                          transition-opacity duration-500 ease-out
                          -z-10
                        "
                      />

                      {/* Enhanced Skill Card */}
                      <div
                        className={`
                          relative
                          ${theme === 'light' 
                            ? 'bg-gradient-to-br from-white to-gray-100 border-gray-300/50 hover:from-gray-100 hover:to-gray-200 hover:border-gray-400/50' 
                            : 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700/50 hover:from-gray-700 hover:to-gray-800 hover:border-gray-600/50'
                          }
                          p-4 rounded-2xl shadow-lg border
                          hover:shadow-2xl
                          transition-all duration-300 ease-out
                          w-full max-w-[100px]
                          group-hover/skill:rotate-3
                        `}
                      >
                        <Image
                          width={64}
                          height={64}
                          src={skill.image}
                          alt={skill.name}
                          className="
                            w-12 h-12 object-contain 
                            transition-transform duration-300 ease-out
                            group-hover/skill:scale-110
                            filter group-hover/skill:brightness-110
                          "
                        />

                        {/* Enhanced Hover Indicator */}
                        <div
                          className="
                            absolute -bottom-1 left-1/2 transform -translate-x-1/2
                            w-4 h-1 bg-gradient-to-r from-blue-500 to-purple-500 
                            rounded-full opacity-0 group-hover/skill:opacity-100
                            transition-all duration-300 ease-out
                          "
                        />
                      </div>

                      {/* Skill Name */}
                      <p className={`
                        text-sm font-medium mt-3 capitalize
                        transition-all duration-300 ease-out
                        group-hover/skill:font-semibold
                        ${theme === 'light' 
                          ? 'text-gray-700 group-hover/skill:text-gray-900' 
                          : 'text-gray-200 group-hover/skill:text-white'
                        }
                      `}>
                        {skill.name}
                      </p>

                      {/* Enhanced Tooltip */}
                      <div
                        className={`
                          absolute -top-12 left-1/2 transform -translate-x-1/2
                          ${theme === 'light' ? 'bg-white text-gray-900 border-gray-300' : 'bg-gray-900 text-white border-gray-700'}
                          text-xs font-medium px-3 py-2 
                          rounded-lg shadow-xl border
                          opacity-0 group-hover/skill:opacity-100
                          transition-all duration-300 ease-out
                          pointer-events-none
                          whitespace-nowrap
                          z-20
                          after:content-[''] after:absolute after:top-full after:left-1/2
                          after:-translate-x-1/2 after:border-4 after:border-transparent
                          ${theme === 'light' 
                            ? 'after:border-t-white' 
                            : 'after:border-t-gray-900'
                          }
                          capitalize
                        `}
                      >
                        {skill.name}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`${getCTABackground()} rounded-3xl p-12 backdrop-blur-sm`}
          >
            <h2 className={`text-3xl md:text-4xl font-bold ${getTextColor('primary')} mb-4`}>
              Ready to Bring Your Idea to Life?
            </h2>
            <p className={`text-xl ${getTextColor('secondary')} mb-8 max-w-2xl mx-auto`}>
              Let&apos;s collaborate to create something extraordinary. Your vision, my expertise - together we can build the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <Mail className="w-5 h-5 mr-2" />
                Start a Project
              </Button>
              <Button 
                variant="outline" 
                className={`${theme === 'light' 
                  ? 'border-gray-400 text-gray-700 hover:bg-gray-200' 
                  : 'border-gray-600 text-gray-300 hover:bg-gray-800'
                } px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300`}
              >
                View My Work
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;