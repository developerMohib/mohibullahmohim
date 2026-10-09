"use client"
import { useAuth } from '@/providerContext/AuthProvider';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { logoutUser } from '../hooks/getCurrentUser';

const DashboardSidebar = () => {
    const router = useRouter()
    const { setUser } = useAuth();

    const handleLogout = async () => {
        await logoutUser();
        setUser(null);
        router.push("/");
    };
    return (
        <aside className="w-64 text-balance shadow-md p-5 h-screen sticky top-0">
            <h2 className="text-xl font-bold mb-6">
                Admin Panel
            </h2>

            <nav className="flex flex-col gap-3">
                <Link
                    href="/dashboard"
                    className="p-2 rounded transition"
                >
                    Dashboard
                </Link>

                <Link
                    href="/dashboard/projects"
                    className="p-2 rounded transition"
                >
                    Projects
                </Link>

                <Link
                    href="/dashboard/create-project"
                    className="p-2 rounded transition"
                >
                    Create Project
                </Link>
            </nav>
            <button onClick={handleLogout}>Log Out</button>
        </aside>
    );
};

export default DashboardSidebar;