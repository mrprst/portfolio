import React from 'react'
import Link from 'next/link';
import classes from "./NavBar.module.css";

export default function Navbar() {
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
        <div className={classes.menu}>
          <Link href="#about">
            <div className={classes.a}>
              About
            </div>
          </Link>
          <Link href="#projects">
            <div className={classes.a}>
              Projects
            </div>
          </Link>
          <Link href="#contact">
            <div className={classes.a}>
              Say Hi
            </div>
          </Link>
          <a
            href="/mathias-prost-resume.pdf"
            target="_blank"
          >
            <div className={classes.a}>
              Resume
            </div>
          </a>
        </div>
      </nav>
    </header>
  )
}
