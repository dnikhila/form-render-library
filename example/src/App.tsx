import React from 'react'
import './App.css'
// import {RenderForm}
import RenderForm from 'forms-render'

function Factory(type: string, data: any) {
  switch (type) {
    case 'Button':
      return <button>Hello</button>
    case 'Radio':
      return <div>TextFeild</div>
    case 'TextField':
      return 'TextField'
    default:
      return <div>Invalid Request</div>
  }
}

function App() {
  // console.log(RenderForm, 'RenderForm')
  const layouts = {
    Button: {
      label: 'Add Label',
      variant: 'contained',
      handleClick: () => {
        console.log('clicked Hsere')
      },
      size: 'small',
    },
    TextField: {
      placeholder: 'Enter the name',
      handleChange: (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
      },
      value: 'Testing',
      disabled: false,
      heading: 'Name',
    },
  }

  return (
    <div>
      {/* <RenderForm layouts={layouts} /> */}
    </div>
  )
}

export default App
