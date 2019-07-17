import React from "react"
import GlobalStyles from "../styles/GlobalStyles"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  )
}
export default Layout
