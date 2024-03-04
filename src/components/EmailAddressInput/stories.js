import EmailAddressInput from './index';

const story = {
    component: EmailAddressInput,
    title: 'EmailAddressInput'
};

export default story;

const Template = args => <EmailAddressInput {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    className: '',
    onError: message => console.log(message)
};
