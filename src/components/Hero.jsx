import { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "../assets/css/tomorrow.css";
import Meteors from "./ui/meteors";
import SparklesText from "./ui/sparkles-text";
import { FlipWords } from "./ui/flip-words";
import SocailMediaPart from "./SocailMediaPart";
import { Link } from "react-router-dom";

// AnimatedGrid Component
const AnimatedGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="relative w-full h-full">
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
          <div className="absolute inset-0 grid grid-cols-[repeat(40,1fr)] opacity-20">
            {[...Array(40)].map((_, i) => (
              <div
                key={`v-${i}`}
                className="relative h-full w-full border-r border-blue-500/10"
                style={{
                  animation: `gridPulse ${
                    2 + Math.random() * 2
                  }s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
          <div className="absolute inset-0 grid grid-rows-[repeat(40,1fr)] opacity-20">
            {[...Array(40)].map((_, i) => (
              <div
                key={`h-${i}`}
                className="relative w-full h-full border-b border-blue-500/10"
                style={{
                  animation: `gridPulse ${
                    2 + Math.random() * 2
                  }s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Floating Elements Component
const FloatingElements = () => {
  return (
    <>
      <div className="absolute top-1/4 left-1/4 animate-float-slow opacity-70">
        <div className="text-4xl text-blue-400/30">⚛️</div>
      </div>
      <div className="absolute top-1/3 right-1/4 animate-float opacity-70">
        <div className="text-4xl text-teal-400/30">🚀</div>
      </div>
      <div className="absolute bottom-1/4 left-1/3 animate-float-medium opacity-70">
        <div className="text-4xl text-purple-400/30">💻</div>
      </div>
      <div className="absolute top-2/3 right-1/3 animate-float-slower opacity-70">
        <div className="text-4xl text-amber-400/30">✨</div>
      </div>
    </>
  );
};

export default function Hero() {
  const words = [
    "Front End Developer",
    "Full-Stack Developer",
    "JavaScript Developer",
    "Next.js Specialist",
  ];

  const [code] = useState(`
const developer = {
  name: 'Swapnil Ahmmed Shishir',
  title: 'Front End Developer | Full-Stack Developer',
  skills: [
    'React', 'NextJS', 'TypeScript', 'Node.js', 
    'Express', 'MySQL', 'MongoDB', 'Git',
  ],
  experience: '3+ years',
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  hireable: function() {
    return this.hardWorker && this.problemSolver;
  }
};
  `);

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  const downloadFile = () => {
    const link = document.createElement("a");
    link.href = "/cv/MERNStackwebDeveloper_SwapnilAhmmedShishir_resume.pdf";
    link.download = "MERNStackwebDeveloper_SwapnilAhmmedShishir_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const dockItems = [
    {
      title: "LinkedIn",
      icon: <span className="text-blue-400 text-xl">💼</span>,
      href: "https://www.linkedin.com/in/swapnilahmedshishir/",
    },
    {
      title: "GitHub",
      icon: <span className="text-gray-100 text-xl">🐙</span>,
      href: "https://github.com/swapnilahmedshishir",
    },
    {
      title: "Twitter",
      icon: <span className="text-blue-300 text-xl">🐦</span>,
      href: "https://twitter.com/shishir_swapnil",
    },
    {
      title: "Email",
      icon: <span className="text-red-400 text-xl">✉️</span>,
      href: "mailto:swapnilahmedshishir2018@gmail.com",
    },
  ];

  return (
    <>
      <main className="pt-20 lg:pt-[0rem] bg-gradient-to-br from-[#0B1221] to-[#131C30] text-white min-h-screen relative overflow-hidden">
        <section className="hero min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8">
          {/* Background Elements */}
          <AnimatedGrid />
          <FloatingElements />

          {/* Meteors Effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Meteors number={10} />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B1221]/70 to-[#0B1221]"></div>

          {/* Main content container */}
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 py-12 lg:py-0">
            {/* Left column - Text content */}
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0 relative">
              {/* Decorative blurs */}
              <div className="absolute -top-20 -left-20 w-48 h-48 lg:w-64 lg:h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute top-40 -right-20 w-48 h-48 lg:w-64 lg:h-64 bg-teal-500/10 rounded-full blur-3xl"></div>

              {/* Welcome badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-8">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                <span className="text-gray-300 text-sm font-medium">
                  Welcome to my portfolio
                </span>
              </div>

              {/* Name section */}
              <div className="relative mb-8">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                  {/* <span className="text-white">Hello, I'm</span> */}
                  <SparklesText text="Hello, It's Me" />
                  <span className="block mt-2">
                    <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                      Swapnil Ahmmed
                    </span>
                  </span>
                </h1>
                <div
                  className="absolute -z-10 top-1/2 -translate-y-1/2 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full animate-pulse opacity-70"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(78,204,163,0.3) 0%, transparent 70%)",
                  }}
                ></div>
              </div>

              {/* Role badge */}
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 mb-8 backdrop-blur-sm">
                <span className="text-blue-400 text-lg animate-pulse">✨</span>

                <span>
                  <FlipWords
                    className={"text-xl text-blue-400 font-medium"}
                    words={words}
                  />
                </span>
              </div>

              {/* Description */}
              <div className="relative mb-12 sm:mb-12 max-w-xl">
                <p className="text-base sm:text-xl text-gray-300/90 leading-relaxed">
                  JavaScript lover 🚀 | Engineering the Future of Web Technology
                  💻✨
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                {/* View Projects Button */}
                <Link
                  to={"/projects"}
                  className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-teal-400 p-0.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]"
                >
                  <span className="flex w-full px-8 py-4 rounded-[11px] bg-gray-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-teal-400">
                    <span className="relative flex items-center justify-center gap-2 text-white font-medium">
                      <span>View Projects</span>
                      <span className="transform transition-all duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </span>
                </Link>

                {/* Contact Button */}
                <button
                  onClick={downloadFile}
                  className="group relative inline-flex items-center justify-center gap-3 p-0.5 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#4ECCA3]"
                >
                  <span className="flex w-full px-8 py-4 rounded-[11px] bg-gray-900 border border-gray-700/50 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-700">
                    <span className="relative flex items-center justify-center gap-2 text-gray-300 font-medium group-hover:text-white">
                      <span>Download CV</span>
                      <span className="transform transition-all duration-300 group-hover:rotate-12">
                        📄
                      </span>
                    </span>
                  </span>
                </button>
              </div>

              {/* Floating badges */}
              <div className="hidden lg:block absolute left-[13.5rem] top-[2.3rem] animate-float-slow">
                <div className="px-4 py-2 rounded-lg bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 text-purple-400">
                  <i className="fas fa-wand-magic-sparkles"></i>
                  &nbsp;Development Magic
                </div>
              </div>
              <div className="hidden lg:block absolute right-10 top-20 animate-float">
                <div className="px-4 py-2 rounded-lg bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 text-blue-400">
                  <i className="fas fa-code"></i>&nbsp;&nbsp;Clean Code
                </div>
              </div>
              <div className="hidden lg:block absolute top-[17rem] left-[70%] transform -translate-x-1/2 animate-float">
                <div className="px-4 py-2 rounded-lg bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 text-amber-400">
                  <i className="fas fa-lightbulb"></i>&nbsp;&nbsp;Innovation
                </div>
              </div>

              {/* Social Dock */}
              <SocailMediaPart />
            </div>

            {/* Right column - Code window */}
            <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="code-window bg-[#091121] relative rounded-2xl border border-gray-700/50 overflow-hidden">
                  <div className="window-header flex items-center px-4 py-3 bg-gray-900/50 border-b border-gray-700/30">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="ml-3 text-sm text-gray-400 flex items-center gap-2">
                      <span className="text-blue-400">💻</span>
                      profile.js
                    </span>
                  </div>
                  <div className="p-4">
                    <pre className="language-javascript">
                      <code className="language-javascript">{code}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
