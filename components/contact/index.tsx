import next from 'next'
import React, { useState, useEffect } from 'react'
import Button from '../button'
import classes from './Contact.module.scss'
import Link from 'next/link'

type LocaleProps = {
  localeFile: {
    contact: string
    contactText: string
    contactCTA: string
  }
}

export default function Contact({ localeFile }: LocaleProps) {
  const mail = 'mailto:prost.mathias@gmail.com'

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>{localeFile.contact}</h1>
      <p>{localeFile.contactText}</p>
      <div className={classes.button}>
        <a href={mail}>
          <Button title={localeFile.contactCTA} size="lg" />
        </a>
      </div>
    </div>
  )
}
