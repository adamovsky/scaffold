import { useCallback, useRef, useState } from 'react';

const useForm = formSchema => {
    const formKeys = Object.keys(formSchema);

    const [errorMessage, setErrorMessage] = useState('');

    const formErrors = useRef({});
    const formData = useRef(formSchema);

    const [form, setForm] = useState(formData.current);

    const setFormData = useCallback(mutatedFormData => {
        formData.current = mutatedFormData;
    }, []);

    const setFormErrors = useCallback(mutatedFormErrors => {
        formErrors.current = mutatedFormErrors;
    }, []);

    const buildFormData = useCallback(
        formValues =>
            formKeys.reduce((form, formKey) => {
                const formData =
                    formValues[formKey].constructor !== Array
                        ? formValues[formKey]
                        : JSON.stringify(formValues[formKey]);

                form.append(formKey, formData);

                return form;
            }, new FormData()),
        [formKeys]
    );

    const handleError = useCallback(
        formField => errorMessage => {
            const updatedFormData = { ...formData.current };
            const updatedFormErrors = { ...formErrors.current };

            updatedFormData[formField] = '';
            updatedFormErrors[formField] = errorMessage;

            setFormData(updatedFormData);
            setFormErrors(updatedFormErrors);
        },
        [formData, formErrors, setFormData, setFormErrors]
    );

    const handleForm = useCallback(() => {
        const errors = Object.values(formErrors.current);
        const hasErrors = errors.filter(value => typeof value === 'string');

        if (hasErrors.length) {
            setErrorMessage(
                hasErrors.length > 1
                    ? 'Please correct the errors on this form.'
                    : hasErrors[0]
            );

            return errorMessage;
        }

        return buildFormData(formData.current);
    }, [buildFormData, errorMessage, formData, formErrors]);

    const handleSubmit = useCallback(
        formField => (_, error) => {
            if (error) {
                handleError(formField)(error);
            }
        },
        [handleError]
    );

    const handleValid = useCallback(
        formField => fieldValue => {
            const updatedFormData = { ...formData.current };
            const updatedFormErrors = { ...formErrors.current };

            updatedFormErrors[formField] = false;
            updatedFormData[formField] =
                fieldValue?.target?.checked ?? fieldValue;

            setForm(updatedFormData);
            setFormData(updatedFormData);
            setFormErrors(updatedFormErrors);
        },
        [formData, formErrors, setFormData, setFormErrors]
    );

    const handleChange = useCallback(
        formField => newValue => {
            handleValid(formField)(newValue);
        },
        [handleValid]
    );

    return {
        form,
        handleChange,
        handleError,
        handleForm,
        handleSubmit,
        handleValid
    };
};

export default useForm;
