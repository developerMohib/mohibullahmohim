
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactFormSection';
import HeroSection from '@/components/sections/HeroSection';
import HighlightProjects from '@/components/sections/ProjectHighlights';
import ProcessSection from '@/components/sections/ProcessSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ReviewsSection from '@/components/sections/ReviewsSection'

const page = async () => {

  return (
    <main className='max-w-7xl mx-auto overflow-hidden px-2'>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <HighlightProjects />
      <ProcessSection />
      <ReviewsSection />
      <ContactSection />
    </main>
  );
};

export default page;