import FirstNameInput from './index';

const story = {
    component: FirstNameInput,
    title: 'FirstNameInput'
};

export default story;

const Template = args => <FirstNameInput {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    className: '',
    onError: message => console.log(message)
};
