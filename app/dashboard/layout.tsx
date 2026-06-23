import DashboardSidebar from '@/components/sections/DashboardSidebar';
import React from 'react';

const layout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <main className="flex min-h-screen">
            <DashboardSidebar />
            
            <div className="flex-1">
                {children}
            </div>
        </main>
    );
};

export default layout;