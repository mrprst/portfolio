import React, { useState, useEffect } from 'react'
import { Burger } from '@mantine/core'
import Link from 'next/link'
import classes from './NavBar.module.scss'
import Menu from '../menu'
import { useRouter } from 'next/router';
import { NativeSelect } from '@mantine/core';

export default function Navbar() {
  const { locale, asPath } = useRouter();
  const [opened, setOpened] = useState(true)
  const [showmenu, setShowmenu] = useState(false)
  const title = opened ? 'Close navigation' : 'Open navigation'
  const [value, setValue] = useState('');

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
    <header className={classes.header}>
      <nav className={classes.nav}>
        <div>
          <Link href="/">
            <div className={classes.logo}>MP</div>
          </Link>
        </div>
        <div className={classes.bg}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            title={title}
            color="#1C5F42"
          />
        </div>
        {opened ? <Menu /> : null}
      </nav>
    </header>
  )
}
