import React from 'react'
import classes from './Tagline.module.scss'
import Button from '../button'

type LocaleProps = {
  localeFile: {
    taglineTitle: string
    taglineSubtitle: string
    taglineButton: string
  }
}

function Tagline({ localeFile }: LocaleProps) {


  return (
    <div className={classes.container}>
      <h1
        className={classes.title}
        dangerouslySetInnerHTML={{ __html: localeFile.taglineTitle }}
      ></h1>
      <p className={`sub ${classes.content}`}>{localeFile.taglineSubtitle}</p>
      <div className={classes.button}>
        <Button title={localeFile.taglineButton} size="lg" />
      </div>
    </div>
  )
}

export default Tagline
