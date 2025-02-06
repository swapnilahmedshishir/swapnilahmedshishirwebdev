import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "./globe";
import { Code2, Paintbrush, Database, Layout, Cpu, Cloud } from "lucide-react";
import PropTypes from "prop-types";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/80 transition-all duration-300">
    <CardContent className="p-6">
      <div className="flex items-center gap-4 mb-4">
        <Icon className={`w-8 h-8 ${color}`} />
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="bg-gray-700/50 hover:bg-gray-700 text-gray-100 border-gray-600"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

SkillCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  color: PropTypes.string.isRequired,
};

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      color: "text-blue-400",
      skills: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
    },
    {
      icon: Database,
      title: "Backend Development",
      color: "text-green-400",
      skills: ["Node.js", "MySQL", "Express.js", "MongoDB", "REST APIs"],
    },
    {
      icon: Layout,
      title: "UI/UX Design",
      color: "text-purple-400",
      skills: ["Figma", "Responsive Design", "Pixo", "Prototyping"],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "text-orange-400",
      skills: ["AWS", "Netlify", "Firebase", "Git"],
    },
    {
      icon: Cpu,
      title: "Tools & Technologies",
      color: "text-pink-400",
      skills: [
        "VS Code",
        "Jest",
        "Webpack",
        "Redux",
        "Firebase",
        "Vercel",
        "Vite",
        "Vim",
      ],
    },
    {
      icon: Paintbrush,
      title: "Creative Skills",
      color: "text-yellow-400",
      skills: [
        "UI Animation",
        "AOS Animation",
        "GSAP",
        "SVG Animation",
        "3D Modeling",
        "Motion Graphics",
      ],
    },
  ];

  return (
    <main className="pt-20 lg:pt-0 bg-[#0f1629] text-white min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-center items-center">
          <IconCloudDemo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default SkillsSection;
