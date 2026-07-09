
import AboutSeciton from '@/components/sections/AboutSeciton';
import ContactSection from '@/components/sections/Contactsection';
import HeroSection from '@/components/sections/HeroSection';
import HighLightProjects from '@/components/sections/HighLightProjects';
import ProcessSection from '@/components/sections/ProcessSection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import SkillsSection from '@/components/sections/SkillsSection';

const page = () => {
  return (
    <main className='max-w-7xl mx-auto overflow-hidden px-2'>
      <HeroSection />
      <AboutSeciton />
      <SkillsSection />
      <HighLightProjects />
      {/* experience */}
      <ProcessSection />
      <ReviewsSection />
      <ContactSection />
    </main>
  );
};

export default page;