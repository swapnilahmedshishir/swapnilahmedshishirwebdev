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
  ArrowRight,
  Star,
  Target,
} from "lucide-react";

// Enhanced IconCloud Component with 3D effect
const IconCloud = ({ iconSlugs, onIconHover }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const rotateX = ((e.clientY - centerY) / centerY) * 10;
        const rotateY = ((e.clientX - centerX) / centerX) * -10;

        setRotation({ x: rotateX, y: rotateY });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-96 flex items-center justify-center perspective-1000"
    >
      <motion.div
        className="relative w-80 h-80 rounded-full"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: "preserve-3d",
        }}
        transition={{ type: "spring", damping: 15, stiffness: 100 }}
      >
        {/* Outer ring */}
        {iconSlugs.slice(0, 12).map((slug, index) => {
          const angle = index * (360 / 12) * (Math.PI / 180);
          const radius = 210;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <motion.div
              key={`outer-${slug}`}
              className="absolute w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-teal-500/30 shadow-xl cursor-pointer backdrop-blur-sm"
              style={{
                left: `calc(50% + ${x}px - 28px)`,
                top: `calc(50% + ${y}px - 28px)`,
                zIndex: 2,
                transform: "translateZ(40px)",
              }}
              whileHover={{
                scale: 1.3,
                rotate: 360,
                z: 60,
                transition: { duration: 0.4 },
              }}
              onHoverStart={() => onIconHover(slug)}
              onHoverEnd={() => onIconHover(null)}
            >
              <img
                src={`https://cdn.simpleicons.org/${slug}/teal/white`}
                alt={slug}
                className="w-7 h-7"
              />
            </motion.div>
          );
        })}

        {/* Middle ring */}
        {iconSlugs.slice(12, 20).map((slug, index) => {
          const angle = index * (360 / 8) * (Math.PI / 180);
          const radius = 140;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <motion.div
              key={`middle-${slug}`}
              className="absolute w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-blue-500/30 shadow-lg cursor-pointer backdrop-blur-sm"
              style={{
                left: `calc(50% + ${x}px - 24px)`,
                top: `calc(50% + ${y}px - 24px)`,
                zIndex: 3,
                transform: "translateZ(20px)",
              }}
              whileHover={{
                scale: 1.2,
                rotate: -360,
                z: 40,
                transition: { duration: 0.3 },
              }}
              onHoverStart={() => onIconHover(slug)}
              onHoverEnd={() => onIconHover(null)}
            >
              <img
                src={`https://cdn.simpleicons.org/${slug}/blue/white`}
                alt={slug}
                className="w-5 h-5"
              />
            </motion.div>
          );
        })}

        {/* Inner ring */}
        {iconSlugs.slice(20).map((slug, index) => {
          const angle = index * (360 / 4) * (Math.PI / 180);
          const radius = 80;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <motion.div
              key={`inner-${slug}`}
              className="absolute w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-purple-500/30 shadow-md cursor-pointer backdrop-blur-sm"
              style={{
                left: `calc(50% + ${x}px - 20px)`,
                top: `calc(50% + ${y}px - 20px)`,
                zIndex: 4,
                transform: "translateZ(10px)",
              }}
              whileHover={{
                scale: 1.1,
                z: 20,
                transition: { duration: 0.2 },
              }}
              onHoverStart={() => onIconHover(slug)}
              onHoverEnd={() => onIconHover(null)}
            >
              <img
                src={`https://cdn.simpleicons.org/${slug}/purple/white`}
                alt={slug}
                className="w-4 h-4"
              />
            </motion.div>
          );
        })}
      </motion.div>

      {/* Center glowing element */}
      <motion.div
        className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-teal-500 via-blue-500 to-purple-500 flex items-center justify-center shadow-2xl shadow-teal-500/40"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ transform: "translateZ(0px)" }}
      >
        <div className="w-16 h-16 rounded-full bg-gray-900/80 flex items-center justify-center backdrop-blur-sm">
          <Zap className="w-8 h-8 text-white" />
        </div>
      </motion.div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-teal-400/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

