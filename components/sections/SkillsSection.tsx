"use client";

import {
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaDocker,
} from "react-icons/fa";

import {
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiExpress,
    SiMongodb,
    SiMongoose,
    SiPostman,
    SiAngular,
    SiPython,
    SiFastapi,
    SiPostgresql,
    SiPrisma,
} from "react-icons/si";
import HeadingText from "../common/HeadingText";

const skillCategories = [
    {
        title: "Frontend",
        skills: [
            { name: "React", icon: FaReact },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "Angular", icon: SiAngular },
            { name: "TypeScript", icon: SiTypescript },
            { name: "Tailwindcss", icon: SiTailwindcss },
        ],
    },
    {
        title: "Backend",
        skills: [
            { name: "Node.js", icon: FaNodeJs },
            { name: "Express.js", icon: SiExpress },
            { name: "Python", icon: SiPython },
            { name: "Fastapi", icon: SiFastapi },
            { name: "REST API", icon: SiPostman },
        ],
    },
    {
        title: "Database",
        skills: [
            { name: "MongoDB", icon: SiMongodb },
            { name: "Mongoose", icon: SiMongoose },
            { name: "Postgresql", icon: SiPostgresql },
            { name: "Prisma", icon: SiPrisma },
        ],
    },
    {
        title: "Tools",
        skills: [
            { name: "Git", icon: FaGitAlt },
            { name: "GitHub", icon: FaGithub },
            { name: "Postman", icon: SiPostman },
            { name: "Docker", icon: FaDocker },
        ],
    },
];

export default function SkillsSection() {
    return (
        <section id="skills" className="md:pt-18 pt-12">
            <div className="px-4">

                <HeadingText
                    classNamePolish="text-center"
                    intro=" 03. Skills"
                    mainTitle="Technologies I "
                    highlightTitle="Work With"
                    mainDescription="A collection of technologies and tools I use to build"
                    highlightDescription="modern, scalable, and high-performance web applications."
                />

                <div className="grid md:grid-cols-2 gap-8 md:mt-16 mt-10">
                    {skillCategories.map((category) => (
                        <div
                            key={category.title}
                            className="border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                        >
                            <h3 className="text-2xl font-semibold text-slate-800 mb-6">
                                {category.title}
                            </h3>

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {category.skills.map((skill) => {
                                    const Icon = skill.icon;

                                    return (
                                        <div
                                            key={skill.name}
                                            className="group flex flex-col items-center justify-center p-4 rounded-xl border border-slate-200 hover:border-red-500 hover:-translate-y-1 transition-all duration-300"
                                        >
                                            <Icon className="text-4xl text-slate-700 group-hover:text-red-500 transition-colors duration-300" />

                                            <span className="mt-3 text-sm font-medium text-slate-700 group-hover:text-red-500 transition-colors duration-300">
                                                {skill.name}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}