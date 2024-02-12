import { forwardRef, useCallback, useEffect, useRef, useState } from 'react';

import DropdownItem from 'components/DropdownItem';
import DropdownMenu from 'components/DropdownMenu';
import Input from 'components/Input';
import InputWithLabel from 'components/InputWithLabel';
import Select from 'components/Select';

import usePopperState from 'hooks/usePopperState';

import useConstants from './hooks/useTranslation';

import { TEST_ID } from './constants';

import styles from './styles.module.scss';

const Dropdown = forwardRef((props, ref) => {
    const { SELECT } = useConstants();

    const {
        className = '',
        hasError = false,
        isRequired = false,
        items = [],
        label = '',
        onChange,
        onSubmit,
        onValid,
        placeholder = SELECT,
        selected = '',
        testId = TEST_ID
    } = props;

    const errorMessage = useRef('');

    const [selectedLabel, setSelectedLabel] = useState();
    const [selectedIndex, setSelectedIndex] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        if (selected !== '' && typeof selectedIndex === 'undefined') {
            setSelectedIndex(selected);
        }
    }, [selected, selectedIndex]);

    const { handleClick, isOpen, onClose, referenceElement } = usePopperState();

    const onError = useCallback(message => {
        setError(message);

        errorMessage.current = message;
    }, []);

    const handleChange = useCallback(
        (dropdownValue, index) => {
            onChange?.(dropdownValue, onError, index);

            if (isRequired && !dropdownValue.length) {
                onError?.('This field is required');
            } else {
                setError(undefined);

                errorMessage.current = '';
            }
        },
        [isRequired, onChange, onError]
    );

    const handleBlur = useCallback(
        event => {
            if (
                !event?.relatedTarget?.classList.contains(styles.dropdownMenu)
            ) {
                onClose();
            }
        },
        [onClose]
    );

    const handleDropdownItemClick = useCallback(
        index => () => {
            setSelectedIndex(index);
            setSelectedLabel(items[index]?.label);
            onClose();

            if (index !== selectedIndex) {
                onValid?.(items[index].value);
                handleChange(items[index].value, index);
            }
        },

        [handleChange, items, onClose, onValid, selectedIndex]
    );

    useEffect(() => {
        const currentReference = ref?.current;

        const handleSubmit = () => {
            const inputValue = currentReference?.value;

            handleChange({ target: { value: inputValue } });
            onSubmit?.(inputValue, errorMessage.current);
        };

        currentReference?.addEventListener('submit', handleSubmit);

        return () => {
            currentReference?.removeEventListener('submit', handleSubmit);
        };
    }, [errorMessage, handleChange, onSubmit, ref]);

    const errorClassName = hasError || error ? styles.hasError : '';

    return (
        <InputWithLabel
            className={`${className} ${styles.dropdown}`}
            testId={testId}
            text={label}
        >
            <Select
                items={items}
                onBlur={handleBlur}
                onClick={handleClick}
                ref={ref}
                value={selectedLabel}
            />

            <Input
                className={`${className} ${errorClassName} ${styles.input}`}
                isReadOnly={true}
                onBlur={handleBlur}
                onClick={handleClick}
                placeholder={placeholder}
                value={selectedLabel || items[selectedIndex]?.label}
            />

            <DropdownMenu
                className={styles.dropdownMenu}
                isOpen={isOpen}
                onClose={onClose}
                referenceElement={referenceElement}
            >
                {items.map(({ label, type, value }, index) => (
                    <DropdownItem
                        isSelected={false}
                        key={`${label}${index}`}
                        onClick={handleDropdownItemClick(index)}
                        text={label}
                        type={type}
                        value={value}
                    />
                ))}
            </DropdownMenu>
        </InputWithLabel>
    );
});

export default Dropdown;
