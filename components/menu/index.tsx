import React from 'react';
import classes from "./Menu.module.scss";
import Link from 'next/link';


function Menu() {
  return (
    <div className={classes.menu} >
      <Link href="#about">
        <div className={classes.a}>
          about
        </div>
      </Link>
      <Link href="#projects">
        <div className={classes.a}>
          projects
        </div>
      </Link>
      <Link href="#contact">
        <div className={classes.a}>
          contact
        </div>
      </Link>
      <a
        href="/mathias-prost-resume.pdf"
        target="_blank"
      >
        <div className={classes.a}>
          resume
        </div>
      </a>
    </div>
  );
}

export default Menu;