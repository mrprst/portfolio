import React from 'react'
import { useEffect, useState } from 'react'
import classes from './Menu.module.scss'
import Link from 'next/link'
import LanguageModal from '../languagemodal'
import LanguageSwitch from '../languageswitch'

function Menu({ setShowmenu }) {
  const [opened, setOpened] = useState(true)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isNarrowScreen = window.matchMedia('(max-width: 600px)')
      isNarrowScreen.addEventListener('change', (e) => {
        e.matches ? setOpened(false) : setOpened(true)
      })
      isNarrowScreen.matches ? setOpened(false) : setOpened(true)
    }
  }, [])

  return (
    <div className={classes.menu}>
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
      <Link href="/mathias-prost-resume.pdf">
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
