import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import classes from './Sidebar.module.scss'
import { Image } from '@mantine/core'
import { gsap } from 'gsap'

export default function Sidebar() {
  const boxRef = useRef<HTMLInputElement>(null)
  const q = gsap.utils.selector(boxRef)

  useEffect(() => {
    const logos = gsap.utils.toArray(`li.${classes.logo}`)
    gsap.defaults({ duration: 0.2 })
    gsap.fromTo(logos, {opacity: 0}, {opacity: 1, duration: 1})
    logos.forEach(function (logo: any) {
      const tl = gsap.timeline({ paused: true }).fromTo(logo,  {y: 0}, { y: -10 })
      logo.addEventListener('mouseenter', () => tl.play())
      logo.addEventListener('mouseleave', () => tl.reverse())
    })
  }, [])

  return (
    <div ref={boxRef} className={classes.sidebar}>
      <ul className={classes.social}>
        <li className={classes.logo}>
          <Link href="https://github.com/mrprst">
            <a target="_blank">
              <Image src="/images/github.svg" alt="github profile" />
            </a>
          </Link>
        </li>
        <li className={classes.logo}>
          <Link
            href="https://www.linkedin.com/in/mathiasprost/"
          >
            <a target="_blank">
              <Image src="/images/linkedin.svg" alt="linkedin profile" />
            </a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
