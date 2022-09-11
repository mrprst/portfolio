import { useState } from 'react'
import { Modal, Button, Group } from '@mantine/core'
import { Radio } from '@mantine/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Image } from '@mantine/core'
import classes from './LanguageSwitch.module.scss'

function LanguageSwitch() {
  const { locale, asPath } = useRouter()
  const [opened, setOpened] = useState(false)

  return (
    <div className={classes.container}>
      <div className={classes.languages}>
        <Link href={asPath} locale="en-US">
          <div
            className={locale === 'en-US' ? classes.active : classes.link}
            onClick={() => setOpened(false)}
          >
            en
          </div>
        </Link>
        <Link href={asPath} locale="es-ES">
          <div
            className={locale === 'es-ES' ? classes.active : classes.link}
            onClick={() => setOpened(false)}
          >
            es
          </div>
        </Link>
        <Link href={asPath} locale="fr-FR">
          <div
            className={locale === 'fr-FR' ? classes.active : classes.link}
            onClick={() => setOpened(false)}
          >
            fr
          </div>
        </Link>
      </div>
    </div>
  )
}

export default LanguageSwitch
