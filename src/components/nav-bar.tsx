import React from "react"

type NavBarProps = { siteTitle: string }

const NavBar: React.FC<NavBarProps> = ({ siteTitle }: NavBarProps) => (
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
        <a className="nav-item nav-link" href="/">
          Home
        </a>
        <a className="nav-item nav-link" href="/students/">
          Students
        </a>
        <a className="nav-item nav-link" href="/templates/">
          Templates
        </a>
      </div>
    </div>
  </nav>
)

export default NavBar
