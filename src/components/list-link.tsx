import React, { FunctionComponent } from "react"
import styled from "@emotion/styled"

const ListElement = styled("li")`
  display: inline-block;
  margin-right: 1.5rem;
`

type ListLinkProps = { href: string }

export const ListLink: FunctionComponent<ListLinkProps> = ({ href, children }) => (
  <ListElement>
    <a href={href}>{children}</a>
  </ListElement>
)