import HeadingText from "../common/HeadingText";

const processSteps = [
    {
        title: "Discover",
        description:
            "Understanding your goals, requirements, and project vision.",
        icon: (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
            />
        ),
    },
    {
        title: "Develop",
        description:
            "Building a fast, responsive, and scalable solution with modern technologies.",
        icon: (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
            />
        ),
    },
    {
        title: "Launch",
        description:
            "Deploying the project and ensuring everything runs smoothly in production.",
        icon: (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
            />
        ),
    },
];
const ProcessSection = () => {
    return (
        <section className="md:pt-14 pt-10">
            <HeadingText
                intro="05. Process"
                mainTitle="My Development"
                highlightTitle="Process"
                mainDescription="A simple and effective workflow I follow to turn ideas into"
                highlightDescription="successful digital products"
            />
            <div className="grid sm:grid-cols-3 gap-16 sm:gap-8 mt-16 sm:mt-24">
                {processSteps.map((step, index) => (
                    <div key={index} className="text-center group">
                        <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto">
                            <div className="relative z-10 w-full h-full bg-white rounded-full border border-slate-200 shadow-md flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="0.5"
                                    stroke="currentColor"
                                    className="w-1/2 h-1/2 text-slate-800"
                                >
                                    {step.icon}
                                </svg>
                            </div>

                            <div className="absolute inset-0 -translate-x-2 -translate-y-2 bg-blue-500 rounded-full" />
                        </div>

                        <h3 className="mt-6 sm:mt-10 text-xl sm:text-2xl font-semibold text-slate-800 transition-colors duration-300">
                            {index + 1}. {step.title}
                        </h3>

                        <p className="mt-4 leading-relaxed text-slate-600">
                            {step.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProcessSection;