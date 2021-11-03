import React, { useState } from 'react';
import style from './project.module.css';
import {BiShowAlt} from 'react-icons/bi';
import {BsGithub} from 'react-icons/bs';


const Project = ({project}) => {

  const [show, setShow] = useState(false);
  const [hideIntro, setHideIntro] = useState(false);

  const showProjectSpec = () => {
      setShow(true);
      setHideIntro(true);

  }
  const hideProjectSpec = () => {
      setShow(false);
      setHideIntro(false); 
  }

  return (
        <div className={style.project} >
          <div className={style.img__contatiner} onMouseEnter={showProjectSpec} onMouseLeave={hideProjectSpec}>
            <div className={`${hideIntro ?  style.project__introhide : style.project__intro }`}>
              <img className={style.img} src={project.project__img} alt=""/>
              <div className={style.img__para}>
                <p className={style.spec__head}>{project.project__title}</p>
                <p className={style.spec__para}>{project.project__para}</p>
                </div>
              </div>
              <div className={`${show ? style.projectSpec__divShow: style.projectSpec__div}`}>
                <div className={style.specDesc__div}>
                  <p className={style.spec__head}>#세부사항</p>
                  <p className={style.spec__para}>{`참여율 ${project.project__contribution}`}</p>
                  <p className={style.spec__para}>{`제작기간 ${project.project__making__duration}`}</p>
                  <p className={style.spec__head}>#Detail</p>
                  <p className={style.spec__para}>{project.project__detail}</p>
                  <p className={style.spec__head}>#기술 스택</p>
                  <p className={style.spec__para}>{project.project__stack}</p>
                </div>
              </div>
            </div>
            <div className={style.logo__div}>
              <BsGithub className={style.logo}/><a href={`${project.project__src}`} target="_blank" rel="noreferrer"> <p className={style.tooltip__show}> Github</p> </a>
              <BiShowAlt className={style.logo}/><a href={`${project.project__live}`} target="_blank" rel="noreferrer"> <p className={style.tooltip__show}> Show Live</p> </a>
            </div>
        </div>
  );
};



export default Project; 