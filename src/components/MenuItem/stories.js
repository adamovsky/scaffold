import MenuItem from './index';

const story = {
    component: MenuItem,
    title: 'MenuItem'
};

export default story;

const Template = args => <MenuItem {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
