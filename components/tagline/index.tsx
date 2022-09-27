import React, { useEffect, useRef } from 'react'
import classes from './Tagline.module.scss'
import Button from '../button'
import { gsap } from 'gsap'
import { Observer } from 'gsap/dist/Observer'

type LocaleProps = {
  localeFile: {
    taglineTitle: string
    taglineSubtitle: string
    taglineButton: string
  }
}

function Tagline({ localeFile }: LocaleProps) {
  useEffect(() => {
    gsap
      .timeline()
      .fromTo(`div.${classes.container}`,{
        opacity: 0,
      }, {
        opacity: 1,
        duration:1,
      })
  }, [])

  return (
    <div className={classes.container}>
      <h1
        className={classes.title}
        dangerouslySetInnerHTML={{ __html: localeFile.taglineTitle }}
      ></h1>
      <p className={`sub ${classes.content}`}>{localeFile.taglineSubtitle}</p>
      <div className={classes.ctabutton}>
        <a href="#about">
          <Button title={localeFile.taglineButton} size="lg" active={false} />
        </a>
      </div>
    </div>
  )
}

export default Tagline
