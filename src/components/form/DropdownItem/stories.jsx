import DropdownItem from './index';

const story = {
    component: DropdownItem,
    title: 'DropdownItem'
};

export default story;

const Template = args => <DropdownItem {...args} />;

export const Primary = Template.bind({});

Primary.defaultProps = {
    text: 'Dropdown item'
};
