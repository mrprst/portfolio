import React from 'react'
import Image from 'next/image'
import classes from './Projectpic.module.scss'
import slaf from '../../public/slaf.jpg'
import peps from '../../public/peps.jpg'

type Props = {
  project: string
  link: string
}

export default function Projectpic(props: Props) {
  const divImage = {
    backgroundImage: 'url(/' + props.project + '.jpg)',
  }

  return (
    <a className={classes.link} href={props.link}>
      <div style={divImage} className={classes.projectpic}></div>
    </a>
  )
}
