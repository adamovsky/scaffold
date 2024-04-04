import Dropdown from './index';

const story = {
    component: Dropdown,
    title: 'Dropdown'
};

export default story;

const Template = args => <Dropdown {...args} />;

export const Primary = Template.bind({});

Primary.defaultProps = {
    onChange: newValue => console.log('Input changed to: ', newValue),
    placeholder: 'Placeholder text'
};
