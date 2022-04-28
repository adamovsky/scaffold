import Footer from './index';

const story = {
    component: Footer,
    title: 'Footer'
};

export default story;

const Template = args => <Footer {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
