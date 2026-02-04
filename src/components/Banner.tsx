'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Mail, Clock, Users, Award, Download, Code, MapPin } from 'lucide-react';
import { useState, useMemo, useCallback } from 'react';
import { BinaryRain } from './animation/BinaryRainBanner';
import { BookForm } from './Bookform';
import { containerVariants, movingOrbs } from '@/lib/utils';
import { Orb } from './animation/AnimatedBackground';
import { AnimatedRings, BackgroundEffects } from './animation/BannerAnimation';
import { Stat } from '@/interface/bannerStats';

const stats: Stat[] = [
    { number: "50+", label: "Projects Completed", icon: Award },
    { number: "100%", label: "Client Satisfaction", icon: Star },
    { number: "3+", label: "Years Experience", icon: Clock },
    { number: "24/7", label: "Support Available", icon: Users }
];

export default function HeroSection() {
    const [isBookFormOpen, setIsBookFormOpen] = useState(false);
    const openBookForm = useCallback(() => setIsBookFormOpen(true), []);
    const closeBookForm = useCallback(() => setIsBookFormOpen(false), []);

    const memoizedOrbs = useMemo(() => movingOrbs?.map((orb, index) => (
        <Orb key={orb.id || index} orb={orb} />
    )), []);

    return (
        <div className="flex flex-col w-full">
            {/* --- Section 1: Introduction --- */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 flex items-center"
            >
                <BackgroundEffects orbs={memoizedOrbs} />

                <div className="container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side: Text Content */}
                    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6 text-left">
                        <Badge variant="secondary" className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300">
                            Full Stack Developer
                        </Badge>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                            Crafting Digital <br />
                            <AnimatedGradientText text="Experiences" /> <br />
                            That Matter
                        </h1>

                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-xl">
                            Specialize in building modern, scalable web applications.
                            I transform ideas into powerful digital solutions.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button onClick={openBookForm} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-6 rounded-xl font-semibold shadow-lg">
                                <Mail className="w-5 h-5 mr-2" /> Get In Touch
                            </Button>
                            <Button variant="outline" onClick={() => window.open('YOUR_URL', '_blank')} className="px-8 py-6 rounded-xl font-semibold border-gray-300 dark:border-gray-600">
                                <Download className="w-5 h-5 mr-2" />View Resume
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right Side: Profile Card */}
                    <div className="flex justify-center items-center">
                        <ProfileCard />
                    </div>
                </div>
            </motion.section>

            {/* --- Section 2: Stats Banner --- */}
            <section className="relative overflow-hidden bg-white dark:bg-gray-900 py-24 border-t dark:border-gray-800">
                <BannerBackground />
                <div className="container mx-auto relative z-10 text-center px-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Transforming Ideas Into <AnimatedGradientText text="Digital Reality" />
                    </h2>
                    <StatsGrid stats={stats} />
                </div>
            </section>

            <BookForm isOpen={isBookFormOpen} onClose={closeBookForm} />
        </div>
    );
}


const ProfileCard = () => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative w-full max-w-[400px] aspect-square flex items-center justify-center"
    >
        {/* Rings Background */}
        <div className="absolute inset-0">
            <AnimatedRings />
        </div>

        {/* Text Content - Positioned in front of rings */}
        <div className="relative z-20 text-center p-6 bg-white/10 dark:bg-black/10 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl">
            <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center"
            >
                <Code className="w-10 h-10 text-white" />
            </motion.div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Mohibullah Mohim</h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium">Full Stack Developer</p>

            <div className="flex items-center justify-center mt-3 text-gray-500 dark:text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mr-1" />
                Available Worldwide
            </div>
        </div>
    </motion.div>
);

const AnimatedGradientText = ({ text }: { text: string }) => (
    <motion.span
        className="bg-gradient-to-r from-blue-600 via-red-600 to-blue-600 dark:from-blue-400 dark:via-red-500 dark:to-blue-400 bg-clip-text text-transparent bg-[length:200%_auto]"
        animate={{ backgroundPosition: ["0% center", "200% center"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
    >
        {text}
    </motion.span>
);

const StatsGrid = ({ stats }: { stats: Stat[] }) => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-12">
        {stats.map((stat, i) => (
            <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-sm"
            >
                <stat.icon className="w-6 h-6 mx-auto mb-3 text-blue-500" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white">{stat.number}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
            </motion.div>
        ))}
    </div>
);

const BannerBackground = () => (
    <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]" />
        <BinaryRain />
    </div>
);

