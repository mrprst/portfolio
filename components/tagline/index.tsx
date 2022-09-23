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
  const boxRef = useRef<HTMLInputElement>(null)
  const q = gsap.utils.selector(boxRef)

  useEffect(() => {
    function clickAnim() {
      let tl = gsap.timeline()
      tl.to(`div.sections`, {
        yPercent: -25,
        duration: 1.4,
        ease: 'Power0.easeNone',
      })
    }

    Observer.create({
      target: classes.ctabutton,
      onClick: () => clickAnim(),
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
        <a>
          <Button title={localeFile.taglineButton} size="lg" />
        </a>
      </div>
    </div>
  )
}

export default Tagline
