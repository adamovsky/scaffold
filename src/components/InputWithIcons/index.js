import { forwardRef } from 'react';

import Input from 'components/Input';

import styles from './styles.module.scss';

const InputWithIcons = forwardRef((props, ref) => {
    const {
        children,
        className = '',
        id = '',
        isRequired = false,
        hasError = false,
        name = '',
        onBlur,
        onChange,
        onClick,
        onSubmit,
        placeholder = '',
        type = 'text',
        value
    } = props;

    return (
        <div
            className={`${className} ${styles.inputWithIcons}`}
            onClick={onClick}
        >
            <Input
                className={styles.input}
                hasError={hasError}
                id={id}
                isRequired={isRequired}
                name={name}
                onBlur={onBlur}
                onChange={onChange}
                onSubmit={onSubmit}
                placeholder={placeholder}
                ref={ref}
                type={type}
                value={value}
            />

            <div className={styles.icons}>{children}</div>
        </div>
    );
});

export default InputWithIcons;
