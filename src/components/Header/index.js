import ContentContainer from 'components/ContentContainer';
import HeaderContent from 'components/HeaderContent';

import { TEST_ID } from './constants';

import styles from './styles.module.scss';

const Header = () => (
    <header className={styles.header} data-testid={TEST_ID}>
        <ContentContainer>
            <HeaderContent />
        </ContentContainer>
    </header>
);

export default Header;
