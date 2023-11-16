import { useEffect, useRef } from 'react';

import Input from './index';

const story = {
    component: Input,
    title: 'Input'
};

export default story;

const Template = args => {
    const ref = useRef();

    return <Input ref={ref} {...args} />;
};

export const Primary = Template.bind({});

Primary.args = {
    hasError: false,
    isRequired: true,
    onChange: newValue => console.log('Input changed to: ', newValue),
    placeholder: 'Placeholder text'
};

const SubmitTemplate = args => {
    const ref = useRef();

    useEffect(() => {
        ref.current.dispatchEvent(new Event('submit'));
    }, []);

    return <Input ref={ref} {...args} />;
};

export const Submit = SubmitTemplate.bind({});

Submit.args = {
    hasError: false,
    isRequired: true,
    onChange: newValue => console.log('Input changed to: ', newValue),
    onSubmit: (inputValue, error) =>
        console.log('Submit with : ', { error, inputValue }),
    placeholder: 'Placeholder text'
};
