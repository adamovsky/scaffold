import DropdownMenu from './index';

const story = {
    component: DropdownMenu,
    title: 'DropdownMenu'
};

export default story;

const Template = args => <DropdownMenu {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
