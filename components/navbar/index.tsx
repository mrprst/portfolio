import React, { useState } from 'react'
import { Burger } from '@mantine/core';
import Link from 'next/link';
import classes from "./NavBar.module.css";
import Menu from '../menu';

export default function Navbar() {
  const [opened, setOpened] = useState(false);
  const title = opened ? 'Close navigation' : 'Open navigation';
  const isNarrowScreen = window.matchMedia("(min-width: 500px)");

  isNarrowScreen.addEventListener( "change", (e) => {
    if (e.matches) {
      setOpened(true)
    } else {
      setOpened(false)
    }
  });


  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <div>
          <Link href="/">
            <div className={classes.logo}>
              MP
            </div>
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
        <Menu />
        { opened ? <Menu /> : null }
      </nav>
    </header>
  )
}
