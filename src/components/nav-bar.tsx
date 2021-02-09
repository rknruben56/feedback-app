import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const StyledLink = styled(Link)`
  color: white;
`

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
        <div className="nav-item nav-link">
          <StyledLink to="/" activeStyle={{ textDecoration: `underline` }}>
            Home
          </StyledLink>
        </div>
        <div className="nav-item nav-link">
          <StyledLink to="/students" activeStyle={{ textDecoration: `underline` }}>
            Students
          </StyledLink>
        </div>
        <div className="nav-item nav-link">
          <StyledLink to="/classes" activeStyle={{ textDecoration: `underline` }}>
            Classes
          </StyledLink>
        </div>
        <div className="nav-item nav-link">
          <StyledLink to="/templates" activeStyle={{ textDecoration: `underline` }}>
            Templates
          </StyledLink>
        </div>
      </div>
    </div>
  </nav>
)

export default NavBar
