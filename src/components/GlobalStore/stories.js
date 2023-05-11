import GlobalStore from './index';

const story = {
    component: GlobalStore,
    title: 'GlobalStore'
};

export default story;

const Template = args => <GlobalStore {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
