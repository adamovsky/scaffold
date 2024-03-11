import { TEST_ID } from './constants';

import styles from './styles.module.scss';

const Tabs = ({ children, className, testId = TEST_ID }) => (
    <div className={`${className} ${styles.tabs}`} data-testid={testId}>
        {children}
    </div>
);

export default Tabs;
