import styles from './styles.module.scss';

const ContentContainer = ({ className = '', children }) => (
    <section className={`${className} ${styles.contentContainer}`}>
        {children}
    </section>
);

export default ContentContainer;
