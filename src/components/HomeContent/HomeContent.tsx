import React, { memo } from 'react';

import Image from '../../components/profileImage';
import clsx from 'clsx';
import style from './HomeContent.module.css';

const HomeContent = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <picture>
          <Image />
        </picture>
        <h1 className={clsx(style.bigText, style.header)}>Hi, my name is <br />
          <span className={clsx(style.giganticText, style.black)}>Dima Veremchuk</span>
        </h1>
        <p className={clsx(style.bigText, style.paragraph)}>I design digital products, code a little on the side and write about all things. <br />
          <em className={style.black}>
            Nice to meet you!
          </em>
        </p>
          <a href="" className={clsx(style.black, style.emailLink, style.bigText)}>
            verd@hey.com
          </a>
      </div>
    </div>
  );
};

export default memo(HomeContent);
