import React from 'react';
import { MuiButton, MuiTextField, MuiRadioGroup } from '../components';
import { FormDiv } from './styles';
function Factory(_a) {
    var type = _a.type, data = _a.data;
    switch (type) {
        case 'Button':
            return React.createElement(MuiButton, { options: data });
        case 'Radio':
            return React.createElement(MuiRadioGroup, { options: data });
        case 'TextField':
            return React.createElement(MuiTextField, { options: data });
        default:
            return React.createElement("div", null, "Invalid Request");
    }
}
function RenderForm(layouts) {
    console.log(Object.entries(layouts), layouts, 'layouts');
    return (React.createElement(FormDiv, null,
        React.createElement("div", { style: { padding: '3rem' } }, Object.entries(layouts).map(function (_a) {
            var key = _a[0], value = _a[1];
            return (React.createElement(React.Fragment, null,
                React.createElement(Factory, { type: key, data: value })));
        }))));
}
export default RenderForm;
//# sourceMappingURL=Render.js.map