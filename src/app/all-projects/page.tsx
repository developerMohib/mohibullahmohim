// app/projects/page.tsx
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import {
    ExternalLink,
    Github,
    Filter,
    ArrowRight,
    Calendar,
    Clock,
    Users,
    Code,
    Globe,
    Smartphone,
    Zap,
    Star,
    Eye,
    Mail
} from 'lucide-react';
import { projectsData } from '@/fakedata/projects';
import { Project, ProjectDetailsModal } from '@/components/Project-details-modal';
import { BookForm } from '@/components/Bookform';


const categories = [
    { id: 'all', label: 'All Projects', icon: Globe, count: 6 },
    { id: 'web', label: 'Web Apps', icon: Code, count: 4 },
    { id: 'mobile', label: 'Mobile Apps', icon: Smartphone, count: 1 },
    { id: 'ai', label: 'AI/ML', icon: Zap, count: 1 },
];


export default function ProjectsPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isBookFormOpen, setIsBookFormOpen] = useState(false);
    const openBookForm = () => setIsBookFormOpen(true);
    const closeBookForm = () => setIsBookFormOpen(false);

    const handleProjectClick = (project: Project) => {
        setSelectedProject(project)
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setSelectedProject(null)
    }

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

    const cardHoverVariants = {
        initial: { scale: 1, y: 0 },
        hover: { scale: 1.02, y: -5 }
    };

    return (
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-full blur-3xl top-20 -left-48"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-600/10 rounded-full blur-3xl bottom-20 right-0"
                    animate={{
                        x: [0, -80, 0],
                        y: [0, -60, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 10
                    }}
                />
            </div>

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Header Section */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <Badge variant="secondary" className="mb-4 px-4 py-1 text-sm bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300">
                            Portfolio
                        </Badge>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
                    >
                        My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
                    >
                        A collection of my recent work showcasing modern technologies, innovative solutions,
                        and attention to detail in every project.
                    </motion.p>

                </motion.section>

                {/* Filters */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="mb-12"
                >

                    {/* Category Filters */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                        className="flex flex-wrap gap-3 mt-6 justify-center"
                    >
                        {categories.map((category) => {
                            const Icon = category.icon;
                            return (
                                <motion.button
                                    key={category.id}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${selectedCategory === category.id
                                        ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/25'
                                        : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700'
                                        } backdrop-blur-sm`}
                                >
                                    <Icon className="w-4 h-4" />
                                    <span>{category.label}</span>
                                    <Badge variant="secondary" className="ml-1 bg-white/20 text-current">
                                        {category.count}
                                    </Badge>
                                </motion.button>
                            );
                        })}
                    </motion.div>
                </motion.section>

                {/* Projects Grid */}
                <motion.section
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projectsData.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            layout
                        >
                            <motion.div
                                variants={cardHoverVariants}
                                initial="initial"
                                whileHover="hover"
                                className="h-full cursor-pointer"
                                onClick={() => handleProjectClick(project)}
                            >
                                <Card className="group h-full overflow-hidden border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-2xl hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300">
                                    {/* Featured Badge */}
                                    {project.featured && (
                                        <div className="absolute top-4 right-4 z-10">
                                            <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg">
                                                <Star className="w-3 h-3 mr-1" />
                                                Featured
                                            </Badge>
                                        </div>
                                    )}

                                    {/* Project Image */}
                                    <div className="relative overflow-hidden">
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.3 }}
                                            className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden"
                                        >
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <Code className="w-16 h-16 text-white/80" />
                                            </div>

                                            {/* Overlay Actions */}
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
                                                <div className="flex gap-3">
                                                    <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm cursor-pointer">
                                                        <Eye className="w-4 h-4 mr-1" />
                                                        View Details
                                                    </Button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>

                                    <CardHeader className="pb-3">
                                        <div className="flex items-start justify-between mb-2">
                                            <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                {project.title}
                                            </CardTitle>
                                        </div>

                                        <CardDescription className="text-gray-600 dark:text-gray-300 line-clamp-2">
                                            {project.description}
                                        </CardDescription>
                                    </CardHeader>

                                    <CardContent className="pb-4">
                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-1.5 mb-4">
                                            {project.technologies.map((tech) => (
                                                <Badge
                                                    key={tech}
                                                    variant="secondary"
                                                    className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800"
                                                >
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>

                                        {/* Project Meta */}
                                        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-400">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                <span>{project.year}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                <span>{project.duration}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Users className="w-4 h-4" />
                                                <span>{project.teamSize}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Zap className="w-4 h-4" />
                                                <span>{project.complexity}</span>
                                            </div>
                                        </div>
                                    </CardContent>

                                    <CardFooter className="pt-0">
                                        <div className="flex gap-2 w-full">
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                className="flex-1 border-gray-300 dark:border-gray-600"
                                                asChild
                                            >
                                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                    <Github className="w-4 h-4 mr-2" />
                                                    Code
                                                </a>
                                            </Button>
                                            <Button
                                                size="sm"
                                                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                                                asChild
                                            >
                                                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                                    <ExternalLink className="w-4 h-4 mr-2" />
                                                    Live Demo
                                                </a>
                                            </Button>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.section>

                {/* Empty State */}
                {projectsData.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-16"
                    >
                        <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Filter className="w-12 h-12 text-gray-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            No projects found
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                            Try adjusting your search or filter criteria to find what you&apos;re looking for.
                        </p>
                    </motion.div>
                )}

                {/* CTA Section */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mt-20"
                >
                    <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 max-w-4xl mx-auto">
                        <CardContent className="p-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Ready to Start Your Project?
                            </h2>
                            <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto">
                                Let&apos;s work together to bring your ideas to life with cutting-edge technology and exceptional design.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button onClick={openBookForm}
                                    size="lg"
                                    variant="secondary"
                                    className="bg-white text-blue-600 hover:bg-gray-100"
                                >
                                    <Mail className="w-5 h-5 mr-2" />
                                    Get In Touch
                                </Button>
                                <Button onClick={() => window.open('https://drive.google.com/file/d/12l9IkEsvO4s7gqAys8Ujs6RSHC8V8ip-/view?usp=drive_link', '_blank', 'noopener,noreferrer')}
                                    size="lg"
                                    variant="outline"
                                    className="border-white text-white hover:bg-white/10"
                                >
                                    View My Resume
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </motion.section>
            </div>

            <ProjectDetailsModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
            <BookForm isOpen={isBookFormOpen} onClose={closeBookForm} />
        </div>
    );
}