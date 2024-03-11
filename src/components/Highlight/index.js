import { TEST_ID } from './constants';

import styles from './styles.module.scss';

const Highlight = ({ className = '', testId = TEST_ID }) => (
    <div
        className={`${className} ${styles.highlight}`}
        data-testid={testId}
    ></div>
);

export default Highlight;
