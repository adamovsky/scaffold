import FooterText from './index';

const story = {
    component: FooterText,
    title: 'FooterText'
};

export default story;

const Template = args => <FooterText {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    text: 'This is footer text'
};
