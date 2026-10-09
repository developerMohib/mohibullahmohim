import Image from 'next/image';
import Link from 'next/link';
import { IProject } from '../../../sources/projects.types';

// Helper component for clean conditional icon/button links
const ExternalButton = ({
  href,
  label,
  variant = 'secondary',
}: {
  href?: string | null;
  label: string;
  variant?: 'primary' | 'secondary' | 'outline';
}) => {
  if (!href) return null;

  const baseStyles =
    'flex-1 text-center py-2 px-3 text-xs font-semibold rounded-lg transition-all duration-200 border';
  const variants = {
    primary:
      'bg-zinc-900 text-white border-zinc-900 hover:bg-zinc-800 ',
    secondary:
      'bg-zinc-100 text-zinc-800 border-zinc-200 hover:bg-zinc-200',
    outline:
      'border-zinc-300 text-zinc-700 hover:border-zinc-400',
  };

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]}`}
    >
      {label}
    </Link>
  );
};

const ProjectsPage = async () => {
  let projects: IProject[] = [];

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/project/all`, {
      next: { revalidate: 60 },
    });
    const json = await res.json();
    projects = json?.data || [];
  } catch (error) {
    console.error('Failed to fetch projects:', error);
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
          Featured Engineering Work
        </h1>
        <p className="mt-3 text-lg text-zinc-600 max-w-2xl mx-auto">
          Explore production-ready applications, system architectures, and open-source code.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <article
            key={project._id}
            className="group relative flex flex-col rounded-2xl bg-white border border-zinc-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            {/* Thumbnail Header */}
            {project.coverImages ? (
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-100">
                <Link href={project.slug ? `/project/${project.slug}` : '#'}>
                  <Image
                    src={project.coverImages}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>

                {/* Category & Status Badges */}
                <div className="absolute top-3 left-3 right-3 flex justify-between items-center pointer-events-none">
                  {project.category && (
                    <span className="bg-zinc-900/80 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-1 rounded-full border border-white/10">
                      {project.category}
                    </span>
                  )}
                  {project.status && (
                    <span
                      className={`text-[11px] font-semibold px-2 py-0.5 rounded-full backdrop-blur-md ${
                        project.status === 'Completed'
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      }`}
                    >
                      {project.status}
                    </span>
                  )}
                </div>
              </div>
            ) : null}

            {/* Content Body */}
            <div className="flex flex-col flex-1 p-6">
              <div className="flex-1">
                {/* Role Badge */}
                {project.role && (
                  <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                    {project.role}
                  </span>
                )}

                <h3 className="text-xl font-bold text-zinc-900  mt-1 line-clamp-1">
                  <Link
                    href={project.slug ? `/project/${project.slug}` : '#'}
                    className="hover:text-indigo-600  transition-colors"
                  >
                    {project.title}
                  </Link>
                </h3>

                <p className="text-sm text-zinc-600 mt-2 line-clamp-2">
                  {project.tagline}
                </p>

                {/* Tech Stack Pills */}
                {project.technologies?.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.technologies?.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-zinc-100 text-zinc-700 text-[11px] font-mono px-2 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* 3-Sec HR/Recruiter Quick Scan Section */}
              <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-100 text-xs">
                
                {project.highlights?.[0] ? (
                  <p className="text-zinc-700 line-clamp-2">
                    <strong className="text-zinc-900 ">Key Impact:</strong>{' '}
                    {project.highlights[0]}
                  </p>
                ) : project.challenge ? (
                  <p className="text-zinc-700 line-clamp-2">
                    <strong className="text-zinc-900">Core Challenge:</strong>{' '}
                    {project.challenge}
                  </p>
                ) : (
                  <p className="text-zinc-500 italic">Quick architectural overview available on details page.</p>
                )}
              </div>

              {/* Multi-Link Action Buttons */}
              <div className="mt-5 pt-4 border-t border-zinc-100 flex flex-col gap-2">
                {/* Live Demo Link */}
                {project.liveLink && (
                  <ExternalButton href={project.liveLink} label="🌐 Live Demo" variant="primary" />
                )}

                {/* Split Repository Links (Frontend / Backend) */}
                <div className="flex gap-2">
                  {project.githubFrontendUrl && (
                    <ExternalButton
                      href={project.githubFrontendUrl}
                      label={project.githubBackendUrl ? 'Frontend Code' : 'Source Code'}
                      variant="secondary"
                    />
                  )}
                  {project.githubBackendUrl && (
                    <ExternalButton
                      href={project.githubBackendUrl}
                      label={project.githubFrontendUrl ? 'Backend Code' : 'API Source'}
                      variant="secondary"
                    />
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default ProjectsPage;