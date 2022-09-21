import React, { useState, useEffect } from 'react'
import Button from '../button'
import classes from './Contact.module.scss'

type LocaleProps = {
  localeFile: {
    contact: string
    contactText: string
    contactCTA: string
  }
}

export default function Contact({ localeFile }: LocaleProps) {
  return (
    <div id="contact" className={classes.container}>
      <h1 className={classes.title}>{localeFile.contact}</h1>
      <p>{localeFile.contactText}</p>
      <div className={classes.button}>
        <Button title={localeFile.contactCTA} size="lg" />
      </div>
    </div>
  )
}
