import { TEST_ID } from './constants';

import styles from './styles.module.scss';

const FooterText = ({ testId = TEST_ID, text = '' }) => (
    <p className={styles.footerText} data-testid={testId}>
        {text}
    </p>
);

export default FooterText;
