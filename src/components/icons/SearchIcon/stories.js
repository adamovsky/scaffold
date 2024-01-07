import SearchIcon from './index';

const story = {
    component: SearchIcon,
    title: 'SearchIcon'
};

export default story;

const Template = args => <SearchIcon {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
