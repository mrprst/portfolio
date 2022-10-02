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
  const [isActive, setIsActive] = useState([true,false,false]);
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

  const handleClick = (project: number) => {
    setSelectedprojectId(project)
    let activeArray = [false, false, false]
    activeArray[project] = activeArray[project] === false ? true : false
    setIsActive(activeArray)
  };


  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Projets</h1>
      <div className={classes.select}>
        <div id="buttons" className={classes.buttons}>
          <div
            className={`${classes.button}`}
            onClick={() => handleClick(0)}
          >
            <Button title="Peps" size="sm" active={isActive[0]}/>
          </div>
          <div
            className={classes.button}
            onClick={() => handleClick(1)}
          >
            <Button title="SLAF!" size="sm" active={isActive[1]}/>
          </div>
          <div
            className={classes.button}
            onClick={() => handleClick(2)}
          >
            <Button title="R.T.S." size="sm" active={isActive[2]}/>
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
