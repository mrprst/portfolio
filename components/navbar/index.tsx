import React, { useState, useEffect } from 'react'
import { Burger } from '@mantine/core'
import classes from './Navbar.module.scss'
import Menu from '../menu'
import { gsap } from 'gsap'

const Navbar = () => {
  const [showmenu, setShowmenu] = useState<boolean | undefined>(undefined)
  const [opened, setOpened] = useState(true)

  const title = opened ? 'Close navigation' : 'Open navigation'

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


  useEffect(() => {
    gsap
      .timeline()
      .fromTo(`div.${classes.logo}`,{
        x: -200,
      }, {
        x: 0,
        stagger: 0.1,
        duration:1,
        ease: 'back',
      }, "+=1")
  }, [])

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <div className={classes.topnav}>
          <a href="#tagline">
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
