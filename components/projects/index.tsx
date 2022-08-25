import React, { useState, useEffect } from 'react'
import classes from './Projects.module.scss'
import Button from '../button'
import Projectpic from '../projectpic/'
import Project from '../project/'
import { projectData } from "../../public/projectsdata";

function Projects() {
  const [projectkey, setProjectkey] = useState(null);

  return (
    <div id="projects" className={classes.container}>
      <h1 className={classes.title}>Projects</h1>
      <div className={classes.buttons}>
        <Button title="Peps" size="sm" />
        <Button title="SLAF!" size="sm" />
        <Button title="IMR" size="sm" />
      </div>
      <div className="App">
      </div>
      <Projectpic />
      <div className="a-changer">
        {projectData.map((data, key) => {
          if(key === projectkey) {
            return (
              <div key={key}>
                <Project title={data.title} content={data.description} />
              </div>
            );
          }
        })}
      </div>
      {/* <div className={classes.projectdetails}>
        <h2 className={classes.title}>Peps.life</h2>
        <p className={classes.content}>
          As a music and vinyl lover, I use to spend a LOT of time on Discogs,
          one of the biggest music database and marketplace. If you don't know
          it, it is basically a wiki where you can browse infinitely from
          artists to labels, coutries, genres, etc. I got this idea of replicate
          the wiki system to build a french recipe wiki database. The idea
          behind this is to allow the user to get inspirations from a variety of
          elements from ingredients, countries and regions just by clicking on
          it. We chose to classify our recipes into families of dishes. Each
          dish has a variety of recipes (or variants) regarding its ingredients
          or countries.
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
        <h2 className={classes.title}>SLAF!</h2>
        <p className={classes.content}>
          This project was the first real project I got involved after my Ruby on
          Rails training. This website is an Urban Dictionnary-like franglish
          parodic translator. The overuse of buzzwords, especially in the startup
          echosystem might be borring sometimes, so we choose to shine light on
          their french equivalents. For the website design, we chose to give a
          brutalist and retro approach.
        </p>
        <h2 className={classes.title}>IMR</h2>
        <p className={classes.content}>
          Lorem ipsum dolor macarelle.
        </p>
      </div> */}
    </div>
  )
}


export default Projects