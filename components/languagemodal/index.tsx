import { useState } from 'react'
import { Modal, Button, Group } from '@mantine/core'
import { Radio } from '@mantine/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Image } from '@mantine/core'
import classes from './LanguageModal.module.scss'

function LanguageModal() {
  const { locale, asPath } = useRouter()
  const [opened, setOpened] = useState(false)

  console.log(locale)
  return (
    <div className={classes.container}>
      <Modal styles={{ modal: {backgroundColor: 'var(--background)' } }} opened={opened} onClose={() => setOpened(false)}>
        <div>
          <div className={classes.languages}>
            <Link href={asPath} locale="en-US">
              <div className={locale==="en-US" ? classes.active : classes.link} onClick={() => setOpened(false)}>English</div>
            </Link>
            <Link href={asPath} locale="es-ES">
              <div className={locale==="es-ES" ? classes.active : classes.link} onClick={() => setOpened(false)}>Español</div>
            </Link>
            <Link href={asPath} locale="fr-FR">
              <div className={locale==="fr-FR" ? classes.active : classes.link} onClick={() => setOpened(false)}>Français</div>
            </Link>
          </div>
        </div>
      </Modal>

      <Group position="center">
        <Image
          className={classes.logo}
          onClick={() => setOpened(true)}
          src={"/images/" + locale + ".svg"}
          alt="language switch"
        />
      </Group>
    </div>
  )
}

export default LanguageModal
