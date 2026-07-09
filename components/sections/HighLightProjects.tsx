import { IProject } from '@/sources/projects.types';
import Image from 'next/image';
import Link from 'next/link';
import HeadingText from '../common/HeadingText';
import { ArrowUpRight, Eye } from 'lucide-react';
import { BsGithub } from 'react-icons/bs';

const HighLightProjects = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/project/all`);
    const projects: { data: IProject[] } = await res.json();

    return (
        <section id="projects" className="md:pt-18 pt-12 px-4">
            <HeadingText
                intro="04. Showcase"
                mainTitle="Things I've"
                highlightTitle="Built"
                mainDescription="From full-stack applications to responsive user interfaces,"
                highlightDescription="here are some of my favorite projects."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 md:mt-10">
                {projects?.data?.slice(0, 6).map((project) => (
                    <div
                        key={project._id}
                        className="rounded-xl overflow-hidden border shadow-sm hover:shadow-lg transition"
                    >
                        {/* Image */}
                        <div className="relative">
                            <Link href={`/project/${project.slug}`} >
                                <Image height={450} width={450}
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-56 object-cover"
                                />
                            </Link>

                            {/* Category Badge */}
                            <span className="absolute top-3 right-3 bg-black text-white text-xs px-3 py-1 rounded-full capitalize">
                                {project.category}
                            </span>
                        </div>

                        {/* Content */}
                        <div className="p-5">
                            <h3 className="text-xl font-semibold mb-4 line-clamp-2">
                                {project.title}
                            </h3>

                            <div className="space-y-2 text-sm text-gray-600">
                                <p>
                                    <strong>Started:</strong>{" "}
                                    {new Date(project.startDate).toLocaleDateString()}
                                </p>

                                <p>
                                    <strong>Completed:</strong>{" "}
                                    {new Date(project.completionDate).toLocaleDateString()}
                                </p>

                                <p>
                                    <strong>Complexity:</strong> {project.complexity}
                                </p>
                            </div>
                            <div className="py-3 flex items-center justify-between bg-white">
                                <span className="group flex items-center text-xs text-red-600 hover:text-red-400 transition-all center ">
                                    <Eye size={14} />

                                    <Link
                                        href={project.liveLink}
                                        target="_blank"
                                        className="ml-1 flex items-"
                                    >
                                        Live Link

                                        <ArrowUpRight
                                            size={12}
                                            className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                        />
                                    </Link>
                                </span>

                                <span className="group flex items-center text-xs text-red-600 hover:text-red-400 transition-all">
                                    <BsGithub size={14} />
                                    <Link
                                        href={project.githubUrl}
                                        target="_blank"
                                        className="ml-1 flex items-center"
                                    >
                                        Source Code

                                        <ArrowUpRight
                                            size={12}
                                            className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                        />
                                    </Link>
                                </span>
                            </div>


                        </div>
                    </div>
                ))}
            </div>
            <div className='my-6 flex justify-center items-center'>
                <Link
                    href="/projects"
                    className="px-6 py-2 border rounded-lg hover:bg-gray-100 transition"
                >
                    View All
                </Link>
            </div>
        </section>
    );
};

export default HighLightProjects;