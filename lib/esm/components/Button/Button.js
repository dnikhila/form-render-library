import React from "react";
function MuiButton(_a) {
    var options = _a.options;
    var heading = options.heading, label = options.label, endIcon = options.endIcon, startIcon = options.startIcon, variant = options.variant, handleClick = options.handleClick, styles = options.styles;
    console.log(heading, label, endIcon, startIcon, variant, handleClick, styles, "handleClick");
    return (React.createElement("div", null,
        heading ?
            React.createElement("p", null, heading)
            : null,
        React.createElement("button", { style: styles, onClick: handleClick }, label)));
}
export default MuiButton;
