import React, { useState, useEffect } from 'react';
import classes from './Profilepic.module.scss'

type Language = {
  cta: string
}

export default function Profilepic (props: Language) {
  const [data, setData] = useState("")

  useEffect( () => {
    setData(props.cta);
  }, [props.cta]);

  return (
    <div className={classes.profilepic}>
      <div className={classes.link}>{data}</div>
    </div>
  );
}

