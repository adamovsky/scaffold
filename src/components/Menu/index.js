import { forwardRef } from 'react';

import MenuItem from 'components/MenuItem';

import { TEST_ID } from './constants';

import styles from './styles.module.scss';

const Menu = forwardRef(({ className = '', items, testId = TEST_ID }, ref) => (
    <div
        className={`${className} ${styles.menu}`}
        data-testid={testId}
        ref={ref}
    >
        {items?.map(({ text }) => (
            <MenuItem key={text} text={text} />
        ))}
    </div>
));

export default Menu;
