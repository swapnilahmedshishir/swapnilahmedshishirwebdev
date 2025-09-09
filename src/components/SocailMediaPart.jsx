import React from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa6";
const SocailMediaPart = () => {
  return (
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
        href="https://www.instagram.com/swapnilahmedshishir/"
        target="_blank"
        className="text-[#4ECCA3] text-2xl"
      >
        <FaInstagram />
      </a>
    </div>
  );
};

export default SocailMediaPart;
