import { ReactNode } from "react";
import Navbar from './navbar';

interface Props {
  children?: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div>
      <Navbar />
      <div className="container">{children}</div>
    </div>
  );
}
