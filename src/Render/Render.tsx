import React from 'react'
import { MuiButton, MuiTextField, MuiRadioGroup, ButtonProps, RadioProps, TextFieldProps } from '../components'
import { FormDiv } from './styles'

interface FactoryProps {
  type: string
  data: any
}

function Factory({ type, data }: FactoryProps) {
  switch (type) {
    case 'Button':
      return <MuiButton options={data} />
    case 'Radio':
      return <MuiRadioGroup options={data} />
    case 'TextField':
      return <MuiTextField options={data} />
    default:
      return <div>Invalid Request</div>
  }
}

interface Props {
  button?: ButtonProps
  radio?: RadioProps
  textfield?: TextFieldProps
}

function RenderForm(layouts: Props) {
  console.log(Object.entries(layouts), layouts, 'layouts')
  return (
    <FormDiv>
      <div style={{ padding: '3rem' }}>
        {Object.entries(layouts).map(([key, value]) => {
          return (
            <>
              <Factory type={key} data={value} />
            </>
          )
        })}
      </div>
    </FormDiv>
  )
}
export default RenderForm
