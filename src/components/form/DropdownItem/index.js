import { TEST_ID } from './constants';

import styles from './styles.module.scss';

const DropdownItem = ({
    className = '',
    onClick,
    testId = TEST_ID,
    text = ''
}) => (
    <div
        className={`${className} ${styles.dropdownItem}`}
        data-testid={testId}
        onClick={onClick}
    >
        {text}
    </div>
);

export default DropdownItem;
