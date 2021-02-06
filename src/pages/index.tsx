import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Feedback App" />
    <h1>Feedback</h1>
    <p>Recently done feedbacks go here</p>
  </Layout>
)

export default IndexPage
