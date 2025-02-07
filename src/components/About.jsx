import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa6";
import profileImage from "../assets/images/profileImage.png";

const AboutMe = () => {
  return (
    <>
      <section className="min-h-screen about-section bg-[#0B1221] text-white py-16 flex items-center justify-center relative">
        <div className="container mx-auto px-4 pt-6 flex flex-col md:flex-row items-center gap-8 justify-center relative">
          <div className="content max-w-3xl order-2 md:order-1">
            <h2 className="text-[#4ECCA3] text-3xl md:text-5xl font-bold mb-6">
              WHO I AM?
            </h2>
            <p className="text-sm text-justify md:text-left md:text-lg leading-relaxed">
              Hey there! I'm{" "}
              <span className="text-[#4ECCA3] font-semibold">
                Shopnil Ahmed
              </span>
              , a passionate web developer with a strong love for technology and
              innovation. My programming journey started with curiosity about
              how websites work, and over the years, it has transformed into a
              full-time passion.
              <br />
              <br />I specialize in building high-performance, user-friendly web
              applications using{" "}
              <span className="font-semibold text-[#4ecca2b6]">
                React.js, JavaScript, Node.js, MongoDB, and MySQL
              </span>
              . Whether it's crafting sleek UI components, optimizing
              performance, or integrating back-end services, I thrive on
              delivering top-notch solutions.
              <br />
              <br />
              Beyond coding, I enjoy{" "}
              <span className="font-semibold text-[#4ecca2b6]">
                exploring new tech trends, solving complex problems, and
                collaborating with teams
              </span>{" "}
              to bring ideas to life. I'm also a strong believer in continuous
              learning and staying updated with the latest industry
              advancements.
              <br />
              <br />
              When I’m not coding, you’ll find me{" "}
              <span className="font-semibold text-[#4ecca2b6]">
                playing football, gaming, or exploring new places
              </span>
              . I also enjoy sharing knowledge through tech blogs and mentoring
              aspiring developers. Let's connect and build something amazing
              together! 🚀
            </p>

            <div className="social_media flex gap-4 mt-6">
              <a
                href="https://www.linkedin.com/in/swapnilahmedshishir/"
                target="_blank"
                className="text-[#4ECCA3] text-2xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/shishir_swapnil"
                target="_blank"
                className="text-[#4ECCA3] text-2xl"
              >
                <FaTwitter />
              </a>
              <a
                href="https://github.com/swapnilahmedshishir"
                target="_blank"
                className="text-[#4ECCA3] text-2xl"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.facebook.com/swapnilahmedshishir/"
                target="_blank"
                className="text-[#4ECCA3] text-2xl"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/shishirswapnil/"
                target="_blank"
                className="text-[#4ECCA3] text-2xl"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="home_img image-container order-1 md:order-2">
            <img
              className="md:w-[35vw] rounded-lg object-cover shadow-lg"
              src={profileImage}
              alt="Shopnil Ahmed Profile"
            />
          </div>

          <div className="absolute hidden lg:block lg:top-40 lg:-left-50 w-48 h-48 lg:w-64 lg:h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
