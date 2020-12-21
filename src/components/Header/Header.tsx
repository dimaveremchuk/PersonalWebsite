import React, { memo } from 'react';
import style from './Header.module.css';

const Header = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <nav className={style.navbar}>
          <div className={style.navbarLeft}>
            <a href="">Home</a>
          </div>
          <div className={style.navbarRight}>
            <a href="">Blog</a>
            <a href="">Work</a>
            <a href="">About</a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default memo(Header);
 
