import React from 'react';
import { MuiButton, MuiTextField, MuiRadioGroup } from '../components';
import { Heading, FormDiv } from './styles';
function Factory(_a) {
    var formFields = _a.formFields;
    console.log(formFields, 'formFields');
    switch (formFields.type) {
        case 'Button':
            return React.createElement(MuiButton, { options: formFields.options });
        case 'Radio':
            return React.createElement(MuiRadioGroup, { options: formFields.options });
        case 'TextField':
            return React.createElement(MuiTextField, { options: formFields.options });
        default:
            return React.createElement("div", null, "Invalid Request");
    }
}
function RenderForm(_a) {
    var formFields = _a.formFields;
    console.log(formFields, 'formFields');
    return (React.createElement(FormDiv, null, formFields.map(function (field, i) {
        return (React.createElement(React.Fragment, null,
            React.createElement(Heading, null, field.options.heading),
            React.createElement(Factory, { key: i, formFields: field })));
    })));
}
export default RenderForm;
//# sourceMappingURL=Render.js.map