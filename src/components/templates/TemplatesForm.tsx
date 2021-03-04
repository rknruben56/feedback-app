import React from "react"
import { useForm } from "react-hook-form"
import { Template } from "../../models/template"
import * as api from "../../api/TemplatesAPI"

type TemplatesFormProps = { onSubmitCallback: (isError: boolean, message: string) => void }

const TemplatesForm: React.FC<TemplatesFormProps> = ({ onSubmitCallback }: TemplatesFormProps) => {
  const { register, handleSubmit } = useForm<Template>()
  const onSubmit = async (data: Template) => {
    await api.CreateTemplate(data)
    onSubmitCallback(false, `Template successfully created!`)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="class">Class</label>
        <input className="form-control" type="text" id="name" name="class" ref={register} required />
      </div>
      <div className="form-group">
        <label htmlFor="class">Content</label>
        <textarea className="form-control" rows={20} id="content" name="content" ref={register} required />
      </div>
      <button className="btn btn-secondary btn-lg" type="submit">
        Add
      </button>
    </form>
  )
}

export default TemplatesForm