// Premium Skill Card Component
const SkillCard = ({
  icon: Icon,
  title,
  skills,
  color,
  isHighlighted,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Glow effect */}
      <div
        className={`absolute -inset-0.5 bg-gradient-to-br ${color.replace(
          "text",
          "from"
        )} to-transparent rounded-2xl opacity-0 group-hover:opacity-30 blur transition duration-300 ${
          isHighlighted ? "opacity-40" : ""
        }`}
      ></div>

      <div
        className={`relative p-6 rounded-2xl bg-gradient-to-b from-gray-800/70 to-gray-900/80 border backdrop-blur-xl transition-all duration-500 ${
          isHighlighted
            ? "border-teal-500/50 shadow-2xl shadow-teal-500/20"
            : "border-gray-700/50 group-hover:border-teal-400/30"
        }`}
      >
        {/* Animated background pattern */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(120,120,120,0.1)_1px,transparent_0)] bg-[length:20px_20px] opacity-50"></div>
        </div>

        {/* Icon with glow */}
        <motion.div
          className={`relative z-10 flex items-center gap-4 mb-4 p-3 rounded-xl bg-gradient-to-br ${color} bg-opacity-5 border ${color.replace(
            "text",
            "border"
          )} border-opacity-20 backdrop-blur-sm`}
          animate={isHovered ? { x: 5 } : { x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className={`p-2 rounded-lg ${color} bg-opacity-10`}>
            <Icon className={`w-6 h-6 ${color}`} />
          </div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <motion.div
            animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowRight className="w-4 h-4 text-teal-400" />
          </motion.div>
        </motion.div>

        {/* Skills badges */}
        <div className="relative z-10 flex flex-wrap gap-2">
          {skills.map((skill, skillIndex) => (
            <motion.span
              key={skillIndex}
              className="px-3 py-1.5 rounded-full bg-gray-700/40 text-gray-200 text-sm border border-gray-600/50 backdrop-blur-sm hover:bg-teal-500/20 hover:border-teal-400/50 hover:text-teal-300 transition-all duration-300 cursor-default"
              whileHover={{ scale: 1.05, y: -2 }}
              // transition={{ duration: 0.2 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
              viewport={{ once: true }}
            >
              {skill}
            </motion.span>
          ))}
        </div>

        {/* Shine effect on hover */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent"
            initial={{ x: "-100%" }}
            animate={isHovered ? { x: "100%" } : { x: "-100%" }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

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
    "python",
    "react",
    "nextdotjs",
    "html5",
    "css",
    "nodedotjs",
    "express",
    "mongodb",
    "mysql",
    "npm",
    "firebase",
    "vercel",
    "docker",
    "git",
    "github",
    "gitlab",
    "vite",
    "sublimetext",
    "jest",
    "testinglibrary",
    "figma",
    "tailwindcss",
    "redux",
    "n8n",
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
    <main className="pt-20 lg:pt-0 bg-gradient-to-br from-[#0B1221] to-[#131C30] text-white min-h-screen overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse-medium"></div>
        <div className="absolute top-2/3 left-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse-fast"></div>
      </div>

      <section className="container mx-auto px-4 py-16 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 mb-6 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Sparkles className="w-4 h-4 text-teal-400" />
            <span className="text-teal-300 text-sm font-medium">
              Technical Mastery
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-teal-300 to-blue-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>

          <motion.p
            className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A comprehensive showcase of my technical arsenal, from frontend
            magic to backend power and creative design.
          </motion.p>
        </motion.div>

        <div className="relative mb-40">
          {/* Interactive Icon Cloud */}
          <div className="flex justify-center items-center h-full">
            <IconCloud iconSlugs={iconSlugs} onIconHover={handleIconHover} />

            {/* Skill name display on hover */}
            <AnimatePresence>
              {activeSkill && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.9 }}
                  className="absolute -bottom-12 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 backdrop-blur-sm flex items-center gap-2"
                >
                  <Star className="w-3 h-3 text-teal-400 fill-current" />
                  <span className="text-teal-300 text-sm font-medium capitalize">
                    {activeSkill.replace("dotjs", ".js").replace("dot", ".")}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-8 text-lg">
            Ready to bring your vision to life with cutting-edge technology?
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-teal-500 to-blue-500 text-white font-medium text-lg relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start a Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>
      </section>
    </main>
  );
};

export default SkillsSection;
