"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
function MuiTextField(_a) {
    var options = _a.options;
    var handleChange = options.handleChange, placeholder = options.placeholder, rows = options.rows, styles = options.styles, value = options.value, disabled = options.disabled, size = options.size;
    return (react_1.default.createElement(material_1.TextField, { id: 'description', placeholder: placeholder, minRows: rows, multiline: true, draggable: false, sx: styles, onChange: handleChange, inputProps: { maxLength: 500 }, value: value, disabled: disabled, size: size }));
}
exports.default = MuiTextField;
//# sourceMappingURL=TextField.js.map