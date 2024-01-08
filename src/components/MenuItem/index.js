import { TEST_ID } from './constants';

import styles from './styles.module.scss';

const MenuItem = ({ className = '', testId = TEST_ID, text = '' }) => (
    <div className={`${className} ${styles.menuItem}`} data-testid={testId}>
        {text}
    </div>
);

export default MenuItem;
