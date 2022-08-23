import React from 'react'
import { Box, Code, Text } from '@mantine/core'
import classes from './Tagline.module.scss'
import Button from '../button'

export default function Tagline() {
  return (
    <Box
      component="main"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        paddingTop: '2rem',
        paddingBottom: '2rem',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
      }}
      >
      <h1 className={classes.title}>
        Bonjour !<br/>I am Mathias, fullstack web-developer.
      </h1>

      <p className={classes.content}>
        Here, you will find everything I've done in my life that might interest you if you want us to work together.
      </p>
      <Button title='yoyoyo' size='lg'/>

    </Box>
    )
}
