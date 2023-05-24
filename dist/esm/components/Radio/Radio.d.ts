import * as React from 'react';
interface Option {
    id: string;
    label: string;
    value: string;
}
interface Props {
    options: {
        radioOptions: Option[];
        selectedOption: Option[];
        handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    };
}
export default function MuiRadioGroup({ options }: Props): React.JSX.Element;
export {};
