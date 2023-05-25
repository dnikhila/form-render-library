"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heading = exports.FormDiv = void 0;
var material_1 = require("@mui/material");
var styled_components_1 = __importDefault(require("styled-components"));
exports.FormDiv = (0, styled_components_1.default)(material_1.Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 80%;\n"], ["\n  width: 80%;\n"])));
exports.Heading = styled_components_1.default.p(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 17px;\n  display: flex;\n  align-items: center;\n  color: #011428;\n  margin-bottom: 0.5rem;\n"], ["\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 17px;\n  display: flex;\n  align-items: center;\n  color: #011428;\n  margin-bottom: 0.5rem;\n"])));
var templateObject_1, templateObject_2;
