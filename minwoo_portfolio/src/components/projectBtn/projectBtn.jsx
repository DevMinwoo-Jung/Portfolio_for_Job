import React from 'react';
import style from './projectBtn.module.css'
import {BiShowAlt} from 'react-icons/bi';
import {BsGithub} from 'react-icons/bs';

const ProjectBtn = ({showLiveLink, hideLiveLink, showGithubLink, hideGithubLink, showLive, showGithub}) => {

  const goShowLiveLink = () => {
    showLiveLink();
  }

  const goHideLiveLink = () => {
    hideLiveLink();
  }

  const goShowGithubLink = () => {
    showGithubLink();
  }

  const goHideGithubLink = () => {
    hideGithubLink();
  }

  return (
    <div className={style.logo__div}>
    <BsGithub className={style.logo} onMouseOver={goShowLiveLink} onMouseLeave={goHideLiveLink} />             
    {
      showLive === true &&  <p className={style.tooltip__show}> Github</p>
    }
    <BiShowAlt className={style.logo} onMouseOver={goShowGithubLink} onMouseLeave={goHideGithubLink}/>
    {
      showGithub === true &&  <p className={style.tooltip__show}> Show Live</p>
    }
  </div>
  );
};

export default ProjectBtn;