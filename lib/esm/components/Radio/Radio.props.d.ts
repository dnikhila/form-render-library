/// <reference types="react" />
export interface RadioOption {
    id: string;
    label: string;
    value: string;
}
export interface RadioProps {
    radioOptions: RadioOption[];
    selectedOption: RadioOption;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    heading: string;
}
