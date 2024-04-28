import { forwardRef } from 'react';

import { TEST_ID } from './constants';

import styles from './styles.module.scss';

const Menu = forwardRef(
    ({ children, className = '', testId = TEST_ID }, ref) => (
        <div
            className={`${className} ${styles.menu}`}
            data-testid={testId}
            ref={ref}
            tabIndex="0"
        >
            {children}
        </div>
    )
);

Menu.displayName = 'Menu';

export default Menu;
