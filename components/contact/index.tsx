import React from 'react'
import Button from '../button'
import classes from './Contact.module.scss'

export default function Contact() {
  return (
    <div id='contacts' className={classes.container}>
      <h1 className={classes.title}>Contact</h1>
      <p>If you wish to contact me, please click on the button below</p>
      <Button title="Email" size="sm" />
    </div>
  )
}
