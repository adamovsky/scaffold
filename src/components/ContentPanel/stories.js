import ContentPanel from './index';

const story = {
    component: ContentPanel,
    title: 'ContentPanel'
};

export default story;

const Template = args => <ContentPanel {...args}>Some Content</ContentPanel>;

export const Primary = Template.bind({});

Primary.args = {};
