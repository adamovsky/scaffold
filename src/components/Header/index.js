import Logo from 'components/Logo';

import styles from './styles.module.scss';

const Header = () => (
    <header className={styles.header}>
        <Logo className={styles.logo} />
    </header>
);

export default Header;
