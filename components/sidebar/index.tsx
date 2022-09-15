import React from 'react'
import Link from 'next/link'
import classes from './Sidebar.module.scss'
import { Image } from '@mantine/core'

export default function Sidebar() {
  return (
    <div className={classes.sidebar}>
      <ul className={classes.social}>
        <li className={classes.logo}>
          <Link href="https://github.com/mrprst">
            <Image src="/images/github.svg" alt="github profile" />
          </Link>
        </li>
        <li className={classes.logo}>
          <Link href="https://www.linkedin.com/in/mathiasprost/">
            <Image src="/images/linkedin.svg" alt="linkedin profile" />
          </Link>
        </li>
      </ul>
    </div>
  )
}
