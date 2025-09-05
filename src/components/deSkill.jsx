import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Paintbrush,
  Database,
  Layout,
  Cpu,
  Cloud,
  Sparkles,
  Zap,
  Target,
  Brain,
  Palette,
  Server,
} from "lucide-react";

// Enhanced IconCloud Component with animations
const IconCloud = ({ iconSlugs, onIconHover }) => {
  const [rotation, setRotation] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollY = window.scrollY;
        const rotationValue = scrollY * 0.1;
        setRotation(rotationValue);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-96 flex items-center justify-center"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="relative w-80 h-80 rounded-full border-2 border-teal-500/20"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {iconSlugs.map((slug, index) => {
            const angle = index * (360 / iconSlugs.length) * (Math.PI / 180);
            const radius = 140;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            return (
              <motion.div
                key={slug}
                className="absolute w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-teal-500/30 shadow-lg cursor-pointer"
                style={{
                  left: `calc(50% + ${x}px - 24px)`,
                  top: `calc(50% + ${y}px - 24px)`,
                }}
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.9 }}
                onHoverStart={() => onIconHover(slug)}
                onHoverEnd={() => onIconHover(null)}
              >
                <img
                  src={`https://cdn.simpleicons.org/${slug}/teal/white`}
                  alt={slug}
                  className="w-6 h-6"
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Center glowing element */}
      <motion.div
        className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center shadow-2xl shadow-teal-500/30"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Zap className="w-8 h-8 text-white" />
      </motion.div>
    </div>
  );
};

// Skill Category Card Component
const SkillCard = ({
  icon: Icon,
  title,
  skills,
  color,
  isHighlighted,
  index,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
  >
    <div
      className={`relative p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border-2 backdrop-blur-sm transition-all duration-300 group hover:scale-105 ${
        isHighlighted
          ? "border-teal-500 shadow-2xl shadow-teal-500/20"
          : "border-gray-700 hover:border-teal-400"
      }`}
    >
      {/* Animated background effect */}
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
      ></div>

      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <div
            className={`p-3 rounded-xl bg-gradient-to-br ${color} bg-opacity-10 border ${color.replace(
              "text",
              "border"
            )} border-opacity-30`}
          >
            <Icon className={`w-6 h-6 ${color}`} />
          </div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill, skillIndex) => (
            <motion.span
              key={skillIndex}
              className="px-3 py-1.5 rounded-full bg-gray-700/50 text-gray-200 text-sm border border-gray-600 hover:bg-teal-500/20 hover:border-teal-400 hover:text-teal-300 transition-all duration-300 cursor-default"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

// Main Skills Section Component
const SkillsSection = () => {
  const [activeSkill, setActiveSkill] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const iconSlugs = [
    "typescript",
    "javascript",
    "react",
    "nextdotjs",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "mongodb",
    "mysql",
    "amazonaws",
    "firebase",
    "vercel",
    "docker",
    "git",
    "github",
    "gitlab",
    "visualstudiocode",
    "jest",
    "testinglibrary",
    "figma",
    "tailwindcss",
    "redux",
  ];

  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      color: "text-blue-400",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Redux",
      ],
      relatedIcons: [
        "react",
        "nextdotjs",
        "typescript",
        "javascript",
        "html5",
        "css3",
        "tailwindcss",
        "redux",
      ],
    },
    {
      icon: Database,
      title: "Backend Development",
      color: "text-green-400",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "MySQL",
        "MongoDB",
        "PostgreSQL",
      ],
      relatedIcons: ["nodedotjs", "express", "mysql", "mongodb"],
    },
    {
      icon: Layout,
      title: "UI/UX Design",
      color: "text-purple-400",
      skills: [
        "Figma",
        "Responsive Design",
        "Prototyping",
        "User Research",
        "Wireframing",
      ],
      relatedIcons: ["figma"],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "text-orange-400",
      skills: ["AWS", "Vercel", "Netlify", "Firebase", "Docker", "CI/CD"],
      relatedIcons: ["amazonaws", "vercel", "firebase", "docker"],
    },
    {
      icon: Cpu,
      title: "Tools & Technologies",
      color: "text-pink-400",
      skills: [
        "VS Code",
        "Git",
        "GitHub",
        "Jest",
        "Testing Library",
        "Webpack",
      ],
      relatedIcons: [
        "visualstudiocode",
        "git",
        "github",
        "jest",
        "testinglibrary",
      ],
    },
    {
      icon: Paintbrush,
      title: "Creative Skills",
      color: "text-yellow-400",
      skills: [
        "UI Animation",
        "GSAP",
        "SVG Animation",
        "3D Modeling",
        "Motion Graphics",
      ],
      relatedIcons: [],
    },
  ];

  const handleIconHover = (slug) => {
    setActiveSkill(slug);
  };

  return (
    <main className="pt-20 lg:pt-0 bg-gradient-to-br from-[#0B1221] to-[#131C30] text-white min-h-screen overflow-hidden">
      <section className="container mx-auto px-4 py-16 relative">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 mb-4">
            <Sparkles className="w-4 h-4 text-teal-400" />
            <span className="text-teal-300 text-sm font-medium">
              Skills & Technologies
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-teal-300 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my diverse skill set across frontend, backend, and design
            technologies that I use to create exceptional digital experiences.
          </p>
        </motion.div>

        {/* Interactive Icon Cloud */}
        <div className="flex justify-center items-center mb-16 relative">
          <IconCloud iconSlugs={iconSlugs} onIconHover={handleIconHover} />

          {/* Skill name display on hover */}
          <AnimatePresence>
            {activeSkill && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute -bottom-8 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 backdrop-blur-sm"
              >
                <span className="text-teal-300 text-sm font-medium capitalize">
                  {activeSkill.replace("dotjs", ".js").replace("dot", ".")}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const isHighlighted =
              activeSkill && category.relatedIcons.includes(activeSkill);
            return (
              <SkillCard
                key={index}
                icon={category.icon}
                title={category.title}
                skills={category.skills}
                color={category.color}
                isHighlighted={isHighlighted}
                index={index}
              />
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-6">
            Interested in working together? Let's discuss how my skills can
            benefit your project.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-medium hover:shadow-2xl hover:shadow-teal-500/30 transition-all duration-300"
          >
            Start a Project
          </motion.button>
        </motion.div>
      </section>
    </main>
  );
};

export default SkillsSection;
