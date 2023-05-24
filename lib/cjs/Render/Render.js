"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../components");
var styles_1 = require("./styles");
function Factory(_a) {
    var formFields = _a.formFields;
    console.log(formFields, 'formFields');
    switch (formFields.type) {
        case 'Button':
            return react_1.default.createElement(components_1.MuiButton, { options: formFields.options });
        case 'Radio':
            return react_1.default.createElement(components_1.MuiRadioGroup, { options: formFields.options });
        case 'TextField':
            return react_1.default.createElement(components_1.MuiTextField, { options: formFields.options });
        default:
            return react_1.default.createElement("div", null, "Invalid Request");
    }
}
function RenderForm(_a) {
    var formFields = _a.formFields;
    console.log(formFields, 'formFields');
    return (react_1.default.createElement(styles_1.FormDiv, null, formFields.map(function (field, i) {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(styles_1.Heading, null, field.options.heading),
            react_1.default.createElement(Factory, { key: i, formFields: field })));
    })));
}
exports.default = RenderForm;
//# sourceMappingURL=Render.js.map