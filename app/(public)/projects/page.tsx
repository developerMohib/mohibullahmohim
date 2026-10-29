import { Metadata } from 'next';
import { IProject } from '../../../sources/projects.types';
import ProjectCard from '@/components/sections/ProjectCardForPage';

export const metadata: Metadata = {
  title: 'Featured Engineering Projects | Portfolio',
  description: 'Explore production-ready applications, system architectures, and open-source code.',
  openGraph: {
    title: 'Featured Engineering Projects',
    description: 'Explore production-ready applications, system architectures, and open-source code.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Featured Engineering Projects',
    description: 'Explore production-ready applications, system architectures, and open-source code.',
  },
};

const ProjectsPage = async () => {
  let projects: IProject[] = [];
  let hasError = false;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/project/all`, {
      next: { revalidate: 60 },
    });
    
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    
    const json = await res.json();
    projects = json?.data || [];
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    hasError = true;
  }

  if (hasError || projects.length === 0) {
    return (
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-2xl font-bold text-zinc-900">
          {hasError ? 'Failed to load projects' : 'No projects found'}
        </h1>
        <p className="mt-2 text-zinc-600">
          {hasError ? 'Please try again later or check the backend connection.' : 'Check back soon for upcoming engineering work!'}
        </p>
      </main>
    );
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
          <ProjectCard key={project._id} project={project} />
        ))}
      </section>
    </main>
  );
};

export default ProjectsPage;