import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaGithub } from "react-icons/fa";
import TojoGlobal from "../assets/images/TojoGlobal.png";
import AmazinDataFilterApplication from "../assets/images/AmazinDataFilterApplication.png";
import crowdcubeapplication from "../assets/images/crowdcubeapplication.png";
import NewsHubApplication from "../assets/images/NewsHubApplication.png";

const MacOsButtons = () => (
  <div className="flex gap-2 mb-4">
    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors shadow-md" />
  </div>
);

const ProjectShowcase = () => {
  const projects = [
    {
      title: "TOJO Global agency website & Admin Dashboard",
      description: [
        "Gained hands-on experience in building a scalable digital marketing platform using cuttingedge technologies like React, Node.js, Express, and MySQL",
        "Backend Development and API Integration. designed and implemented secure and efficient backend systems with Express, MySQL data handling.",
        "Developed a fully responsive website optimized for mobile, tablet, and desktop using CSS ,Bootstrap, and modern UI libraries.",
      ],
      tags: [
        "Web Development",
        "React",
        "MySQL",
        "Node.js",
        "Axios",
        "AOS",
        "GSAP",
      ],
      links: {
        github: "https://github.com/swapnilahmedshishir/cryptotoken",
        demo: "https://www.tojoglobal.com/",
      },
      image: TojoGlobal,
      featured: true,
    },
    {
      title: "Amazing data filter Admin Dashboard",
      description: [
        "This is a comprehensive data-filtering web application that allows users to add, update, delete, and search various types of client data efficiently. Users can easily locate client information using criteria such as name, mobile number, or location. The system is designed to be effective and user-friendly, simplifying client data management tasks",
        "Backend Development and API Integration. designed and implemented secure and efficient backend systems with Express, MySQL data handling.",
      ],
      tags: ["Web Development", "React", "MySQL", "Node.js", "Formik", "Axios"],
      links: {
        github:
          "https://github.com/swapnilahmedshishir/DataSearchQueryMangementSystem",
        demo: "https://upadmin.masteritsolution.com.bd/",
      },
      image: AmazinDataFilterApplication,
      featured: true,
    },
    {
      title: "Crowdcube Winter donation website",
      description: [
        "Crowdcube is a modern crowdfunding platform built with React, Node.js, MongoDB, and Firebase. It offers responsive design, dynamic campaign management, secure transactions, and real-time notifications. Hosted on Firebase and Vercel, it ensures reliability and scalability for users.",
        "Backend Development and API Integration. designed and implemented secure and efficient backend systems with Express, MongoDB and JSON Web Tokens (JWT) for authentication and data handling",
      ],
      tags: [
        "Web Development",
        "React",
        "MongoDB",
        "Firebase",
        "Node.js",
        "Vercel",
        "Axios",
        "AOS",
      ],
      links: {
        github:
          "https://github.com/swapnilahmedshishir/CrowdcubeApplicationClient",
        demo: "https://crowdcubeapplication.web.app/",
      },
      image: crowdcubeapplication,
      featured: true,
    },
    {
      title: "NewsHub Application",
      description: [
        "NewsHub Application, your one-stop platform to explore, read, and subscribe to premium articles tailored to your interests",
        "Dynamic Dashboard admins can manage articles and users efficiently.",
        "Real-Time Updates article management with live updates powered by React Query.",
      ],
      tags: [
        "Web Development",
        "React",
        "MongoDB",
        "Node.js",
        "Firebase",
        "Axios",
        "JWT",
      ],
      links: {
        github: "https://github.com/swapnilahmedshishir/NewsHubWebsiteA12",
        demo: "https://newswebsite-3a348.firebaseapp.com/",
      },
      image: NewsHubApplication,
      featured: true,
    },
  ];

  return (
    <div className="pt-40 min-h-screen bg-[#0f1629] p-8 text-slate-100">
      <div className="max-w-7xl mx-auto space-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center group rounded-lg p-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 bg-[length:400%_400%] animate-gradient-xy hover:bg-[length:100%_100%] transition-all duration-700 shadow-lg"
          >
            {/* Image Section */}
            <div className="md:w-1/2 overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Text Section */}
            <Card className="md:w-1/2 bg-gradient-to-br from-slate-800 to-gray-900 rounded-lg overflow-hidden shadow-md transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl p-3 md:p-6">
              <MacOsButtons />
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-emerald-400 text-sm font-mono mb-2 tracking-wide uppercase">
                      Featured Project
                    </div>
                    <CardTitle className="text-slate-100   md:text-3xl font-bold hidden md:block">
                      {project.title}
                    </CardTitle>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.links.github}
                      className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub size={22} />
                    </a>
                    <a
                      href={project.links.demo}
                      className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={22} />
                    </a>
                  </div>
                </div>
              </CardHeader>
              <div className="ml-6 mb-3 block md:hidden">
                <CardTitle className="text-slate-100   md:text-3xl font-bold">
                  {project.title}
                </CardTitle>
              </div>
              <CardContent className="mt-1">
                {project.description.map((ds, i) => (
                  <p
                    key={i}
                    className="text-slate-300 mb-2 text-lg leading-relaxed"
                  >
                    {ds}
                  </p>
                ))}

                <div className="flex flex-wrap gap-3  mt-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 text-gray-900 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
