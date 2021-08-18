import Header from './index';

const story = {
    title: 'Header',
    component: Header
};

export default story;

const Template = args => <Header {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
