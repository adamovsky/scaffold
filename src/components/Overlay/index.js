import { useCallback, useRef } from 'react';

import isFunction from 'utilities/isFunction';

import styles from './styles.module.scss';

const Overlay = ({ children, className = '', isOpen, onClose }) => {
    const ref = useRef(null);

    const showClass = isOpen ? styles.show : '';

    const handleClick = useCallback(
        event => {
            if (!isOpen) {
                return;
            }

            if (event.target !== ref.current) {
                return;
            }

            if (!isFunction(onClose)) {
                return;
            }

            return onClose?.(event);
        },
        [isOpen, onClose]
    );

    return (
        <div
            className={`${className} ${showClass} ${styles.overlay}`}
            onClick={handleClick}
            onMouseDown={handleClick}
            ref={ref}
        >
            {children}
        </div>
    );
};

export default Overlay;
