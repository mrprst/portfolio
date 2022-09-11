import React from 'react'
import { useEffect, useState } from 'react'
import classes from './Menu.module.scss'
import Link from 'next/link'
import LanguageModal from '../languagemodal'
import LanguageSwitch from '../languageswitch'

function Menu() {
  const [opened, setOpened] = useState(true)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isNarrowScreen = window.matchMedia('(max-width: 600px)')
      isNarrowScreen.addEventListener('change', (e) => {
        if (e.matches) {
          setOpened(false)
        } else {
          setOpened(true)
        }
      })
      if (isNarrowScreen.matches) {
        setOpened(false)
      } else {
        setOpened(true)
      }
    }
  }, [])



  return (
    <div className={classes.menu}>
      <Link href="#about">
        <div onClick={() => setOpened(false)} className={classes.a}>
          about
        </div>
      </Link>
      <Link href="#projects">
        <div onClick={() => setOpened(false)} className={classes.a}>
          projects
        </div>
      </Link>
      <Link href="#contact">
        <div onClick={() => setOpened(false)} className={classes.a}>
          contact
        </div>
      </Link>
      <Link href="/mathias-prost-resume.pdf">
        <div onClick={() => setOpened(false)} className={classes.a}>
          resume
        </div>
      </Link>
      {opened ? <LanguageModal /> : null}
      {opened ? null : <LanguageSwitch />}
    </div>
  )
}

export default Menu
