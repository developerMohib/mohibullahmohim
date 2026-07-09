import Link from "next/link";
import HeadingText from "../common/HeadingText";
const stacks = [
  { name: "React" },
  { name: "NextJS" },
  { name: "AngularJS" },
  { name: "Node.js" },
  { name: "ExpressJS" },
  { name: "Python" },
  { name: "Fastapi" },
  { name: "MongoDB" },
  { name: "PostgresQL" },
  { name: "Typescript" },
]
const AboutSeciton = () => {
    return (
        <section id="about" className="md:pt-18 pt-12">
            <HeadingText
            classNamePolish="text-left"
                intro="02. About Me"
                mainTitle="Get To "
                highlightTitle="Know Me"
                mainDescription="Discover my journey, expertise, and commitment to creating"
                highlightDescription="Turning Ideas Into Reality"
            />
            <div className="px-4">
                {/* Quick intro — 1 line only */}
                <p className="text-slate-600 leading-relaxed text-lg">
                  <span className="font-semibold text-slate-800">Mohibullah Mohim</span>,
                    a Full Stack Developer from Bangladesh. I build scalable web applications <br/> love solving complex algorithmic problems <br/> and pursuing a
                    <span className="font-semibold text-slate-800"> B.Sc. (Honours) in Mathematics</span>
                  {" "}  at <span className="font-semibold text-slate-800">National University</span>.
                </p>

                {/* 5-second profile card: 4 key facts in a grid */}
                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="rounded-lg border p-4 text-center group">
                        <h3 className="font-bold text-2xl text-slate-800">Full</h3>
                        <p className="text-slate-500 text-sm">Stack Developer</p>
                        <Link
                            href="https://drive.google.com/file/d/1TWuWnithheEQDPuH776ENaepKiuOW4Kb/view?usp=sharing"
                            target="_blank"
                            className="mt-4 inline-flex items-center gap-1 text-xs text-red-500 hover:text-red-600 font-medium group-hover:gap-2 transition-all"
                        >
                            Programming Hero <span>→</span>
                        </Link>
                    </div>
                    <div className="rounded-lg border p-4 text-center group">
                        <h3 className="font-bold text-2xl text-slate-800">Mathematics</h3>
                        <p className="text-slate-500 text-sm">Hon&apos;s Graduate Student</p>
                        <Link
                            href="http://www.nu.ac.bd/"
                            target="_blank"
                            className="mt-4 inline-flex items-center gap-1 text-xs text-red-500 hover:text-red-600 font-medium group-hover:gap-2 transition-all"
                        >
                            National University <span>→</span>
                        </Link>
                    </div>
                    <div className="rounded-lg border p-4 text-center group">
                        <h3 className="font-bold text-2xl text-slate-800">DSA</h3>
                        <p className="text-slate-500 text-sm">Problem Solver</p>
                        <Link
                            href="https://leetcode.com/mohibullah-mohim"
                            target="_blank"
                            className="mt-4 inline-flex items-center gap-1 text-xs text-red-500 hover:text-red-600 font-medium group-hover:gap-2 transition-all"
                        >
                            View LeetCode <span>→</span>
                        </Link>
                    </div>
                    <div className="rounded-lg border p-4 text-center">
                        <h3 className="font-bold text-2xl text-slate-800">3+</h3>
                        <p className="text-slate-500 text-sm">Years Learning</p>
                        <span className="mt-4 inline-flex items-center gap-1 text-xs text-red-500 hover:text-red-600 font-medium group-hover:gap-2 transition-all"
                        >
                            And Continues
                        </span>
                    </div>
                </div>

                <div className="mt-8 grid gap-5 md:grid-cols-2">
                    {/* Tech Stack */}
                    <div className="rounded-xl border p-5">
                        <h3 className="font-semibold text-slate-900">
                            💻 Tech Stack
                        </h3>
                        <p className="mt-2 text-xs text-slate-600">
                           {stacks.map((item, idx) => (<span key={idx} className="px-1 py-1 mx-1 rounded-md bg-slate-100 text-slate-700 text-xs"> {item.name} </span>))}
                        </p>
                    </div>

                    {/* Focus Areas */}
                    <div className="rounded-xl border p-5">
                        <h3 className="font-semibold text-slate-900">
                            🧠 Focus Areas
                        </h3>
                        <p className="mt-2 text-sm text-slate-600">
                            Data Structures & Algorithms, System Design, Software Architecture,
                            Performance Optimization
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSeciton;