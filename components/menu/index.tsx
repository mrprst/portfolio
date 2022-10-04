import React from 'react'
import { useEffect, useState, useRef } from 'react'
import classes from './Menu.module.scss'
import Link from 'next/link'
import LanguageModal from '../languagemodal'
import LanguageSwitch from '../languageswitch'
import { useRouter } from 'next/router'
import { gsap } from 'gsap'
import { Observer } from 'gsap/dist/Observer'

type Props = {
  setShowmenu: any
}

function Menu({ setShowmenu }: Props) {
  const { locale } = useRouter()
  const [opened, setOpened] = useState(true)
  const [menulocale, setMenuLocale] = useState([''])
  const [url, setUrl] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isNarrowScreen = window.matchMedia('(max-width: 600px)')
      isNarrowScreen.matches ? setOpened(false) : setOpened(true)
    }
  }, [])

  useEffect(() => {
    const items = gsap.utils.toArray(`div.${classes.a}`).reverse()
    const mainTimeline = gsap.timeline()
    mainTimeline.fromTo(
      `div.${classes.language}`,
      { opacity: 0 },
      { duration: 0.4, opacity: 1 }
    )
    items.forEach((item: any, index: number) => {
      let tl = gsap.timeline().fromTo(item, { opacity: 0 }, { opacity: 1 })
      mainTimeline.add(tl, (index + 1) * 0.2)
    })
  }, [])

  useEffect(() => {
    switch (locale) {
      case 'es-ES':
        setMenuLocale(['a proposito', 'proyectos', 'contacto', 'CV'])
        setUrl('/mathias-prost-resume.pdf')
        break
      case 'fr-FR':
        setMenuLocale(['à propos', 'projets', 'contact', 'CV'])
        setUrl('/cv-mathias-prost.pdf')
        break
      case 'en-EN':
        setMenuLocale(['about', 'projets', 'contact', 'resume'])
        setUrl('/mathias-prost-resume.pdf')
        break
    }
  }, [locale])

  return (
    <div className={classes.menu}>
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
      <Link href={url} locale={false}>
        <a target="_blank" onClick={() => setShowmenu(false)}>
          <div className={`${classes.a} ${classes.resume}`}>{menulocale[3]}</div>
        </a>
      </Link>
      <div className={classes.language} onClick={() => setShowmenu(false)}>
        {opened ? <LanguageModal /> : <LanguageSwitch />}
      </div>
    </div>
  )
}

export default Menu
