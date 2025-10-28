'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { useTheme } from 'next-themes';

const Support = () => {
  const [activeTab, setActiveTab] = useState('services');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { theme } = useTheme();

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
      ? 'bg-white border-gray-200 shadow-md hover:shadow-lg' 
      : 'bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70';
  };

  const getBorderColor = () => {
    return theme === 'light' ? 'border-gray-200' : 'border-gray-700';
  };

  const getInputStyle = () => {
    return theme === 'light' 
      ? 'bg-white border-gray-300 text-gray-900 placeholder-gray-500' 
      : 'bg-gray-800 border-gray-600 text-white placeholder-gray-400';
  };

  const getTabsListStyle = () => {
    return theme === 'light' ? 'bg-gray-200' : 'bg-gray-800';
  };

  const supportTiers = [
    {
      tier: 'Basic',
      icon: '🛠️',
      price: '$49',
      period: '/month',
      description: 'Essential support for small projects',
      features: [
        'Email support (4h response)',
        'Bug fixes & minor updates',
        'Security patches',
        'Basic performance optimization',
        'Monthly health reports'
      ],
      bestFor: 'Small websites & personal projects',
      cta: 'Get Started',
      popular: false
    },
    {
      tier: 'Professional',
      icon: '🚀',
      price: '$149',
      period: '/month',
      description: 'Comprehensive support for growing businesses',
      features: [
        'Priority email support (2h response)',
        'Live chat during business hours',
        'Unlimited bug fixes',
        'Performance optimization',
        'Security monitoring',
        'Feature enhancements',
        'Weekly backups',
        'SEO maintenance'
      ],
      bestFor: 'Growing businesses & e-commerce',
      cta: 'Start Free Trial',
      popular: true
    },
    {
      tier: 'Enterprise',
      icon: '🏢',
      price: 'Custom',
      period: '',
      description: 'Dedicated support for mission-critical applications',
      features: [
        '24/7 emergency support',
        'Dedicated technical manager',
        'Custom SLAs',
        'Advanced security monitoring',
        'Performance audits',
        'Architecture consulting',
        'Team training sessions',
        'Custom integrations'
      ],
      bestFor: 'Large enterprises & high-traffic apps',
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const supportServices = [
    {
      category: 'Technical Maintenance',
      icon: '🔧',
      services: [
        {
          title: 'Code Updates & Migration',
          description: 'Keep your codebase current with latest frameworks and security standards',
          details: ['Version upgrades', 'Dependency updates', 'Security patches', 'Framework migration']
        },
        {
          title: 'Performance Optimization',
          description: 'Speed up your application and improve user experience',
          details: ['Lighthouse optimization', 'Database tuning', 'CDN configuration', 'Caching strategies']
        },
        {
          title: 'Security Hardening',
          description: 'Protect your application from threats and vulnerabilities',
          details: ['Security audits', 'Vulnerability scanning', 'SSL management', 'Firewall configuration']
        }
      ]
    },
    {
      category: 'Development Support',
      icon: '💻',
      services: [
        {
          title: 'Feature Development',
          description: 'Add new features and functionality to your existing application',
          details: ['UI/UX enhancements', 'API integrations', 'Third-party services', 'Custom functionality']
        },
        {
          title: 'Bug Fixing & Debugging',
          description: 'Quick resolution of technical issues and unexpected behavior',
          details: ['Error diagnosis', 'Cross-browser testing', 'Mobile responsiveness', 'Performance issues']
        },
        {
          title: 'Code Review & Quality',
          description: 'Ensure code quality and maintainability with expert reviews',
          details: ['Code quality assessment', 'Best practices implementation', 'Architecture review', 'Documentation']
        }
      ]
    },
    {
      category: 'Strategic Consulting',
      icon: '🎯',
      services: [
        {
          title: 'Technical Architecture',
          description: 'Design scalable and maintainable system architectures',
          details: ['System design', 'Technology selection', 'Scalability planning', 'Infrastructure design']
        },
        {
          title: 'Development Strategy',
          description: 'Plan and optimize your development processes and workflows',
          details: ['Development methodology', 'Team structure', 'Tool selection', 'Process optimization']
        },
        {
          title: 'Project Rescue',
          description: 'Take over struggling projects and get them back on track',
          details: ['Codebase assessment', 'Project planning', 'Team mentoring', 'Delivery optimization']
        }
      ]
    }
  ];

  const technologies = [
    { name: 'Next.js', icon: '⚡' },
    { name: 'React', icon: '🔷' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Vercel', icon: '▲' },
    { name: 'Docker', icon: '🐳' }
  ];

  const faqs = [
    {
      question: 'What is your typical response time for support requests?',
      answer: 'Response times vary by plan: Basic (12 hours), Professional (24 hours), Enterprise (2-4 hours for emergencies). Most critical issues are addressed immediately, and complex matters are typically resolved within 24 hours of the initial response.'
    },
    {
      question: 'Do you provide support for existing projects you didn\'t build?',
      answer: 'Absolutely! I specialize in taking over existing projects. I start with a comprehensive code audit to understand the architecture and provide the same quality support as for projects built from scratch. This includes debugging, optimization, and feature additions regardless of the original developer.'
    },
    {
      question: 'How do you handle emergency situations?',
      answer: 'Enterprise clients receive 24/7 emergency support with immediate response protocols. Professional tier includes business-hour emergency support with clear escalation paths. I prioritize issues based on business impact to ensure critical problems affecting your operations are resolved first.'
    },
    {
      question: 'What technologies and platforms do you support?',
      answer: 'I specialize in modern web technologies including Next.js, React, TypeScript, Node.js, Python, MongoDB, PostgreSQL, and various hosting platforms like Vercel, Netlify, and AWS. I also support popular CMS platforms and e-commerce solutions.'
    },
    {
      question: 'What types of technical support and maintenance do you offer?',
      answer: 'I provide comprehensive services including bug fixes, performance optimization, security updates, server maintenance, dependency updates, and ongoing monitoring. This ensures your application remains secure, performant, and compatible with evolving web standards through regular maintenance packages.'
    },
    {
      question: 'Do you offer training or documentation for ongoing maintenance?',
      answer: 'Yes, I provide comprehensive documentation, codebase walkthroughs, and training sessions to help your team understand and maintain the application effectively. This ensures smooth knowledge transfer and long-term project sustainability.'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Handle form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email Support',
      description: 'Send detailed descriptions of your issues',
      details: 'mohibullah@example.com',
      action: 'mailto:mohibullah@example.com'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      description: 'Quick answers for immediate concerns',
      details: 'Available during business hours',
      action: '#chat'
    },
    {
      icon: '📞',
      title: 'Schedule Call',
      description: 'In-depth discussion about complex issues',
      details: '30-minute consultation slots',
      action: '/contact'
    }
  ];

  const getCTABackground = () => {
    return theme === 'light'
      ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20'
      : 'bg-gradient-to-r from-slate-900 to-slate-800 border border-gray-700';
  };

  return (
    <div className={`py-12 ${getBackgroundColor()} min-h-screen`}>
      <div className="px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-1 text-sm">
            Premium Developer Support
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Expert Technical Support
          </h1>
          <p className={`text-xl ${getTextColor('secondary')} max-w-3xl mx-auto leading-relaxed`}>
            Comprehensive developer support services to keep your applications running smoothly,
            securely, and efficiently. From emergency fixes to strategic consulting.
          </p>
        </motion.div>

        {/* Main Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className={`grid w-full grid-cols-3 max-w-2xl mx-auto ${getTabsListStyle()}`}>
            <TabsTrigger value="services" className="text-sm md:text-base data-[state=active]:bg-blue-500 data-[state=active]:text-white transition-colors">Support Services</TabsTrigger>
            <TabsTrigger value="pricing" className="text-sm md:text-base data-[state=active]:bg-green-500 data-[state=active]:text-white transition-colors">Support Plans</TabsTrigger>
            <TabsTrigger value="contact" className="text-sm md:text-base data-[state=active]:bg-purple-500 data-[state=active]:text-white transition-colors">Get Support</TabsTrigger>
          </TabsList>

          {/* Services Tab */}
          <TabsContent value="services" className="space-y-12">
            {supportServices.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.2 }}
              >
                <div className="text-center mb-8">
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <h2 className={`text-2xl md:text-3xl font-bold ${getTextColor('primary')}`}>{category.category}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service) => (
                    <Card key={service.title} className={`hover:shadow-lg duration-300 rounded-2xl p-6 transition-shadow ${getCardStyle()}`}>
                      <CardHeader>
                        <CardTitle className={`text-lg ${getTextColor('primary')}`}>{service.title}</CardTitle>
                        <CardDescription className={getTextColor('secondary')}>{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {service.details.map((detail, index) => (
                            <li key={index} className={`flex items-center text-sm ${getTextColor('secondary')}`}>
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-center"
            >
              <h3 className={`text-2xl font-bold mb-6 ${getTextColor('primary')}`}>Supported Technologies</h3>
              <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                {technologies.map((tech) => (
                  <Badge key={tech.name} variant="outline" className="px-4 py-2 text-sm">
                    <span className="mr-2">{tech.icon}</span>
                    {tech.name}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </TabsContent>

          {/* Pricing Tab */}
          <TabsContent value="pricing" className="space-y-12 md:mt-16 mt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {supportTiers.map((tier, index) => (
                <motion.div
                  key={tier.tier}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative ${tier.popular ? 'scale-105' : ''}`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <Card className={`h-full ${tier.popular ? 'border-blue-300 shadow-xl' : ''} ${getCardStyle()}`}>
                    <CardHeader className="text-center pb-4">
                      <div className="text-3xl mb-2">{tier.icon}</div>
                      <CardTitle className={`text-2xl ${getTextColor('primary')}`}>{tier.tier}</CardTitle>
                      <div className="flex items-baseline justify-center mt-2">
                        <span className={`text-3xl font-bold ${getTextColor('primary')}`}>{tier.price}</span>
                        <span className={getTextColor('secondary')}>{tier.period}</span>
                      </div>
                      <CardDescription className={getTextColor('secondary')}>{tier.description}</CardDescription>
                      <Badge variant="secondary" className="mt-2">
                        {tier.bestFor}
                      </Badge>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-3">
                        {tier.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className={`flex items-center text-sm ${getTextColor('secondary')}`}>
                            <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button
                        className={`w-full ${tier.popular ? 'bg-gradient-to-r from-blue-600 to-purple-600' : ''}`}
                        size="lg"
                      >
                        {tier.cta}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Contact Tab */}
          <TabsContent value="contact" className="space-y-12 md:mt-16 mt-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className={`hover:shadow-lg duration-300 rounded-2xl p-6 transition-shadow ${getCardStyle()}`}>
                  <CardHeader>
                    <CardTitle className={getTextColor('primary')}>Get Immediate Support</CardTitle>
                    <CardDescription className={getTextColor('secondary')}>
                      Describe your issue and I&apos;ll get back to you within hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label className={getTextColor('primary')} htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Your name" required className={getInputStyle()}/>
                      </div>
                      <div className="space-y-2">
                        <Label className={getTextColor('primary')} htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="your.email@example.com" className={getInputStyle()} required />
                      </div>
                      <div className="space-y-2">
                        <Label className={getTextColor('primary')} htmlFor="urgency">Urgency Level</Label>
                        <select id="urgency" className={`w-full px-3 py-2 border rounded-md ${getInputStyle()}`}>
                          <option>Low - General inquiry</option>
                          <option>Medium - Need help soon</option>
                          <option>High - Affecting users</option>
                          <option>Critical - Business down</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label className={getTextColor('primary')} htmlFor="description">Issue Description</Label>
                        <Textarea
                          id="description"
                          placeholder="Please describe your issue in detail, including error messages and any relevant context..."
                          className={getInputStyle()}
                          rows={6}
                          required
                        />
                      </div>
                      <Button type="submit" className={`w-full ${
                        theme === 'light' 
                          ? 'bg-blue-600 text-white hover:bg-blue-700' 
                          : 'bg-white text-black hover:bg-white/70'
                      } cursor-pointer`} disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                            Submitting...
                          </>
                        ) : (
                          'Submit Support Request'
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* FAQ & Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <Card className={getCardStyle()}>
                  <CardHeader>
                    <CardTitle className={getTextColor('primary')}>Quick Support Channels</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {contactMethods.map((method, index) => (
                      <div key={index} className={`flex items-center p-3 border rounded-lg ${getBorderColor()}`}>
                        <div className="text-2xl mr-4">{method.icon}</div>
                        <div>
                          <div className={`font-semibold ${getTextColor('primary')}`}>{method.title}</div>
                          <div className={`text-sm ${getTextColor('secondary')}`}>{method.details}</div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="md:mt-12 mt-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { value: '24/7', label: 'Emergency Support' },
            { value: '99.9%', label: 'Uptime Guarantee' },
            { value: '1h', label: 'Avg. Response Time' },
            { value: '50+', label: 'Projects Supported' }
          ].map((stat, index) => (
            <div key={index}>
              <div className="text-2xl md:text-3xl font-bold text-blue-600">{stat.value}</div>
              <div className={getTextColor('secondary')}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="md:py-11 py-7">
        <div className="px-4 sm:px-6 lg:px-8">

          {/* Contact Methods */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-16"
          >
            <h2 className={`text-3xl font-bold text-center md:mt-16 my-12 ${getTextColor('primary')}`}>
              Get In Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + (index * 0.1), duration: 0.5 }}
                  className={`rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 ${getCardStyle()}`}
                >
                  <div className="text-3xl mb-3">{method.icon}</div>
                  <h3 className={`text-lg font-bold mb-2 ${getTextColor('primary')}`}>
                    {method.title}
                  </h3>
                  <p className={`${getTextColor('secondary')} mb-3 text-sm`}>
                    {method.description}
                  </p>
                  <p className="text-blue-600 font-medium mb-4">
                    {method.details}
                  </p>
                  <Link
                    href={method.action}
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm"
                  >
                    {method.title === 'Email Support' ? 'Send Email' :
                      method.title === 'Live Chat' ? 'Start Chat' : 'Schedule Now'}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* FAQ Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mb-16"
          >
            <h2 className={`text-3xl font-bold text-center md:mt-20 my-12 ${getTextColor('primary')}`}>
              Frequently Asked Questions
            </h2>
            <Card className={`max-w-4xl mx-auto ${getCardStyle()}`}>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className={`text-left ${getTextColor('primary')}`}>
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className={getTextColor('secondary')}>
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </motion.section>

          {/* Emergency Support CTA */}
          <motion.section
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className={`text-center rounded-2xl p-8 ${getTextColor('primary')} ${getCTABackground()}`}
          >
            <h2 className="text-3xl font-bold mb-4">
              Need Immediate Assistance?
            </h2>
            <p className="text-xl mb-6 opacity-90">
              For urgent issues affecting your business operations, emergency support is available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  🚀 Emergency Support
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className={`inline-flex items-center px-6 py-3 bg-transparent border-2 border-white ${getTextColor('primary')} font-bold rounded-lg hover:bg-white hover:text-red-600 transition-colors duration-200`}
                >
                  📞 Schedule Call
                </Link>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Support;