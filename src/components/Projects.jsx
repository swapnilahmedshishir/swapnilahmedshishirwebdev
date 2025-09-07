import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Eye,
  Sparkles,
  Zap,
  Code2,
  Server,
  Database,
  Smartphone,
  Globe,
  Shield,
  Rocket,
  Users,
  BarChart3,
  CreditCard,
  Bell,
  Search,
  Download,
  Filter,
  LayoutDashboard,
  BookOpen,
  MessageSquare,
  Star,
  Award,
  Target,
  ChevronDown,
} from "lucide-react";

import TojoGlobal from "../assets/images/TojoGlobal.png";
import AmazinDataFilterApplication from "../assets/images/AmazinDataFilterApplication.png";
import crowdcubeapplication from "../assets/images/crowdcubeapplication.png";
import NewsHubApplication from "../assets/images/NewsHubApplication.png";
import { Link } from "react-router-dom";

// macOS Buttons Component
const MacOsButtons = () => (
  <div className="flex gap-2 mb-4">
    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors shadow-md" />
  </div>
);

// Technology Pill Component with icons
const TechPill = ({ technology, index }) => {
  const techIcons = {
    React: <Code2 className="w-3 h-3" />,
    "Node.js": <Server className="w-3 h-3" />,
    MySQL: <Database className="w-3 h-3" />,
    MongoDB: <Database className="w-3 h-3" />,
    Express: <Server className="w-3 h-3" />,
    Firebase: <Rocket className="w-3 h-3" />,
    Vercel: <Globe className="w-3 h-3" />,
    Axios: <Code2 className="w-3 h-3" />,
    AOS: <Sparkles className="w-3 h-3" />,
    GSAP: <Sparkles className="w-3 h-3" />,
    Bootstrap: <LayoutDashboard className="w-3 h-3" />,
    Formik: <Code2 className="w-3 h-3" />,
    JWT: <Shield className="w-3 h-3" />,
    "React Query": <Code2 className="w-3 h-3" />,
  };

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="px-3 py-1.5 text-xs font-medium rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-300 border border-blue-500/20 backdrop-blur-sm hover:from-blue-500/20 hover:to-purple-500/20 hover:text-blue-200 hover:border-blue-500/30 transition-all duration-300 cursor-default flex items-center gap-2"
    >
      {techIcons[technology] || <Code2 className="w-3 h-3" />}
      {technology}
    </motion.span>
  );
};

// Feature Icon Component
const FeatureIcon = ({ feature }) => {
  const featureIcons = {
    "Responsive design": <Smartphone className="w-4 h-4" />,
    "Secure admin dashboard": <Shield className="w-4 h-4" />,
    "Real-time data visualization": <BarChart3 className="w-4 h-4" />,
    "SEO-optimized performance": <Target className="w-4 h-4" />,
    "Multi-language support": <Globe className="w-4 h-4" />,
    "Advanced analytics": <BarChart3 className="w-4 h-4" />,
    "Advanced search system": <Search className="w-4 h-4" />,
    "Real-time data validation": <Shield className="w-4 h-4" />,
    "Role-based access control": <Users className="w-4 h-4" />,
    "Data export capabilities": <Download className="w-4 h-4" />,
    "Audit trail functionality": <Filter className="w-4 h-4" />,
    "Bulk operations support": <Database className="w-4 h-4" />,
    "Secure payment processing": <CreditCard className="w-4 h-4" />,
    "Real-time campaign updates": <Bell className="w-4 h-4" />,
    "User authentication system": <Users className="w-4 h-4" />,
    "Campaign analytics dashboard": <LayoutDashboard className="w-4 h-4" />,
    "Social sharing integration": <MessageSquare className="w-4 h-4" />,
    "Email notifications": <Bell className="w-4 h-4" />,
    "Premium content subscription": <Star className="w-4 h-4" />,
    "Real-time article updates": <Bell className="w-4 h-4" />,
    "Personalized recommendations": <Users className="w-4 h-4" />,
    "Admin content management": <LayoutDashboard className="w-4 h-4" />,
    "Search and categorization": <Search className="w-4 h-4" />,
    "Social media integration": <MessageSquare className="w-4 h-4" />,
  };

  return featureIcons[feature] || <Sparkles className="w-4 h-4" />;
};

