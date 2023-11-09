import { FunctionComponent, PropsWithChildren } from "react";
import Header from "../Header";

type Props = PropsWithChildren<{}>

const Layout: FunctionComponent<Props> = ({children}) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout;
