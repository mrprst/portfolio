import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/about'
import Projects from '../components/projects'
import Tagline from '../components/tagline'
import Contact from '../components/contact'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { english } from '../public/locales/english'
import { french } from '../public/locales/french'
import { spanish } from '../public/locales/spanish'

const Home: NextPage = () => {
  const { locale, locales, defaultLocale, asPath } = useRouter();
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
  },[locale])

  return (
    <>
      <Head>
        <title>Mathias Prost</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Tagline localeFile={mainData} />
      <About localeFile={mainData} />
      <Projects localeFile={mainData} />
      <Contact localeFile={mainData} />
    </>
  )
}

export default Home
