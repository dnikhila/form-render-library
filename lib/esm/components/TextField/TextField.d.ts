import React from "react";
interface Props {
    options: {
        placeholder?: string;
        rows?: number;
        styles?: any;
        handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
        inputProps?: any;
        value?: string;
        disabled?: boolean;
        heading?: string;
    };
}
declare function MuiTextField({ options }: Props): React.JSX.Element;
export default MuiTextField;
