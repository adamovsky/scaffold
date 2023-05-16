import { TEST_ID } from './constants';

import styles from './styles.module.scss';

const Error = ({ className = '', errorCode, testId = TEST_ID, text = '' }) => (
    <div className={`${styles.error} ${className}`} data-testid={testId}>
        <div className={styles.container}>
            <h1 className={styles.heading1}>{errorCode}</h1>

            <p className={styles.text}>{text}</p>
        </div>
    </div>
);

export default Error;
