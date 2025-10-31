'use client';
import { motion } from 'framer-motion';
import { Badge } from './ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowRight, Calendar, Clock, Code, ExternalLink, Eye, Filter, Github, Star, Users, Zap } from 'lucide-react';
import { projectsData } from '@/fakedata/projects';
import { useState } from 'react';
import { Project, ProjectDetailsModal } from './Project-details-modal';

const Projects = () => {

    const [selectedProject, setSelectedProject] = useState<Project | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
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



    const handleProjectClick = (project: Project) => {
        setSelectedProject(project)
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setSelectedProject(null)
    }


    return (
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
                {projectsData?.length === 0 && (
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

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <Link href="/all-projects">
                        <Button size="lg" variant="outline" className="px-8 py-3 cursor-pointer border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300">
                            View All Projects
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                </motion.div>
            </div>

            <ProjectDetailsModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />

        </section>
    );
};

export default Projects;