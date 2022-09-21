import React from 'react'
import { useState, useEffect } from 'react'
import classes from './Project.module.scss'
import { Code } from '@mantine/core'
import { useRouter } from 'next/router'
import Projectpic from '../projectpic/'

type LocaleProps = {
  project: {
    github: string
    description: string
    stack: Array<string>
    title: string
    website: string
    image: string
  }
}

function Project({ project }: LocaleProps) {
  const { locale } = useRouter()
  const [data, setData] = useState(project)

  useEffect(() => {
    setData(project)
  }, [project, locale])

  return (
    <div className={classes.projectdetails}>
      <h2 className={classes.title}>{project.title}</h2>
      <div className={classes.project}>
        <div className={classes.left}>
          <Projectpic
            project={project.title}
            link={project.website}
            image={project.image}
          />
          <div className={classes.languages}>
            {data.stack.map((techno: string, key: number) => (
              <span key={key}>
                <Code>{techno}</Code>
              </span>
            ))}
          </div>
          <div className={classes.logos}>
            <a className={classes.logo} href={project.github} target="blank">
              <img src="\images/github.svg" />
            </a>
            <a className={classes.logo} href={project.website} target="blank">
              <img src="\images/link.svg" />
            </a>
          </div>
        </div>
        <p className={classes.description}>{project.description}</p>
      </div>
    </div>
  )
}

export default Project
