import ContentContainer from './index';

const story = {
    component: ContentContainer,
    title: 'ContentContainer'
};

export default story;

const Template = args => (
    <ContentContainer {...args}>Some Content</ContentContainer>
);

export const Primary = Template.bind({});

Primary.args = {};
