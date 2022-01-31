import React, { useState } from "react";
import SkillProgressBar from '../progressBar/SkillProgressBar';
import "./skill.scss";
import ProgressBar from "@ramonak/react-progress-bar";

const Skill = ({ data }) => {
  const [progressBar, setProgressBar] = useState(false);

  function showProgressBar() {
    setProgressBar(true);
  }

  function hideProgressBar() {
    setProgressBar(false);
  }

  return (
    <>
      <div
        onMouseEnter={showProgressBar}
        onMouseLeave={hideProgressBar}
        key={Math.random()}
        className="skills-div m-auto mt-4 mb-4 divide-solid 2xl:h-44 lg:h-28 2xl:w-44 lg:w-28 p-4"
      >
        {progressBar && (
            <ProgressBar className='absolute w-full h-full' completed={data.progressBar} animateOnRender={true}/>
        )}
        <img
          src={data.imgSrc}
          alt=""
          className="rounded-lg 2xl:h-32 2xl:w-32 lg:h-14 lg:w-14"
        />
        <p className="text-center">{data.skillName}</p>
      </div>
    </>
  );
};

export default Skill;
