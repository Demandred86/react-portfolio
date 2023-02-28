import React from "react";
import ME from "../../assets/me.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5> 1+ Years as FrontEnd Developer</h5>
              <small>Constant Training</small>
            </article>
            <article className="about__card">
              {" "}
              <FiUsers className="about__icon" />
              <h5>Team Manager</h5>
              <small> 4 People group</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>10 years+ Entrepreneur</h5>
              <small> As Ecommerce Manager</small>
            </article>
          </div>

          <p>
            Junior Level Developer moderately proficient in JavaScript, React
            and Redux with knowledge of PHP, HTML and Wordpress. Applied
            programming skills in a ten years experience as Entrepreneur in
            online retail sales. Built and managed E-commerce websites,
            implemented personalized extensions, custom plugins, data analysis
            and automated tasks.
          </p>
          <p>
            Four years living abroad enhanced interpersonal skills in
            multicultural environments. One Year experience as Team Leader of a
            four people group in a sales company with responsibilities as
            trainer and motivator.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
