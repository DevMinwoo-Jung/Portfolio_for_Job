import React, { useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

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
        className="relative hover:opacity-10 hover:duration:700 transition ease-in-out m-auto mt-4 mb-4 divide-solid 2xl:h-44 lg:h-28 2xl:w-44 lg:w-28 p-4 max-w-xs"
      >
        {progressBar && (
          <ProgressBar
            className="absolute hover:opacity-100 m-auto mt-4 mb-4 divide-solid 2xl:h-44 lg:h-28 2xl:w-44 lg:w-28 p-4 max-w-xs"
            variant="info"
            now={data.progressBar}
            label={`${data.progressBar}%`}
          />
        )}
        <img
          src={data.imgSrc}
          alt=""
          className="rounded-lg 2xl:h-32 2xl:w-32 lg:h-14 lg:w-14"
        />
        <p className="hover:opacity-100 text-center">{data.skillName}</p>
      </div>
    </>
  );
};

export default Skill;
