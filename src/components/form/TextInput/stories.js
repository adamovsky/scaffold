import { useEffect, useRef } from 'react';

import TextInput from './index';

const story = {
    component: TextInput,
    title: 'TextInput'
};

export default story;

const Template = args => {
    const ref = useRef();

    return <TextInput ref={ref} {...args} />;
};

export const Primary = Template.bind({});

Primary.args = {
    hasError: false,
    isRequired: true,
    label: 'Some label',
    onChange: newValue => console.log('TextInput changed to: ', newValue),
    placeholder: 'Placeholder text'
};

const SubmitTemplate = args => {
    const ref = useRef();

    useEffect(() => {
        ref.current.dispatchEvent(new Event('submit'));
    }, []);

    return <TextInput ref={ref} {...args} />;
};

export const Submit = SubmitTemplate.bind({});

Submit.args = {
    hasError: false,
    isRequired: true,
    label: 'Some label',
    onChange: newValue => console.log('TextInput changed to: ', newValue),
    onSubmit: (inputValue, error) =>
        console.log('Submit with : ', { error, inputValue }),
    placeholder: 'Placeholder text'
};
