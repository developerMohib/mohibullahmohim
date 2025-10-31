"use client";
import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <section>
            {/* Section 1 */}
            <div className="py-20 animate-[cbounce_4s_ease-in-out_infinite] z-10 flex flex-col justify-end items-center">
                <h1
                    className="sm:text-9xl text-7xl font-extrabold font-mono bg-gradient-to-r from-eduGreen via-indigo-400 to-indigo-600 inline-block text-transparent bg-clip-text">
                    Coming</h1>
                <h1 className="sm:text-7xl text-6xl text-center font-mono font-extrabold bg-gradient-to-r from-eduGreen via-indigo-400 to-indigo-600 inline-block text-transparent bg-clip-text">
                    Soon
                </h1>

            </div>
            <div className="text-center">
                <Link
                    href="https://mohibullah-mohim.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 hover:underline rounded transition cursor-pointer"
                >
                    Before coming - visit old one
                </Link>
            </div>
        </section>
    );
};

export default page;