import React from "react";
import "./experience.css";
import { frontendExp, backendExp } from "../config/configData";
import Card from "../card/Card";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <Card field="Frontend Development" data={frontendExp} />
        <Card field="Backend Development" data={backendExp} />
      </div>
    </section>
  );
};

export default Experience;
