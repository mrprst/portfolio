import React, { useState, useEffect } from 'react';
import classes from './Profilepic.module.scss'


type LocaleProps = {
  cta: string
}

export default function Profilepic ({cta}: LocaleProps) {
  const [data, setData] = useState("")

  useEffect( () => {
    setData(cta);
  }, [cta]);

  return (
    <div className={classes.profilepic}>
      <div className={classes.link}>{data}</div>
    </div>
  );
}

