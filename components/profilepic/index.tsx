import React, { useState, useEffect } from 'react'
import classes from './Profilepic.module.scss'
import { useRouter } from 'next/router'

type LocaleProps = {
  cta: string
}

export default function Profilepic({ cta }: LocaleProps) {
  const { locale } = useRouter()
  const [data, setData] = useState('')
  const [url, setUrl] = useState('')

  useEffect(() => {
    if (locale == 'fr-FR') {
      setUrl('/cv-mathias-prost.pdf')
    } else {
      setUrl('/mathias-prost-resume.pdf')
    }
  }, [locale])

  useEffect(() => {
    setData(cta)
  }, [cta])

  return (
    <a href={url}>
      <div className={classes.profilepic}>
        <div className={classes.link}>{data}</div>
      </div>
    </a>
  )
}
