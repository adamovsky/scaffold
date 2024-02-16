import Checkbox from '.';

const componentSettings = {
    component: Checkbox,
    title: 'Checkbox'
};

export default componentSettings;

const Template = ({ ...args }) => <Checkbox {...args} />;

export const Default = Template.bind({});

Default.args = {
    className: ''
};
