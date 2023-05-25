import React from 'react'
import { TextField } from '@mui/material'
import { TextFieldProps } from './Textfield.props'

interface Props {
  options: TextFieldProps
}

function MuiTextField({ options }: Props) {
  const { handleChange, placeholder, rows, styles, value, disabled, size } = options
  return (
    <TextField
      id='description'
      placeholder={placeholder}
      minRows={rows}
      multiline
      draggable={false}
      sx={styles}
      onChange={handleChange}
      inputProps={{ maxLength: 500 }}
      value={value}
      disabled={disabled}
      size={size}
    />
  )
}

export default MuiTextField
