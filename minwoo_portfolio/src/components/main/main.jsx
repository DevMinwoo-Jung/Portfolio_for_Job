import React from 'react';
import style from './main.module.css';

const Main = () => {
  return (
    <div className={style.main}>
      <div className={style.top__div}>
        <span className={style.para}>Front-End Developer</span>
      </div>
      <div className={style.img__div}>
        <img className={style.img} src="/imgs/me.png" alt="" />
      </div>
      <div className={style.bottom__div}>
        <span className={style.para}>Jung MinWoo</span>
      </div>
    </div>
  );
};

function fancyImg(){

}

export default Main;