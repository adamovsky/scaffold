import styles from './styles.module.scss';

const Footer = ({ className = '' }) => (
    <footer className={`${styles.footer} ${className}`}>
        This is the footer
    </footer>
);

export default Footer;
