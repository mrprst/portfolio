import React from 'react';
import classes from './About.module.scss'
import Profilepic from '../profilepic'

type LocaleProps = {
  localeFile: {
    aboutTitle: string;
    aboutText: string;
    profilepicCTA: string
  };
}

export default function About({localeFile}: LocaleProps) {

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>{localeFile.aboutTitle}</h1>
      <div className={classes.content}>
        <p
          className={classes.text}
          dangerouslySetInnerHTML={{ __html: localeFile.aboutText }}
        ></p>
        <div className={classes.containerpic}>
          <Profilepic cta={localeFile.profilepicCTA} />
        </div>
      </div>
    </div>
  )
}
