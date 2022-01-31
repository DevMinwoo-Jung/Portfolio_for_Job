import React, { useEffect, useState } from "react";
import "./SkillProgressBar.scss";

const SkillProgressBar = ({ width, percent }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(percent * width);
  });

  return (
    <div>
      <div className="progress-div" style={{ width: width }}>
        <div style={{ width: `${value}px` }} className="progressSkill" />
      </div>
    </div>
  );
};

export default SkillProgressBar;
