import React, { useState } from "react"
import MUIDataTable from "mui-datatables"

import TemplatesForm from "./templates-form"

const TemplatesComponent: React.FC = () => {
  const [showAddForm, setShowAddForm] = useState(false)
  const columns = [`Class`, `Content`, `Date Created`]
  const data = [
    [`Class 1`, `[Student] is doing really well`, new Date(`December 17, 2020 03:24:00`).toLocaleString()],
    [`Class 2`, `[Student] is doing poorly. [NextSteps]`, new Date(`December 17, 2020 03:24:00`).toLocaleString()],
  ]
  const options = {
    print: false,
    download: false,
  }

  return (
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
      {!showAddForm && <MUIDataTable title="" data={data} columns={columns} options={options} />}
    </div>
  )
}

export default TemplatesComponent
