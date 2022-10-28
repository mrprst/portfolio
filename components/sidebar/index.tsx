import React, { useEffect } from 'react'
import Link from 'next/link'
import classes from './Sidebar.module.scss'
import { Image } from '@mantine/core'
import { gsap } from 'gsap'

export default function Sidebar() {
  useEffect(() => {
    const logos = gsap.utils.toArray(`li.${classes.logo}`).reverse()
    const mainTimeline = gsap.timeline()
    mainTimeline.fromTo(
      `ul.${classes.social}`,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
      }, "+=1"
    )
    logos.forEach(function (logo: any, index: number) {
      const anim = gsap.timeline().fromTo(logo, { opacity: 0 }, { opacity: 1 },"+=1")
      mainTimeline.add(anim, (index + 1) * 0.2)
      const tl = gsap
        .timeline({ paused: true })
        .fromTo(logo, { y: 0 }, { y: -10 })
      logo.addEventListener('mouseenter', () => tl.play())
      logo.addEventListener('mouseleave', () => tl.reverse())
    })
  }, [])

  return (
    <div className={classes.sidebar}>
      <ul className={classes.social}>
        <li className={classes.logo}>
          <Link href="https://github.com/mrprst">
            <a target="_blank">
              <Image src="/images/github.svg" alt="github profile" />
            </a>
          </Link>
        </li>
        <li className={classes.logo}>
          <Link href="https://www.linkedin.com/in/mathiasprost/">
            <a target="_blank">
              <Image src="/images/linkedin.svg" alt="linkedin profile" />
            </a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
