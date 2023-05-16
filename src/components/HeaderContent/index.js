import Logo from 'components/Logo';

import { TEST_ID } from './constants';

import styles from './styles.module.scss';

const Header = ({ testId = TEST_ID }) => (
    <div className={styles.header} data-testid={testId}>
        <Logo className={styles.logo} />
    </div>
);

export default Header;
