import BottmToTop from "@/components/common/BottomToTop";
import WhatsAppButton from "@/components/common/WhatsApp";
import FooterSection from "@/components/sections/FooterSection";
import Navbar from "@/components/sections/Navbar";

const publicLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <main >
            <Navbar />
            <div>{children}</div>
            <FooterSection />
            <BottmToTop />
            <WhatsAppButton />
        </main>
    );
};

export default publicLayout;