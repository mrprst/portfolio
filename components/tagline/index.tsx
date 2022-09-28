import React, { useEffect, useRef } from 'react'
import classes from './Tagline.module.scss'
import Button from '../button'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

type LocaleProps = {
  localeFile: {
    taglineTitle: string
    taglineSubtitle: string
    taglineButton: string
  }
}

function Tagline({ localeFile }: LocaleProps) {
  useEffect(() => {
    const items = gsap.utils.toArray([`h1.${classes.title}`, `p.${classes.content}`, `div.${classes.ctabutton}`])
    const mainTimeline = gsap.timeline()
    items.forEach(function (item: any, index: number) {
      let anim = gsap.timeline().fromTo(item, { opacity: 0 }, { opacity: 1 },"+=1.5")
      mainTimeline.add(anim, (index + 1) * 0.2)
    })
  }, [])

  return (
    <div className={`${classes.container}`}>
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
