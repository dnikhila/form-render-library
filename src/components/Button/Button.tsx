import React from "react";
// import Button from '@mui/material/Button';

interface ButtonProps {
  options: {
    label: string;
    endIcon?: any;
    startIcon?: any;
    variant?: "contained" | "outlined";
    handleClick?: () => void;
    heading: string;
    styles?: any
  }
}

function MuiButton({ options }: ButtonProps) {
  const { heading, label, endIcon, startIcon, variant, handleClick, styles } = options;
  console.log(heading, label, endIcon, startIcon, variant, handleClick, styles, "handleClick")
  return (
    <div>
      {heading ?
        <p>{heading}</p>
        : null}
      {/* <Button variant={variant} endIcon={endIcon} startIcon={startIcon} onClick={handleClick}>
        {label}
      </Button> */}
      <button style={styles} onClick={handleClick}>{label}</button>
    </div>
  )
}

export default MuiButton;