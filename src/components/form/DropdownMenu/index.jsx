import { FunctionComponent, useCallback, useEffect, useRef } from 'react';

import ContentPanel from 'components/ContentPanel';
import Menu from 'components/Menu';

import { ABOVE, BELOW, TEST_ID } from './constants';

import styles from './styles.module.scss';

const DropdownMenu = ({ children, className = '', testId = TEST_ID }) => {
    const menuRef = useRef(null);
    const openDirection = useRef('');

    const handleResize = useCallback(() => {
        const menuElement = menuRef?.current;

        if (!menuElement) {
            return;
        }

        const viewportHeight = window.innerHeight;

        const { bottom, height } = menuElement.getBoundingClientRect();

        if (
            bottom > viewportHeight ||
            (openDirection.current === ABOVE &&
                bottom + height > viewportHeight)
        ) {
            openDirection.current = ABOVE;
            menuElement.style.bottom = '0';
        } else {
            openDirection.current = BELOW;
            menuElement.style.bottom = 'unset';
        }
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [handleResize]);

    return (
        <Menu
            className={`${className} ${styles.dropdownMenu}`}
            items={[]}
            ref={menuRef}
            testId={testId}
        >
            <ContentPanel className={styles.contentPanel}>
                {children}
            </ContentPanel>
        </Menu>
    );
};

export default DropdownMenu;
