import { useCallback, useState } from 'react';

import InputLabel from 'components/InputLabel';

import styles from './styles.module.scss';

const InputWithLabel = props => {
    const { children, className = '', text = '' } = props;

    const [hasFocus, setHasFocus] = useState(false);

    const handleBlur = useCallback(() => {
        setHasFocus(false);
    }, [setHasFocus]);

    const handleClick = useCallback(() => {
        setHasFocus(true);
    }, [setHasFocus]);

    const focusClassName = hasFocus ? styles.hasFocus : '';
    const noLabelClass = !text ? styles.noLabel : '';

    return (
        <div
            className={`${className} ${focusClassName} ${noLabelClass} ${styles.inputWithLabel}`}
            onBlur={handleBlur}
            onClick={handleClick}
        >
            {children}

            <InputLabel
                className={`${focusClassName} ${noLabelClass} ${styles.inputLabel}`}
                hasFocus={hasFocus}
                text={text}
            />
        </div>
    );
};

export default InputWithLabel;
