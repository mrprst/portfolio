import React, { useState, useEffect } from 'react'
import classes from './Projects.module.scss'
import Button from '../button'
import Projectpic from '../projectpic/'
import Project from '../project/'
import { useRouter } from 'next/router'

type Language = {
  file: object
}

function Projects(props: Language) {
  const { locale } = useRouter();
  const [data, setData] = useState(props.file);
  const [projectkey, setProjectkey] = useState(0)
  const [selectedproject, setSelectedproject] = useState({
    github: "",
    description: "",
    stack: [""],
    title: "",
    website: "",
    image: ""
  })
  const object1 = props.file.projects

  useEffect( () => {
    setData(props.file);
    Object.keys(data.projects).map((data, key) => {
      if (key === projectkey) {
        setSelectedproject(object1[Object.keys(object1)[key]])
      }
    })
  }, [props.file,locale,projectkey]);

  return (
    <div id="projects" className={classes.container}>
      <h1 className={classes.title}>Projects</h1>
      <div>
        <div className={classes.buttons}>
          <div onClick={() => setProjectkey(0)}>
            <Button title="Peps" size="sm" />
          </div>
          <div onClick={() => setProjectkey(1)}>
            <Button title="SLAF!" size="sm" />
          </div>
          <div onClick={() => setProjectkey(2)}>
            <Button title="IMR" size="sm" />
          </div>
        </div>
        <div className={classes.project}>
          <div className={classes.projectcontainer}>
            <Project
              project={selectedproject}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
