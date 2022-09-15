import React from 'react';
import classes from './Button.module.scss'

interface SpecsProps {
  title: string;
  size: string
}

export default function Button ({title, size}:SpecsProps) {

  const computedClassName = size === 'lg' ? classes.buttonLg : classes.buttonSm;

  return (
    <div className={computedClassName}>
      <p className={classes.title}>{title}</p>
    </div>
  );
}

