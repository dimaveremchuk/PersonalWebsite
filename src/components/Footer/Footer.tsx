import React, { memo } from 'react';
import style from './Footer.module.css';

const Footer = () => {
  return (
    <div className={style.wrapper}>
      <footer className={style.content}>
        © {new Date().getFullYear()} Dmitry Veremchuk
      </footer>
    </div>
  );
};

export default memo(Footer);
 
