"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../components");
var Radio_1 = __importDefault(require("../components/Radio"));
function Factory(_a) {
    var formFields = _a.formFields;
    console.log(formFields, "formFields");
    switch (formFields.type) {
        case "Button":
            return react_1.default.createElement(components_1.MuiButton, { options: formFields.options });
        case "Radio":
            return react_1.default.createElement(Radio_1.default, null);
        case "TextField":
            return react_1.default.createElement(components_1.MuiTextField, { options: formFields.options });
        default:
            return react_1.default.createElement("div", null, "Reload...");
    }
}
function RenderForm(_a) {
    var formFields = _a.formFields;
    console.log(formFields, 'formFields');
    return (react_1.default.createElement("div", null, formFields.map(function (field, i) {
        return (react_1.default.createElement(Factory, { key: i, formFields: field }));
    })));
}
exports.default = RenderForm;
