import React from 'react';
import style from './contact.module.css';

const Contact = () => {
  return (
    <div className={style.contact__div}>
      <div className={style.contact__para}>
        <p className={style.bigPara}>C</p>
        <p className={style.mediumPara}>ontact Me</p>
      </div>
      <div className={style.contacts}>
        <div className={style.contact}>
          <span className={style.contact__contents}><img src="" alt="" />Phone</span>
        </div>
        <div className={style.contact}>
          <span className={style.contact__contents}><img src="" alt="" />Email</span>
        </div>
        <div className={style.contact}>
          <span className={style.contact__contents}><img src="" alt="" />Github</span>
        </div>
        <div className={style.contact}>
          <span className={style.contact__contents}><img src="" alt="" />Blog</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;