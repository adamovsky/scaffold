import { forwardRef, useState } from 'react';

import TextInput from 'components/TextInput';

import useTranslation from './hooks/useTranslation';

const validatePassword = password =>
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i.test(
        password
    );

const PasswordInput = forwardRef((props, ref) => {
    const { ENTER_VALID_ADDRESS, ENTER_YOUR_ADDRESS, PASSWORD } =
        useTranslation();

    const {
        className = '',
        errorMessage = ENTER_VALID_ADDRESS,
        isRequired,
        onChange,
        onError,
        onSubmit,
        onValid,
        placeholder = ENTER_YOUR_ADDRESS,
        value
    } = props;

    const [hasError, setHasError] = useState(false);

    const handleChange = (password, onInputError) => {
        if (!validatePassword(password)) {
            onInputError?.(errorMessage);
            onError?.(errorMessage);
            setHasError(true);
        } else {
            setHasError(false);
            onValid?.(password);
        }

        onChange?.(password);
    };

    const handleSubmit = (inputValue, errorMessage) => {
        handleChange(inputValue);
        onSubmit?.(inputValue, errorMessage);
    };

    return (
        <TextInput
            className={className}
            defaultValue={value}
            hasError={hasError}
            isRequired={isRequired}
            label={PASSWORD}
            onChange={handleChange}
            onSubmit={handleSubmit}
            placeholder={placeholder}
            ref={ref}
        />
    );
});

export default PasswordInput;
