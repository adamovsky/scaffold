import Error from './index';

const story = {
    component: Error,
    title: 'Error'
};

export default story;

const Template = args => <Error {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    errorCode: '123',
    text: 'Some error message'
};
