'use client';

import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { IProject } from '@/interface/projectsInterface';
import useProjects from '@/hook/useProjects';


const ProjectDetails = () => {
    const { isPending, error, projects, isFetching } = useProjects();
    const params = useParams();
    
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };
    const project = projects?.find((p: IProject) => p.slug === params.slug)
    console.log(project)
    if (isPending || isFetching) {
        return (
            <p className="text-center py-20 text-gray-600 dark:text-gray-400">Loading projects...</p>
        )
    }
    if (error) {
        return (
            <p className="text-center py-20 text-red-600 dark:text-red-400">Error loading projects: {error.message}</p>
        )
    }

    return (
        <div className="py-12 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial="initial"
                animate="animate"
                className="max-w-7xl mx-auto"
            >
                {/* Header Section */}
                <motion.div
                    className="text-center mb-16"
                >
                    <motion.span
                        className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4"
                    >
                        {project.category} • {project.year}
                    </motion.span>
                    <motion.h1
                        className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                    >
                        {project.title}
                    </motion.h1>
                    <motion.p
                        className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                    >
                        {project.description}
                    </motion.p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    {/* Left Column - Text Content */}
                    <motion.div
                        className="space-y-8"
                    >
                        {/* Project Overview */}
                        <motion.div
                            className="bg-transparent rounded-2xl p-8 shadow-lg border border-gray-100"
                        >
                            <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-sm font-semibold uppercase tracking-wide mb-2">Duration</h3>
                                    <p className="text-lg">{project.duration}</p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold uppercase tracking-wide mb-2">Team Size</h3>
                                    <p className="text-lg">{project.teamSize}</p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold uppercase tracking-wide mb-2">Complexity</h3>
                                    <p className="text-lg">{project.complexity}</p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold uppercase tracking-wide mb-2">Status</h3>
                                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${project.status === 'completed'
                                        ? 'bg-green-100 text-green-800'
                                        : 'bg-yellow-100 text-yellow-800'
                                        }`}>
                                        {project.status}
                                    </span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Technologies */}
                        <motion.div
                            className="rounded-2xl p-8 shadow-lg border border-gray-100"
                        >
                            <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
                            <div className="flex flex-wrap gap-3">
                                {project?.technologies?.map((tech: string, index: number) => (
                                    <motion.span
                                        key={tech}
                                        initial="initial"
                                        animate="animate"
                                        transition={{ delay: index * 0.1 }}
                                        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Timeline */}
                        <motion.div
                            className="rounded-2xl p-8 shadow-lg border border-gray-100"
                        >
                            <h2 className="text-2xl font-bold mb-6">Project Timeline</h2>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span>Start Date</span>
                                    <span className="font-semibold">{formatDate(project.startDate)}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span>Completion Date</span>
                                    <span className="font-semibold">{formatDate(project.completionDate)}</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Action Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <motion.a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-4 px-8 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Live Demo
                            </motion.a>
                            <motion.a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex-1 text-center py-4 px-8 rounded-xl font-semibold shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                            >
                                View Code
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Main Image */}
                    <motion.div
                        className="space-y-6"
                    >
                        <motion.div
                            className="relative rounded-2xl overflow-hidden shadow-2xl group"
                        >
                            <Image width={450} height={450}
                                src={"https://res.cloudinary.com/dnfjdkspi/image/upload/v1760475252/Business_Card_Mockup-new_mlacvp.jpg"}
                                alt={project.title}
                                className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>

                        {/* Image Thumbnails */}
                        <motion.div
                            className="flex gap-4 overflow-x-auto pb-4"
                        >
                            {project.image?.map((img: string, index: number) => (
                                <motion.button
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300`}
                                >
                                    <Image width={450} height={450}
                                        src={img}
                                        alt={`${project.title} ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </motion.button>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                {/* Project Description */}
                <motion.div
                    className="rounded-2xl p-8 shadow-lg border border-gray-100"
                >
                    <h2 className="text-2xl font-bold mb-6">About This Project</h2>
                    <div className="prose prose-lg max-w-none leading-relaxed">
                        <p className="text-lg">
                            This innovative AI Art Platform represents a cutting-edge solution for generating
                            creative and realistic images using advanced artificial intelligence models.
                            Built with modern web technologies including TypeScript, Tailwind CSS, and Zustand
                            for state management.
                        </p>
                        <p className="text-lg mt-4">
                            The platform demonstrates the power of AI in creative applications, providing users
                            with intuitive tools to generate stunning visual content. With a focus on user
                            experience and performance, this project showcases the potential of AI-driven
                            creativity in the digital art space.
                        </p>
                    </div>
                </motion.div>

                {/* Bottom Full-width Image (Responsive Showcase) */}
                <motion.div
                    className="rounded-2xl p-8 shadow-lg mt-16"
                >
                    <h2 className="text-2xl font-bold mb-6 text-center">Project Responsiveness Showcase</h2>
                    <motion.div
                        className="rounded-xl overflow-hidden shadow-2xl"
                    >
                        <Image width={450} height={450}
                            src={"https://res.cloudinary.com/dnfjdkspi/image/upload/v1760475252/Business_Card_Mockup-new_mlacvp.jpg"}
                            alt={`${project.title} Showcase`}
                            className="w-full h-auto max-h-96 object-cover"
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default ProjectDetails;