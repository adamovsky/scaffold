import PasswordInput from './index';

const story = {
    component: PasswordInput,
    title: 'PasswordInput'
};

export default story;

const Template = args => <PasswordInput {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    className: '',
    onError: message => console.log(message)
};
