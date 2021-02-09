import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TemplatesForm from "../components/templates-form"

const TemplatesPage: React.FC = () => {
  const [showAddForm, setShowAddForm] = useState(false)

  return (
    <Layout>
      <SEO title="Templates" />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-8">
            <h1>Templates</h1>
          </div>
          <div className="col-4 text-right">
            <button className="btn btn-outline-secondary" onClick={() => setShowAddForm(!showAddForm)}>
              {showAddForm ? `Cancel` : `Add Template`}
            </button>
          </div>
        </div>
        {showAddForm && <TemplatesForm />}
      </div>
    </Layout>
  )
}

export default TemplatesPage
