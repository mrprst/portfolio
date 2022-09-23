import { useState, useEffect, useRef, useCallback } from 'react'
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
      case 'en-EN':
        setMainData(english)
        break
      default:
    }
  }, [locale])

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
        <div className={`${classes.targets}`}>
          <div id="tagline" className={`${classes.slide} `}>
            <Tagline localeFile={mainData} />
          </div>
          <div id="about" className={`${classes.slide} `}>
            <About localeFile={mainData} />
          </div>
          <div id="projects" className={`${classes.slide} `}>
            <Projects localeFile={mainData} />
          </div>
          <div id="contact" className={`${classes.slide} `}>
            <Contact localeFile={mainData} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