// Project Card Component
const ProjectCard = ({ project, index, isExpanded, onToggle }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative group"
    >
      {/* Main Card */}
      <div className="relative bg-gradient-to-b from-gray-800/70 to-gray-900/80 rounded-2xl overflow-hidden border border-gray-700/50 backdrop-blur-xl transition-all duration-500 group-hover:border-cyan-400/30 group-hover:shadow-2xl group-hover:shadow-cyan-500/20">
        {/* Project Image with Hover Effect */}
        <div className="relative overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            onLoad={() => setImageLoaded(true)}
            style={{ opacity: imageLoaded ? 1 : 0.3 }}
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

          {/* Action Buttons */}
          <div className="absolute top-4 right-4 flex gap-2">
            <motion.a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800/50 border border-gray-700/30 backdrop-blur-sm hover:bg-cyan-500/20 hover:border-cyan-500/30 transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-4 h-4 text-gray-300 hover:text-white transition-colors" />
            </motion.a>
            <motion.a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800/50 border border-gray-700/30 backdrop-blur-sm hover:bg-cyan-500/20 hover:border-cyan-500/30 transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-4 h-4 text-gray-300 hover:text-white transition-colors" />
            </motion.a>
          </div>

          {/* Featured Badge */}
          <div className="absolute top-4 left-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              <span className="text-cyan-300 text-xs font-medium">
                Featured
              </span>
            </div>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <MacOsButtons />

          {/* Project Title */}
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors line-clamp-2">
            {project.title}
          </h3>

          {/* Project Description */}
          <div className="mb-6">
            <p className="text-gray-300 leading-relaxed text-sm md:text-base line-clamp-3">
              {project.description[0]}
            </p>
          </div>

          {/* Technologies Used */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-gray-400">
                Built With:
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 4).map((tag, tagIndex) => (
                <TechPill key={tagIndex} technology={tag} index={tagIndex} />
              ))}
              {project.tags.length > 4 && (
                <span className="px-3 py-1.5 text-xs text-gray-400">
                  +{project.tags.length - 4} more
                </span>
              )}
            </div>
          </div>

          {/* Expand/Collapse Button */}
          <motion.button
            onClick={onToggle}
            className="w-full flex items-center justify-between gap-2 p-3 rounded-xl bg-gray-800/50 border border-gray-700/30 hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 group/btn"
            whileHover={{ y: -2 }}
          >
            <span className="text-cyan-400 text-sm font-medium">
              {isExpanded ? "Show less" : "View full details"}
            </span>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-4 h-4 text-cyan-400 group-hover/btn:text-cyan-300 transition-colors" />
            </motion.div>
          </motion.button>
        </div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 border-t border-gray-700/50 pt-6">
                {/* Full Description */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-cyan-400" />
                    Project Overview
                  </h4>
                  {project.description.slice(1).map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-gray-300 mb-3 leading-relaxed text-sm md:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Key Features */}
                {project.features && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <Award className="w-5 h-5 text-purple-400" />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {project.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: featureIndex * 0.1,
                          }}
                          className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/50 border border-gray-700/30 hover:border-cyan-500/30 transition-colors"
                        >
                          <div className="p-2 rounded-full bg-cyan-500/10">
                            <FeatureIcon feature={feature} />
                          </div>
                          <span className="text-sm text-gray-300">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Project Links */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700/30 hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Code</span>
                  </motion.a>
                  <motion.a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Glow Effect */}
      <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 -z-10" />
    </motion.div>
  );
};

