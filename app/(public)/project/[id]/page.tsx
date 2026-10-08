import { IProject } from "@/sources/projects.types";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { id } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/project/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    notFound();
  }

  const project: IProject = await res.json();

  const createdYear = project.createdAt
    ? new Date(project.createdAt).getFullYear()
    : null;

  return (
    <article className="max-w-5xl mx-auto px-4 py-12">
      {/* Header Section */}
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          {project.category && (
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
              {project.category}
            </span>
          )}
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              project.status === "Completed"
                ? "bg-emerald-100 text-emerald-800"
                : project.status === "In Progress"
                ? "bg-amber-100 text-amber-800"
                : "bg-slate-100 text-slate-700"
            }`}
          >
            {project.status}
          </span>
          {project.featured && (
            <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-semibold">
              Featured
            </span>
          )}
        </div>

        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
          {project.title}
        </h1>
        <p className="text-lg text-slate-600">{project.tagline}</p>
      </header>

      {/* Cover Image */}
      {project.coverImages && (
        <div className="relative w-full h-100 mb-10 overflow-hidden rounded-xl border border-slate-200">
          <Image
            src={project.coverImages}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main Details (2 Columns) */}
        <div className="lg:col-span-2 space-y-10">
          {/* Overview / Description */}
          {project.description && (
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                Overview
              </h2>
              <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                {project.description}
              </p>
            </section>
          )}

          {/* Key Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Key Highlights
              </h2>
              <ul className="space-y-2 list-disc list-inside text-slate-700">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="leading-relaxed">
                    {highlight}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Challenge & Solution */}
          {project.challenge && (
            <section className="p-6 rounded-xl bg-slate-50 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                Challenges & Solutions
              </h2>
              <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                {project.challenge}
              </p>
            </section>
          )}

          {/* Tech Stack */}
          {project.technologies && project.technologies.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3.5 py-1.5 rounded-md bg-slate-100 text-slate-800 text-sm font-medium border border-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar Info (1 Column) */}
        <aside className="space-y-6">
          <div className="p-6 border border-slate-200 rounded-xl space-y-4 bg-white shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 border-b pb-3 border-slate-100">
              Project Meta
            </h3>

            {project.role && (
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                  Role
                </p>
                <p className="font-medium text-slate-800">{project.role}</p>
              </div>
            )}

            {project.category && (
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                  Category
                </p>
                <p className="font-medium text-slate-800">{project.category}</p>
              </div>
            )}

            {createdYear && (
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                  Created Year
                </p>
                <p className="font-medium text-slate-800">{createdYear}</p>
              </div>
            )}

            <div>
              <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Status
              </p>
              <p className="font-medium text-slate-800">{project.status}</p>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-col gap-3">
            {project.liveLink && (
              <Link
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center px-6 py-3 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition"
              >
                View Live Project
              </Link>
            )}

            {project.githubFrontendUrl && (
              <Link
                href={project.githubFrontendUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center px-6 py-3 rounded-lg border border-slate-300 font-medium text-slate-700 hover:bg-slate-50 transition"
              >
                Frontend Repository
              </Link>
            )}

            {project.githubBackendUrl && (
              <Link
                href={project.githubBackendUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center px-6 py-3 rounded-lg border border-slate-300 font-medium text-slate-700 hover:bg-slate-50 transition"
              >
                Backend Repository
              </Link>
            )}
          </div>
        </aside>
      </div>
    </article>
  );
};

export default Page;