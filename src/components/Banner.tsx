'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    ArrowRight,
    Play,
    Star,
    Mail,
    Clock,
    Users,
    Award,
    Download,
    Code,
    MapPin,
} from 'lucide-react';

import { FloatingParticles } from './animation/FloatingParticles';
import { CodeStreams } from './animation/CodeStreams';
import { BinaryRain } from './animation/BinaryRain';
import { useState } from 'react';
import { BookForm } from './Bookform';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import VideoPopupButton from './Watchvideo';

const Banner = () => {
    const [isBookFormOpen, setIsBookFormOpen] = useState(false);
    // Add these functions
    const openBookForm = () => setIsBookFormOpen(true);
    const closeBookForm = () => setIsBookFormOpen(false);



    // Stats Data
    const stats = [
        { number: "50+", label: "Projects Completed", icon: Award },
        { number: "100%", label: "Client Satisfaction", icon: Star },
        { number: "3+", label: "Years Experience", icon: Clock },
        { number: "24/7", label: "Support Available", icon: Users }
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



    const movingOrbs = [
        {
            id: 1,
            startX: -100,
            startY: 20,
            endX: 100,
            endY: 80,
            duration: 25,
            size: 'w-96 h-96',
            color: 'from-blue-500/10 to-purple-600/10'
        },
        {
            id: 2,
            startX: 120,
            startY: 60,
            endX: -20,
            endY: 10,
            duration: 30,
            size: 'w-80 h-80',
            color: 'from-purple-500/10 to-pink-600/10'
        },
        {
            id: 3,
            startX: 50,
            startY: 90,
            endX: 50,
            endY: -10,
            duration: 20,
            size: 'w-64 h-64',
            color: 'from-cyan-400/10 to-blue-500/10'
        }
    ];

    return (
        <div>
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 min-h-screen flex items-center"
            >
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Moving Gradient Orbs */}
                    {movingOrbs.map((orb) => (
                        <motion.div
                            key={orb.id}
                            className={`absolute ${orb.size} bg-gradient-to-r ${orb.color} rounded-full blur-3xl`}
                            animate={{
                                x: [`${orb.startX}vw`, `${orb.endX}vw`],
                                y: [`${orb.startY}vh`, `${orb.endY}vh`],
                            }}
                            transition={{
                                duration: orb.duration,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut"
                            }}
                        />
                    ))}

                    {/* Floating Particles Animation*/}
                    <FloatingParticles />

                    {/* Animated Grid - This is fine */}
                    <motion.div
                        className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(147,197,253,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(147,197,253,0.05)_1px,transparent_1px)] bg-[size:64px_64px]"
                        animate={{
                            backgroundPosition: ['0% 0%', '100% 100%'],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />

                    {/* Code-like Streaming Lines Animation*/}
                    <CodeStreams />
                </div>

                <div className="relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="space-y-6"
                        >
                            <motion.div variants={itemVariants}>
                                <Badge variant="secondary" className="mb-4 px-4 py-1 text-sm bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-500/30">
                                    Full Stack Developer
                                </Badge>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                                    Crafting Digital
                                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 bg-clip-text text-transparent"> Experiences</span>
                                    That Matter
                                </h1>
                            </motion.div>

                            <motion.p variants={itemVariants} className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                                I specialize in building modern, scalable web applications with cutting-edge technologies.
                                With a passion for clean code and user-centric design, I transform ideas into powerful digital solutions.
                            </motion.p>

                            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Button onClick={openBookForm} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                                    <Mail className="w-5 h-5 mr-2" />
                                    Get In Touch
                                </Button>

                                <Button
                                    variant="outline"
                                    className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-8 py-3 rounded-xl font-semibold transition-all duration-300"
                                    onClick={() => window.open('https://drive.google.com/file/d/12l9IkEsvO4s7gqAys8Ujs6RSHC8V8ip-/view?usp=drive_link', '_blank', 'noopener,noreferrer')}
                                >
                                    <Download className="w-5 h-5 mr-2" />
                                    Download Resume
                                </Button>
                            </motion.div>
                        </motion.div>

                        {/* Profile Image/Graphic */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative w-80 h-80 mx-auto">
                                {/* Animated background rings */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                />
                                <motion.div
                                    className="absolute inset-2 bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-2xl flex items-center justify-center border border-gray-200 dark:border-gray-700"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="text-center p-8">
                                        <motion.div
                                            className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center"
                                            animate={{ rotate: [0, 360] }}
                                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                        >
                                            <Code className="w-12 h-12 text-white" />
                                        </motion.div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Mohibullah Mohim</h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">Full Stack Developer</p>
                                        <div className="flex items-center justify-center mt-3 text-gray-500 dark:text-gray-500 text-sm">
                                            <MapPin className="w-4 h-4 mr-1" />
                                            Available Worldwide
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Hero Banner Section */}
            <section className="relative flex items-center justify-center overflow-hidden bg-white dark:bg-gray-900 py-20 min-h-[80vh]">

                {/* Enhanced Background Effects */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Moving orbs with different paths */}
                    <motion.div
                        className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-3xl"
                        animate={{
                            x: ['-10%', '110%', '-10%'],
                            y: ['20%', '60%', '20%'],
                        }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div
                        className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-full blur-3xl"
                        animate={{
                            x: ['110%', '-10%', '110%'],
                            y: ['60%', '20%', '60%'],
                        }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 5
                        }}
                    />

                    {/* Binary rain effect Animation*/}
                    <BinaryRain />

                    {/* Pulsing grid */}
                    <motion.div
                        className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </div>

                <div className="relative px-4 sm:px-6 lg:px-8 text-center z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                            Transforming Ideas Into
                            <span className="bg-gradient-to-r from-blue-600 to-green-600 dark:from-blue-400 dark:to-green-400 bg-clip-text text-transparent"> Digital Reality</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            I craft high-performance web applications with cutting-edge technologies.
                            Let&apos;s build something extraordinary together.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                            <Button onClick={openBookForm} size="lg" className="px-8 py-4 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                                Start Your Project
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>

                            <VideoPopupButton />

                        </div>

                        {/* Stats Bar */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-5xl mx-auto"
                        >
                            {stats.map((stat, index) => {
                                const Icon = stat.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        className="text-center backdrop-blur-sm bg-white/50 dark:bg-white/5 p-4 rounded-xl border border-gray-200 dark:border-white/10 hover:bg-white/70 dark:hover:bg-white/10 transition-all duration-300"
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
                                        <div className="flex items-center justify-center text-gray-600 dark:text-gray-300 text-sm">
                                            <Icon className="w-4 h-4 mr-1" />
                                            {stat.label}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <div className="animate-bounce">
                        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                            <motion.div
                                className="w-1 h-3 bg-gray-400 rounded-full mt-2"
                                animate={{ y: [0, 12, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            />
                        </div>
                    </div>
                </motion.div>
            </section>
            <BookForm isOpen={isBookFormOpen} onClose={closeBookForm} />
        </div>
    );
};

export default Banner;