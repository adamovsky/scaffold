import Header from './index';

const story = {
    component: Header,
    title: 'Header'
};

export default story;

const Template = args => <Header {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
