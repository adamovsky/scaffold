import WithMenu from './index';

const story = {
    component: WithMenu,
    title: 'WithMenu'
};

export default story;

const Template = args => <WithMenu {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
