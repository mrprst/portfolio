import React from 'react'
import Link from 'next/link';
import classes from "./NavBar.module.css";

export default function Navbar() {
  return (
    <div className={classes.main}>
      <div>
        <Link href="/">
          mrprst.dev
        </Link>
      </div>
      <div className={classes.menu}>
        <Link href="/about">
          <div className={classes.a}>
            About
          </div>
        </Link>
        <Link href="/projects">
          <div className={classes.a}>
            Projects
          </div>
        </Link>
        <Link href="/contact">
          <div className={classes.a}>
            Say Hi
          </div>
        </Link>
        <Link href="/resume">
          <div className={classes.a}>
            Resume
          </div>
        </Link>
      </div>
    </div>
  )
}
