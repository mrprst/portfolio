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

  console.log(opened)

  return (
    <div className={classes.container}>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!"
      >
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
            <p onClick={() => setOpened(false)}>es-ES</p>
          </Link>

          <Link href={asPath} locale="en-US">
            <p onClick={() => setOpened(false)}>en-US</p>
          </Link>
          <Link href={asPath} locale="fr-FR">
            <p onClick={() => setOpened(false)}>fr-FR</p>
          </Link>
        </div>
      </Modal>

      <Group position="center">
        <Image className={classes.logo} onClick={() => setOpened(true)} src="/language.svg" alt="language switch" />
      </Group>
    </div>
  )
}

export default LanguageSwitch
