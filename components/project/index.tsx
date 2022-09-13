import React from 'react'
import { useState, useEffect } from 'react'
import classes from './Project.module.scss'
import { Code } from '@mantine/core'
import { useRouter } from 'next/router'
import Projectpic from '../projectpic/'

type Spec = {
  project: object
}

function Project(props: Spec) {
  const { locale } = useRouter()
  const [data, setData] = useState(props.project)

  useEffect(() => {
    setData(props.project)
  }, [props.project, locale])

  return (
    <div className={classes.projectdetails}>
      <h2 className={classes.title}>{data.title}</h2>
      <div>
        <Projectpic
          project={data.title}
          link={data?.website}
          image={data.image}
        />
        <p className={classes.description}>{data.description}</p>
      </div>
      <div className={classes.languages}>
        {data.stack.map((techno: string, key: number) => (
          <span key={key}>
            <Code>{techno}</Code>
          </span>
        ))}
      </div>
      <div className={classes.logos}>
        <a className={classes.logo} href={data.github}>
          <img src="\images/github.svg" />
        </a>
        <a className={classes.logo} href={data.website}>
          <img src="\images/link.svg" />
        </a>
      </div>
    </div>
  )
}

export default Project
