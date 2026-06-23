import { IProject } from '@/sources/projects.types';
import Image from 'next/image';
import Link from 'next/link';

const page = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/project/all`);
    const projects: { data: IProject[] } = await res.json();
    return (
        <div>
            <h1 className="text-4xl font-bold text-center mt-10">My Projects</h1>
           
            <section className="py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects?.data?.map((project) => (
                        <div
                            key={project._id}
                            className="rounded-xl overflow-hidden border shadow-sm hover:shadow-lg transition"
                        >
                            {/* Image */}
                            <div className="relative">
                               <Link href={project.slug ? `/project/${project.slug}` : "#"} >
                                <Image height={450} width={450}
                                    src={project.image?.[0]}
                                   
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

                                {/* Buttons */}
                                <div className="flex gap-3 mt-5">
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 text-center px-4 py-2 rounded-lg border"
                                    >
                                        Live Demo
                                    </a>

                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 text-center px-4 py-2 rounded-lg bg-black text-white"
                                    >
                                        Source Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default page;