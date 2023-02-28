import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import "./headerSocial.css";

const headerSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/noce86/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin className="header__socials-icon" />
      </a>
      <a
        href="https://github.com/Demandred86/"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub className="header__socials-icon" />
      </a>
    </div>
  );
};

export default headerSocials;
