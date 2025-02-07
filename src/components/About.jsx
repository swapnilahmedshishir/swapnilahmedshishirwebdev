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
            <p className="text-sm text-justify md:text-left md:text-lg leading-relaxed ">
              Experienced Web Developer with over four years of expertise in
              designing and developing high quality websites and web
              applications. Proficient in building dynamic, user-friendly
              interfaces using React.js and JavaScript, ensuring seamless user
              experiences. Strong background in front end development, with a
              focus on responsive design, performance optimization, and modern
              web technologies. Successfully delivered numerous projects by
              collaborating with cross functional teams to meet client
              requirements and exceed expectations. Dedicated to staying updated
              with the latest industry trends and continuously enhancing skills
              to provide cutting edge solutions. Proactive problem solver with a
              keen eye for detail and a commitment to on time project delivery.
            </p>

            <div className="social_media">
              <a
                href="https://www.linkedin.com/in/swapnilahmedshishir/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/shishir_swapnil" target="_blank">
                <FaTwitter />
              </a>
              <a href="https://github.com/swapnilahmedshishir" target="_blank">
                <FaGithub />
              </a>
              <a
                href="https://www.facebook.com/swapnilahmedshishir/"
                target="_blank"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/shishirswapnil/"
                target="_blank"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="home_img image-container order-1 md:order-2">
            <img
              className="md:w-[35vw] rounded-lg object-cover shadow-lg"
              src={profileImage}
              alt="profileImage"
            />
          </div>

          <div className="absolute hidden lg:block lg:top-40 lg:-left-50 w-48 h-48 lg:w-64 lg:h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
