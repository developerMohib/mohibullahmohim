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


    // const toggleVideo = () => {
    //     if (videoRef.current) {
    //         if (isPlaying) {
    //             videoRef.current.pause();
    //         } else {
    //             videoRef.current.play();
    //         }
    //         setIsPlaying(!isPlaying);
    //     }
    // };

    return (
        <div className="overflow-hidden">
            {/* Hero Banner Section */}
            <section className="relative flex items-center justify-center overflow-hidden">

                {/* Enhanced Background Effects */}
                <div className="absolute inset-0">
                    {/* Animated gradient orbs */}
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-3xl opacity-40 animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-full blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl opacity-30 animate-ping" style={{ animationDuration: '3s' }}></div>

                    {/* Grid overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

                    {/* Subtle noise texture */}
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9Ii4wMiIvPjwvc3ZnPg==')] opacity-30"></div>

                    {/* Animated gradient border */}
                    <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10 rounded-lg animate-gradient-x"></div>
                </div>

                <div className="relative px-4 sm:px-6 lg:px-8 text-center md:mt-16 mt-10 z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                            Transforming Ideas Into
                            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"> Digital Reality</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            I craft high-performance web applications with cutting-edge technologies.
                            Let&apos;s build something extraordinary together.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                            <Button size="lg" className="px-8 py-4 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                                Start Your Project
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-2 border-gray-600 text-white hover:bg-gray-800 hover:border-gray-400 rounded-xl transition-all duration-300">
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
                                    <div key={index} className="text-center backdrop-blur-sm bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                                        <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                                        <div className="flex items-center justify-center text-gray-300 text-sm">
                                            <Icon className="w-4 h-4 mr-1" />
                                            {stat.label}
                                        </div>
                                    </div>
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
                    className="absolute md:bottom-28 bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <div className="animate-bounce">
                        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Services Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <Badge variant="secondary" className="mb-4 px-4 py-1 text-sm">
                            What I Offer
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mb-4">
                            Comprehensive <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Development</span> Services
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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
                                    <Card className="hover:shadow-xl transition-all duration-300 border-0 h-full">
                                        <CardHeader className="text-center pb-4">
                                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                                <Icon className="w-8 h-8 text-white" />
                                            </div>
                                            <CardTitle className="text-xl">{service.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="text-center">
                                            <CardDescription className="text-gray-400 mb-4">
                                                {service.description}
                                            </CardDescription>
                                            <ul className="space-y-2 text-sm text-gray-400">
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
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div>
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <Badge variant="secondary" className="mb-4 px-4 py-1 text-sm">
                            My Process
                        </Badge>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-300 mb-4">
                            How I{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Work
                            </span>
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-2">
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
                                            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white/10 md:my-3">
                                                <CardHeader className="p-6">
                                                    <div className="flex items-center mb-4">
                                                        <div
                                                            className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mr-4`}
                                                        >
                                                            <Icon className="w-6 h-6 text-white" />
                                                        </div>
                                                        <CardTitle className="text-lg sm:text-xl">
                                                            Step {step.step}
                                                        </CardTitle>
                                                    </div>
                                                    <CardTitle className="text-xl sm:text-2xl mb-2">
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
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <Badge variant="secondary" className="mb-4 px-4 py-1 text-sm">
                            My Work
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mb-4">
                            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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
                                <Card className="hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                                    <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-6xl">
                                        {project.image}
                                    </div>
                                    <CardHeader>
                                        <div className="flex items-start justify-between mb-2">
                                            <CardTitle className="text-xl">{project.title}</CardTitle>
                                            {project.featured && (
                                                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                                                    Featured
                                                </Badge>
                                            )}
                                        </div>
                                        <CardDescription className="text-gray-600">
                                            {project.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tags.map((tag, tagIndex) => (
                                                <Badge key={tagIndex} variant="outline" className="text-xs">
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
                                                <Button size="sm" variant="outline" className="flex-1">
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
                        <Button size="lg" variant="outline" className="px-8 py-3 cursor-pointer">
                            View All Projects
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Testimonials Slider Section */}
            <Testimonial />
            {/* FAQ Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <Badge variant="secondary" className="mb-4 px-4 py-1 text-sm">
                            FAQ
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mb-4">
                            Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Questions</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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
                                <AccordionItem value={`item-${index}`} className="border-t border-gray-200 rounded-lg px-6 hover:border-gray-300 transition-colors">
                                    <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-600 text-lg pb-6">
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