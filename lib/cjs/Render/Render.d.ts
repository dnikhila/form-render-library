import React from 'react';
import { ButtonProps, RadioProps, TextFieldProps } from '../components';
interface Props {
    button?: ButtonProps;
    radio?: RadioProps;
    textField?: TextFieldProps;
}
declare function RenderForm(layouts: Props): React.JSX.Element;
export default RenderForm;
