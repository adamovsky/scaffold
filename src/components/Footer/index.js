import ContentContainer from 'components/ContentContainer';
import FooterText from 'components/FooterText';

import useTranslation from './hooks/useTranslation';

import { TEST_ID } from './constants';

import styles from './styles.module.scss';

const Footer = ({ className = '' }) => {
    const { CREDIT_TEXT } = useTranslation();

    return (
        <footer
            className={`${className} ${styles.footer}`}
            data-testid={TEST_ID}
        >
            <ContentContainer>
                <FooterText text={CREDIT_TEXT} />
            </ContentContainer>
        </footer>
    );
};

export default Footer;
