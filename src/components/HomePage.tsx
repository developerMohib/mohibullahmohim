'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import {
    ArrowRight,
    Play,
    Star,
    Mail,
    Phone,
    Clock,
    CheckCircle2,
    Users,
    Award,
    Download,
    Code,
    MapPin,
} from 'lucide-react';
import { services } from '@/fakedata/service';
import { processSteps } from '@/fakedata/process';
import { projects } from '@/fakedata/projects';
import { myfaqs } from '@/fakedata/faqs';
import Link from 'next/link';
import Testimonial from './Testimonial';

const HomePage = () => {
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


    // Floating particles animation
    const floatingParticles = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4
    }));

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
    // Code-like streaming animation
    const codeStreams = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        delay: i * 0.5,
        duration: 2 + Math.random() * 2
    }));

    return (
        <div className="overflow-hidden bg-white dark:bg-gray-900">
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

                    {/* Floating Particles */}
                    {floatingParticles.map((particle) => (
                        <motion.div
                            key={particle.id}
                            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
                            style={{
                                left: `${particle.x}%`,
                                top: `${particle.y}%`,
                            }}
                            animate={{
                                y: [0, -30, 0],
                                x: [0, 10, 0],
                                opacity: [0.3, 0.8, 0.3],
                            }}
                            transition={{
                                duration: particle.duration,
                                repeat: Infinity,
                                delay: particle.delay,
                                ease: "easeInOut"
                            }}
                        />
                    ))}

                    {/* Animated Grid */}
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

                    {/* Code-like Streaming Lines */}
                    {codeStreams.map((stream) => (
                        <motion.div
                            key={stream.id}
                            className="absolute h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
                            style={{
                                left: `${stream.id * 12}%`,
                                top: '20%',
                                width: '2px',
                                height: '100px',
                            }}
                            animate={{
                                y: [-100, 400],
                                opacity: [0, 1, 0],
                            }}
                            transition={{
                                duration: stream.duration,
                                repeat: Infinity,
                                delay: stream.delay,
                                ease: "linear"
                            }}
                        />
                    ))}
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
                                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                                    <Mail className="w-5 h-5 mr-2" />
                                    Get In Touch
                                </Button>
                                <Button variant="outline" className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-8 py-3 rounded-xl font-semibold transition-all duration-300">
                                    <Download className="w-5 h-5 mr-2" />
                                    Download CV
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

                    {/* Binary rain effect */}
                    {Array.from({ length: 20 }, (_, i) => (
                        <motion.div
                            key={i}
                            className="absolute text-green-400/30 font-mono text-sm"
                            style={{
                                left: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [-100, 600],
                                opacity: [0, 1, 0],
                            }}
                            transition={{
                                duration: 3 + Math.random() * 4,
                                repeat: Infinity,
                                delay: Math.random() * 5,
                                ease: "linear"
                            }}
                        >
                            {Math.random() > 0.5 ? '1' : '0'}
                        </motion.div>
                    ))}

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
                            <Button size="lg" className="px-8 py-4 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                                Start Your Project
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-400 rounded-xl transition-all duration-300">
                                <Play className="mr-2 w-5 h-5" />
                                Watch Demo
                            </Button>
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

            {/* Services Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <Badge variant="secondary" className="mb-4 px-4 py-1 text-sm bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300">
                            What I Offer
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-300 mb-4">
                            Comprehensive <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Development</span> Services
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                            End-to-end web development solutions tailored to your business needs
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                >
                                    <Card className="hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 h-full">
                                        <CardHeader className="text-center pb-4">
                                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                                <Icon className="w-8 h-8 text-white" />
                                            </div>
                                            <CardTitle className="text-xl text-gray-900 dark:text-white">{service.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="text-center">
                                            <CardDescription className="text-gray-600 dark:text-gray-400 mb-4">
                                                {service.description}
                                            </CardDescription>
                                            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                                {service.features.map((feature, featureIndex) => (
                                                    <li key={featureIndex} className="flex items-center">
                                                        <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>


            {/* Process Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
                <div>
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <Badge variant="secondary" className="mb-4 px-4 py-1 text-sm bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300">
                            My Process
                        </Badge>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-300 mb-4">
                            How I{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Work
                            </span>
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2">
                            A structured approach to ensure quality, efficiency, and outstanding
                            results
                        </p>
                    </motion.div>

                    <div className="relative">
                        {/* Timeline Line (Desktop Only) */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 hidden lg:block"></div>

                        <div className="flex flex-col space-y-16 lg:space-y-0">
                            {processSteps.map((step, index) => {
                                const Icon = step.icon;
                                const isEven = index % 2 === 0;

                                return (
                                    <motion.div
                                        key={step.step}
                                        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.2 }}
                                        className={`flex flex-col lg:flex-row items-center lg:items-stretch relative ${isEven ? "lg:flex-row-reverse" : ""
                                            }`}
                                    >
                                        {/* Content Card */}
                                        <div
                                            className={`w-full lg:w-1/2 ${isEven ? "lg:pr-12" : "lg:pl-12"
                                                }`}
                                        >
                                            <Card className="hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 md:my-3">
                                                <CardHeader className="p-6">
                                                    <div className="flex items-center mb-4">
                                                        <div
                                                            className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mr-4`}
                                                        >
                                                            <Icon className="w-6 h-6 text-white" />
                                                        </div>
                                                        <CardTitle className="text-lg sm:text-xl text-gray-900 dark:text-white">
                                                            Step {step.step}
                                                        </CardTitle>
                                                    </div>
                                                    <CardTitle className="text-xl sm:text-2xl mb-2 text-gray-900 dark:text-white">
                                                        {step.title}
                                                    </CardTitle>
                                                    <CardDescription className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                                                        {step.description}
                                                    </CardDescription>
                                                </CardHeader>
                                            </Card>
                                        </div>

                                        {/* Step Number (Desktop Only) */}
                                        <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
                                            <div
                                                className={`w-14 h-14 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg`}
                                            >
                                                {step.step}
                                            </div>
                                        </div>

                                        {/* Spacer (Desktop only, keeps alignment) */}
                                        <div className="hidden lg:block w-1/2"></div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <Badge variant="secondary" className="mb-4 px-4 py-1 text-sm bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300">
                            My Work
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-300 mb-4">
                            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                            A showcase of my latest work and innovative solutions
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="group"
                            >
                                <Card className="hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden">
                                    <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-6xl">
                                        {project.image}
                                    </div>
                                    <CardHeader>
                                        <div className="flex items-start justify-between mb-2">
                                            <CardTitle className="text-xl text-gray-900 dark:text-white">{project.title}</CardTitle>
                                            {project.featured && (
                                                <Badge variant="secondary" className="bg-yellow-100 dark:bg-yellow-500/20 text-yellow-800 dark:text-yellow-300">
                                                    Featured
                                                </Badge>
                                            )}
                                        </div>
                                        <CardDescription className="text-gray-600 dark:text-gray-400">
                                            {project.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tags.map((tag, tagIndex) => (
                                                <Badge key={tagIndex} variant="outline" className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                        <div className="flex gap-2">
                                            <Link href={'/'}>
                                                <Button size="sm" className="flex-1">
                                                    Live Demo
                                                </Button>
                                            </Link>
                                            <Link href={'/'}>
                                                <Button size="sm" variant="outline" className="flex-1 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300">
                                                    GitHub
                                                </Button>
                                            </Link>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-center mt-12"
                    >
                        <Button size="lg" variant="outline" className="px-8 py-3 cursor-pointer border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300">
                            View All Projects
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Testimonials Slider Section */}
            <Testimonial />

            {/* FAQ Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <Badge variant="secondary" className="mb-4 px-4 py-1 text-sm bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300">
                            FAQ
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-300 mb-4">
                            Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Questions</span>
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                            Get answers to common questions about my services and process
                        </p>
                    </motion.div>

                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {myfaqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <AccordionItem value={`item-${index}`} className="border-t border-gray-200 dark:border-gray-700 rounded-lg px-6 hover:border-gray-300 dark:hover:border-gray-600 transition-colors bg-white dark:bg-gray-800">
                                    <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6 text-gray-900 dark:text-gray-300">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-600 dark:text-gray-400 text-lg pb-6">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </motion.div>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-white"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Ready to Start Your Project?
                        </h2>
                        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                            Let&apos;s discuss your ideas and turn them into reality. Get in touch for a free consultation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold">
                                <Mail className="w-5 h-5 mr-2" />
                                Get Free Quote
                            </Button>
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-xl font-semibold">
                                <Phone className="w-5 h-5 mr-2" />
                                Schedule Call
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;