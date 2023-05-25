import React from 'react'
import Button from '@mui/material/Button'
import { ButtonProps } from './Button.props'

interface Props {
  options: ButtonProps
}
function MuiButton({ options }: Props) {
  const { heading, label, endIcon, startIcon, variant, handleClick, size } = options
  console.log(heading, label, endIcon, startIcon, variant, handleClick, 'handleClick')
  return (
    <div>
      {heading ? <p>{heading}</p> : null}
      <Button size={size} variant={variant} endIcon={endIcon} startIcon={startIcon} onClick={handleClick}>
        {label}
      </Button>
    </div>
  )
}

export default MuiButton
