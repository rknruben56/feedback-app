import React, { useEffect, useState } from "react"
import MUIDataTable from "mui-datatables"
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"

import TemplatesForm from "./TemplatesForm"
import { Template } from "../../models/template"
import * as API from "../../api/TemplatesAPI"

const TemplatesComponent: React.FC = () => {
  const maxContentLength = 25
  const [showAddForm, setShowAddForm] = useState(false)
  const [data, setData] = useState([] as Template[])

  useEffect(() => {
    fetchTemplates()
  }, [])

  const fetchTemplates = async () => {
    const templates = await API.GetTemplates()
    setData(templates)
  }

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
      name: `created_at`,
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
          <TableCell colSpan={colSpan}>
            <div className="text-break">{data[rowMeta.dataIndex].content}</div>
          </TableCell>
        </TableRow>
      )
    },
  }

  return (
    <div className="container-fluid">
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
