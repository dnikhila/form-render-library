import React from 'react';
import './App.css';
// import {RenderForm}
import RenderForm from "forms-render"

function App() {
  // console.log(RenderForm, 'RenderForm')
  const formFields = [
    {
      type: "Button",
      options: {
        label: "Add Label",
        variant: "contained",
        handleClick: () => {
          console.log("clicked Hsere");
        },
        size: "small",
      },
    },
    {
      type: "TextField",
      options: {
        placeholder: "Enter the name",
        handleChange: (event: React.ChangeEvent<HTMLInputElement>) => {
          console.log(event);
        },
        value: "Testing",
        disabled: false,
        heading: "Name",
      },
    },
  ]
  return (
    <div>
      <RenderForm
        formFields={formFields}
      />
    </div>
  );
}

export default App;
