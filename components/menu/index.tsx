import React from 'react'
import { useEffect, useState, useRef } from 'react'
import classes from './Menu.module.scss'
import Link from 'next/link'
import LanguageModal from '../languagemodal'
import LanguageSwitch from '../languageswitch'
import { gsap } from 'gsap'
import { useRouter } from 'next/router'

type Props = {
  setShowmenu: any
}

type LocaleProps = {
  [menu: string]: []
}

function Menu({ setShowmenu }: Props, { localeFile }: LocaleProps) {
  const { locale } = useRouter()
  const [opened, setOpened] = useState(true)
  const [menulocale, setMenuLocale] = useState([''])
  const boxRef = useRef<HTMLInputElement>(null)
  const q = gsap.utils.selector(boxRef)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isNarrowScreen = window.matchMedia('(max-width: 600px)')
      isNarrowScreen.matches ? setOpened(false) : setOpened(true)
    }
    const items = gsap.utils.toArray(`div.${classes.a}`).reverse()
    const mainTimeline = gsap.timeline()
    items.forEach((item: any, index: number) => {
      let tl = gsap.timeline().fromTo(item, { opacity: 0 }, { opacity: 1 })
      mainTimeline.add(tl, index * 0.2)
    })
  }, [])

  useEffect(() => {
    switch (locale) {
      case 'es-ES':
        setMenuLocale(['a proposito', 'proyectos', 'contacto', 'CV'])
        break
      case 'fr-FR':
        setMenuLocale(['à propos', 'projets', 'contact', 'CV'])
        break
      case 'en-US':
        setMenuLocale(['about', 'projets', 'contact', 'resume'])
        break
    }
  }, [locale])

  return (
    <div ref={boxRef} className={classes.menu}>
      <Link href="#about">
        <div onClick={() => setShowmenu(false)} className={classes.a}>
          {menulocale[0]}
        </div>
      </Link>
      <Link href="#projects">
        <div onClick={() => setShowmenu(false)} className={classes.a}>
          {menulocale[1]}
        </div>
      </Link>
      <Link href="#contact">
        <div onClick={() => setShowmenu(false)} className={classes.a}>
          {menulocale[2]}
        </div>
      </Link>
      <Link href={'/mathias-prost-resume.pdf'} locale={false}>
        <div onClick={() => setShowmenu(false)} className={classes.a}>
          {menulocale[3]}
        </div>
      </Link>
      <div onClick={() => setShowmenu(false)}>
        {opened ? <LanguageModal /> : <LanguageSwitch />}
      </div>
    </div>
  )
}

export default Menu
