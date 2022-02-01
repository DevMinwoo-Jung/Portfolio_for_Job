import React from "react";
import { skills } from "../data.js";
import Skill from "../skill/Skill.jsx";

const Skills = () => {
  return (
    <div className="block ">
      {Object.keys(skills)
        .map((key) => skills[key])
        .map((data) => (
          <Skill data={data} key={Math.random()} />
        ))}
    </div>
  );
};

export default Skills;
