import React, { useState } from "react"
import MUIDataTable from "mui-datatables"
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"

import TemplatesForm from "./templates-form"
import { Template } from "../../models/template"

const TemplatesComponent: React.FC = () => {
  const maxContentLength = 50
  const [showAddForm, setShowAddForm] = useState(false)
  const data: Template[] = [
    {
      id: 1,
      class: `Class 1`,
      content: `[Student] is doing really well`,
      dateCreated: new Date(`December 17, 2020 03:24:00`).toLocaleString(),
    },
    {
      id: 2,
      class: `Class 2`,
      content: `[Student] is doing poorly`,
      dateCreated: new Date(`December 10, 2020 03:24:00`).toLocaleString(),
    },
    {
      id: 3,
      class: `Class 3`,
      content: `[Student] is doing poorly`,
      dateCreated: new Date(`December 10, 2020 03:24:00`).toLocaleString(),
    },
    {
      id: 4,
      class: `Class 4`,
      content: `[Student] is doing poorly`,
      dateCreated: new Date(`December 10, 2020 03:24:00`).toLocaleString(),
    },
    {
      id: 5,
      class: `Class 5`,
      content: `[Student] is doing poorly`,
      dateCreated: new Date(`December 10, 2020 03:24:00`).toLocaleString(),
    },
    {
      id: 6,
      class: `Class 6`,
      content: `[Student] is doing poorly`,
      dateCreated: new Date(`December 10, 2020 03:24:00`).toLocaleString(),
    },
    {
      id: 7,
      class: `Class 7`,
      content: `[Student] is doing poorly`,
      dateCreated: new Date(`December 10, 2020 03:24:00`).toLocaleString(),
    },
    {
      id: 8,
      class: `Class 8`,
      content: `[Student] is doing poorly`,
      dateCreated: new Date(`December 10, 2020 03:24:00`).toLocaleString(),
    },
    {
      id: 9,
      class: `Class 9`,
      content: `[Student] is doing poorly`,
      dateCreated: new Date(`December 10, 2020 03:24:00`).toLocaleString(),
    },
    {
      id: 10,
      class: `Class 1`,
      content: `[Student] is doing poorly`,
      dateCreated: new Date(`December 10, 2020 03:24:00`).toLocaleString(),
    },
  ]

  const columns = [
    {
      name: `class`,
      label: `Class`,
    },
    {
      name: `content`,
      label: `Content`,
      options: {
        customBodyRenderLite: (dataIndex: number) => {
          const content = data[dataIndex].content
          return content.length > maxContentLength ? `${content.substring(0, maxContentLength)}...` : content
        },
      },
    },
    {
      name: `dateCreated`,
      label: `Date Created`,
    },
  ]
  const options = {
    print: false,
    download: false,
    expandableRows: true,
    expandableRowsOnClick: true,
    renderExpandableRow: (rowData: string[], rowMeta: { dataIndex: number; rowIndex: number }) => {
      const colSpan = rowData.length + 1
      return (
        <TableRow>
          <TableCell colSpan={colSpan}>{data[rowMeta.dataIndex].content}</TableCell>
        </TableRow>
      )
    },
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
      <div className="pt-3">
        {showAddForm && <TemplatesForm />}
        {!showAddForm && <MUIDataTable title="Your Templates" data={data} columns={columns} options={options} />}
      </div>
    </div>
  )
}

export default TemplatesComponent
