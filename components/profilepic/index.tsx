import React from 'react';
import Image from 'next/image';
import classes from './Profilepic.module.scss'
import image from '../../public/images/profilepic.jpg'
import slaf from '../../public/images/slaf.jpg'
import resume from '../../public/images/resume.svg'

export default function Profilepic () {
  return (
    <div className={classes.profilepic}>
      <div className={classes.link}></div>
    </div>
  );
}

