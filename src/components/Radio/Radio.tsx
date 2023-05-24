import * as React from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

interface Option {
  id: string
  label: string
  value: string
}
interface Props {
  options: {
    radioOptions: Option[]
    selectedOption: Option[]
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  }
}

export default function MuiRadioGroup({ options }: Props) {
  const { radioOptions, selectedOption, handleChange } = options

  return (
    <FormControl>
      <FormLabel id='demo-controlled-radio-buttons-group'>Gender</FormLabel>
      <RadioGroup
        aria-labelledby='demo-controlled-radio-buttons-group'
        name='controlled-radio-buttons-group'
        value={selectedOption}
        onChange={handleChange}
      >
        {radioOptions.map((item: Option, index) => {
          return <FormControlLabel key={index} value={item.value} control={<Radio />} label={item.label} />
        })}
      </RadioGroup>
    </FormControl>
  )
}
