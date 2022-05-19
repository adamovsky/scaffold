import styles from './styles.module.scss';

const FooterText = ({ text = '' }) => (
    <p className={styles.footerText}>{text}</p>
);

export default FooterText;
