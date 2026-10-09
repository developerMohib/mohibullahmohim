import { IProject } from '@/sources/projects.types';
import Image from 'next/image';
import Link from 'next/link';
import HeadingText from '../common/HeadingText';
import { BsGithub } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';

const HighLightProjects = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/project/all`);
  const { data: projects }: { data: IProject[] } = await res.json();
  console.log(projects, "projects");
  return (
    <section id="projects" className="md:pt-18 pt-12 px-4">
      <HeadingText
        intro="04. Showcase"
        mainTitle="Things I've"
        highlightTitle="Built"
        mainDescription="From full-stack applications to responsive user interfaces,"
        highlightDescription="here are some of my favorite projects."
      />

      <div className="grid grid-cols-1 gap-8 mt-5 md:mt-10">
        {projects?.slice(0, 4).map((project: IProject, index: number) => {
          const isOdd = index % 2 === 1; // odd => image left, even => image right

          return (
            <div
              key={project._id}
              className={`bg-[#dadcdfee] rounded-3xl p-6 md:p-8 flex flex-col gap-8 items-stretch border border-slate-200/60 shadow-sm ${isOdd ? "md:flex-row" : "md:flex-row-reverse"
                }`}
            >
              {/* Image */}
              <div className="w-full md:w-3/7 shrink-0">
                <Link href={`/project/${project.slug}`} className="block h-full">
                  <div className="rounded-2xl shadow-md border border-slate-200/80 h-full flex items-center justify-center overflow-hidden group">
                    <div className="relative h-full w-full rounded-xl overflow-hidden bg-slate-100">
                      {project.coverImages ? (
                        <Image
                          fill
                          src={project.coverImages}
                          alt={project.title}
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm">
                          No preview
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              </div>

              {/* Details */}
              <div className="w-full md:w-4/7 flex flex-col justify-between text-slate-800">
                <div>
                  {/* Title + Featured */}
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="shrink-0 px-2 py-1 text-xs font-semibold rounded-full bg-amber-100 text-amber-700 border border-amber-200">
                        ★ Featured
                      </span>
                    )}
                  </div>

                  {/* Tagline */}
                  <p className="text-slate-600 mb-4 text-base">{project.tagline}</p>

                  {/* Role / Category / Status */}
                  <div className="flex flex-wrap items-center gap-2 mb-3 text-sm">
                    {project.role && (
                      <span className="px-3 py-1 bg-white border border-slate-200 rounded-md font-medium text-xs text-slate-700">
                        {project.role}
                      </span>
                    )}
                    {project.category && (
                      <span className="px-3 py-1 bg-white border border-slate-200 rounded-md font-medium text-slate-700 text-xs">
                        {project.category}
                      </span>
                    )}
                    <span
                      className={`px-3 py-1 rounded-md font-medium text-xs border ${project.status === "Completed"
                        ? "bg-green-50 text-green-700 border-green-200"
                        : project.status === "In Progress"
                          ? "bg-blue-50 text-blue-700 border-blue-200"
                          : "bg-slate-100 text-slate-600 border-slate-200"
                        }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Highlights */}
                  {project.highlights?.length > 0 && (
                    <div className="mb-3">
                      <h4 className="text-md font-bold text-slate-900 mb-2">Features:</h4>
                      <ul className="list-disc list-inside space-y-1 text-slate-700 text-sm md:text-base">
                        {project.highlights.slice(0, 4).map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech stack */}
                  {project.technologies?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
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

                  {/* Challenge */}
                  {project.challenge && (
                    <div className="mb-3">
                      <h4 className="text-md font-medium text-slate-900 mb-1">Challenge:</h4>
                      <p className="text-slate-600 text-sm md:text-base leading-relaxed line-clamp-4">
                        {project.challenge}
                      </p>
                    </div>
                  )}
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  {project.githubFrontendUrl && (
                    <Link
                      href={project.githubFrontendUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-slate-900 text-slate-900 bg-transparent rounded-md text-sm font-semibold hover:bg-slate-900 hover:text-white transition-colors"
                    >
                      <BsGithub className="w-4 h-4" />
                      Frontend
                    </Link>
                  )}

                  {project.githubBackendUrl && (
                    <Link
                      href={project.githubBackendUrl}
                      target="_blank"
                      rel="noopener noreferrer"
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
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-md text-sm font-semibold transition-colors"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      Live
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* View All */}
      <div className="my-10 flex justify-center items-center">
        <Link
          href="/projects"
          className="px-6 py-2.5 border border-slate-300 rounded-xl hover:bg-slate-100 transition text-sm font-medium"
        >
          View All
        </Link>
      </div>
    </section>

  );
};

export default HighLightProjects;