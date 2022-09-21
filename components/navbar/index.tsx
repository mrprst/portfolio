import React, { useState, useEffect, useRef } from 'react'
import { Burger } from '@mantine/core'
import Link from 'next/link'
import classes from './Navbar.module.scss'
import Menu from '../menu'
import { gsap } from 'gsap'

const Navbar = () => {
  const [showmenu, setShowmenu] = useState<boolean | undefined>(undefined)
  const [opened, setOpened] = useState(true)
  const title = opened ? 'Close navigation' : 'Open navigation'
  // const boxRef = useRef<HTMLInputElement>(null)
  // const q = gsap.utils.selector(boxRef)

  // useEffect(() => {
  //   gsap
  //     .timeline()
  //     .from(q('div'), {opacity: 0})
  //     .duration(1)
  // }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isNarrowScreen = window.matchMedia('(max-width: 600px)')
      isNarrowScreen.addEventListener('change', (e) => {
        e.matches ? setOpened(false) : setOpened(true)
      })
      if (isNarrowScreen.matches) {
        setOpened(false)
        showmenu ? setOpened(true) : setOpened(false)
      }
    }
  }, [showmenu])

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <div className={classes.topnav}>
          <a href="/">
            <div
              onClick={() => {
                showmenu ? setShowmenu(false) : setShowmenu(true)
              }}
              className={classes.logo}
            >
              <span className={classes.text}>mrpr.st</span>
            </div>
          </a>
          <div className={classes.bg}>
            <Burger
              opened={opened}
              onClick={() => {
                showmenu ? setShowmenu(false) : setShowmenu(true)
                setOpened((o) => !o)
              }}
              title={title}
              color="#1C5F42"
            />
          </div>
        </div>
        {opened ? (
          <span>
            <Menu setShowmenu={setShowmenu} />
          </span>
        ) : null}
      </nav>
    </header>
  )
}

export default Navbar
