import React, { useState, useEffect } from 'react'
import classes from './Projects.module.scss'
import Button from '../button'
import Project from '../project/'
import { useRouter } from 'next/router'

type Project = {
  [key: number]: {
    github: string
    description: string
    stack: Array<string>
    title: string
    website: string
    image: string
  }
}

type LocaleProps = {
  localeFile: {
    projects: Project
  }
}

function Projects({ localeFile }: LocaleProps) {
  const { locale } = useRouter()
  const [selectedprojectId, setSelectedprojectId] = useState(0)
  const [selectedproject, setSelectedproject] = useState({
    github: '',
    description: '',
    stack: [''],
    title: '',
    website: '',
    image: '',
  })

  useEffect(() => {
    Object.keys(localeFile.projects).map((data, key) => {
      if (key === selectedprojectId) {
        let index = +Object.keys(localeFile.projects)[key]
        setSelectedproject(localeFile.projects[index])
      }
    })
  }, [localeFile, locale, selectedprojectId])

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Projects</h1>
      <div className={classes.select}>
        <div className={classes.buttons}>
          <div
            className={classes.button}
            onClick={() => setSelectedprojectId(0)}
          >
            <Button title="Peps" size="sm" />
          </div>
          <div
            className={classes.button}
            onClick={() => setSelectedprojectId(1)}
          >
            <Button title="SLAF!" size="sm" />
          </div>
          <div
            className={classes.button}
            onClick={() => setSelectedprojectId(2)}
          >
            <Button title="IMR" size="sm" />
          </div>
        </div>
        <div className={classes.project}>
          <div className={classes.projectcontainer}>
            <Project project={selectedproject} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
