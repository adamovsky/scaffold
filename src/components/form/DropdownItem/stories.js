import { useRef } from 'react';

import DropdownItem from './index';

const story = {
    component: DropdownItem,
    title: 'DropdownItem'
};

export default story;

const Template = args => {
    const ref = useRef();

    return <DropdownItem ref={ref} {...args} />;
};

export const Primary = Template.bind({});

Primary.args = {
    text: 'Dropdown item'
};
