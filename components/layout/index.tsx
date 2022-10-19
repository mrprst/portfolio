import React from "react";
import { ReactNode } from "react";
import classes from './Layout.module.scss';

interface Props {
  children?: ReactNode
}

export default function Layout({ children }: Props) {

  return (
    <div className={classes.layout}>
      <div id="content">
        <main className={classes.main}>{children}</main>
      </div>
    </div>
  );
}
