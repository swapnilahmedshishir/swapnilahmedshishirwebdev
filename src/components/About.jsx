import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const AboutMe = () => {
  return (
    <>
      <section className="min-h-screen about-section bg-gradient-to-br from-[#0B1221] to-[#131C30] text-white py-20 flex items-center justify-center relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 -left-20 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 -right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 pt-6 flex flex-col lg:flex-row items-center gap-12 justify-center relative z-10">
          <div className="content max-w-4xl order-2 lg:order-1">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 mb-6">
              <span className="h-2 w-2 rounded-full bg-teal-500 mr-2 animate-pulse"></span>
              <span className="text-sm text-teal-300">
                Available for new projects
              </span>
            </div>

            <h2 className="text-[#4ECCA3] text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-400">
              WHO I AM?
            </h2>

            <div className="mb-8">
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Every great product starts with a{" "}
                <span className="text-teal-400 font-medium">vision</span>—and I
                am the person who transforms that vision into a{" "}
                <span className="text-teal-400 font-medium">
                  fast, scalable, and user-friendly web experience
                </span>
                .
              </p>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                I'm{" "}
                <span className="text-[#4ECCA3] font-semibold">
                  Swapnil Ahmed Shishir
                </span>
                , a Full-Stack Web Developer with{" "}
                <span className="text-teal-400">3+ years</span> of hands-on
                experience. My specialty lies in JavaScript & React.js, along
                with building complete end-to-end solutions using Next.js,
                Node.js, Express.js, MongoDB, and MySQL.
              </p>
            </div>

            {/* Services Section */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-teal-300 mb-4 flex items-center">
                <span className="h-px w-8 bg-teal-500 mr-3"></span>
                How I Help Businesses
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-[#152436] p-4 rounded-lg border border-[#2D3748] hover:border-teal-500/30 transition-all">
                  <div className="text-teal-400 text-xl mb-2">🚀</div>
                  <h4 className="font-medium text-white mb-2">
                    Full Website Development
                  </h4>
                  <p className="text-sm text-gray-400">
                    Building entire websites from scratch with modern
                    technologies
                  </p>
                </div>
                <div className="bg-[#152436] p-4 rounded-lg border border-[#2D3748] hover:border-teal-500/30 transition-all">
                  <div className="text-teal-400 text-xl mb-2">✨</div>
                  <h4 className="font-medium text-white mb-2">
                    Feature Implementation
                  </h4>
                  <p className="text-sm text-gray-400">
                    Adding powerful new features to existing platforms
                  </p>
                </div>
                <div className="bg-[#152436] p-4 rounded-lg border border-[#2D3748] hover:border-teal-500/30 transition-all">
                  <div className="text-teal-400 text-xl mb-2">⚡</div>
                  <h4 className="font-medium text-white mb-2">
                    Performance Optimization
                  </h4>
                  <p className="text-sm text-gray-400">
                    Optimizing for speed, scalability, and SEO
                  </p>
                </div>
              </div>

              <p className="text-gray-300 italic">
                For me, coding is not just about writing functions—it's about
                understanding a client's vision and translating it into a
                seamless digital product that users love.
              </p>
            </div>

            {/* Technical Expertise */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-teal-300 mb-4 flex items-center">
                <span className="h-px w-8 bg-teal-500 mr-3"></span>
                Technical Expertise
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React.js",
                  "Next.js",
                  "JavaScript",
                  "TypeScript",
                  "Redux",
                  "Tailwind CSS",
                  "Bootstrap",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "MySQL",
                  "REST APIs",
                  "Git",
                  "SEO",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-teal-500/10 text-teal-300 rounded-full text-sm border border-teal-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Highlights */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-teal-300 mb-4 flex items-center">
                <span className="h-px w-8 bg-teal-500 mr-3"></span>
                Project Highlights
              </h3>

              <div className="space-y-6">
                <div className="bg-[#152436] p-5 rounded-xl border-l-4 border-teal-500">
                  <h4 className="font-semibold text-white mb-2">
                    TOJO Global Agency Website & Admin Dashboard
                  </h4>
                  <p className="text-gray-400">
                    Developed a digital marketing agency platform with services
                    like web dev, blockchain solutions, page moderation & more.
                  </p>
                </div>

                <div className="bg-[#152436] p-5 rounded-xl border-l-4 border-purple-500">
                  <h4 className="font-semibold text-white mb-2">
                    TS Geosystem E-commerce Website
                  </h4>
                  <p className="text-gray-400">
                    Built an e-commerce system for surveying equipment with
                    database architecture, APIs, payment processing & invoice
                    generation.
                  </p>
                </div>

                <div className="bg-[#152436] p-5 rounded-xl border-l-4 border-blue-500">
                  <h4 className="font-semibold text-white mb-2">
                    TOJO News Platform
                  </h4>
                  <p className="text-gray-400">
                    Created a modern news platform with premium/free content,
                    real-time notifications and authentication systems.
                  </p>
                </div>
              </div>
            </div>

            {/* Passion & Goal */}
            <div className="mb-10 p-6 bg-gradient-to-r from-teal-900/20 to-emerald-900/20 rounded-xl border border-teal-500/20">
              <h3 className="text-xl font-semibold text-teal-300 mb-3">
                🚀 My Passion & Goal
              </h3>
              <p className="text-gray-300">
                I'm passionate about building modern, interactive, and scalable
                applications that empower businesses to grow in the digital
                space. I thrive on continuous learning, exploring new
                technologies, and delivering impactful solutions that make a
                difference.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-teal-300 mb-4 flex items-center">
                <span className="h-px w-8 bg-teal-500 mr-3"></span>
                Let's Connect!
              </h3>
              <p className="text-gray-300 mb-4">
                Let's build something impactful together, feel free to reach
                out.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center p-3 bg-[#152436] rounded-lg">
                  <div className="bg-teal-500/10 p-2 rounded-md mr-3">
                    <span className="text-teal-400">📧</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white">
                      swapnilahmedshishir2018@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center p-3 bg-[#152436] rounded-lg">
                  <div className="bg-teal-500/10 p-2 rounded-md mr-3">
                    <span className="text-teal-400">📞</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-white">+880 1602 555023</p>
                  </div>
                </div>

                <div className="flex items-center p-3 bg-[#152436] rounded-lg md:col-span-2">
                  <div className="bg-teal-500/10 p-2 rounded-md mr-3">
                    <span className="text-teal-400">🌐</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Portfolio</p>
                    <p className="text-white">
                      swapnilahmedshishirwebdev.netlify.app
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-6 border-t border-gray-800">
              <div className="text-gray-400">Follow me:</div>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/swapnilahmedshishir/"
                  target="_blank"
                  className="text-2xl p-2 bg-[#152436] rounded-lg text-teal-400 hover:text-teal-300 hover:bg-teal-500/10 transition-colors"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://twitter.com/shishir_swapnil"
                  target="_blank"
                  className="text-2xl p-2 bg-[#152436] rounded-lg text-teal-400 hover:text-teal-300 hover:bg-teal-500/10 transition-colors"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://github.com/swapnilahmedshishir"
                  target="_blank"
                  className="text-2xl p-2 bg-[#152436] rounded-lg text-teal-400 hover:text-teal-300 hover:bg-teal-500/10 transition-colors"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.facebook.com/swapnilahmedshishir/"
                  target="_blank"
                  className="text-2xl p-2 bg-[#152436] rounded-lg text-teal-400 hover:text-teal-300 hover:bg-teal-500/10 transition-colors"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.instagram.com/shishirswapnil/"
                  target="_blank"
                  className="text-2xl p-2 bg-[#152436] rounded-lg text-teal-400 hover:text-teal-300 hover:bg-teal-500/10 transition-colors"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-medium rounded-lg hover:from-teal-600 hover:to-emerald-600 transition-all group"
              >
                Get In Touch
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
