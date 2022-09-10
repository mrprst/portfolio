import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Code, Text } from '@mantine/core'
import classes from './Tagline.module.scss'
import Button from '../button'

type Language = {
  file: object
}

export default function Tagline(props: Language) {
  const [data, setData] = useState({
    taglineTitle: "",
    taglineSubtitle: "",
    taglineButton: "",
  })

  useEffect( () => {
    setData(props.file);
  }, [props.file]);

  return (
      <div className={classes.container}>
        <h1 className={classes.title} dangerouslySetInnerHTML={ { __html: data.taglineTitle } }></h1>
        <p className={classes.content}>
          {data.taglineSubtitle}
        </p>
        <div className={classes.button}>
          <Button title={data.taglineButton} size="lg" />
        </div>
      </div>
  )
}
