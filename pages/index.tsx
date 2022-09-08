import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/about'
import Projects from '../components/projects'
import Tagline from '../components/tagline'
import Image from 'next/image'
import Card from '../components/Card'
import Grid from '../components/Grid'
import Contact from '../components/contact'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { projectdataEN } from '../public/projectsdata'
import { projectdataFR } from '../public/projectsdataFR'
import { projectdataES } from '../public/projectsdataES'

const Home: NextPage = () => {
  const { locale, locales, defaultLocale, asPath } = useRouter();
  const [mainData, setMainData] = useState(projectdataEN)

  useEffect(() => {
    switch (locale) {
      case 'es-ES':
        setMainData(projectdataES)
        break
      case 'fr-FR':
        setMainData(projectdataFR)
        break
      case 'en-US':
        setMainData(projectdataEN)
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
      <div>
        <div
          style={{
            padding: '4px',
            marginRight: '4px',
          }}
        >
          <span>Current Language: </span>
          <span
            style={{
              borderRadius: '3px',
              backgroundColor: 'blue',
              color: 'white',
              padding: '2px',
            }}
          >
            {locale}
          </span>
        </div>
        <Link href={asPath} locale="es-ES">
          es-ES
        </Link>

        <Link href={asPath} locale="en-US">
          en-US
        </Link>
        <Link href={asPath} locale="fr-FR">
          fr-FR
        </Link>
      </div>
      <Tagline />
      <About />
      <Projects file={mainData} />
      <Contact />
    </>
  )
}

export default Home
