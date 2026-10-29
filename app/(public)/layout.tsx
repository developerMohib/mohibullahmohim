
import WhatsAppButton from "@/components/common/WhatsAppButton";
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
            <WhatsAppButton />
        </main>
    );
};

export default publicLayout;