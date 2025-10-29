import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Blogdetailspage = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
            <article className="p-6 rounded-lg shadow dark:shadow-gray-800/20 bg-white dark:bg-gray-800 transition-colors duration-200">
                <nav className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <Link href="/blogs" className="hover:underline hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                        ← Back to blog
                    </Link>
                </nav>

                <header className="mb-6">
                    <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">
                        Understanding Tailwind CSS for Production
                    </h1>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center">
                            <Image 
                                width={40} 
                                height={40} 
                                src="/avatar.jpg" 
                                alt="Author" 
                                className="w-10 h-10 rounded-full mr-3" 
                            />
                            <div>
                                <div className="font-medium text-gray-900 dark:text-white">Jane Doe</div>
                                <div>Mar 18, 2025 · 6 min read</div>
                            </div>
                        </div>
                        <div className="flex gap-2 sm:ml-auto">
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                                Tailwind
                            </span>
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                                CSS
                            </span>
                        </div>
                    </div>
                </header>

                <figure className="mb-6">
                    <Image 
                        width={800} 
                        height={400} 
                        src="/blog-image.jpg" 
                        alt="Tailwind CSS Design Systems" 
                        className="w-full h-auto rounded-lg object-cover"
                    />
                    <figcaption className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        Design systems with utility-first CSS.
                    </figcaption>
                </figure>

                <section className="prose prose-lg max-w-none dark:prose-invert prose-gray mb-8">
                    <p className="text-gray-700 dark:text-gray-300">
                        Tailwind CSS gives you low-level utility classes that let you build completely custom designs without leaving your HTML.
                    </p>
                    
                    <h2 className="text-gray-900 dark:text-white">Why utility-first?</h2>
                    
                    <p className="text-gray-700 dark:text-gray-300">
                        Utilities make it easy to compose styles in the markup and reduce the need for bespoke CSS files.
                    </p>
                    
                    <blockquote className="border-l-4 border-blue-500 dark:border-blue-400 pl-4 text-gray-600 dark:text-gray-400 italic">
                        “Ship fast, iterate often.”
                    </blockquote>
                    
                    <pre className="bg-gray-900 dark:bg-gray-800 text-gray-100 dark:text-gray-300 rounded-lg p-4 overflow-x-auto border border-gray-700 dark:border-gray-600">
                        <code>{`<div className="flex items-center gap-4">...</div>`}</code>
                    </pre>
                    
                    <ul className="text-gray-700 dark:text-gray-300">
                        <li>Small, composable classes</li>
                        <li>Easy responsive design</li>
                        <li>Great DX with JIT mode</li>
                    </ul>
                    
                    <p className="text-gray-700 dark:text-gray-300">End of post.</p>
                </section>

                <footer className="border-t border-gray-200 dark:border-gray-700 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center">
                        <Image 
                            width={40} 
                            height={40} 
                            src="/avatar.jpg" 
                            alt="Author" 
                            className="w-10 h-10 rounded-full mr-3" 
                        />
                        <div>
                            <div className="font-semibold text-gray-900 dark:text-white">Jane Doe</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Frontend Engineer • UI/UX enthusiast</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white rounded transition-colors duration-200">
                            Share
                        </button>
                        <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                            Subscribe
                        </button>
                    </div>
                </footer>

                <section className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Comments</h3>
                    <form className="flex flex-col gap-3">
                        <textarea 
                            className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200" 
                            rows={3} 
                            placeholder="Write a thoughtful comment..."
                        ></textarea>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                            <div className="text-sm text-gray-500 dark:text-gray-400">Be kind — be constructive.</div>
                            <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600 text-white rounded transition-colors duration-200">
                                Post comment
                            </button>
                        </div>
                    </form>
                </section>
            </article>
        </div>
    );
};

export default Blogdetailspage;