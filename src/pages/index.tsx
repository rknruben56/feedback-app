import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Feedback App" />
    <h1>Recent</h1>
    <p>Recently used templates go here</p>
  </Layout>
)

export default IndexPage
