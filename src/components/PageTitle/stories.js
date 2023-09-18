import PageTitle from './index';

const story = {
    component: PageTitle,
    title: 'PageTitle'
};

export default story;

const Template = args => <PageTitle {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    text: 'This is page title text'
};
