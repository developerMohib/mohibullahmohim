'use client';

import Footer from '@/components/Footer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, useState } from 'react';

const QueryProvider = ({ children }: { children: ReactNode }) => {
    const [queryClient] = useState(() => new QueryClient());
    return (<QueryClientProvider client={queryClient}>
        <main>
            {children}
            <Footer />
        </main>
    </QueryClientProvider>);
};

export default QueryProvider;