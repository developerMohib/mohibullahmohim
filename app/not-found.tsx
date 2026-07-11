import React from 'react';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-50 to-slate-200 dark:from-slate-900 dark:to-slate-950 px-4">
            <div className="text-center space-y-6">
                {/* Animated 404 */}
                <h1 className="text-[8rem] md:text-[10rem] font-extrabold leading-none bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-bounce">
                    404
                </h1>

                {/* Floating subtitle */}
                <p className="text-xl md:text-2xl font-semibold text-slate-700 dark:text-slate-200 animate-pulse">
                    Oops! Page not found.
                </p>

                <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                    The page you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>

                {/* Back to home button */}
                <Link
                    href="/"
                    className="inline-block mt-4 px-6 py-3 rounded-full bg-indigo-600 text-white font-medium shadow-lg hover:bg-indigo-700 hover:scale-105 active:scale-95 transition-all duration-300"
                >
                    ⬅ Back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;