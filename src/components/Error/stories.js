import Error from './index';

export default {
    title: 'Error',
    component: Error
};

const Template = args => <Error {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    errorCode: '123',
    text: 'Some error message'
};
