"use client";

import { getCurrentUser } from "@/components/hooks/getCurrentUser";
import { createContext, useContext, useEffect, useState } from "react";

type User = { email: string } | null;

const AuthContext = createContext<{
    user: User;
    loading: boolean;
    setUser: (user: User) => void;
}>({ user: null, loading: true, setUser: () => { } });

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            const currentUser = await getCurrentUser();
            setUser(currentUser);
            setLoading(false);
        };
        fetchUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);