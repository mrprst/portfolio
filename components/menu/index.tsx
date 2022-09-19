import React from 'react'
import { useEffect, useState, useRef } from 'react'
import classes from './Menu.module.scss'
import Link from 'next/link'
import LanguageModal from '../languagemodal'
import LanguageSwitch from '../languageswitch'
import { gsap } from 'gsap'

type Props = {
  setShowmenu: any
}

function Menu({ setShowmenu }: Props) {
  const [opened, setOpened] = useState(true)
  const boxRef = useRef<HTMLInputElement>(null)
  const q = gsap.utils.selector(boxRef)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isNarrowScreen = window.matchMedia('(max-width: 600px)')
      isNarrowScreen.matches ? setOpened(false) : setOpened(true)
    }
    const items = gsap.utils.toArray(`div.${classes.a}`).reverse()
    const mainTimeline = gsap.timeline()
    items.forEach((item: object, index: number) => {
      let tl = gsap
        .timeline().fromTo(item, { opacity: 0 }, { opacity: 1 })
      mainTimeline.add(tl, index * 0.2)
    })
  }, [])

  return (
    <div ref={boxRef} className={classes.menu}>
      <Link href="#about">
        <div onClick={() => setShowmenu(false)} className={classes.a}>
          about
        </div>
      </Link>
      <Link href="#projects">
        <div onClick={() => setShowmenu(false)} className={classes.a}>
          projects
        </div>
      </Link>
      <Link href="#contact">
        <div onClick={() => setShowmenu(false)} className={classes.a}>
          contact
        </div>
      </Link>
      <Link href={'/mathias-prost-resume.pdf'} locale={false}>
        <div onClick={() => setShowmenu(false)} className={classes.a}>
          resume
        </div>
      </Link>
      <div onClick={() => setShowmenu(false)}>
        {opened ? <LanguageModal /> : <LanguageSwitch />}
      </div>
    </div>
  )
}

export default Menu
