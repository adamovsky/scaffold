import { TEST_ID } from './constants';

import styles from './styles.module.scss';

const Checkbox = ({
    className = '',
    isChecked,
    isDisabled = false,
    onChange,
    testId = TEST_ID
}) => (
    <label className={`${className} ${styles.checkbox}`} data-testid={testId}>
        <input
            checked={isChecked}
            className={styles.input}
            disabled={isDisabled}
            onChange={onChange}
            type="checkbox"
        />

        <span className={styles.checkmark} />
    </label>
);

export default Checkbox;
