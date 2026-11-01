
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactFormSection';
import HeroSection from '@/components/sections/HeroSection';
import HighlightProjects from '@/components/sections/ProjectHighlights';
import ProcessSection from '@/components/sections/ProcessSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ReviewsSection from '@/components/sections/ReviewsSection'
import { safeFetch } from '@/lib/api';
import { IProject } from '@/types/projects';

const page = async () => {
  const { data: projects, error } = await safeFetch<IProject[]>('/project/all', {
    cache: 'no-store',
  });
  
  const safeProjects = Array.isArray(projects) ? projects : [];

  return (
    <main className='max-w-7xl mx-auto overflow-hidden px-2'>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <HighlightProjects safeProjects={safeProjects} error={error} />
      <ProcessSection />
      <ReviewsSection />
      <ContactSection />
    </main>
  );
};

export default page;