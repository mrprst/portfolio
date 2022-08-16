import React from 'react'
import classes from './About.module.css'
import Profilepic from '../profilepic'

export default function About() {
  return (
    <div id="about">
      <h1 className={classes.title}>About</h1>
      <div>
        <p className={classes.content}>
          Hello, my name is Mathias. I used to lead e-commerce projects but I'm now web developer.
          In my past life, I had the chance of creating an online record shop and vinyl cuting service, work for a french audio/tech leader, a huge e-commerce website and one of the biggest music labels. All things considered, I have been specialized in e-commerce during all those years.
          I am currently working in France as freelancer but open to any opportunities allowing me to work remotly in EU.
        </p>
        < Profilepic />
      </div>
    </div>
  )
}
