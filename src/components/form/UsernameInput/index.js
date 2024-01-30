import { forwardRef, useState } from 'react';

import TextInput from 'components/form/TextInput';

import useTranslation from './hooks/useTranslation';

const validateName = username => /^[a-z ,.'-]+$/i.test(username);

const UsernameInput = forwardRef((props, ref) => {
    const {
        className = '',
        errorMessage = 'Please enter a valid username',
        isRequired,
        onChange,
        onError,
        onKeyUp,
        onSubmit,
        onValid,
        placeholder = 'Please enter your username',
        value
    } = props;

    const { USERNAME } = useTranslation();

    const [hasError, setHasError] = useState(false);

    const handleChange = (username, onInputError) => {
        if (!validateName(username)) {
            console.log('RESET');
            onInputError?.(errorMessage);
            onError?.(errorMessage);
            setHasError(true);
        } else {
            console.log('VALID');
            setHasError(false);
            onValid?.(username);
        }

        onChange?.(username);
    };

    const handleSubmit = (inputValue, errorMessage) => {
        handleChange(inputValue);
        onSubmit?.(inputValue, errorMessage);
    };

    return (
        <>
            <TextInput
                className={className}
                defaultValue={value}
                hasError={hasError}
                isRequired={isRequired}
                label={USERNAME}
                onChange={handleChange}
                onKeyUp={onKeyUp}
                onSubmit={handleSubmit}
                placeholder={placeholder}
                ref={ref}
            />
        </>
    );
});

export default UsernameInput;
