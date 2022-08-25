import React from 'react';
import classes from './Project.module.scss'
import { Code } from '@mantine/core'

interface Spec {
  title: string;
  content: string
}

function Project(props:Spec) {
  return (
    <div className={classes.projectdetails}>
      <h2 className={classes.title}>{props.title}</h2>
      <p className={classes.content}>
      {props.content}
        {/* As a music and vinyl lover, I use to spend a LOT of time on Discogs, one
        of the biggest music database and marketplace. If you don't know it, it
        is basically a wiki where you can browse infinitely from artists to
        labels, coutries, genres, etc. I got this idea of replicate the wiki
        system to build a french recipe wiki database. The idea behind this is
        to allow the user to get inspirations from a variety of elements from
        ingredients, countries and regions just by clicking on it. We chose to
        classify our recipes into families of dishes. Each dish has a variety of
        recipes (or variants) regarding its ingredients or countries. */}
      </p>
      <div className={classes.languages}>
        <Code>Ruby on Rails</Code>
        <Code>Javascript</Code>
        <Code>Ananas</Code>
      </div>
      <div className={classes.logos}>
        <p>A</p>
        <p>B</p>
        <p>O</p>
      </div>
    </div>
  )
}

export default Project
