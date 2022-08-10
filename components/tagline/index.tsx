import React from 'react'
import { Box, Code, Text } from '@mantine/core'
import classes from './Tagline.module.css'

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
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
      <h1 className={classes.title}>
        mrprst.dev
      </h1>

      <p className={classes.content}>Hello, this is my website. I'm a
        <Code
          sx={{
            color: 'black',
            fontSize: '0.8rem',
            textAlign: 'center',
          }}
          >
          fullstack
        </Code> web developer.
        <br />
        Here, you will find everything I've done in my life that might interest you if you want us to work together.
      </p>

      {/* <Grid>
        <Card
        title="Documentation &rarr;"
        description="Find in-depth information about Next.js features and API."
        link="https://nextjs.org/docs"
        />
        <Card
        title="Learn &rarr;"
        description="Learn about Next.js in an interactive course with quizzes!"
        link="https://nextjs.org/learn"
        />
        <Card
        title="Examples &rarr;"
        description="Discover and deploy boilerplate example Next.js projects."
        link="https://nextjs.org/examples"
        />
        <Card
        title="Deploy &rarr;"
        description="Instantly deploy your Next.js site to a public URL with Vercel."
        link="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        />
      </Grid> */}
    </Box>
    )
}
