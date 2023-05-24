import React from 'react';
interface FormFields {
    type: string;
    options: any;
}
interface Props {
    formFields: FormFields[];
}
declare function RenderForm({ formFields }: Props): React.JSX.Element;
export default RenderForm;
