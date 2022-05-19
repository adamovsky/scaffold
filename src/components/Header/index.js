import ContentContainer from 'components/ContentContainer';
import HeaderContent from 'components/HeaderContent';

import styles from './styles.module.scss';

const Header = () => (
    <header className={styles.header}>
        <ContentContainer>
            <HeaderContent />
        </ContentContainer>
    </header>
);

export default Header;
