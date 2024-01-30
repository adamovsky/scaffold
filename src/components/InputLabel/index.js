import styles from './styles.module.scss';

const InputLabel = ({ className = '', hasFocus = false, text = '' }) => {
    const focusClassName = hasFocus ? styles.hasFocus : '';

    return (
        <fieldset
            aria-hidden="true"
            className={`${className} ${focusClassName} ${styles.inputLabel}`}
        >
            <legend className={`${focusClassName} ${styles.legend}`}>
                {text}
            </legend>
        </fieldset>
    );
};

export default InputLabel;
