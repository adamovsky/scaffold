import { useRef } from 'react';

import Select from './index';

const story = {
    component: Select,
    title: 'Select'
};

export default story;

const Template = args => {
    const ref = useRef();

    return <Select ref={ref} {...args} />;
};

export const Primary = Template.bind({});

Primary.args = {
    placeholder: 'Placeholder text'
};
