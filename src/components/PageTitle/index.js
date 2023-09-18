import styles from './styles.module.scss';

const PageTitle = ({ className = '', text = '' }) => (
    <h1 className={`${className} ${styles.pageTitle}`}>{text}</h1>
);

export default PageTitle;
