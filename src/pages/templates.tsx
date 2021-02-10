import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TemplatesComponent from "../components/templates/templates-component"

const TemplatesPage: React.FC = () => (
  <Layout>
    <SEO title="Templates" />
    <TemplatesComponent />
  </Layout>
)

export default TemplatesPage
