import React from "react"
import { useForm } from "react-hook-form"
import { Template } from "../../models/template"

const TemplatesForm: React.FC = () => {
  const { register, handleSubmit } = useForm<Template>()
  const onSubmit = (data: Template) => {
    alert(JSON.stringify(data))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="class">Class</label>
        <input className="form-control" type="text" id="name" name="class" ref={register} />
      </div>
      <div className="form-group">
        <label htmlFor="class">Content</label>
        <textarea className="form-control" rows={3} id="content" name="content" ref={register} />
      </div>
      <button className="btn btn-secondary btn-lg" type="submit">
        Add
      </button>
    </form>
  )
}

export default TemplatesForm
