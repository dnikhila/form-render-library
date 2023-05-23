import React from "react";
import { TextField } from "@mui/material";
function MuiTextField(_a) {
    var options = _a.options;
    var heading = options.heading, handleChange = options.handleChange, placeholder = options.placeholder, rows = options.rows, styles = options.styles, value = options.value, disabled = options.disabled;
    return (React.createElement("div", null,
        heading ?
            React.createElement("p", null, heading)
            : null,
        React.createElement(TextField, { id: "description", placeholder: placeholder, minRows: rows, multiline: true, draggable: false, sx: styles, onChange: handleChange, inputProps: { maxLength: 500 }, value: value, disabled: disabled })));
}
export default MuiTextField;
