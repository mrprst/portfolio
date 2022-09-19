import React from 'react'
import { useState, useEffect, useRef } from 'react'
import classes from './Tagline.module.scss'
import Button from '../button'
import { gsap } from 'gsap'

type LocaleProps = {
  localeFile: {
    taglineTitle: string
    taglineSubtitle: string
    taglineButton: string
  }
}

function Tagline({ localeFile }: LocaleProps) {
  const boxRef = useRef<HTMLInputElement>(null)
  const q = gsap.utils.selector(boxRef)

  useEffect(() => {
    gsap.timeline()
    .fromTo(q('h1'), {y: 30, opacity: 0}, {y: 0, opacity: 1 })
    .fromTo(q('.sub'), {y: 30, opacity: 0}, {y: 0, opacity: 1 }, "<0.2>")
    .fromTo(q('div'), {y: 30, opacity: 0}, {y: 0, opacity: 1 }, "<0.1")
  }, [])

  return (
    <div ref={boxRef} className={classes.container}>
      <h1
        className={classes.title}
        dangerouslySetInnerHTML={{ __html: localeFile.taglineTitle }}
      ></h1>
      <p className={`sub ${classes.content}`}>{localeFile.taglineSubtitle}</p>
      <div className={classes.button}>
        <Button title={localeFile.taglineButton} size="lg" />
      </div>
    </div>
  )
}

export default Tagline
