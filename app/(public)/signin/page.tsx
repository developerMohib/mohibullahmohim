"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

const Page = () => {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [message, setMessage]=useState("")
    const api = axios.create({
        baseURL: process.env.NEXT_PUBLIC_BACKEND_API,
        headers: {
            "Content-Type": "application/json",
        },
    });
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const res = await api.post('/login', { email, password })
            console.log(res)
            if (res.data.success===true) {
                setMessage(res.data.message)
            }

            // store token
            // localStorage.setItem("token", data.access_token);

            // router.push("/dashboard");
        } catch (err: unknown) {
            // if(err.message ===string){}
            // setError(err.message);
            console.log('er',err)
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

                {message && (
                    <p className="text-green-500 text-sm mb-4">{message}</p>
                )}
                {error && (
                    <p className="text-red-500 text-sm mb-4">{error}</p>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    <input
                        type="email"
                        placeholder="Email"
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