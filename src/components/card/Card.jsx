import React from "react";
import Skill from "./skill/Skill.jsx";

const card = ({ field, data }) => {
  const skills = data.map(({ id, name, level }) => {
    return <Skill id={id} name={name} level={level} />;
  });

  return (
    <div className="experience__frontend">
      <h3>{field}</h3>
      <div className="experience__content">{skills}</div>
    </div>
  );
};

export default card;