// Main Project Showcase Component
const ProjectShowcase = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "TOJO Global Agency Website & Admin Dashboard",
      description: [
        "A comprehensive digital marketing platform built with cutting-edge technologies. Developed a scalable solution for agency services including web development, blockchain solutions, and page moderation.",
        "Implemented secure backend systems with Express and MySQL, ensuring efficient data handling and API integrations. Created a fully responsive design optimized for all devices using modern UI libraries.",
      ],
      tags: [
        "React",
        "Node.js",
        "MySQL",
        "Express",
        "Axios",
        "AOS",
        "GSAP",
        "Bootstrap",
      ],
      links: {
        github: "https://github.com/swapnilahmedshishir/cryptotoken",
        demo: "https://www.tojoglobal.com/",
      },
      image: TojoGlobal,
      features: [
        "Responsive design for all devices",
        "Secure admin dashboard with role-based access",
        "Real-time data visualization",
        "SEO-optimized performance",
        "Multi-language support",
        "Advanced analytics integration",
      ],
      categories: ["frontend", "backend", "database", "design"],
    },
    {
      title: "Amazing Data Filter Admin Dashboard",
      description: [
        "A comprehensive data-filtering web application for efficient client data management. Users can add, update, delete, and search client information using various criteria including name, mobile number, and location.",
        "Built with a focus on user experience and data security. Features advanced search capabilities and intuitive data management tools.",
      ],
      tags: ["React", "MySQL", "Node.js", "Formik", "Axios", "Express", "JWT"],
      links: {
        github:
          "https://github.com/swapnilahmedshishir/DataSearchQueryMangementSystem",
        demo: "https://upadmin.masteritsolution.com.bd/",
      },
      image: AmazinDataFilterApplication,
      features: [
        "Advanced search and filtering system",
        "Real-time data validation",
        "Role-based access control",
        "Data export capabilities",
        "Audit trail functionality",
        "Bulk operations support",
      ],
      categories: ["frontend", "backend", "database"],
    },
    {
      title: "Crowdcube Winter Donation Website",
      description: [
        "A modern crowdfunding platform built with React, Node.js, MongoDB, and Firebase. Offers responsive design, dynamic campaign management, secure transactions, and real-time notifications.",
        "Hosted on Firebase and Vercel for optimal reliability and scalability. Features include user authentication, payment processing, and campaign analytics.",
      ],
      tags: [
        "React",
        "MongoDB",
        "Firebase",
        "Node.js",
        "Vercel",
        "Axios",
        "AOS",
        "JWT",
      ],
      links: {
        github:
          "https://github.com/swapnilahmedshishir/CrowdcubeApplicationClient",
        demo: "https://crowdcubeapplication.web.app/",
      },
      image: crowdcubeapplication,
      features: [
        "Secure payment processing",
        "Real-time campaign updates",
        "User authentication system",
        "Campaign analytics dashboard",
        "Social sharing integration",
        "Email notifications",
      ],
      categories: ["frontend", "backend", "database", "design"],
    },
    {
      title: "NewsHub Application",
      description: [
        "A modern news platform offering premium and free content with real-time updates. Features dynamic article management, user subscriptions, and personalized content recommendations.",
        "Built with React, MongoDB, and Firebase for seamless performance. Includes admin dashboard for content management and user analytics.",
      ],
      tags: [
        "React",
        "MongoDB",
        "Node.js",
        "Firebase",
        "Axios",
        "JWT",
        "React Query",
      ],
      links: {
        github: "https://github.com/swapnilahmedshishir/NewsHubWebsiteA12",
        demo: "https://newswebsite-3a348.firebaseapp.com/",
      },
      image: NewsHubApplication,
      features: [
        "Premium content subscription system",
        "Real-time article updates",
        "Personalized user recommendations",
        "Admin content management",
        "Search and categorization",
        "Social media integration",
      ],
      categories: ["frontend", "backend", "database", "design"],
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.categories.includes(filter));

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0B1221] to-[#131C30] text-white relative overflow-hidden py-16 md:py-24">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 md:w-80 md:h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse-medium"></div>
        <div className="absolute top-2/3 left-1/3 w-48 h-48 md:w-64 md:h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse-fast"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-20"
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
              Portfolio Showcase
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-300 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <motion.p
            className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A collection of innovative web applications showcasing modern
            development practices, cutting-edge technologies, and user-centric
            design principles.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              isExpanded={expandedProject === index}
              onToggle={() =>
                setExpandedProject(expandedProject === index ? null : index)
              }
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16 md:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-6 md:mb-8 text-base md:text-lg">
            Interested in seeing more of my work or discussing a potential
            project?
          </p>
          <Link to={"https://github.com/swapnilahmedshishir"} target="_blank">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 md:px-8 py-3 md:py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium text-base md:text-lg relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Full Portfolio
                <Eye className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
