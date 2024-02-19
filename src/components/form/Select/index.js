import { forwardRef } from 'react';

import styles from './styles.module.scss';

const Select = forwardRef((props, ref) => {
    const { items = [], onBlur, onChange, onClick, value } = props;

    return (
        <select
            className={`${styles.select}`}
            defaultValue={value}
            onBlur={onBlur}
            onChange={onChange}
            onClick={onClick}
            ref={ref}
            value={value}
        >
            {items.map(({ label, value }, index) => (
                <option hidden key={`${value}.${index}`} value={value}>
                    {label}
                </option>
            ))}
        </select>
    );
});

export default Select;
