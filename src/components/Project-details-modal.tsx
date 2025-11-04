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
    CheckCircle2,
    ArrowUpRight,
    Sparkles,
    Heart,
    Share2,
    Bookmark,
    Eye
} from 'lucide-react'
import { ScrollArea } from './ui/scroll-area'
import { IProject } from '@/interface/projectsInterface'
import { useState } from 'react'

interface ProjectDetailsModalProps {
    project: IProject | null
    isOpen: boolean
    onClose: () => void
}

export function ProjectDetailsModal({ project, isOpen, onClose }: ProjectDetailsModalProps) {
    const [isBookmarked, setIsBookmarked] = useState(false)
    const [isLiked, setIsLiked] = useState(false)

    if (!project) return null

    const getStatusColor = (status?: string) => {
        switch (status) {
            case 'completed': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
            case 'in-progress': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
            case 'planned': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
            default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
        }
    }

    const getComplexityColor = (complexity?: string) => {
        switch (complexity?.toLowerCase()) {
            case 'beginner': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
            case 'intermediate': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
            case 'advanced': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
            case 'expert': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
            default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
        }
    }

    const getGradientByComplexity = (complexity?: string) => {
        switch (complexity?.toLowerCase()) {
            case 'beginner': return 'from-green-500 via-blue-500 to-purple-500'
            case 'intermediate': return 'from-blue-500 via-purple-500 to-pink-500'
            case 'advanced': return 'from-purple-500 via-pink-500 to-red-500'
            case 'expert': return 'from-red-500 via-orange-500 to-yellow-500'
            default: return 'from-blue-600 via-purple-600 to-pink-600'
        }
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <Dialog open={isOpen} onOpenChange={onClose}>
                    <DialogContent className="p-0 bg-transparent border-0 max-w-5xl max-h-[90vh]">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 50 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 50 }}
                            transition={{ 
                                type: "spring", 
                                damping: 25, 
                                stiffness: 300,
                                duration: 0.6
                            }}
                            className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-800"
                        >
                            <ScrollArea className="h-full">
                                <div className="flex flex-col">
                                    {/* Enhanced Header with Dynamic Gradient */}
                                    <div className={`relative bg-gradient-to-r ${getGradientByComplexity(project.complexity)} p-8 text-white overflow-hidden`}>
                                        {/* Animated Background Particles */}
                                        <div className="absolute inset-0">
                                            {[...Array(20)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="absolute rounded-full bg-white/10"
                                                    initial={{ 
                                                        opacity: 0,
                                                        scale: 0,
                                                        x: Math.random() * 100,
                                                        y: Math.random() * 100
                                                    }}
                                                    animate={{ 
                                                        opacity: [0, 0.3, 0],
                                                        scale: [0, 1, 0],
                                                        x: Math.random() * 100,
                                                        y: Math.random() * 100
                                                    }}
                                                    transition={{
                                                        duration: 3 + Math.random() * 2,
                                                        repeat: Infinity,
                                                        delay: Math.random() * 2
                                                    }}
                                                    style={{
                                                        width: Math.random() * 20 + 5,
                                                        height: Math.random() * 20 + 5,
                                                    }}
                                                />
                                            ))}
                                        </div>

                                        {/* Floating Tech Icons */}
                                        <div className="absolute inset-0 opacity-5">
                                            {project.technologies?.slice(0, 8).map((tech, index) => (
                                                <motion.div
                                                    key={tech}
                                                    className="absolute text-2xl"
                                                    animate={{
                                                        y: [0, -20, 0],
                                                        rotate: [0, 5, 0],
                                                    }}
                                                    transition={{
                                                        duration: 4 + index,
                                                        repeat: Infinity,
                                                        ease: "easeInOut"
                                                    }}
                                                    style={{
                                                        left: `${10 + (index * 12)}%`,
                                                        top: `${20 + (index % 3) * 20}%`,
                                                    }}
                                                >
                                                    {tech.slice(0, 2)}
                                                </motion.div>
                                            ))}
                                        </div>

                                        <div className="relative z-10">
                                            {/* Top Action Bar */}
                                            <div className="flex items-center justify-between mb-6">
                                                <div className="flex items-center gap-2">
                                                    {project.featured && (
                                                        <motion.div
                                                            initial={{ scale: 0, rotate: -180 }}
                                                            animate={{ scale: 1, rotate: 0 }}
                                                            transition={{ delay: 0.2, type: "spring" }}
                                                        >
                                                            <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm shadow-lg">
                                                                <Star className="w-3 h-3 mr-1 fill-current" />
                                                                Featured
                                                            </Badge>
                                                        </motion.div>
                                                    )}
                                                    <motion.div
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.3 }}
                                                    >
                                                        <Badge className={getStatusColor(project.status)}>
                                                            {project.status}
                                                        </Badge>
                                                    </motion.div>
                                                </div>

                                                <div className="flex items-center gap-2">
                                                    <motion.button
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                        onClick={() => setIsBookmarked(!isBookmarked)}
                                                        className={`p-2 rounded-xl backdrop-blur-sm transition-all ${
                                                            isBookmarked 
                                                            ? 'bg-white/20 text-yellow-400' 
                                                            : 'bg-white/10 text-white hover:bg-white/20'
                                                        }`}
                                                    >
                                                        <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`} />
                                                    </motion.button>
                                                    <motion.button
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                        onClick={() => setIsLiked(!isLiked)}
                                                        className={`p-2 rounded-xl backdrop-blur-sm transition-all ${
                                                            isLiked 
                                                            ? 'bg-white/20 text-red-400' 
                                                            : 'bg-white/10 text-white hover:bg-white/20'
                                                        }`}
                                                    >
                                                        <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                                                    </motion.button>
                                                    <motion.button
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                        className="p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm transition-all"
                                                    >
                                                        <Share2 className="w-5 h-5" />
                                                    </motion.button>
                                                    <motion.button
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                        onClick={onClose}
                                                        className="p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm transition-all"
                                                    >
                                                        <X className="w-5 h-5" />
                                                    </motion.button>
                                                </div>
                                            </div>

                                            {/* Project Title and Description */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 30 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.4 }}
                                            >
                                                <DialogTitle className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                                                    {project.title}
                                                </DialogTitle>

                                                <DialogDescription className="text-blue-100 text-lg md:text-xl leading-relaxed max-w-4xl">
                                                    {project.description}
                                                </DialogDescription>
                                            </motion.div>

                                            {/* Enhanced Project Meta */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.6 }}
                                                className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8"
                                            >
                                                <div className="flex items-center gap-3 text-blue-100 bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                                                    <div className="p-2 bg-white/20 rounded-xl">
                                                        <Calendar className="w-5 h-5" />
                                                    </div>
                                                    <div>
                                                        <div className="text-sm opacity-80">Year</div>
                                                        <div className="font-bold text-white">{project.year}</div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3 text-blue-100 bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                                                    <div className="p-2 bg-white/20 rounded-xl">
                                                        <Clock className="w-5 h-5" />
                                                    </div>
                                                    <div>
                                                        <div className="text-sm opacity-80">Duration</div>
                                                        <div className="font-bold text-white">{project.duration}</div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3 text-blue-100 bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                                                    <div className="p-2 bg-white/20 rounded-xl">
                                                        <Users className="w-5 h-5" />
                                                    </div>
                                                    <div>
                                                        <div className="text-sm opacity-80">Team</div>
                                                        <div className="font-bold text-white">{project.teamSize}</div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3 text-blue-100 bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                                                    <div className="p-2 bg-white/20 rounded-xl">
                                                        <Zap className="w-5 h-5" />
                                                    </div>
                                                    <div>
                                                        <div className="text-sm opacity-80">Level</div>
                                                        <div className="font-bold text-white">{project.complexity}</div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* Content Area */}
                                    <div className="p-8">
                                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                            {/* Main Content */}
                                            <div className="lg:col-span-2 space-y-8">
                                                {/* Enhanced Overview Section */}
                                                <motion.section
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.7 }}
                                                    className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl p-6 border border-gray-200 dark:border-gray-700"
                                                >
                                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                                                        <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-xl">
                                                            <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                                        </div>
                                                        Project Overview
                                                    </h3>
                                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                                                        {project.description || `This project represents a comprehensive solution built with modern technologies and best practices. ${project.description}`}
                                                    </p>
                                                </motion.section>

                                                {/* Interactive Features Grid */}
                                                {project.features && project.features.length > 0 && (
                                                    <motion.section
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.8 }}
                                                    >
                                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                                                            <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-xl">
                                                                <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                                                            </div>
                                                            Key Features
                                                        </h3>
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                            {project.features.map((feature, index) => (
                                                                <motion.div
                                                                    key={index}
                                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                                    animate={{ opacity: 1, scale: 1 }}
                                                                    transition={{ delay: 0.9 + index * 0.1 }}
                                                                    whileHover={{ scale: 1.02, y: -2 }}
                                                                    className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 group"
                                                                >
                                                                    <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg group-hover:scale-110 transition-transform">
                                                                        <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                                                                    </div>
                                                                    <span className="text-gray-700 dark:text-gray-300 font-medium flex-1">
                                                                        {feature}
                                                                    </span>
                                                                </motion.div>
                                                            ))}
                                                        </div>
                                                    </motion.section>
                                                )}

                                                {/* Enhanced Technologies Section */}
                                                <motion.section
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 1.0 }}
                                                >
                                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                                                        <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-xl">
                                                            <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                                        </div>
                                                        Technologies & Tools
                                                    </h3>
                                                    <div className="flex flex-wrap gap-3">
                                                        {project?.technologies?.map((tech, index) => (
                                                            <motion.div
                                                                key={tech}
                                                                initial={{ opacity: 0, scale: 0.8 }}
                                                                animate={{ opacity: 1, scale: 1 }}
                                                                transition={{ delay: 1.1 + index * 0.05 }}
                                                                whileHover={{ scale: 1.1, rotate: 2 }}
                                                            >
                                                                <Badge
                                                                    variant="secondary"
                                                                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 px-4 py-2 text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                                                                >
                                                                    {tech}
                                                                </Badge>
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                </motion.section>
                                            </div>

                                            {/* Enhanced Sidebar */}
                                            <div className="space-y-6">
                                                {/* Action Buttons with Hover Effects */}
                                                <motion.div
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 1.2 }}
                                                    className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-3xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg"
                                                >
                                                    <h4 className="font-bold text-gray-900 dark:text-white mb-4 text-lg">Project Links</h4>
                                                    <div className="space-y-4">
                                                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                                            <Button
                                                                asChild
                                                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl py-6 text-lg font-semibold group"
                                                            >
                                                                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                                                    <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                                                                    Live Demo
                                                                    <ArrowUpRight className="w-5 h-5 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                                </a>
                                                            </Button>
                                                        </motion.div>
                                                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                                            <Button
                                                                asChild
                                                                variant="outline"
                                                                className="w-full border-2 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 rounded-2xl py-6 text-lg font-semibold group"
                                                            >
                                                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                                    <Github className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                                                                    Source Code
                                                                    <ExternalLink className="w-5 h-5 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                                </a>
                                                            </Button>
                                                        </motion.div>
                                                    </div>
                                                </motion.div>

                                                {/* Enhanced Project Stats */}
                                                <motion.div
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 1.3 }}
                                                    className="bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-800 dark:to-purple-900/20 rounded-3xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg"
                                                >
                                                    <h4 className="font-bold text-gray-900 dark:text-white mb-6 text-lg flex items-center gap-2">
                                                        <Eye className="w-5 h-5" />
                                                        Project Insights
                                                    </h4>
                                                    <div className="space-y-5">
                                                        <div className="flex justify-between items-center p-3 rounded-xl bg-white/50 dark:bg-gray-700/50">
                                                            <span className="text-sm text-gray-600 dark:text-gray-400">Status</span>
                                                            <Badge className={`${getStatusColor(project.status)} font-semibold`}>
                                                                {project.status}
                                                            </Badge>
                                                        </div>
                                                        <div className="flex justify-between items-center p-3 rounded-xl bg-white/50 dark:bg-gray-700/50">
                                                            <span className="text-sm text-gray-600 dark:text-gray-400">Duration</span>
                                                            <span className="text-sm font-bold text-gray-900 dark:text-white">{project.duration}</span>
                                                        </div>
                                                        <div className="flex justify-between items-center p-3 rounded-xl bg-white/50 dark:bg-gray-700/50">
                                                            <span className="text-sm text-gray-600 dark:text-gray-400">Team Size</span>
                                                            <span className="text-sm font-bold text-gray-900 dark:text-white">{project.teamSize}</span>
                                                        </div>
                                                        <div className="flex justify-between items-center p-3 rounded-xl bg-white/50 dark:bg-gray-700/50">
                                                            <span className="text-sm text-gray-600 dark:text-gray-400">Complexity</span>
                                                            <Badge className={`${getComplexityColor(project.complexity)} font-semibold`}>
                                                                {project.complexity}
                                                            </Badge>
                                                        </div>
                                                    </div>
                                                </motion.div>

                                                {/* Quick Stats */}
                                                <motion.div
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 1.4 }}
                                                    className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-green-900/20 rounded-3xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg"
                                                >
                                                    <h4 className="font-bold text-gray-900 dark:text-white mb-4 text-lg">At a Glance</h4>
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div className="text-center p-4 bg-white/50 dark:bg-gray-700/50 rounded-2xl">
                                                            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                                                {project.features?.length || 0}
                                                            </div>
                                                            <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Features</div>
                                                        </div>
                                                        <div className="text-center p-4 bg-white/50 dark:bg-gray-700/50 rounded-2xl">
                                                            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                                                                {project.technologies?.length || 0}
                                                            </div>
                                                            <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Technologies</div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollArea>
                        </motion.div>
                    </DialogContent>
                </Dialog>
            )}
        </AnimatePresence>
    )
}