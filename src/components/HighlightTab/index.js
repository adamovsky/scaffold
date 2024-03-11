import Tab from 'components/Tab';

import { TEST_ID } from './constants';

import styles from './styles.module.scss';

const HighlightTab = ({
    children,
    className = '',
    isActive,
    onClick,
    testId = TEST_ID,
    text
}) => (
    <Tab
        className={`${className} ${styles.highlightTab} ${
            isActive ? styles.tabActive : ''
        }`}
        isActive={isActive}
        onClick={onClick}
        testId={testId}
    >
        {children || text}
    </Tab>
);

export default HighlightTab;
