import { useState, useEffect, useRef } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/about'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import Footer from '../components/footer'
import Projects from '../components/projects'
import Tagline from '../components/tagline'
import Contact from '../components/contact'
import Link from 'next/link'
import classes from './index.module.scss'
import { useRouter } from 'next/router'
import { english } from '../public/locales/english'
import { french } from '../public/locales/french'
import { spanish } from '../public/locales/spanish'
import { gsap } from 'gsap'
import { Observer } from 'gsap/dist/Observer'

gsap.registerPlugin(Observer)

const Home: NextPage = () => {
  const { locale } = useRouter()
  const [mainData, setMainData] = useState(english)

  useEffect(() => {
    switch (locale) {
      case 'es-ES':
        setMainData(spanish)
        break
      case 'fr-FR':
        setMainData(french)
        break
      case 'en-US':
        setMainData(english)
        break
      default:
    }
  }, [locale])

  // Slide effect
  useEffect(() => {
    let activeMenuItem = 0
    let oldMenuItem = 0
    let sections = gsap.utils.toArray(`div.${classes.slide}`)
    let tl: any

    function scrollAnim(e: { deltaY: number }) {
      // if the container is animating the wheel won't work
      if (tl && tl.isActive()) {
        return
      }
      // temp variable to see if we're at the beginning or end
      oldMenuItem = activeMenuItem
      // which way did we scroll the mousewheel
      activeMenuItem =
        e.deltaY > 0 ? (activeMenuItem += 1) : (activeMenuItem -= 1)
      // are we at the beginning of the slides?
      activeMenuItem = activeMenuItem < 0 ? 0 : activeMenuItem
      // are we at the end of the slides?
      activeMenuItem =
        activeMenuItem > sections.length - 1
          ? sections.length - 1
          : activeMenuItem
      // if at the beginning or end there is nothing to animate
      if (oldMenuItem === activeMenuItem) {
        return
      }
      // if not at the beginning or end, we can animate the container
      // and the targets to the new position
      tl = gsap.timeline()
      tl.to(`div.${classes.targets}`, {
        yPercent: (-100 / sections.length) * activeMenuItem,
        duration: 1.4,
        ease: 'power.out',
      })
    }

    // listen for mousewheel scroll
    Observer.create({
      wheelSpeed: 1,
      target: window,
      type: 'wheel,touch',
      onWheel: scrollAnim,
      onDrag: scrollAnim
    })

    // document.addEventListener("touchmove", test, false);

    // function test() {
    //   console.log("ee")
    // }

  }, [])

  return (
    <>
      <Head>
        <title>Mathias Prost</title>
        <meta
          name="description"
          content="I like cooking rice and cooking soul."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={classes.sidebar}>
        <Sidebar />
      </div>
      <div className={classes.stage}>
        <div className={`sections ${classes.targets}`}>
          <div className={`${classes.slide} `}>
            <Tagline localeFile={mainData} />
          </div>
          <div className={`${classes.slide} `}>
            <About localeFile={mainData} />
          </div>
          <div className={`${classes.slide} `}>
            <Projects localeFile={mainData} />
          </div>
          <div className={`${classes.slide} `}>
            <Contact localeFile={mainData} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
