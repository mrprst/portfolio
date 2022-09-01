import React, { useState, useEffect } from 'react'
import classes from './Projects.module.scss'
import Button from '../button'
import Projectpic from '../projectpic/'
import Project from '../project/'
import { projectData } from '../../public/projectsdata'

function Projects() {
  const [projectkey, setProjectkey] = useState(0)

  return (
    <div id="projects" className={classes.container}>
      <h1 className={classes.title}>Projects</h1>
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
        {projectData.map((data, key) => {
          if (key === projectkey) {
            return (
              <div key={key} className={classes.projectcontainer}>
                <Project
                  title={data.title}
                  description={data.description}
                  stack={data.stack}
                  github={data.github}
                  website={data.website}
                />
                <Projectpic project={data.title} link={data.website} />
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default Projects
