import DropdownMenu from './index';
import { FunctionComponent, Props } from './types';

const story = {
    component: DropdownMenu,
    title: 'DropdownMenu'
};

export default story;

const Template: FunctionComponent<Props> = args => <DropdownMenu {...args} />;

export const Primary = Template.bind({});

Primary.defaultProps = {};
