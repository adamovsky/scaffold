import { useCallback, useRef, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import DropdownMenu from 'components/DropdownMenu';
import InputWithIcons from 'components/InputWithIcons';
import InputWithLabel from 'components/InputWithLabel';
import CalendarIcon from 'components/icons/CalendarIcon';

import usePopperState from 'hooks/usePopperState';

import formatToUniversalDate from 'utilities/formatToUniversalDate';

import styles from './styles.module.scss';

const DatePicker = props => {
    const {
        className = '',
        hasError = false,
        isRequired = false,
        label = '',
        onChange,
        placeholder = 'YYYY-MM-DD',
        value = null
    } = props;

    const errorMessage = useRef('');

    const [error, setError] = useState();
    const [selected, setSelected] = useState(value);

    const { handleClick, isOpen, onClose, referenceElement } = usePopperState();

    const onError = useCallback(message => {
        setError(message);

        errorMessage.current = message;
    }, []);

    const handleBlur = useCallback(
        event => {
            if (
                !event?.relatedTarget?.classList.contains(
                    styles.dropdownMenu
                ) &&
                !event?.relatedTarget?.classList.contains('rdp-button')
            ) {
                onClose();
            }
        },
        [onClose]
    );

    const handleChange = useCallback(
        item => {
            setSelected(item);

            onChange?.(item, onError);

            onClose();

            if (isRequired && !item) {
                onError?.('This field is required');
            } else {
                setError(undefined);

                errorMessage.current = '';
            }
        },
        [isRequired, onChange, onClose, onError]
    );

    const errorClassName = hasError || error ? styles.hasError : '';

    return (
        <InputWithLabel
            className={`${className} ${styles.datePicker}`}
            text={label}
        >
            <InputWithIcons
                className={`${className} ${errorClassName} ${styles.input}`}
                isReadOnly={true}
                onBlur={handleBlur}
                onClick={handleClick}
                placeholder={placeholder}
                value={selected ? formatToUniversalDate(selected) : ''}
            >
                <CalendarIcon />
            </InputWithIcons>

            <DropdownMenu
                className={styles.dropdownMenu}
                isOpen={isOpen}
                onClose={onClose}
                referenceElement={referenceElement}
            >
                <DayPicker
                    mode="single"
                    onSelect={handleChange}
                    selected={selected}
                />
            </DropdownMenu>
        </InputWithLabel>
    );
};

DatePicker.displayName = 'DatePicker';

export default DatePicker;
