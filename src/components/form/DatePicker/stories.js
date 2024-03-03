import { useRef } from 'react';

import DatePicker from './index';

const story = {
    component: DatePicker,
    title: 'DatePicker'
};

export default story;

const Template = args => {
    const ref = useRef();

    return <DatePicker ref={ref} {...args} />;
};

export const Primary = Template.bind({});

Primary.args = {
    onChange: newValue => console.log('Input changed to: ', newValue),
    placeholder: 'Placeholder text'
};
