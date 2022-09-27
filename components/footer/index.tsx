import React from 'react'
import { Box } from '@mantine/core'
import classes from './Footer.module.scss'

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        flex: '1',
        paddingLeft: '100px',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        <p className={classes.footerText}>Mathias Prost - 2022 - Made with Typescript on Next.js</p>
    </Box>
    )
}

export default Footer