"use client";

import { useState } from "react";
import Link from "next/link";
import axiosInstance from "@/components/hooks/axiosInstance";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import axios from "axios";

const Page = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const res = await axiosInstance.post('/login', { email, password })
            if (res.data.success === true) {
                Swal.fire({
                    icon: "success",
                    title: res.data.message,
                });
                router.push('/dashboard')
            }
        } catch (err: unknown) {

            if (axios.isAxiosError(err)) {
                setError(err.response?.data?.message || "An error occurred");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4">
            <Link href="/" className="text-blue-500 hover:underline mb-8">
                Back to Home
            </Link>

            <div className="w-full max-w-md border rounded-xl p-8 shadow-sm">
                <h1 className="text-3xl font-bold text-center mb-6">
                    Sign In
                </h1>

                {error && (
                    <p className="text-red-500 text-sm mb-4">{error}</p>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    <input
                        type="email"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border rounded-lg px-4 py-3"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border rounded-lg px-4 py-3"
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 rounded-lg bg-black text-white"
                    >
                        {loading ? "Signing in..." : "Sign In"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Page;