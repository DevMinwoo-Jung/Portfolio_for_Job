import React from 'react';
import style from './footer.module.css';
import {AiOutlineCopyrightCircle} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className={style.footer}>
      Copyright <AiOutlineCopyrightCircle/> Minwoo Jung, All rights reserved.
    </div>
  );
};

export default Footer;