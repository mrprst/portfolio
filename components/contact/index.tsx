import React, { useState, useEffect } from 'react'
import Button from '../button'
import classes from './Contact.module.scss'

type Language = {
  file: object
}

export default function Contact(props: Language) {
  const [data, setData] = useState({
    contact: "",
    contactText: "",
    contactCTA: "",
  })

  useEffect( () => {
    setData(props.file);
  }, [props.file]);

  return (
    <div id='contact' className={classes.container}>
      <h1 className={classes.title}>{data.contact}</h1>
      <p>{data.contactText}</p>
      <Button title={data.contactCTA} size="sm" />
    </div>
  )
}
