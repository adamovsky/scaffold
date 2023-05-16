import { TEST_ID } from './constants';

import styles from './styles.module.scss';

const Spinner = ({ testId = TEST_ID }) => (
    <div className={styles.spinner} data-testid={testId}>
        <div className={styles.dot}></div>
    </div>
);

export default Spinner;
