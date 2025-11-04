// components/projects-list.tsx
'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import useProjects from "@/hook/useProjects"
import { IProject } from "@/interface/projectsInterface"
import { ExternalLink, Github, Users ,ArrowRight} from "lucide-react"
import Image from "next/image"
import { ProjectDetailsModal } from "./Project-details-modal"
import { Button } from './ui/button';
import Link from 'next/link';

export function ProjectsList() {
    const { isPending, error, projects, isFetching } = useProjects()
    const [selectedProject, setSelectedProject] = useState<IProject | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    if (isPending || isFetching) {
        return "Loading..."
    }
console.log("ProjectsList projects:", projects);
    if (error) {
        return (
            <div className="text-center py-12">
                <p className="text-red-500 dark:text-red-400">Error loading projects: {error.message}</p>
            </div>
        )
    }

    if (!projects || projects.length === 0) {
        return (
            <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400">No projects found.</p>
            </div>
        )
    }
    const handleProjectClick = (project: IProject): void => {
        setSelectedProject(project)
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setSelectedProject(null)
    }
    return (
        <div className="space-y-12 overflow-hidden">
            {projects?.map((project: IProject, index: number) => {
                const isEven = index % 2 === 0;

                return (
                    <div
                        key={project._id}
                        className="rounded-2xl shadow-md p-6 md:grid grid-cols-2 gap-8 transition-all hover:shadow-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700"
                    >
                        {/* Image Section - Left for odd, Right for even */}
                        <div className={`md:grid-cols-1 mb-6 md:mb-0 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                            {project.image ? (
                                <Image
                                    src={"https://res.cloudinary.com/dnfjdkspi/image/upload/v1760431026/projects/WhatsApp%20Image%202025-09-12%20at%2010.56.37%20PM%20%281%29-1760431024235.jpg"}
                                    alt={project.projectName || 'Project Image'}
                                    className="rounded-xl shadow-md border border-gray-200 dark:border-gray-700 w-full h-auto"
                                    width={600}
                                    height={400}
                                />
                            ) : (
                                <div className="w-full h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                                    <span className="text-white/80">Project Image</span>
                                </div>
                            )}
                        </div>

                        {/* Content Section - Right for odd, Left for even */}
                        <div className={`md:grid-cols-1 space-y-4 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {project.title}
                            </h2>

                            {/* Team and Role Section */}
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-md text-sm font-medium text-blue-700 dark:text-blue-300">
                                    Team: {project.teamSize}
                                </span>
                                {project.status && (
                                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 rounded-md text-sm font-medium text-purple-700 dark:text-purple-300">
                                        {project.status}
                                    </span>
                                )}
                                {project.tags?.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Features Section */}
                            <div>
                                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Features:</h3>
                                    <span
                                        className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 rounded-md text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
                                    >
                                        {project.year }
                                    </span>
                            </div>

                            {/* Technologies Stack */}
                            <div className="flex flex-wrap gap-2">
                                {project.technologies?.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 rounded-md text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* My Work Section */}
                            <div>
                                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">My Work:</h3>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    {project.description || "Implemented core features and optimized system performance."}
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-3 pt-3">
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-700 transition border border-gray-700"
                                    >
                                        <Github className="w-4 h-4" /> Code
                                    </a>
                                )}
                                {project.demoUrl && (
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition shadow-lg hover:shadow-xl"
                                    >
                                        <ExternalLink className="w-4 h-4" /> Live Demo
                                    </a>
                                )}
                                <button
                                    onClick={() => handleProjectClick(project)}
                                    className="flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 transition shadow-lg hover:shadow-xl"
                                >
                                    <Users className="w-4 h-4" /> Details
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}

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


            <ProjectDetailsModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </div>
    )
}