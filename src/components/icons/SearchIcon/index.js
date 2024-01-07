import Icon from 'components/Icon';

import image from './image.svg';

import { TEST_ID } from './constants';

const SearchIcon = ({ className = '', testId = TEST_ID }) => (
    <Icon className={`${className}`} image={image} testId={testId} />
);

export default SearchIcon;
