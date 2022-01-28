import React from "react";
import { skills } from "../data.js";

const Skills = () => {
  return (
    <>
      {Object.keys(skills)
        .map((key) => skills[key])
        .map((data) => (
          <div key={Math.random()} className='divide-solid boxbox-border h-32 w-32 p-4 border-4'>
            <img src={data.imgSrc} alt="" className='rounded-lg' />
            <p className=''>{data.skillName}</p>
          </div>
        ))}
    </>
  );
};

export default Skills;
