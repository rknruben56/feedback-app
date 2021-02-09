import React from "react"

type NavBarProps = { siteTitle: string; location: string }

const NavBar: React.FC<NavBarProps> = ({ siteTitle, location }: NavBarProps) => {
  const getLinkClass = (page = ``) => {
    const currentLocation = location.replace(/\//g, ``)
    if (page.toLowerCase() === currentLocation) {
      return `nav-item nav-link active`
    } else {
      return `nav-item nav-link`
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        <h1>{siteTitle}</h1>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarContent">
        <div className="navbar-nav mr-auto">
          <a className={getLinkClass()} href="/">
            Home
          </a>
          <a className={getLinkClass(`students`)} href="/students/">
            Students
          </a>
          <a className={getLinkClass(`classes`)} href="/classes/">
            Classes
          </a>
          <a className={getLinkClass(`templates`)} href="/templates/">
            Templates
          </a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
