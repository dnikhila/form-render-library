import React from 'react';
import './App.css';
import { RenderForm } from "typescript-forms-render";

function App() {
  // console.log(RenderForm, 'RenderForm')
  const formFields = [
    {
      type: "Button",
      options: {
        label: "Add Label",
        variant: "contained",
        handleClick: () => { console.log("clicked Here") },
        styles: {
          height: "2rem",
          border: " 1px solid grey",
          borderRadius: "10px",
          background: "cadetblue",
          color: "white",
          padding: "0 14px",
          marginTop: "1rem",
          cursor: "pointer"
        }
      }
    },
    {
      type: "TextField",
      options: {
        placeholder: "Enter the name",
        handleChange: (event: React.ChangeEvent<HTMLInputElement>) => { console.log(event) },
        value: "Testing",
        disabled: false,
        heading: "Name"
      }
    }
  ]
  return (
    <div>
      <RenderForm formFields={formFields} />
    </div>
  );
}

export default App;
