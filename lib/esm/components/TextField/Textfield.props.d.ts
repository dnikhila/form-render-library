/// <reference types="react" />
export interface TextFieldProps {
    placeholder?: string;
    rows?: number;
    styles?: any;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    inputProps?: any;
    value?: string;
    disabled?: boolean;
    heading?: string;
    size: 'small' | 'medium';
}
