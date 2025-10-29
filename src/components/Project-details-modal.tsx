// components/project-details-modal.tsx
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
    ExternalLink,
    Github,
    Calendar,
    Clock,
    Users,
    Code,
    Zap,
    Star,
    X,
    Play,
    FileText,
    Target,
    CheckCircle2,
    ArrowUpRight,
    Sparkles
} from 'lucide-react'
import { Progress } from './ui/progress'
import { ScrollArea } from './ui/scroll-area'
import { Separator } from './ui/separator'

// components/Project-details-modal.tsx
export interface Project {
  id: number
  title: string
  slug: string
  description: string
  longDescription?: string
  image: string
  technologies: string[]
  category: string
  status: string // Change from specific union to string
  demoUrl: string
  githubUrl: string
  featured: boolean
  year: string
  duration: string
  teamSize: string
  complexity: string
  progress?: number
  challenges?: string[]
  solutions?: string[]
  features?: string[]
  screenshots?: string[]
  testimonials?: {
    name: string
    role: string
    content: string
    avatar: string
  }[]
  // Add the missing properties from your data
  liveLink?: string
  githubLink?: string
}

interface ProjectDetailsModalProps {
    project: Project | null
    isOpen: boolean
    onClose: () => void
}

export function ProjectDetailsModal({ project, isOpen, onClose }: ProjectDetailsModalProps) {
    if (!project) return null

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'completed': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
            case 'in-progress': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
            case 'planned': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
            default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
        }
    }

    const getComplexityColor = (complexity: string) => {
        switch (complexity.toLowerCase()) {
            case 'beginner': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
            case 'intermediate': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
            case 'advanced': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
            case 'expert': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
            default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
        }
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <Dialog open={isOpen} onOpenChange={onClose}>
                    <DialogContent className="p-0  bg-transparent border-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden"
                        >
                            {/* Header with Gradient Background */}
                            <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-8 text-white">
                                {/* Animated Background Elements */}
                                <motion.div
                                    className="absolute inset-0 opacity-10"
                                    animate={{
                                        backgroundPosition: ['0% 0%', '100% 100%'],
                                    }}
                                    transition={{
                                        duration: 20,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                    style={{
                                        backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.3) 0%, transparent 50%),
                                    radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 50%)`
                                    }}
                                />

                                <div className="relative z-10">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-4">
                                                {project.featured && (
                                                    <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm">
                                                        <Star className="w-3 h-3 mr-1" />
                                                        Featured Project
                                                    </Badge>
                                                )}
                                                <Badge className={getStatusColor(project.status)}>
                                                    {project.status === 'completed' ? 'Completed' :
                                                        project.status === 'in-progress' ? 'In Progress' : 'Planned'}
                                                </Badge>
                                                <Badge className={getComplexityColor(project.complexity)}>
                                                    {project.complexity}
                                                </Badge>
                                            </div>

                                            <DialogTitle className="text-3xl md:text-4xl font-bold mb-4">
                                                {project.title}
                                            </DialogTitle>

                                            <DialogDescription className="text-blue-100 text-lg">
                                                {project.description}
                                            </DialogDescription>
                                        </div>

                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={onClose}
                                            className="text-white hover:bg-white/20 rounded-xl transition-all duration-300"
                                        >
                                            <X className="w-6 h-6" />
                                        </Button>
                                    </div>

                                    {/* Project Meta */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-2">
                                        <div className="flex items-center gap-2 text-blue-100">
                                            <Calendar className="w-5 h-5" />
                                            <span className="font-semibold">{project.year}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-blue-100">
                                            <Clock className="w-5 h-5" />
                                            <span className="font-semibold">{project.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-blue-100">
                                            <Users className="w-5 h-5" />
                                            <span className="font-semibold">{project.teamSize}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-blue-100">
                                            <Zap className="w-5 h-5" />
                                            <span className="font-semibold">{project.complexity}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <ScrollArea className="h-[60vh]">
                                <div className="p-8">
                                    {/* Progress Bar for In-Progress Projects */}
                                    {project.status === 'in-progress' && project.progress && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                            className="mb-8"
                                        >
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                                    Project Progress
                                                </span>
                                                <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                                                    {project.progress}%
                                                </span>
                                            </div>
                                            <Progress value={project.progress} className="h-3" />
                                        </motion.div>
                                    )}

                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                        {/* Main Content */}
                                        <div className="lg:col-span-2 space-y-8">
                                            {/* Long Description */}
                                            <motion.section
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.3 }}
                                            >
                                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                                    <FileText className="w-5 h-5 text-blue-600" />
                                                    Project Overview
                                                </h3>
                                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                                    {project.longDescription || `This project represents a comprehensive solution built with modern technologies and best practices. ${project.description}`}
                                                </p>
                                            </motion.section>

                                            {/* Key Features */}
                                            {project.features && project.features.length > 0 && (
                                                <motion.section
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.4 }}
                                                >
                                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                                        <Sparkles className="w-5 h-5 text-purple-600" />
                                                        Key Features
                                                    </h3>
                                                    <div className="grid gap-3">
                                                        {project.features.map((feature, index) => (
                                                            <motion.div
                                                                key={index}
                                                                initial={{ opacity: 0, x: -20 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                transition={{ delay: 0.5 + index * 0.1 }}
                                                                className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                                            >
                                                                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                                                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                </motion.section>
                                            )}

                                            {/* Technologies Used */}
                                            <motion.section
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.6 }}
                                            >
                                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                                    <Code className="w-5 h-5 text-blue-600" />
                                                    Technologies & Tools
                                                </h3>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.technologies.map((tech, index) => (
                                                        <motion.div
                                                            key={tech}
                                                            initial={{ opacity: 0, scale: 0.8 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            transition={{ delay: 0.7 + index * 0.05 }}
                                                        >
                                                            <Badge
                                                                variant="secondary"
                                                                className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800 px-3 py-1 text-sm"
                                                            >
                                                                {tech}
                                                            </Badge>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </motion.section>
                                        </div>

                                        {/* Sidebar */}
                                        <div className="space-y-6">
                                            {/* Action Buttons */}
                                            <motion.div
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.8 }}
                                                className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
                                            >
                                                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Project Links</h4>
                                                <div className="space-y-3">
                                                    <Button
                                                        asChild
                                                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                                                    >
                                                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                                            <Play className="w-4 h-4 mr-2" />
                                                            Live Demo
                                                            <ArrowUpRight className="w-4 h-4 ml-2" />
                                                        </a>
                                                    </Button>
                                                    <Button
                                                        asChild
                                                        variant="outline"
                                                        className="w-full border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                                                    >
                                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                            <Github className="w-4 h-4 mr-2" />
                                                            Source Code
                                                            <ExternalLink className="w-4 h-4 ml-2" />
                                                        </a>
                                                    </Button>
                                                </div>
                                            </motion.div>

                                            {/* Project Stats */}
                                            <motion.div
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.9 }}
                                                className="bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-800 dark:to-purple-900/20 rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
                                            >
                                                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Project Stats</h4>
                                                <div className="space-y-4">
                                                    <div className="flex justify-between items-center">
                                                        <span className="text-sm text-gray-600 dark:text-gray-400">Status</span>
                                                        <Badge className={getStatusColor(project.status)}>
                                                            {project.status}
                                                        </Badge>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <span className="text-sm text-gray-600 dark:text-gray-400">Duration</span>
                                                        <span className="text-sm font-semibold text-gray-900 dark:text-white">{project.duration}</span>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <span className="text-sm text-gray-600 dark:text-gray-400">Team Size</span>
                                                        <span className="text-sm font-semibold text-gray-900 dark:text-white">{project.teamSize}</span>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <span className="text-sm text-gray-600 dark:text-gray-400">Complexity</span>
                                                        <Badge className={getComplexityColor(project.complexity)}>
                                                            {project.complexity}
                                                        </Badge>
                                                    </div>
                                                </div>
                                            </motion.div>

                                            {/* Challenges & Solutions */}
                                            {(project.challenges || project.solutions) && (
                                                <motion.div
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 1.0 }}
                                                    className="bg-gradient-to-br from-gray-50 to-green-50 dark:from-gray-800 dark:to-green-900/20 rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
                                                >
                                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                                        <Target className="w-4 h-4" />
                                                        Key Insights
                                                    </h4>
                                                    {project.challenges && (
                                                        <div className="mb-4">
                                                            <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Challenges</h5>
                                                            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                                                {project.challenges.slice(0, 2).map((challenge, index) => (
                                                                    <li key={index} className="flex items-start gap-2">
                                                                        <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                                                                        {challenge}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                    {project.solutions && (
                                                        <div>
                                                            <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Solutions</h5>
                                                            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                                                {project.solutions.slice(0, 2).map((solution, index) => (
                                                                    <li key={index} className="flex items-start gap-2">
                                                                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                                        {solution}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </motion.div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Testimonials */}
                                    {project.testimonials && project.testimonials.length > 0 && (
                                        <motion.section
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 1.1 }}
                                            className="mt-12"
                                        >
                                            <Separator className="mb-8" />
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                                                What People Say
                                            </h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                {project.testimonials.map((testimonial, index) => (
                                                    <motion.div
                                                        key={index}
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 1.2 + index * 0.1 }}
                                                        className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
                                                    >
                                                        <div className="flex items-center gap-4 mb-4">
                                                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                                                                {testimonial.name.charAt(0)}
                                                            </div>
                                                            <div>
                                                                <h4 className="font-semibold text-gray-900 dark:text-white">
                                                                    {testimonial.name}
                                                                </h4>
                                                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                                                    {testimonial.role}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <p className="text-gray-600 dark:text-gray-300 italic">
                                                            &ldquo;{testimonial.content}&rdquo;
                                                        </p>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </motion.section>
                                    )}
                                </div>
                            </ScrollArea>
                        </motion.div>
                    </DialogContent>
                </Dialog>
            )}
        </AnimatePresence>
    )
}