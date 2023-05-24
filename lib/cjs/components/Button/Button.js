"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Button_1 = __importDefault(require("@mui/material/Button"));
function MuiButton(_a) {
    var options = _a.options;
    var heading = options.heading, label = options.label, endIcon = options.endIcon, startIcon = options.startIcon, variant = options.variant, handleClick = options.handleClick, size = options.size;
    console.log(heading, label, endIcon, startIcon, variant, handleClick, "handleClick");
    return (react_1.default.createElement("div", null,
        heading ?
            react_1.default.createElement("p", null, heading)
            : null,
        react_1.default.createElement(Button_1.default, { size: size, variant: variant, endIcon: endIcon, startIcon: startIcon, onClick: handleClick }, label)));
}
exports.default = MuiButton;
//# sourceMappingURL=Button.js.map