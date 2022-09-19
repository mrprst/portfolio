import { useState, useEffect, useRef } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/about'
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

const Home: NextPage = () => {
  const { locale, locales, defaultLocale, asPath } = useRouter()
  const [mainData, setMainData] = useState(english)
  const boxRef = useRef<HTMLInputElement>(null)
  const q = gsap.utils.selector(boxRef)

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

  useEffect(() => {
    let activeSlide = 0
    let oldSlide = 0
    const slides = gsap.utils.toArray('.box')
    const spanTargets = gsap.utils.toArray('span')
    let tl: any;
    const colors = gsap.utils.wrap(['#84c186', '#8b6c4c', '#39a3ee', '#ef9144'])
    gsap.set(slides, { backgroundColor: colors })

    function slideAnim(e) {
      // if the container is animating the wheel won't work
      if (tl && tl.isActive()) {
        return
      }
      // temp variable to see if we're at the beginning or end
      oldSlide = activeSlide
      // which way did we scroll the mousewheel
      activeSlide = e.deltaY > 0 ? (activeSlide += 1) : (activeSlide -= 1)
      // are we at the beginning of the slides?
      activeSlide = activeSlide < 0 ? 0 : activeSlide
      // are we at the end of the slides?
      activeSlide =
        activeSlide > slides.length - 1 ? slides.length - 1 : activeSlide
      // if at the beginning or end there is nothing to animate
      if (oldSlide === activeSlide) {
        return
      }
      // if not at the beginning or end, we can animate the container
      // and the targets to the new position
      tl = gsap.timeline()
      tl.to('#targets', {
        xPercent: (-100 / slides.length) * activeSlide,
        ease: 'power4.inOut',
        onComplete: doCoolStuff,
      })
    }

    // listen for mousewheel scroll
    window.addEventListener("wheel", event => slideAnim);

    function doCoolStuff() {
      gsap.fromTo(
        spanTargets[activeSlide],
        { rotation: 0 },
        { rotation: 360, transformOrigin: 'center center' }
      )
    }
  }, [])

  return (
    <>
      <Head>
        <title>Mathias Prost</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={classes.stage}>
        <div className={classes.targets}>
          <div className={`${classes.box} ${classes.box1}`}>
            <Tagline localeFile={mainData} />
          </div>
          <div className={`${classes.box} ${classes.box2}`}>
            <About localeFile={mainData} />
          </div>
          <div className={`${classes.box} ${classes.box2}`}>
            <Projects localeFile={mainData} />
          </div>
          <div className={`${classes.box} ${classes.box2}`}>
            <Contact localeFile={mainData} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
