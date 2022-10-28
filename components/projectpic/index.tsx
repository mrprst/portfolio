import React from 'react'
import classes from './Projectpic.module.scss'
import slaf from '../../public/images/slaf.jpg'
import peps from '../../public/images/peps.jpg'

type Props = {
  project: string
  link: string
  image: string
}

export default function Projectpic(props: Props) {
  const divImage = {
    backgroundImage: 'url(/images/' + props.image,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  }

  return (
    <a className={classes.link} href={props.link} target="_blank" rel="noreferrer" >
      <div style={divImage} className={classes.projectpic}></div>
    </a>
  )
}
