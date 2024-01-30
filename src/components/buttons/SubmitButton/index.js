import { useCallback } from 'react';

import Button from 'components/buttons/Button';

import isFunction from 'utilities/isFunction';

import styles from './styles.module.scss';

const SubmitButton = ({
    children,
    className = '',
    isDisabled = false,
    onClick,
    text
}) => {
    const handleClick = useCallback(
        clickEvent => {
            if (isFunction(onClick)) {
                onClick(clickEvent);
            }
        },
        [onClick]
    );

    const disabledClass = isDisabled ? styles.disabled : '';

    return (
        <Button
            className={`${className} ${disabledClass} ${styles.submitButton}`}
            isDisabled={isDisabled}
            onClick={handleClick}
        >
            {children || text}
        </Button>
    );
};

export default SubmitButton;
