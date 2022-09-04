import React from 'react'
import classes from './Project.module.scss'
import { Code } from '@mantine/core'

type Spec = {
  title: string,
  description: string,
  stack: Array<string>,
  github: string,
  website: string
}

function Project(props: Spec) {
  return (
    <div className={classes.projectdetails}>
      <h2 className={classes.title}>{props.title}</h2>
      <p className={classes.description}>{props.description}</p>
      <div className={classes.languages}>
        {props.stack.map((techno, key) => (
          <span key={key}>
            <Code>{techno}</Code>
          </span>
        ))}
      </div>
      <div className={classes.logos}>
        <a className={classes.logo} href={props.github}><img src='\github.svg' /></a>
        <a className={classes.logo} href={props.website}><img src='\link.svg' /></a>
      </div>
    </div>
  )
}

export default Project
