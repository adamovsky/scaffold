import { forwardRef, useState } from 'react';

import TextInput from 'components/TextInput';

import translations from './constants';

const regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])" // eslint-disable-line
);

const validateEmailAddress = emailAddress => regex.test(emailAddress);

const EmailAddressInput = forwardRef((props, ref) => {
    const {
        EMAIL_ADDRESS,
        PLEASE_ENTER_YOUR_EMAIL_ADDRESS,
        PLEASE_ENTER_VALID_EMAIL_ADDRESS
    } = translations();

    const {
        className = '',
        errorMessage = PLEASE_ENTER_VALID_EMAIL_ADDRESS,
        isRequired,
        onChange,
        onError,
        onSubmit,
        onValid,
        placeholder = PLEASE_ENTER_YOUR_EMAIL_ADDRESS,
        value
    } = props;

    const [hasError, setHasError] = useState(false);

    const handleChange = (emailAddress, onInputError) => {
        if (!validateEmailAddress(emailAddress)) {
            onInputError?.(errorMessage);
            onError?.(errorMessage);
            setHasError(true);
        } else {
            setHasError(false);
            onValid?.(emailAddress);
        }

        onChange?.(emailAddress);
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
            label={EMAIL_ADDRESS}
            onChange={handleChange}
            onSubmit={handleSubmit}
            placeholder={placeholder}
            ref={ref}
        />
    );
});

export default EmailAddressInput;
