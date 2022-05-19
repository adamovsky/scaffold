import Logo from 'components/Logo';

import styles from './styles.module.scss';

const Header = () => (
    <div className={styles.header}>
        <Logo className={styles.logo} />
    </div>
);

export default Header;
