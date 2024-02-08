import { useRef } from 'react';

import Dropdown from './index';

const story = {
    component: Dropdown,
    title: 'Dropdown'
};

export default story;

const Template = args => {
    const ref = useRef();

    return <Dropdown ref={ref} {...args} />;
};

export const Primary = Template.bind({});

Primary.args = {
    onChange: newValue => console.log('Input changed to: ', newValue),
    placeholder: 'Placeholder text'
};
