import { forwardRef } from 'react';

import { TEST_ID } from './constants';

import styles from './styles.module.scss';

import MenuItem from 'components/MenuItem';

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
