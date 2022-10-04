import { useState } from 'react'
import { Image } from '@mantine/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classes from './LanguageSwitch.module.scss'

function LanguageSwitch() {
  const { locale, asPath } = useRouter()
  const [opened, setOpened] = useState(false)

  return (
    <div className={classes.container}>
      <div className={classes.languages}>
        <Link href={asPath} locale="en-EN">
          <div
            className={locale === 'en-EN' ? classes.active : classes.link}
            onClick={() => setOpened(false)}
          >
            <Image src={'/images/en-EN.svg'} alt="language switch" />
          </div>
        </Link>
        <Link href={asPath} locale="fr-FR">
          <div
            className={locale === 'fr-FR' ? classes.active : classes.link}
            onClick={() => setOpened(false)}
          >
            <Image src={'/images/fr-FR.svg'} alt="language switch" />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default LanguageSwitch
