"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var Radio_1 = __importDefault(require("@mui/material/Radio"));
var RadioGroup_1 = __importDefault(require("@mui/material/RadioGroup"));
var FormControlLabel_1 = __importDefault(require("@mui/material/FormControlLabel"));
var FormControl_1 = __importDefault(require("@mui/material/FormControl"));
var FormLabel_1 = __importDefault(require("@mui/material/FormLabel"));
function RadioButtonsGroup() {
    return (React.createElement(FormControl_1.default, null,
        React.createElement(FormLabel_1.default, { id: "demo-radio-buttons-group-label" }, "Gender"),
        React.createElement(RadioGroup_1.default, { "aria-labelledby": "demo-radio-buttons-group-label", defaultValue: "female", name: "radio-buttons-group" },
            React.createElement(FormControlLabel_1.default, { value: "female", control: React.createElement(Radio_1.default, null), label: "Female" }),
            React.createElement(FormControlLabel_1.default, { value: "male", control: React.createElement(Radio_1.default, null), label: "Male" }),
            React.createElement(FormControlLabel_1.default, { value: "other", control: React.createElement(Radio_1.default, null), label: "Other" }))));
}
exports.default = RadioButtonsGroup;
