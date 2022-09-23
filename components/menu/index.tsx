import React from 'react'
import { useEffect, useState, useRef } from 'react'
import classes from './Menu.module.scss'
import Link from 'next/link'
import LanguageModal from '../languagemodal'
import LanguageSwitch from '../languageswitch'
import { gsap } from 'gsap'
import { Observer } from 'gsap/dist/Observer'
import { useRouter } from 'next/router'

type Props = {
  setShowmenu: any
}

function Menu({ setShowmenu }: Props) {
  const { locale } = useRouter()
  const [opened, setOpened] = useState(true)
  const [menulocale, setMenuLocale] = useState([''])
  const [url, setUrl] = useState('')
  const boxRef = useRef<HTMLInputElement>(null)
  const q = gsap.utils.selector(boxRef)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isNarrowScreen = window.matchMedia('(max-width: 600px)')
      isNarrowScreen.matches ? setOpened(false) : setOpened(true)
    }
    const items = gsap.utils.toArray(`div.${classes.a}`)
    gsap.timeline().fromTo(items, { opacity: 0 }, { opacity: 1 })
    function clickAnim(index: number) {
      let tl = gsap.timeline()
      tl.to(`div.sections`, {
        yPercent: (-100 / 4) * index,
        duration: 1.4,
        ease: 'power.out',
      })
    }

    items.forEach((item: any, index: number) => {
      Observer.create({
        target: item,
        onClick: () => clickAnim(index + 1),
      })
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
      case 'en-US':
        setMenuLocale(['about', 'projets', 'contact', 'resume'])
        setUrl('/mathias-prost-resume.pdf')
        break
    }
  }, [locale])

  return (
    <div ref={boxRef} className={classes.menu}>
      <div onClick={() => setShowmenu(false)} className={`${classes.a}`}>
        {menulocale[0]}
      </div>
      <div onClick={() => setShowmenu(false)} className={classes.a}>
        {menulocale[1]}
      </div>
      <div onClick={() => setShowmenu(false)} className={classes.a}>
        {menulocale[2]}
      </div>
      <Link href={url} locale={false}>
        <a
          target="_blank"
          onClick={() => setShowmenu(false)}
          className={classes.a}
        >
          {menulocale[3]}
        </a>
      </Link>
      <div onClick={() => setShowmenu(false)}>
        {opened ? <LanguageModal /> : <LanguageSwitch />}
      </div>
    </div>
  )
}

export default Menu
