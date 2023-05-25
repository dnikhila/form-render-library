import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
export default function MuiRadioGroup(_a) {
    var options = _a.options;
    var radioOptions = options.radioOptions, selectedOption = options.selectedOption, handleChange = options.handleChange;
    return (React.createElement(FormControl, null,
        React.createElement(FormLabel, { id: 'demo-controlled-radio-buttons-group' }, "Gender"),
        React.createElement(RadioGroup, { "aria-labelledby": 'demo-controlled-radio-buttons-group', name: 'controlled-radio-buttons-group', value: selectedOption, onChange: handleChange }, radioOptions.map(function (item, index) {
            return React.createElement(FormControlLabel, { key: index, value: item.value, control: React.createElement(Radio, null), label: item.label });
        }))));
}
//# sourceMappingURL=Radio.js.map