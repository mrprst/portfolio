import React from 'react'
import classes from './About.module.scss'
import Profilepic from '../profilepic'

export default function About() {
  return (
    <div id="about" className={classes.about}>
      <h1 className={classes.title}>About</h1>
      <div className={classes.content}>
        <p className={classes.text}>
          I used to lead e-commerce projects but I'm now web developer.<br /><br />
          In my past life, I had the chance of creating an online record shop and vinyl cuting service, work for a french audio/tech leader, a huge e-commerce website and one of the biggest music labels. All things considered, I have been specialized in e-commerce during all those years.<br /><br />
          I am currently working in France as freelancer but open to any opportunities allowing me to work remotly in EU.
        </p>
        <div className={classes.containerpic}>
          < Profilepic />
        </div>
      </div>
    </div>
  )
}
