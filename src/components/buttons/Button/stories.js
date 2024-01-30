import Button from './index';

const story = {
    component: Button,
    title: 'Button'
};

export default story;

const Template = args => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    children: 'This is button content',
    isDisabled: false,
    onClick: () => {
        console.log('button clicked');
    }
};
