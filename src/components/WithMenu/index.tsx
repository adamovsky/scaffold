import { useCallback, useRef, useState } from 'react';

import Menu from 'components/Menu';
import Overlay from 'components/Overlay';

import { TEST_ID } from './constants';
import { FunctionComponent, MouseEvent, Props } from './types';

import styles from './styles.module.scss';

const WithMenu: FunctionComponent<Props> = ({
    children,
    className = '',
    items,
    onClick,
    testId = TEST_ID
}) => {
    const ref = useRef<HTMLDivElement | null>(null);

    const [isDotMenuOpen, setIsDotMenuOpen] = useState(false);

    const handleClick = useCallback(
        (event: MouseEvent<HTMLDivElement>) => {
            setIsDotMenuOpen(!isDotMenuOpen);

            const parentElement = (event.target as HTMLDivElement)
                .parentElement;

            if (ref.current === parentElement) {
                const indexIs = Array.from(
                    parentElement?.children || []
                ).indexOf(event.target as HTMLDivElement);

                onClick?.(event, indexIs);
            }
        },
        [isDotMenuOpen, onClick, setIsDotMenuOpen]
    );

    return (
        <div
            className={`${className} ${styles.withMenu}`}
            data-testid={testId}
            onClick={handleClick}
        >
            {children}

            {isDotMenuOpen && (
                <>
                    <Overlay
                        className={styles.overlay}
                        isOpen={isDotMenuOpen}
                        onClose={handleClick}
                    />

                    <Menu className={styles.menu} items={items} ref={ref} />
                </>
            )}
        </div>
    );
};

export default WithMenu;
