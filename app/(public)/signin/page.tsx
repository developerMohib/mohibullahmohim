"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Loader2 } from "lucide-react"; // আইকনের জন্য
import axiosInstance from "@/components/hooks/axiosInstance";
import axios from "axios";
import Swal from "sweetalert2";

export default function LoginPage() {
    const router = useRouter();
    
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        // ইমেইল থেকে অতিরিক্ত স্পেস রিমুভ করা
        const trimmedEmail = email.trim();

        try {
            const res = await axiosInstance.post('/login', { 
                email: trimmedEmail, 
                password 
            });

            if (res.data.success) {
                Swal.fire({
                    icon: "success",
                    title: res.data.message || "Login Successful!",
                    timer: 1500,
                    showConfirmButton: false
                });
                router.push('/dashboard');
            }
        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                setError(err.response?.data?.message || "Invalid email or password");
            } else {
                setError("An unexpected error occurred. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-slate-50">
            <Link 
                href="/" 
                className="absolute top-6 left-6 text-sm text-slate-600 hover:text-slate-900 flex items-center gap-1 transition-colors"
            >
                ← Back to Home
            </Link>

            <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-slate-900">Welcome Back</h1>
                    <p className="text-slate-500 mt-2 text-sm">Please enter your details to sign in.</p>
                </div>

                {error && (
                    <div className="mb-6 p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Email Input */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                            Email Address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            placeholder="you@example.com"
                        />
                    </div>

                    {/* Password Input */}
                    <div>
                        <div className="flex items-center justify-between mb-1.5">
                            <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                                Password
                            </label>
                            <Link href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-700 hover:underline">
                                Forgot password?
                            </Link>
                        </div>
                        
                        <div className="relative">
                            <input
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                autoComplete="current-password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full border border-slate-300 rounded-lg px-4 py-2.5 pr-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                placeholder="••••••••"
                            />
                            {/* Show/Hide Password Toggle Icon */}
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                                aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {loading ? (
                            <>
                                <Loader2 className="w-4 h-4 animate-spin" />
                                Signing in...
                            </>
                        ) : (
                            "Sign In"
                        )}
                    </button>
                </form>

                {/* Sign Up Link */}
                <p className="text-center text-sm text-slate-600 mt-6">
                    Don&apos;t have an account?{" "}
                    <Link href="/register" className="font-semibold text-blue-600 hover:text-blue-700 hover:underline">
                        Create an account
                    </Link>
                </p>
            </div>
        </div>
    );
}