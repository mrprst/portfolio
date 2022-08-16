import React from 'react';
import Image from 'next/image';
import classes from './Profilepic.module.scss'
import image from '../../public/profilepic.jpg'

export default function Profilepic () {
  return (
    <div className={classes.profilepic}>
      <div className={classes.link}>resume</div>
    </div>
  );
}

