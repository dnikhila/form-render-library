import React from "react"
import { TextField } from "@mui/material"

interface Props {
    options: {
        placeholder?: string
        rows?: number;
        styles?: any;
        handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
        inputProps?: any;
        value?: string;
        disabled?: boolean;
        heading?: string;
        size: "small" | "medium"
    }
}

function MuiTextField({ options }: Props) {
    const { handleChange, placeholder, rows, styles, value, disabled, size } = options
    return (
        <TextField
            id="description"
            placeholder={placeholder}
            minRows={rows}
            multiline
            draggable={false}
            sx={styles}
            onChange={handleChange}
            inputProps={{ maxLength: 500 }}
            value={value}
            disabled={disabled}
            size={size}
        />
    )
}

export default MuiTextField