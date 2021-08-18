import styles from './styles.module.scss';

const Error = ({ className = '', errorCode, text = '' }) => (
    <div className={`${styles.error} ${className} `}>
        <div className={styles.container}>
            <h1 className={styles.heading1}>
                {errorCode}
            </h1>

            <p className={styles.text}>
                {text}
            </p>
        </div>
    </div>
);

export default Error;
