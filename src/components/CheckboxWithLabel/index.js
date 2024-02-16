import { memo } from 'react';

import Label from 'components/Label';
import WithCheckbox from 'components/WithCheckbox';

import styles from './styles.module.scss';

const CheckboxWithLabel = ({
    className = '',
    isChecked,
    isDisabled = false,
    onChange,
    text = ''
}) => (
    <div className={`${className} ${styles.checkboxWithLabel}`}>
        <WithCheckbox
            isChecked={isChecked}
            isDisabled={isDisabled}
            onChange={onChange}
        >
            <Label className={styles.label} text={text} />
        </WithCheckbox>
    </div>
);

export default memo(CheckboxWithLabel);
