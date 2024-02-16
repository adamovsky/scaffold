import Label from '.';

const componentSettings = {
    component: Label,
    title: 'Label'
};

export default componentSettings;

const Template = ({ ...args }) => <Label {...args} />;

export const Default = Template.bind({});

Default.args = {
    text: 'This is a label'
};
