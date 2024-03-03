import { useRef } from 'react';

import InputWithIcons from './index';

const story = {
    component: InputWithIcons,
    title: 'InputWithIcons'
};

export default story;

const Template = args => {
    const ref = useRef();

    return <InputWithIcons ref={ref} {...args} />;
};

export const Primary = Template.bind({});

Primary.args = {
    hasError: false,
    isRequired: true,
    label: 'Some label',
    onChange: newValue => console.log('InputWithIcons changed to: ', newValue),
    placeholder: 'Placeholder text'
};
