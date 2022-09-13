import React from 'react';
import Image from 'next/image';
import classes from './Profilepic.module.scss'
import image from '../../public/profilepic.jpg'
import slaf from '../../public/slaf.jpg'
import link from '../../public/link.svg'

export default function Profilepic () {
  return (
    <div className={classes.profilepic}>
      <div className={classes.link}></div>
    </div>
  );
}

