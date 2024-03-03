import CalendarIcon from './index';

const story = {
    component: CalendarIcon,
    title: 'CalendarIcon'
};

export default story;

const Template = args => <CalendarIcon {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
