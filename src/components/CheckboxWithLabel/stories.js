import CheckboxWithLabel from '.';

const componentSettings = {
    component: CheckboxWithLabel,
    title: 'CheckboxWithLabel'
};

export default componentSettings;

const Template = ({ ...args }) => <CheckboxWithLabel {...args} />;

export const Default = Template.bind({});

Default.args = {
    className: '',
    text: 'This is a label for radio button'
};
