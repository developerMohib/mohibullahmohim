import { FloatingParticles } from '@/components/animation/FloatingParticles';
import AppLoader from '@/components/AppLoader';
import BackToTop from '@/components/BackToTop';
import Navbar from '@/components/Navbar';
import { ModalProvider } from '@/provider/ModalProvider';
import QueryProvider from '@/provider/QueryProvider';
import React from 'react';
import { Toaster } from 'sonner';

const publicLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <main >
            <AppLoader />
            <QueryProvider>
                <Navbar />
                <ModalProvider>
                    <div>{children}</div>
                    <Toaster />
                    <FloatingParticles />
                </ModalProvider>
            </QueryProvider>
            <BackToTop />
        </main>
    );
};

export default publicLayout;