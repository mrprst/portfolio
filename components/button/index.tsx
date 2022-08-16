import React from 'react';
import classes from './Button.module.scss'

interface Spec {
  title: string;
  size: string
}

export default function Button (props:Spec) {

  const computedClassName = props.size === 'lg' ? classes.buttonLg : classes.buttonSm;

  return (
    <div className={computedClassName}>
      <p className={classes.title}>{props.title}</p>
    </div>
  );
}

