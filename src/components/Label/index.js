import { TEST_ID } from './constants';

import styles from './styles.module.scss';

const Label = ({ className = '', testId = TEST_ID, text = '' }) => (
    <label className={`${className} ${styles.label}`} data-testid={testId}>
        {text}
    </label>
);

export default Label;
