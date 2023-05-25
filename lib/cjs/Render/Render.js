"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../components");
var styles_1 = require("./styles");
function Factory(_a) {
    var type = _a.type, data = _a.data;
    switch (type) {
        case 'button':
            return react_1.default.createElement(components_1.MuiButton, { options: data });
        case 'radio':
            return react_1.default.createElement(components_1.MuiRadioGroup, { options: data });
        case 'textField':
            return react_1.default.createElement(components_1.MuiTextField, { options: data });
        default:
            return react_1.default.createElement("div", null, "Invalid Request");
    }
}
function RenderForm(layouts) {
    console.log(Object.entries(layouts), layouts, 'layouts');
    return (react_1.default.createElement("div", { style: { width: '80%' } },
        react_1.default.createElement("div", { style: { padding: '3rem' } }, Object.entries(layouts).map(function (_a) {
            var key = _a[0], value = _a[1];
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(styles_1.Heading, null, value.heading),
                react_1.default.createElement(Factory, { type: key, data: value })));
        }))));
}
exports.default = RenderForm;
