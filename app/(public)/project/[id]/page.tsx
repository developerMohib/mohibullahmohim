import Image from "next/image";
import Link from "next/link";

const Page = async ({
    params,
}: {
    params: Promise<{ id: string }>;
}) => {
    const { id } = await params;

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/project/${id}`,
        {
            cache: "no-store",
        }
    );

    const project = await res.json();
    console.log("porject", project)
    return (
        <section className="px-4 py-12">
            {/* Title */}
            <h1 className="text-4xl font-bold text-slate-800 mb-8">
                {project.title}
            </h1>

            {/* Images */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
                {project.image?.map((img: string, i: number) => (
                    <Image
                        key={i}
                        src={img}
                        alt={project.title}
                        width={500}
                        height={300}
                        className="image object-cover rounded"
                    />
                ))}
            </div>

            {/* Description */}
            <div className="mb-10">
                <h2 className="text-2xl font-semibold text-slate-800 mb-3">
                    Overview
                </h2>

                <p className="text-slate-600 leading-relaxed">
                    {project.description}
                </p>
            </div>

            {/* Project Info */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                <div className="p-4 border rounded-lg">
                    <p className="text-sm text-slate-500">Category</p>
                    <p className="font-medium">{project.category}</p>
                </div>

                <div className="p-4 border rounded-lg">
                    <p className="text-sm text-slate-500">Status</p>
                    <p className="font-medium">{project.status}</p>
                </div>

                <div className="p-4 border rounded-lg">
                    <p className="text-sm text-slate-500">Year</p>
                    <p className="font-medium">{project.year}</p>
                </div>

                <div className="p-4 border rounded-lg">
                    <p className="text-sm text-slate-500">Complexity</p>
                    <p className="font-medium">{project.complexity}</p>
                </div>

                <div className="p-4 border rounded-lg">
                    <p className="text-sm text-slate-500">Team Size</p>
                    <p className="font-medium">{project.teamSize}</p>
                </div>

                <div className="p-4 border rounded-lg">
                    <p className="text-sm text-slate-500">Duration</p>
                    <p className="font-medium">{project.duration}</p>
                </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-10">
                <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                    Technologies
                </h2>

                <div className="flex flex-wrap gap-3">
                    {project.technologies?.map((tech: string, i: number) => (
                        <span
                            key={i}
                            className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4">
                {project.liveLink && (
                    <Link
                        href={project.liveLink}
                        target="_blank"
                        className="px-6 py-3 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
                    >
                        Live Demo
                    </Link>
                )}

                {project.githubUrl && (
                    <Link
                        href={project.githubUrl}
                        target="_blank"
                        className="px-6 py-3 rounded-lg border border-slate-300 hover:bg-slate-100 transition"
                    >
                        GitHub Repository
                    </Link>
                )}
            </div>
        </section>
    );
};

export default Page;