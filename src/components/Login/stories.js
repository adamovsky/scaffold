import Login from './index';

const story = {
    component: Login,
    title: 'Login'
};

export default story;

const Template = args => <Login {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
