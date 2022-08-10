import { ReactNode } from "react";
import Navbar from '../navbar/index';
import Sidebar from '../sidebar/index';
import classes from "./Layout.module.css";

interface Props {
  children?: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className={classes.layout}>{children}</div>
    </div>
  );
}
