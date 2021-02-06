import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Heading = styled(`h1`)`
  display: inline;
`

const TemplatesPage: React.FC = () => (
  <Layout>
    <SEO title="Templates" />
    <div>
      <Heading>Templates</Heading>
      <button className="btn btn-outline-secondary float-end">Add Template</button>
    </div>
  </Layout>
)

export default TemplatesPage
