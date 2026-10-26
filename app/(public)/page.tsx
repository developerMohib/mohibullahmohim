
import AboutSeciton from '@/components/sections/AboutSeciton';
import ContactSection from '@/components/sections/Contactsection';
import HeroSection from '@/components/sections/HeroSection';
import HighLightProjects from '@/components/sections/HighLightProjects';
import ProcessSection from '@/components/sections/ProcessSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ReviewsSection from '@/components/sections/ReviewsSection'
import { IReviews } from '@/sources/reviews.types';

const page = async () => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/reviews`);
  const reviews: { data: IReviews[] } = await res.json();
  return (
    <main className='max-w-7xl mx-auto overflow-hidden px-2'>
      <HeroSection />
      <AboutSeciton />
      <SkillsSection />
      <HighLightProjects />
      <ProcessSection />
      <ReviewsSection />
      <ContactSection />
    </main>
  );
};

export default page;