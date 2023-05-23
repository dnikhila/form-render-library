"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
function MuiButton(_a) {
    var options = _a.options;
    var heading = options.heading, label = options.label, endIcon = options.endIcon, startIcon = options.startIcon, variant = options.variant, handleClick = options.handleClick, styles = options.styles;
    console.log(heading, label, endIcon, startIcon, variant, handleClick, styles, "handleClick");
    return (react_1.default.createElement("div", null,
        heading ?
            react_1.default.createElement("p", null, heading)
            : null,
        react_1.default.createElement("button", { style: styles, onClick: handleClick }, label)));
}
exports.default = MuiButton;
