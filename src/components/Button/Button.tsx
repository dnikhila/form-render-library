import React from "react";
import Button from '@mui/material/Button';

interface ButtonProps {
  options: {
    label: string;
    endIcon?: any;
    startIcon?: any;
    variant?: "contained" | "outlined";
    handleClick?: () => void;
    heading: string,
    size: "small" | "medium" | "large"
  }
}

function MuiButton({ options }: ButtonProps) {
  const { heading, label, endIcon, startIcon, variant, handleClick, size } = options;
  console.log(heading, label, endIcon, startIcon, variant, handleClick, "handleClick")
  return (
    <div>
      {heading ?
        <p>{heading}</p>
        : null}
      <Button size={size} variant={variant} endIcon={endIcon} startIcon={startIcon} onClick={handleClick}>
        {label}
      </Button>
    </div>
  )
}

export default MuiButton;