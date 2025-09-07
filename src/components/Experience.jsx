import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Layers,
  Network,
  Rocket,
  Sparkles,
  Zap,
  Calendar,
  MapPin,
  ArrowRight,
  Crown,
  TrendingUp,
} from "lucide-react";

// Technology Badge Component
const TechBadge = ({ technology }) => (
  <motion.span
    className="px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-300 text-xs border border-blue-500/20 backdrop-blur-sm"
    whileHover={{ scale: 1.05, y: -2 }}
    transition={{ duration: 0.2 }}
  >
    {technology}
  </motion.span>
);

// Experience Card Component
const ExperienceCard = ({ experience, index, isActive, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative group cursor-pointer"
      onClick={onClick}
    >
      {/* Glow effect */}
      <div
        className={`absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-30 blur transition-all duration-500 ${
          isActive ? "opacity-40" : ""
        }`}
      />

      <div
        className={`relative bg-gradient-to-b from-gray-800/70 to-gray-900/80 rounded-2xl p-6 border backdrop-blur-xl transition-all duration-500 h-full ${
          isActive
            ? "border-cyan-500/50 shadow-2xl shadow-cyan-500/20"
            : "border-gray-700/50 group-hover:border-cyan-400/30"
        }`}
      >
        {/* Animated background pattern */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(120,120,120,0.1)_1px,transparent_0)] bg-[length:20px_20px] opacity-50"></div>
        </div>

        {/* Header with icon and title */}
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div
                className={`p-3 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 backdrop-blur-sm`}
              >
                <experience.icon className={`w-6 h-6 text-cyan-400`} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {experience.title}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <MapPin className="w-3 h-3 text-blue-400" />
                  <span className="text-blue-400 text-sm">
                    {experience.company}
                  </span>
                </div>
              </div>
            </div>

            {/* Current role badge */}
            {experience.current && (
              <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-green-300 text-xs">Current</span>
              </div>
            )}
          </div>

          {/* Period */}
          <div className="flex items-center gap-2 text-gray-400 mb-4">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{experience.period}</span>
          </div>

          {/* Description */}
          <p className="text-gray-300 mb-4 leading-relaxed">
            {experience.description}
          </p>

          {/* Technologies */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-gray-400 font-medium">
                Technologies:
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, techIndex) => (
                <TechBadge key={techIndex} technology={tech} />
              ))}
            </div>
          </div>

          {/* Achievements */}
          {experience.achievements && (
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-sm text-gray-400 font-medium">
                  Key Achievements:
                </span>
              </div>
              <ul className="space-y-1">
                {experience.achievements.map(
                  (achievement, achievementIndex) => (
                    <li
                      key={achievementIndex}
                      className="text-gray-300 text-sm flex items-start gap-2"
                    >
                      <span className="text-cyan-400 mt-1">•</span>
                      {achievement}
                    </li>
                  )
                )}
              </ul>
            </div>
          )}

          {/* View more indicator */}
          <div className="flex items-center gap-2 text-cyan-400 text-sm group-hover:gap-3 transition-all duration-300">
            <span>View details</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Shine effect on hover */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent"
            initial={{ x: "-100%" }}
            animate={isActive ? { x: "100%" } : { x: "-100%" }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

// Detailed Experience Modal
const ExperienceModal = ({ experience, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 max-w-2xl w-full border border-cyan-500/30 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-700/50 hover:bg-gray-700 transition-colors"
            >
              <span className="text-white">×</span>
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
                <experience.icon className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  {experience.title}
                </h2>
                <p className="text-blue-400">{experience.company}</p>
                <p className="text-gray-400 text-sm">{experience.period}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Role Overview
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {experience.description}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-300 text-sm border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {experience.achievements && (
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Key Achievements
                  </h3>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, index) => (
                      <li
                        key={index}
                        className="text-gray-300 flex items-start gap-2"
                      >
                        <span className="text-cyan-400 mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {experience.projects && (
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Notable Projects
                  </h3>
                  <ul className="space-y-2">
                    {experience.projects.map((project, index) => (
                      <li
                        key={index}
                        className="text-gray-300 flex items-start gap-2"
                      >
                        <span className="text-green-400 mt-1">•</span>
                        {project}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Main Experience Section Component
const ExperienceSection = () => {
  const [activeExperience, setActiveExperience] = useState(null);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const experiences = [
    {
      icon: Code2,
      title: "Full Stack Web Developer",
      company: "TOJO Global, Dhaka",
      period: "2024 - Present",
      current: true,
      description:
        "Leading the development of innovative web solutions with modern technologies. Specializing in creating seamless user experiences and robust backend systems for diverse client projects.",
      technologies: [
        "JavaScript",
        "React",
        "Next.js",
        "Node.js",
        "Express",
        "MongoDB",
        "MySQL",
        "WordPress",
      ],
      achievements: [
        "Developed 15+ high-performance websites with custom features",
        "Reduced page load time by 40% through optimization techniques",
        "Implemented CI/CD pipelines improving deployment efficiency",
        "Mentored 2 junior developers in modern web technologies",
      ],
      projects: [
        "TOJO Global Agency Platform with admin dashboard",
        "E-commerce system with payment integration",
        "Real-time news platform with premium content",
      ],
    },
    {
      icon: Layers,
      title: "Software Development Lead",
      company: "ISBAH IT, Dhaka",
      period: "2023 - 2024",
      description:
        "Led cross-functional teams in delivering customized software solutions. Managed project lifecycle from conception to deployment while ensuring client satisfaction and technical excellence.",
      technologies: [
        "JavaScript",
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "MySQL",
        "PHP",
        "WordPress",
      ],
      achievements: [
        "Led 8+ successful software development projects",
        "Improved client satisfaction by 35% through better communication",
        "Developed reusable component library saving 20+ development hours",
        "Integrated third-party APIs enhancing platform capabilities",
      ],
      projects: [
        "Client management system with analytics dashboard",
        "Custom CRM solution for local businesses",
        "Inventory management system with real-time tracking",
      ],
    },
    {
      icon: Network,
      title: "WordPress Developer",
      company: "Freelance",
      period: "2021 - 2023",
      description:
        "Created customized WordPress solutions for international clients. Specialized in theme development, plugin customization, and performance optimization for various business needs.",
      technologies: [
        "WordPress",
        "PHP",
        "JavaScript",
        "CSS3",
        "HTML5",
        "MySQL",
        "WooCommerce",
      ],
      achievements: [
        "Delivered 25+ WordPress websites for global clients",
        "Achieved 95% client satisfaction rate across projects",
        "Optimized websites resulting in 50% faster load times",
        "Developed custom plugins solving specific client needs",
      ],
      projects: [
        "Multilingual e-commerce stores with WooCommerce",
        "Custom theme development for various industries",
        "Membership sites with premium content access",
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0B1221] to-[#131C30] text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse-medium"></div>
        <div className="absolute top-2/3 left-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse-fast"></div>
      </div>

      <div className="container mx-auto px-4 py-24 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 text-sm font-medium">
              Professional Journey
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-300 to-blue-400 bg-clip-text text-transparent">
            Work Experience
          </h2>

          <motion.p
            className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            From freelance beginnings to leading development teams, each role
            has shaped my expertise in creating exceptional digital experiences.
          </motion.p>
        </motion.div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              index={index}
              isActive={activeExperience === index}
              onClick={() => {
                setActiveExperience(index);
                setSelectedExperience(experience);
              }}
            />
          ))}
        </div>

        {/* Career Progress Indicator */}
        <motion.div
          className="max-w-4xl mx-auto mt-16 p-6 rounded-2xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 border border-gray-700/30 backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-4">
            <Rocket className="w-6 h-6 text-cyan-400" />
            <h3 className="text-xl font-semibold text-white">
              Career Progression
            </h3>
          </div>
          <div className="relative">
            <div className="absolute left-4 top-1/2 h-0.5 w-[calc(100%-2rem)] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 transform -translate-y-1/2"></div>
            <div className="relative flex justify-between">
              {experiences.map(
                (exp, index) => (
                  console.log(exp.current),
                  (
                    <div key={index} className="relative">
                      <div
                        className={`w-8 h-8 rounded-full border-4 flex items-center justify-center ${
                          exp.current
                            ? "border-cyan-500 bg-cyan-500/20"
                            : "border-blue-500 bg-blue-500/20"
                        }`}
                      >
                        {exp.current && (
                          <Crown className="w-3 h-3 text-cyan-300" />
                        )}
                      </div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-xs text-gray-400 whitespace-nowrap">
                        {exp.period.split(" - ")[0]}
                      </div>
                    </div>
                  )
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Experience Modal */}
      <ExperienceModal
        experience={selectedExperience}
        isOpen={!!selectedExperience}
        onClose={() => setSelectedExperience(null)}
      />
    </section>
  );
};

export default ExperienceSection;
