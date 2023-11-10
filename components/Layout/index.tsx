import { FunctionComponent, PropsWithChildren } from "react";
import Header from "../Header";
import Footer from "../Footer";

type Props = PropsWithChildren<{}>

const Layout: FunctionComponent<Props> = ({children}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout;
