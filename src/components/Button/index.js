import { forwardRef, useCallback } from 'react';

import isFunction from 'utilities/isFunction';

import styles from './styles.module.scss';

const Button = forwardRef(
    (
        {
            children,
            className = '',
            isDisabled = false,
            onClick,
            text = '',
            value
        },
        ref
    ) => {
        const handleClick = useCallback(
            clickEvent => {
                if (isFunction(onClick)) {
                    onClick(clickEvent);
                }
            },
            [onClick]
        );

        return (
            <button
                className={`${className} ${styles.button}`}
                data-value={value}
                disabled={isDisabled}
                onClick={handleClick}
                ref={ref}
            >
                {children || text}
            </button>
        );
    }
);

export default Button;
