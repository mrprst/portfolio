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
        paddingTop: '2rem',
        paddingBottom: '2rem',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
    </Box>
    )
}

export default Footer