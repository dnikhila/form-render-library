import React from "react";
import { MuiButton, MuiTextField } from "../components";
import RadioButtonsGroup from "../components/Radio/Radio";
function Factory(_a) {
    var formFields = _a.formFields;
    console.log(formFields, "formFields");
    switch (formFields.type) {
        case "Button":
            return React.createElement(MuiButton, { options: formFields.options });
        case "Radio":
            return React.createElement(RadioButtonsGroup, null);
        case "TextField":
            return React.createElement(MuiTextField, { options: formFields.options });
        default:
            return React.createElement("div", null, "Reload...");
    }
}
function RenderForm(_a) {
    var formFields = _a.formFields;
    console.log(formFields, 'formFields');
    return (React.createElement("div", null, formFields.map(function (field, i) {
        return (React.createElement(Factory, { key: i, formFields: field }));
    })));
}
export default RenderForm;
