import Menu from './index';

const story = {
    component: Menu,
    title: 'Menu'
};

export default story;

const Template = args => <Menu {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
