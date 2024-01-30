import InputLabel from './index';

const story = {
    component: InputLabel,
    title: 'InputLabel'
};

export default story;

const Template = args => <InputLabel {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    text: 'This is a label'
};
