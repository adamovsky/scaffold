import InputWithLabel from './index';

const story = {
    component: InputWithLabel,
    title: 'InputWithLabel'
};

export default story;

const Template = args => <InputWithLabel {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    text: 'Some label'
};
