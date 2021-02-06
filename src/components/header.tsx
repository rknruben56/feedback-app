import React, { ReactElement } from "react"

const defaultProps = {
  siteTitle: ``,
}
type HeaderProps = { siteTile?: string } & typeof defaultProps

const Header = ({ siteTitle }: HeaderProps): ReactElement => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
      {siteTitle}
      </h1>
    </div>
  </header>
)

export default Header

Header.defaultProps = defaultProps
