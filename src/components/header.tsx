import React, { ReactElement } from "react"
import styled from "@emotion/styled"
import { ListLink } from "./list-link"

const HeaderEl = styled(`header`)`
  margin-bottom: 1.45rem;
`
const Wrapper = styled(`div`)`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`
const HeaderTitle = styled(`h1`)`
  display: inline;
  margin: 0;
`
const Navigation = styled(`ul`)`
  list-style: none;
  float: right;
`
const HomeLink = styled(`a`)`
  background-image: none;
`

const defaultProps = {
  siteTitle: ``,
}
type HeaderProps = { siteTile?: string } & typeof defaultProps

const Header = ({ siteTitle }: HeaderProps): ReactElement => (
  <HeaderEl>
    <Wrapper>
      <HeaderTitle>
        <HomeLink href="/">{siteTitle}</HomeLink>
      </HeaderTitle>
      <Navigation>
        <ListLink href="/students/">
          <h1>Students</h1>
        </ListLink>
        <ListLink href="/templates/">
          <h1>Templates</h1>
        </ListLink>
      </Navigation>
    </Wrapper>
  </HeaderEl>
)

export default Header

Header.defaultProps = defaultProps
