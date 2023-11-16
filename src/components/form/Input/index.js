import { forwardRef, useCallback, useEffect, useRef, useState } from 'react';

import styles from './styles.module.scss';

const Input = forwardRef((props, ref) => {
    const {
        className = '',
        id = '',
        isDisabled = false,
        isReadOnly = false,
        isRequired = false,
        hasError = false,
        name = '',
        onBlur,
        onChange,
        onClick,
        onKeyUp,
        onSubmit,
        placeholder = '',
        type = 'text',
        value
    } = props;

    const errorMessage = useRef('');

    const [error, setError] = useState();

    const onError = useCallback(message => {
        setError(message);

        errorMessage.current = message;
    }, []);

    const handleChange = useCallback(
        e => {
            const inputValue = e.target.value;

            onChange?.(inputValue, onError);

            if (isRequired && !inputValue.length) {
                onError?.('This field is required');
            } else {
                setError(undefined);

                errorMessage.current = '';
            }
        },
        [isRequired, onChange, onError]
    );

    useEffect(() => {
        const currentReference = ref?.current;

        const handleSubmit = () => {
            const inputValue = currentReference?.value;

            handleChange({ target: { value: inputValue } });

            onSubmit?.(inputValue, errorMessage.current);
        };

        currentReference?.addEventListener('submit', handleSubmit);

        return () => {
            currentReference?.removeEventListener('submit', handleSubmit);
        };
    }, [errorMessage, handleChange, onSubmit, ref]);

    const errorClassName = hasError || error ? styles.hasError : '';

    console.log('[Input] value: ', props);

    return (
        <input
            className={`${className} ${errorClassName} ${styles.input}`}
            defaultValue={value}
            disabled={isDisabled}
            id={id}
            name={name}
            onBlur={onBlur}
            onChange={handleChange}
            onClick={onClick}
            onKeyUp={onKeyUp}
            placeholder={placeholder}
            readOnly={isReadOnly}
            ref={ref}
            type={type}
        />
    );
});

export default Input;
