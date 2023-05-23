import React from "react";
import { MuiButton, MuiTextField } from "../components";
import RadioButtonsGroup from "../components/Radio";

interface FormFields {
  type: string;
  options: any;
}

interface FactoryProps {
  formFields: FormFields
}

function Factory({ formFields }: FactoryProps) {
  console.log(formFields, "formFields")
  switch (formFields.type) {
    case "Button":
      return <MuiButton options={formFields.options} />;
    case "Radio":
      return <RadioButtonsGroup />;
    case "TextField":
      return <MuiTextField options={formFields.options} />
    default:
      return <div>Reload...</div>;
  }
}

interface Props {
  formFields: FormFields[]
}

function RenderForm({ formFields }: Props) {
  console.log(formFields, 'formFields')
  return (
    <div>
      {formFields.map((field, i) => {
        return (
          <Factory key={i} formFields={field} />
        )
      })}
    </div>
  )
}
export default RenderForm