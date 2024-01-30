import SubmitButton from './index';

const story = {
    component: SubmitButton,
    title: 'SubmitButton'
};

export default story;

const Template = args => <SubmitButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    isDisabled: false,

    onClick: () => {
        console.log('submit button clicked');
    },

    text: 'This is an submit button'
};
