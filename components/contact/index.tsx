import React, { useState, useEffect } from 'react'
import Button from '../button'
import classes from './Contact.module.scss'

type Language = {
  file: object
}

export default function Contact() {
  return (
    <div id='contact' className={classes.container}>
      <h1 className={classes.title}>Contact</h1>
      <p>If you wish to contact me, please click on the button below</p>
      <Button title="Email" size="sm" />
    </div>
  )
}
