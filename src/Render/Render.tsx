import React from 'react'
import { MuiButton, MuiTextField, MuiRadioGroup, ButtonProps, RadioProps, TextFieldProps } from '../components'
import { FormDiv } from './styles'

function Factory(type: string, data: any) {
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

const RenderForm: React.FunctionComponent = (layouts: Props) => {
  return (
    <FormDiv>
      <div style={{ padding: '3rem' }}>
        {Object.entries(layouts).map(([key, value]) => {
          return <>{Factory(key, value)}</>
        })}
      </div>
    </FormDiv>
  )
}
export default RenderForm
