import React from 'react'
import Link from 'next/link'
import classes from './Sidebar.module.scss'
import { Image } from '@mantine/core'

export default function Sidebar() {
  return (
    <div className={classes.sidebar}>
      <ul className={classes.social}>
        <li>
          <Link href="https://github.com/mrprst">
            <Image src="/github.svg" alt="github profile" />
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/mathiasprost/">
            <Image src="/linkedin.svg" alt="linkedin profile" />
          </Link>
        </li>
      </ul>
    </div>
  )
}
