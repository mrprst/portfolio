import { ReactNode } from "react";
import Navbar from '../navbar/index';
import Sidebar from '../sidebar/index';
import classes from './Layout.module.scss';
import Footer from '../footer/index'

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
