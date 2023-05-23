import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
export default function RadioButtonsGroup() {
    return (React.createElement(FormControl, null,
        React.createElement(FormLabel, { id: "demo-radio-buttons-group-label" }, "Gender"),
        React.createElement(RadioGroup, { "aria-labelledby": "demo-radio-buttons-group-label", defaultValue: "female", name: "radio-buttons-group" },
            React.createElement(FormControlLabel, { value: "female", control: React.createElement(Radio, null), label: "Female" }),
            React.createElement(FormControlLabel, { value: "male", control: React.createElement(Radio, null), label: "Male" }),
            React.createElement(FormControlLabel, { value: "other", control: React.createElement(Radio, null), label: "Other" }))));
}
