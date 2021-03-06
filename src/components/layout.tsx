import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import NavBar from "./navbar"
import "bootstrap/dist/js/bootstrap.js"

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <NavBar siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="container-fluid px-0 main">
        <div className="row">
          <div className="col">
            <div className="container-fluid mt-3">
              <main>{children}</main>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
