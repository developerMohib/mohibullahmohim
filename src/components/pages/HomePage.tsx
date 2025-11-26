import Banner from '../Banner';
import { ProjectsList } from '../Projectcard';
import Testimonial from '../Testimonial';
import ContactSection from '../ContactSection';
import ProcessSection from '../ProcessSection';
import FaqSection from '../FaqSection';
import ServicesSection from '../ServicesSection';

const HomePage = () => {

    return (
        <div className="overflow-hidden bg-white dark:bg-gray-900 min-h-screen">
            {/* Hero Section */}
            <Banner />

            {/* Services Section */}
            <ServicesSection />


            {/* Process Section */}
            <ProcessSection />

            {/* Projects Section */}
            <ProjectsList />
            {/* Testimonials Slider Section */}
            <Testimonial />

            {/* FAQ Section */}
            <FaqSection />

            {/* CTA Section */}
            <ContactSection />
        </div>
    );
};

export default HomePage;