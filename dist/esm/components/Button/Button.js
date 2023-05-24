import React from "react";
import Button from '@mui/material/Button';
function MuiButton(_a) {
    var options = _a.options;
    var heading = options.heading, label = options.label, endIcon = options.endIcon, startIcon = options.startIcon, variant = options.variant, handleClick = options.handleClick, size = options.size;
    console.log(heading, label, endIcon, startIcon, variant, handleClick, "handleClick");
    return (React.createElement("div", null,
        heading ?
            React.createElement("p", null, heading)
            : null,
        React.createElement(Button, { size: size, variant: variant, endIcon: endIcon, startIcon: startIcon, onClick: handleClick }, label)));
}
export default MuiButton;
//# sourceMappingURL=Button.js.map