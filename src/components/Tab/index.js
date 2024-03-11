import { TEST_ID } from './constants';

import styles from './styles.module.scss';

const Tab = ({
    children,
    className,
    isActive,
    onClick,
    testId = TEST_ID,
    text
}) => (
    <span
        className={`${className} ${styles.tab} ${
            isActive ? styles.tabActive : ''
        }`}
        data-testid={testId}
        onClick={onClick}
    >
        {children || text}
    </span>
);

export default Tab;
