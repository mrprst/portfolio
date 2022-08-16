import React, { useState } from 'react'
import { Burger } from '@mantine/core';
import Link from 'next/link';
import classes from "./NavBar.module.css";

export default function Navbar() {
  const [opened, setOpened] = useState(false);
  const title = opened ? 'Close navigation' : 'Open navigation';

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
        <Burger
          opened={opened}
          onClick={() => setOpened((o) => !o)}
          title={title}
          color="#1C5F42"
        />
        <div className={classes.menu}>
          <Link href="#about">
            <div className={classes.a}>
              about
            </div>
          </Link>
          <Link href="#projects">
            <div className={classes.a}>
              projects
            </div>
          </Link>
          <Link href="#contact">
            <div className={classes.a}>
              say hi
            </div>
          </Link>
          <a
            href="/mathias-prost-resume.pdf"
            target="_blank"
          >
            <div className={classes.a}>
              resume
            </div>
          </a>
        </div>
      </nav>
    </header>
  )
}
