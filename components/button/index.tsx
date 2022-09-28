import React from 'react';
import classes from './Button.module.scss'

interface SpecsProps {
  title: string;
  size: string;
  active: boolean
}

export default function Button ({title, size, active}:SpecsProps) {

  const computedClassName = size === 'lg' ? classes.buttonLg : classes.buttonSm;

  return (
    <div className={active ? `${computedClassName} ${classes.buttonActive} ` : `${computedClassName}`}>
      <p className={classes.title}>{title}</p>
    </div>
  );
}

