import React from "react";
import "./skill.scss";
import ProgressBar from "@ramonak/react-progress-bar";

const Skill = ({ data }) => {
  return (
    <>
      <div key={Math.random()} className="skills-div ml-1 mb-1">
        <div className='img-para-div flex '>
          <img src={data.imgSrc} alt="" className="skill-img rounded-lg" />
          <p className="ml-4 p-2 text-center">{data.skillName}</p>
        </div>
        <ProgressBar
          className="skillProgressBar"
          completed={data.progressBar}
          animateOnRender={true}
          bgColor={data.progressBar === 80 ? "#43c6f0" : data.progressBar === 70 ? '#68c2c6' : '#eea0a0'}
          customLabel={data.customLabel}
        />
      </div>
    </>
  );
};

export default Skill;
