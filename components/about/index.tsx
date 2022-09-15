import React, { useState, useEffect } from 'react'
import classes from './About.module.scss'
import Profilepic from '../profilepic'

type Language = {
  file: object
}

export default function About(props: Language) {
  const [data, setData] = useState({
    aboutTitle: "",
    aboutText: "",
    profilepicCTA: ""
  })

  useEffect( () => {
    setData(props.file);
  }, [props.file]);

  return (
    <div id="about" className={classes.about}>
      <h1 className={classes.title}>{data.aboutTitle}</h1>
      <div className={classes.content}>
        <p className={classes.text} dangerouslySetInnerHTML={ { __html: data.aboutText } }></p>
        <div className={classes.containerpic}>
          < Profilepic cta={data.profilepicCTA}/>
        </div>
      </div>
    </div>
  )
}
