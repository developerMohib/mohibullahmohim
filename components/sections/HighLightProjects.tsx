import { IProject } from '@/sources/projects.types';
import Image from 'next/image';
import Link from 'next/link';
import HeadingText from '../common/HeadingText';
import { ArrowUpRight, Eye } from 'lucide-react';
import { BsGithub } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';

const HighLightProjects = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/project/all`);
    const projects: { data: IProject[] } = await res.json();
console.log(projects, "projects");
    return (
        <>
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

        <section id="projects" className="md:pt-18 pt-12 px-4 max-w-6xl mx-auto">
      <HeadingText
        intro="04. Showcase"
        mainTitle="Things I've"
        highlightTitle="Built"
        mainDescription="From full-stack applications to responsive user interfaces,"
        highlightDescription="here are some of my favorite projects."
      />

      <div className="grid grid-cols-1 gap-8 mt-5 md:mt-10">
        {projects?.data?.slice(0, 6).map((project) => (
          <div
            key={project._id}
            className="bg-[#f0f4f8] rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-stretch border border-slate-200/60 shadow-sm"
          >
            {/* Left: Project Preview Frame */}
            <div className="w-full md:w-1/2 shrink-0">
              <Link href={`/project/${project.slug}`} className="block h-full">
                <div className="bg-white rounded-2xl p-3 shadow-md border border-slate-200/80 h-full flex items-center justify-center overflow-hidden group">
                  <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
                    <Image
                      fill
                      src={project.image}
                      alt={project.title}
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </Link>
            </div>

            {/* Right: Project Details */}
            <div className="w-full md:w-1/2 flex flex-col justify-between text-slate-800">
              <div>
                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-slate-900">
                  {project.title}
                </h3>

                {/* Team, Role & Contributors */}
                <div className="flex flex-wrap items-center gap-2 mb-6 text-sm">
                  {project && (
                    <span className="px-3 py-1 bg-white border border-slate-200 rounded-md font-medium text-slate-700">
                      personal {/* e.g. "Team" or "Personal" */}
                    </span>
                  )}
                  {project && (
                    <span className="px-3 py-1 bg-white border border-slate-200 rounded-md font-medium text-slate-700">
                      Backend Developer
                    </span>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 font-medium text-blue-600 hover:underline ml-1"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      Contributors
                    </a>
                  )}
                </div>

                {/* Key Features List */}
                {project.challenges && (
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Features:</h4>
                    <ul className="list-disc list-inside space-y-1 text-slate-700 text-sm md:text-base">
                      <li>hllo</li>
                      <li>hllo</li>
                      <li>hllo</li>
                    </ul>
                  </div>
                )}

                {/* Tech Stack Badges */}
                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white text-slate-800 rounded-md text-xs font-semibold shadow-sm border border-slate-200/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* My Work Description */}
                {project&& (
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-slate-900 mb-1">Challenges :</h4>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                      {project.challenges}
                    </p>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 border border-slate-900 text-slate-900 bg-transparent rounded-md text-sm font-semibold hover:bg-slate-900 hover:text-white transition-colors"
                  >
                    <BsGithub className="w-4 h-4" />
                    Frontend
                  </Link>
                )}

                {project.githubUrl && !project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 border border-slate-900 text-slate-900 bg-transparent rounded-md text-sm font-semibold hover:bg-slate-900 hover:text-white transition-colors"
                  >
                    <BsGithub className="w-4 h-4" />
                    Repository
                  </Link>
                )}

                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 border border-slate-900 text-slate-900 bg-transparent rounded-md text-sm font-semibold hover:bg-slate-900 hover:text-white transition-colors"
                  >
                    <BsGithub className="w-4 h-4" />
                    Backend
                  </Link>
                )}

                {project.liveLink && (
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-md text-sm font-semibold transition-colors"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    Live
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="my-10 flex justify-center items-center">
        <Link
          href="/projects"
          className="px-6 py-2.5 border border-slate-300 rounded-xl hover:bg-slate-100 transition text-sm font-medium"
        >
          View All
        </Link>
      </div>
    </section>
        </>
    );
};

export default HighLightProjects;