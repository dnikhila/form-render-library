import React from "react";
interface ButtonProps {
    options: {
        label: string;
        endIcon?: any;
        startIcon?: any;
        variant?: "contained" | "outlined";
        handleClick?: () => void;
        heading: string;
        styles?: any;
    };
}
declare function MuiButton({ options }: ButtonProps): React.JSX.Element;
export default MuiButton;
