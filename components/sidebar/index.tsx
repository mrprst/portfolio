import React from 'react'
import Link from 'next/link';
import classes from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={classes.sidebar}>
      <ul className={classes.social}>
        <li>
          <Link href="https://github.com/mrprst">
            <div className={classes.a}>
              Git
            </div>
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/mathiasprost/">
            <div className={classes.a}>
              Linkedin
            </div>
          </Link>
        </li>
      </ul>
    </div>
  )
}
