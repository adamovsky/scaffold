import Footer from './index';

const story = {
    title: 'Footer',
    component: Footer
};

export default story;

const Template = args => <Footer {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
