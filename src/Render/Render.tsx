import React from 'react'
import { MuiButton, MuiTextField, MuiRadioGroup, ButtonProps, RadioProps, TextFieldProps } from '../components'
import { Heading } from './styles'
// import { FormDiv } from './styles'

interface FactoryProps {
  type: string
  data: any
}

function Factory({ type, data }: FactoryProps) {
  switch (type) {
    case 'button':
      return <MuiButton options={data} />
    case 'radio':
      return <MuiRadioGroup options={data} />
    case 'textField':
      return <MuiTextField options={data} />
    default:
      return <div>Invalid Request</div>
  }
}

interface Props {
  button?: ButtonProps
  radio?: RadioProps
  textField?: TextFieldProps
}

function RenderForm(layouts: Props) {
  console.log(Object.entries(layouts), layouts, 'layouts')
  return (
    <div style={{ width: '80%' }}>
      <div style={{ padding: '3rem' }}>
        {Object.entries(layouts).map(([key, value]) => {
          return (
            <>
              <Heading>{value.heading}</Heading>
              <Factory type={key} data={value} />
            </>
          )
        })}
      </div>
    </div>
  )
}
export default RenderForm
