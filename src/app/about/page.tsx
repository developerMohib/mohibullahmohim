import { aboutSkills } from "@/fakedata/aboutskill";
import Image from "next/image";
import React from "react";

const AboutPage = () => (
    <div className="space-y-16 py-8">
        {aboutSkills?.map((category) => (
            <section key={category.category} className="group">
                {/* Category Header */}
                <div className="flex items-center mb-8">
                    <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent flex-1 mr-4" />
                    <h2 className="text-2xl md:text-3xl font-bold capitalize text-white whitespace-nowrap">
                        {category.category}
                    </h2>
                    <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent flex-1 ml-4" />
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 md:gap-8">
                    {category.skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="
                relative group/skill
                flex flex-col items-center text-center
                transition-all duration-500 ease-out
                hover:scale-110 hover:-translate-y-2 capitalize
              "
                        >
                            {/* Background Glow Effect */}
                            <div
                                className="
                  absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 
                  rounded-2xl blur-md opacity-0 group-hover/skill:opacity-100
                  transition-opacity duration-500 ease-out
                  -z-10
                "
                            />

                            {/* Skill Card */}
                            <div
                                className="
                  relative
                  bg-gradient-to-br from-gray-800 to-gray-900 
                  p-4 rounded-2xl shadow-lg border border-gray-700/50
                  hover:shadow-2xl hover:from-gray-700 hover:to-gray-800 
                  hover:border-gray-600/50
                  transition-all duration-300 ease-out
                  w-full max-w-[100px]
                  group-hover/skill:rotate-3
                "
                            >
                                <Image
                                    width={64}
                                    height={64}
                                    src={skill.image}
                                    alt={skill.name}
                                    className="
                    w-12 h-12 object-contain 
                    transition-transform duration-300 ease-out
                    group-hover/skill:scale-110
                    filter group-hover/skill:brightness-110
                  "
                                />

                                {/* Hover Indicator */}
                                <div
                                    className="
                    absolute -bottom-1 left-1/2 transform -translate-x-1/2
                    w-4 h-1 bg-gradient-to-r from-blue-500 to-purple-500 
                    rounded-full opacity-0 group-hover/skill:opacity-100
                    transition-all duration-300 ease-out
                  "
                                />
                            </div>

                            {/* Skill Name */}
                            <p className="
                text-sm font-medium mt-3 capitalize text-gray-200
                transition-all duration-300 ease-out
                group-hover/skill:text-white group-hover/skill:font-semibold
              ">
                                {skill.name}
                            </p>

                            {/* Tooltip on Hover */}
                            <div
                                className="
                  absolute -top-12 left-1/2 transform -translate-x-1/2
                  bg-gray-900 text-white text-xs font-medium px-3 py-2 
                  rounded-lg shadow-xl border border-gray-700
                  opacity-0 group-hover/skill:opacity-100
                  transition-all duration-300 ease-out
                  pointer-events-none
                  whitespace-nowrap
                  z-20
                  after:content-[''] after:absolute after:top-full after:left-1/2
                  after:-translate-x-1/2 after:border-4 after:border-transparent
                  after:border-t-gray-900 capitalize
                "
                            >
                                {skill.name}
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        ))}
    </div>
);

export default AboutPage;