import styles from './styles.module.scss';

const ContentPanel = ({ children, className = '' }) => (
    <div className={`${className} ${styles.contentPanel}`}>{children}</div>
);

export default ContentPanel;
