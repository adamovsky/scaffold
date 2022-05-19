import ContentContainer from 'components/ContentContainer';
import FooterText from 'components/FooterText';

import { creditText } from './constants';

import styles from './styles.module.scss';

const Footer = ({ className = '' }) => (
    <footer className={`${className} ${styles.footer}`}>
        <ContentContainer>
            <FooterText text={creditText} />
        </ContentContainer>
    </footer>
);

export default Footer;
