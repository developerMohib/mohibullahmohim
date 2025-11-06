import { useState } from 'react';
import { testimonials } from '@/fakedata/testimonial';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { Badge } from './ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from './ui/card';

const Testimonial = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-1 text-sm bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300">
            Client Testimonials
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-300 mb-4">
            What My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Clients</span> Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Don&apos;t just take my word for it - hear from those I&apos;ve worked with
          </p>
        </motion.div>

        <div className="relative">
          <div className="max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* First Testimonial */}
                  <Card className="border border-gray-200 dark:border-gray-700 shadow-xl bg-white dark:bg-gray-800">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="text-5xl text-gray-600 dark:text-gray-400 mb-4">
                          {testimonials[activeTestimonial].image}
                        </div>
                        <Quote className="w-6 h-6 text-gray-400 dark:text-gray-500 mb-4" />
                        <p className="text-lg text-gray-600 dark:text-gray-300 italic mb-4">
                          &ldquo;{testimonials[activeTestimonial].content}&rdquo;
                        </p>
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-gray-400">
                            {testimonials[activeTestimonial].name}
                          </div>
                          <div className="text-gray-600 dark:text-gray-500 text-sm">
                            {testimonials[activeTestimonial].role}
                          </div>
                          <div className="flex items-center justify-center gap-1 mt-2">
                            {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Second Testimonial */}
                  <Card className="border border-gray-200 dark:border-gray-700 shadow-xl bg-white dark:bg-gray-800">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="text-5xl text-gray-600 dark:text-gray-400 mb-4">
                          {testimonials[(activeTestimonial + 1) % testimonials.length].image}
                        </div>
                        <Quote className="w-6 h-6 text-gray-400 dark:text-gray-500 mb-4" />
                        <p className="text-lg text-gray-600 dark:text-gray-300 italic mb-4">
                          &ldquo;{testimonials[(activeTestimonial + 1) % testimonials.length].content}&rdquo;
                        </p>
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-gray-400">
                            {testimonials[(activeTestimonial + 1) % testimonials.length].name}
                          </div>
                          <div className="text-gray-600 dark:text-gray-500 text-sm">
                            {testimonials[(activeTestimonial + 1) % testimonials.length].role}
                          </div>
                          <div className="flex items-center justify-center gap-1 mt-2">
                            {[...Array(testimonials[(activeTestimonial + 1) % testimonials.length].rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-700 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <ChevronLeft className="w-6 h-6 text-gray-900 dark:text-gray-300" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-700 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <ChevronRight className="w-6 h-6 text-gray-900 dark:text-gray-300" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeTestimonial
                    ? 'bg-blue-600 dark:bg-blue-500 w-8'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;