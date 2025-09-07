import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Award,
  Calendar,
  MapPin,
  GraduationCap,
  BookOpen,
  Trophy,
  Sparkles,
  Zap,
  ArrowRight,
} from "lucide-react";

// Animated Education Card Component
const EducationCard = ({ education, index, isHovered, onHover }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative group cursor-pointer"
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Glow effect */}
      <div
        className={`absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-30 blur transition-all duration-500 ${
          isHovered ? "opacity-40" : ""
        }`}
      />

      <div
        className={`relative bg-gradient-to-b from-gray-800/70 to-gray-900/80 rounded-2xl p-8 border backdrop-blur-xl transition-all duration-500 h-full ${
          isHovered
            ? "border-cyan-500/50 shadow-2xl shadow-cyan-500/20"
            : "border-gray-700/50 group-hover:border-cyan-400/30"
        }`}
      >
        {/* Animated background pattern */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(120,120,120,0.1)_1px,transparent_0)] bg-[length:20px_20px] opacity-50"></div>
        </div>

        {/* macOS-style window controls */}
        <div className="flex gap-2 mb-6">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>

        {/* Header section */}
        <div className="relative z-10">
          {/* Degree title with icon */}
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm">
              <GraduationCap className="w-8 h-8 text-blue-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                {education.degree}
              </h3>
              <div className="flex items-center gap-2 mt-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400">{education.school}</span>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="flex items-center gap-3 mb-6 p-3 rounded-xl bg-gray-800/50 border border-gray-700/30">
            <Calendar className="w-5 h-5 text-purple-400" />
            <span className="text-gray-300">{education.year}</span>
            {education.current && (
              <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/10 border border-green-500/20 ml-auto">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-green-300 text-xs">Ongoing</span>
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-300 mb-6 leading-relaxed border-l-2 border-cyan-500 pl-4">
            {education.description}
          </p>

          {/* Achievements */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Trophy className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium text-gray-400">
                Key Achievements:
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {education.achievements.map((achievement, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-2 p-3 rounded-lg bg-gray-800/50 border border-gray-700/30 group-hover:border-cyan-500/30 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  <Award className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span className="text-sm text-gray-300">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* GPA Highlight */}
          {education.gpa && (
            <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-gray-300 font-medium">Overall GPA</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {education.gpa}
                </span>
              </div>
            </div>
          )}

          {/* View more indicator */}
          <div className="flex items-center gap-2 text-cyan-400 text-sm group-hover:gap-3 transition-all duration-300">
            <span>Academic details</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
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

        {/* Corner accents */}
        <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-0 right-0 w-4 h-[2px] bg-cyan-500" />
          <div className="absolute top-0 right-0 w-[2px] h-4 bg-cyan-500" />
        </div>
        <div className="absolute bottom-0 left-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute bottom-0 left-0 w-4 h-[2px] bg-purple-500" />
          <div className="absolute bottom-0 left-0 w-[2px] h-4 bg-purple-500" />
        </div>
      </div>
    </motion.div>
  );
};

// Main Education Section Component
const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const educationData = [
    {
      degree: "Bachelor of Science in Zoology",
      school: "University of Dhaka (Affiliated)",
      year: "2020 - Present",
      current: true,
      gpa: "3.75",
      description:
        "Pursuing comprehensive studies in biological sciences with focus on animal biology, ecology, and environmental conservation. Developing strong analytical and research skills.",
      achievements: [
        "Dean's List Recognition",
        "Research Project on Wildlife Conservation",
        "Academic Scholarship Recipient",
        "Science Club Active Member",
      ],
      courses: [
        "Animal Physiology",
        "Ecology",
        "Genetics",
        "Evolutionary Biology",
      ],
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      school: "Bera Government College, Pabna",
      year: "2018 - 2020",
      gpa: "4.43/5.00",
      description:
        "Completed advanced studies in Science stream with excellent academic performance. Developed strong foundation in physics, chemistry, and mathematics.",
      achievements: [
        "Science Olympiad Participant",
        "Academic Excellence Award",
        "College Science Fair Winner",
        "Mathematics Competition Finalist",
      ],
      courses: ["Physics", "Chemistry", "Mathematics", "Biology"],
    },
    {
      degree: "Secondary School Certificate (SSC)",
      school: "Galaxy School & College, Pabna",
      year: "2016 - 2017",
      gpa: "4.33/5.00",
      description:
        "Built strong academic foundation with focus on science and mathematics. Demonstrated consistent academic excellence and participation in extracurricular activities.",
      achievements: [
        "Science Project Exhibition Winner",
        "Best Student Award",
        "Mathematics Olympiad Participant",
        "School Debate Team Member",
      ],
      courses: [
        "General Science",
        "Mathematics",
        "English",
        "Bangladesh Studies",
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0B1221] to-[#131C30] text-white relative overflow-hidden py-24">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse-medium"></div>
        <div className="absolute top-2/3 left-1/3 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-fast"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
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
              Academic Journey
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-300 to-blue-400 bg-clip-text text-transparent">
            Education
          </h2>

          <motion.p
            className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Building a strong academic foundation while developing practical
            skills that bridge theoretical knowledge with real-world
            applications.
          </motion.p>
        </motion.div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((education, index) => (
            <EducationCard
              key={index}
              education={education}
              index={index}
              isHovered={hoveredIndex === index}
              onHover={setHoveredIndex}
            />
          ))}
        </div>

        {/* Academic Summary */}
        <motion.div
          className="max-w-4xl mx-auto mt-16 p-8 rounded-2xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 border border-gray-700/30 backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-6">
            <BookOpen className="w-8 h-8 text-cyan-400" />
            <h3 className="text-2xl font-semibold text-white">
              Academic Summary
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
              <div className="text-3xl font-bold text-blue-400">3.75</div>
              <div className="text-gray-400 text-sm">Current GPA</div>
            </div>

            <div className="text-center p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
              <div className="text-3xl font-bold text-purple-400">6+</div>
              <div className="text-gray-400 text-sm">Years of Study</div>
            </div>

            <div className="text-center p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
              <div className="text-3xl font-bold text-cyan-400">15+</div>
              <div className="text-gray-400 text-sm">Courses Completed</div>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-xl bg-gray-800/30 border border-gray-700/20">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-gray-300 font-medium">Current Focus</span>
            </div>
            <p className="text-gray-400 text-sm">
              Integrating scientific knowledge with technological skills to
              create innovative solutions that bridge biology and computer
              science.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
