import React from 'react';
import style from './contact.module.css';
import {BsPhone}  from 'react-icons/bs';
import {AiOutlineMail, AiFillGithub} from 'react-icons/ai';
import {SiBloglovin} from 'react-icons/si';

const Contact = () => {
  return (
    <div className={style.contact__div}>
      <div className={style.contact__para}>
        <p className={style.bigPara}>C</p>
        <p className={style.mediumPara}>ontact Me</p>
      </div>
      <div className={style.contacts}>
        <div className={style.contact}>
          <span className={style.contact__contents}><BsPhone/> Phone: {`(82)010-1111-2222`}</span>
        </div>
        <div className={style.contact}>
          <span className={style.contact__contents}><AiOutlineMail/> Email: hong@gmail.com</span>
        </div>
        <div className={style.contact}>
          <span className={style.contact__contents}><AiFillGithub/> Github: <a href="https://github.com/DevMinwoo-Jung">Go to Github</a></span>
        </div>
        <div className={style.contact}>
          <span className={style.contact__contents}><SiBloglovin/> Blog: <a href="https://dev-minwoo.tistory.com/">Go to Blog</a></span>
        </div>
      </div>
    </div>
  );
};

export default Contact;