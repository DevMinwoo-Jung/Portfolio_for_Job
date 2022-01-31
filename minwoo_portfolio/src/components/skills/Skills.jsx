import React from "react";
import { skills } from "../data.js";
import Skill from "../skill/Skill.jsx";

const Skills = () => {
  return (
    <div className="mobile-grid relative justify-center grid 2xl:grid-cols-5 lg:grid-cols-4 sm-grid-cols-5 2xl:ml-36 lg:ml-10 2xl:mr-36 lg:mr-10">
      {Object.keys(skills)
        .map((key) => skills[key])
        .map((data) => (
          <Skill data={data} key={Math.random()} />
        ))}
    </div>
  );
};

export default Skills;
