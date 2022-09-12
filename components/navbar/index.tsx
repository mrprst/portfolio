import React, { useState, useEffect } from 'react'
import { Burger } from '@mantine/core'
import Link from 'next/link'
import classes from './NavBar.module.scss'
import Menu from '../menu'
import { useRouter } from 'next/router'
import { NativeSelect } from '@mantine/core'

const Navbar: React.FC = () => {
  const [showmenu, setShowmenu] = React.useState(true)
  const [opened, setOpened] = useState(true)
  const title = opened ? 'Close navigation' : 'Open navigation'
  const [value, setValue] = useState('')

  useEffect(() => {
    showmenu ? setOpened(true) : setOpened(false)
    if (typeof window !== 'undefined') {
      const isNarrowScreen = window.matchMedia('(max-width: 600px)')
      isNarrowScreen.addEventListener('change', (e) => {
        e.matches ? setOpened(false) : setOpened(true)
      })
      isNarrowScreen.matches ? setOpened(false) : setOpened(true)
    }
    showmenu ? setOpened(true) : setOpened(false)
  }, [showmenu])
  
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <div>
          <Link href="/">
            <div
              onClick={() => {
                showmenu ? setShowmenu(false) : setShowmenu(true)
              }}
              className={classes.logo}
            >
              MP
            </div>
          </Link>
        </div>
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
        {opened ? <Menu setShowmenu={setShowmenu} /> : null}
      </nav>
    </header>
  )
}

export default Navbar
