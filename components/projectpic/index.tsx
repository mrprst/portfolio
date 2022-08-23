import React from 'react';
import Image from 'next/image';
import classes from './Projectpic.module.scss'
import image from '../../public/profilepic.jpg'

export default function Projectpic () {
  return (
    <div className={classes.projectpic}>
      <div className={classes.link}>œ</div>
    </div>
  );
}

