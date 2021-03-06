import React from "react";
import style from "./projects.module.css";
import Slider from "react-slick";
import Project from "../project/project";
import {projectsInfo} from "../data";

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
  };

  return (
    <div className={style.content__div}>
      <div className={style.img__div}>
        <Slider {...settings}>
          {Object.keys(projectsInfo)
            .map((key) => projectsInfo[key])
            .map((project) => (
              <Project project={project} key={Math.random()} />
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
