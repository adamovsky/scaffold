import Icon from './index';

const story = {
    component: Icon,
    title: 'Icon'
};

export default story;

const Template = args => <Icon {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    image: ''
};
