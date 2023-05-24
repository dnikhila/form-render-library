import React from 'react'
import { MuiButton, MuiTextField, MuiRadioGroup } from '../components'
import { Heading, FormDiv } from './styles'

interface FormFields {
  type: string
  options: any
}

interface FactoryProps {
  formFields: FormFields
}

function Factory({ formFields }: FactoryProps) {
  console.log(formFields, 'formFields')
  switch (formFields.type) {
    case 'Button':
      return <MuiButton options={formFields.options} />
    case 'Radio':
      return <MuiRadioGroup options={formFields.options} />
    case 'TextField':
      return <MuiTextField options={formFields.options} />
    default:
      return <div>Invalid Request</div>
  }
}

interface Props {
  formFields: FormFields[]
}

function RenderForm({ formFields }: Props) {
  console.log(formFields, 'formFields')
  return (
    <FormDiv>
      {formFields.map((field, i) => {
        return (
          <>
            <Heading>{field.options.heading}</Heading>
            <Factory key={i} formFields={field} />
          </>
        )
      })}
    </FormDiv>
  )
}
export default RenderForm
