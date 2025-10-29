'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle2 } from 'lucide-react';
import { services } from '@/fakedata/service';
import { myfaqs } from '@/fakedata/faqs';
import Testimonial from './Testimonial';
import Projects from './Projects';
import ContactSection from './ContactSection';
import { processSteps } from '@/fakedata/process';
import Banner from './Banner';

const HomePage = () => {

    return (
        <div className="overflow-hidden bg-white dark:bg-gray-900">
            {/* Hero Section */}
            <Banner />

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
            <Projects />

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
            <ContactSection />
        </div>
    );
};

export default HomePage;