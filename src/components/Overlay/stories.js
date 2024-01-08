import Overlay from './index';

const story = {
    component: Overlay,
    title: 'Overlay'
};

export default story;

const Template = args => <Overlay {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
