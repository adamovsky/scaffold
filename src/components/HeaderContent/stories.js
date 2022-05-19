import HeaderContent from './index';

const story = {
    component: HeaderContent,
    title: 'HeaderContent'
};

export default story;

const Template = args => <HeaderContent {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
