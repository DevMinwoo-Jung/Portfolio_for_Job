import React, { memo } from 'react';
import style from './footer.module.css';
import {AiOutlineCopyrightCircle} from 'react-icons/ai';

const Footer = memo(() => {
  return (
    <footer className={style.footer}>
      Copyright <AiOutlineCopyrightCircle/> Minwoo Jung, All rights reserved.
    </footer>
  );
});

export default Footer;