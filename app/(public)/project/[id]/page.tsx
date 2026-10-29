import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { IProject } from "../../../../sources/projects.types";
import ProjectVideoPlayer from "@/components/common/Videomodal";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/project/${id}`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) return { title: "Project Not Found" };

    const project: IProject = await res.json();

    return {
      title: `${project.title} | Engineering Portfolio`,
      description: project.tagline || project.description?.slice(0, 160),
      openGraph: {
        title: project.title,
        description: project.tagline || "",
        type: "article",
        publishedTime: project.createdAt?.toString(),
        images: project.coverImages
          ? [{ url: project.coverImages, width: 1200, height: 630, alt: project.title }]
          : [],
      },
      twitter: {
        card: "summary_large_image",
        title: project.title,
        description: project.tagline || "",
        images: project.coverImages ? [project.coverImages] : [],
      },
    };
  } catch {
    return { title: "Project Details" };
  }
}

const Page = async ({ params }: PageProps) => {
  const { id } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/project/${id}`, {
    next: { revalidate: 3600 },
    cache: "force-cache",
  });

  if (!res.ok || !res.ok) {
    notFound();
  }

  const project: IProject = await res.json();

  if (!project?._id) {
    notFound();
  }

  const createdYear = project.createdAt ? new Date(project.createdAt).getFullYear() : null;

  return (
    <article className="max-w-5xl mx-auto px-4 py-12">
      {/* Back Navigation */}
      <div className="mb-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to All Projects
        </Link>
      </div>

      {/* Header Section */}
      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          {project.category && (
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
              {project.category}
            </span>
          )}
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            project.status === "Completed" ? "bg-emerald-100 text-emerald-800" :
            project.status === "In Progress" ? "bg-amber-100 text-amber-800" : "bg-slate-100 text-slate-700"
          }`}>
            {project.status}
          </span>
          {project.featured && (
            <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-semibold">
              ⭐ Featured
            </span>
          )}
        </div>

        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-2 md:text-5xl">
          {project.title}
        </h1>
        <p className="text-lg text-slate-600">{project.tagline}</p>
      </header>

      {/* Cover Image */}
      {project.coverImages && (
        <div className="relative w-full aspect-video mb-10 overflow-hidden rounded-xl border border-slate-200 shadow-sm">
          <Image
            src={project.coverImages}
            alt={project.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main Details (2 Columns) */}
        <div className="lg:col-span-2 space-y-10">
          {project.description && (
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Overview</h2>
              <p className="text-slate-700 leading-relaxed whitespace-pre-line">{project.description}</p>
            </section>
          )}

          {project.highlights && project.highlights.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Highlights</h2>
              <ul className="space-y-3">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex gap-3 text-slate-700 leading-relaxed">
                    <svg className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.challenge && (
            <section className="p-6 rounded-xl bg-slate-50 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Challenges & Solutions</h2>
              <p className="text-slate-700 leading-relaxed whitespace-pre-line">{project.challenge}</p>
            </section>
          )}

          {project.technologies && project.technologies.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-3.5 py-1.5 rounded-md bg-slate-100 text-slate-800 text-sm font-medium border border-slate-200 hover:bg-slate-200 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar Info (1 Column) */}
        <aside className="space-y-6 lg:sticky lg:top-8 lg:self-start">
          <div className="p-6 border border-slate-200 rounded-xl space-y-4 bg-white shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 border-b pb-3 border-slate-100">Project Meta</h3>

            {project.role && (
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Role</p>
                <p className="font-medium text-slate-800">{project.role}</p>
              </div>
            )}
            {project.category && (
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Category</p>
                <p className="font-medium text-slate-800">{project.category}</p>
              </div>
            )}
            {createdYear && (
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Year</p>
                <p className="font-medium text-slate-800">{createdYear}</p>
              </div>
            )}
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Status</p>
              <p className="font-medium text-slate-800">{project.status}</p>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-col gap-3">
            
            {/* ✅ এখানে নতুন Client Component ব্যবহার করা হলো */}
            {project.videoUrl && (
              <ProjectVideoPlayer 
                videoUrl={project.videoUrl} 
                title={`${project.title} - Overview`} 
              />
            )}

            {project.liveLink && (
              <Link href={project.liveLink} target="_blank" rel="noopener noreferrer" className="w-full text-center px-6 py-3 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition shadow-sm">
                🌐 View Live Project
              </Link>
            )}
            {project.githubFrontendUrl && (
              <Link href={project.githubFrontendUrl} target="_blank" rel="noopener noreferrer" className="w-full text-center px-6 py-3 rounded-lg border border-slate-300 font-medium text-slate-700 hover:bg-slate-50 transition">
                💻 Frontend Repository
              </Link>
            )}
            {project.githubBackendUrl && (
              <Link href={project.githubBackendUrl} target="_blank" rel="noopener noreferrer" className="w-full text-center px-6 py-3 rounded-lg border border-slate-300 font-medium text-slate-700 hover:bg-slate-50 transition">
                ⚙️ Backend Repository
              </Link>
            )}
          </div>
        </aside>
      </div>
    </article>
  );
};

export default Page;