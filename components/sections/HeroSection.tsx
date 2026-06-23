"use client"
import Image from "next/image";
import Link from "next/link";
import { Play, X } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";

export default function HeroSection() {
  const [open, setOpen] = useState(false);
  return (
    <section id="home" className="px-4 pt-12">
      <div className="md:grid grid-cols-2">
        {/* LEFT CONTENT */}
        <div className="grid-cols-1">
          <div className="text-center lg:text-left">

            <h1 className="text-3xl md:text-4xl font-bold leading-tight text-start">
              Hi, I&apos;m Mohibullah Mohim 👋
            </h1>

            <h1 className="mt-4 text-lg text-slate-600 text-start lg:mx-0" >
              A junior {' '}
              <span className="text-red-500 font-bold">
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={['Junior Full Stack Developer', 'MERN Stack developer', 'Backend Developer', 'DSA Problem Solver']}
                  loop={Infinity}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>

            <ul className="mt-4 space-y-2 text-slate-600 text-sm md:text-base text-start ">
              <li>
                • Build full-stack apps with
                <span className="font-medium"> React, Next.js, Node.js, Express, MongoDB</span>
              </li>
              <li>
                • Design clean UIs and
                <span className="font-medium"> secure, scalable APIs</span>
              </li>
              <li>
                • Strong in
                <span className="font-medium"> DSA, system design, and performance optimization</span>
              </li>
            </ul>

            {/* Tech stack as small badges (same style as your About section) */}
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-sm">React</span>
              <span className="px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-sm">Next.js</span>
              <span className="px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-sm">Node.js</span>
              <span className="px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-sm">Express.js</span>
              <span className="px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-sm">MongoDB</span>
              <span className="px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-sm">TypeScript</span>
            </div>
            {/* Small role line */}
            <p className="mt-5 text-sm text-start text-slate-500">
              Mathematics Honours Student • DSA Problem Solver • Open to Opportunities
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="#projects"
                className="px-6 py-3 bg-black text-white rounded-lg hover:opacity-90 transition"
              >
                View Projects
              </Link>

              <Link
                href="#contact"
                className="px-6 py-3 border rounded-lg hover:bg-gray-100 transition"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
        {/* RIGHT CONTENT (PROFILE BOX) */}
        <div className="grid-cols-1">
          <div className="hidden md:flex justify-center">
            <div className="relative overflow-hidden rounded-2xl border shadow-sm">
              <Image
                src="https://designshack.net/wp-content/uploads/stylish-premiere-pro-intro-template.jpg"
                alt="Video Thumbnail"
                width={800}
                height={450}
                className="w-full aspect-video object-cover"
              />

              <button
                onClick={() => setOpen(true)}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-500 shadow-lg">
                  <Play className="h-7 w-7 fill-current ml-1 text-white" />
                </div>
              </button>
            </div>

            {/* Modal */}
            {open && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
                <div className="relative w-full max-w-4xl">
                  <button
                    onClick={() => setOpen(false)}
                    className="absolute -top-12 right-0 text-white"
                  >
                    <X size={32} />
                  </button>

                  <div className="aspect-video overflow-hidden rounded-xl">
                    <iframe
                      src="https://www.youtube.com/embed/rtMHs3l9Te8?autoplay=1"
                      title="Intro Video"
                      className="w-full h-full"
                      allow="autoplay; encrypted-media; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}