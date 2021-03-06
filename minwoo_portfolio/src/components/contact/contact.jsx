import React, { useState } from 'react';
import style from './contact.module.css';
import {BsPhone}  from 'react-icons/bs';
import {AiOutlineMail, AiFillGithub, AiOutlineCopy} from 'react-icons/ai';

const Contact = () => {
  const [showMsg, setShowMsg] = useState(false);
  const [showMsgEmail, setShowMsgEmail] = useState(false);

  const copyPhone = (event) => {
    const target = String(event.target.parentElement.innerText);
    navigator.clipboard.writeText(target.substring(target.match(":").index + 1, target.match(" ").index - 4));
  }
  
  const showMessage = () => {
    setShowMsg(true);
  }
  
  const hideMessage = () => {
    setShowMsg(false);
  }

  const showMessageEmail = () => {
    setShowMsgEmail(true);
  }

  const hideMessageEmail = () => {
    setShowMsgEmail(false);
  }


  return (
    <div className={style.contact}>
    <div className={style.contact__Leftdiv}>
      <div className={style.contact__para}>
        <p className={style.bigPara}>C</p>
        <p className={style.mediumPara}>ontact Me</p>
      </div>
      <div className={style.contacts}>
        <div className={style.contact}>
          <span className={style.contact__contents}><BsPhone/>Phone:{`(82)010-8599-3012 `}</span>
          <AiOutlineCopy className={style.copyBtn} onClick={copyPhone} onMouseOver={showMessage} onMouseLeave={hideMessage}/>
          {
            showMsg === true &&  <span className={style.tooltip__show}> copy to clipboard</span>
          }
        </div>
        <div className={style.contact}>
          <span className={style.contact__contents}><AiOutlineMail/>Email:applejung312@gmail.com</span> 
          <AiOutlineCopy className={style.copyBtn} onClick={copyPhone} onMouseOver={showMessageEmail} onMouseLeave={hideMessageEmail}/>
          {
            showMsgEmail === true &&  <span className={style.tooltip__show}> copy to clipboard</span>
          }
        </div>
        <div className={style.contact}>
          <span className={style.contact__contents}><AiFillGithub/>Github: <a href="https://github.com/DevMinwoo-Jung">Go to Github</a></span>
        </div>
      </div>
    </div>
    <div className={style.contact__Rightdiv}>
      <div className={style.contact__Rightpara}>
          <span className={style.right__div_bigPara}>Thanks for visiting my portfolio</span>
          <br/>
          <span className={style.right__div_bigPara}>Feel free to contact me anytime!</span>
          <br/>
          <br/>
          <span className={style.right__div_mediumPara}>???????????? ????????????:D</span>
      </div>
    </div>
    </div>
  );
};

export default Contact;