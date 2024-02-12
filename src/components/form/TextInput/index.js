import { forwardRef } from 'react';

import InputWithLabel from 'components/InputWithLabel';
import Input from 'components/form/Input';

import styles from './styles.module.scss';

const TextInput = forwardRef((props, ref) => {
    const {
        className = '',
        hasError = false,
        id = '',
        isRequired = false,
        label = '',
        name = '',
        onChange,
        onKeyUp,
        onSubmit,
        placeholder = '',
        type = 'text',
        value
    } = props;

    return (
        <InputWithLabel
            className={`${className} ${styles.textInput}`}
            text={label}
        >
            <Input
                className={styles.input}
                hasError={hasError}
                id={id}
                isRequired={isRequired}
                name={name}
                onChange={onChange}
                onKeyUp={onKeyUp}
                onSubmit={onSubmit}
                placeholder={placeholder}
                ref={ref}
                type={type}
                value={value}
            />
        </InputWithLabel>
    );
});

export default TextInput;
