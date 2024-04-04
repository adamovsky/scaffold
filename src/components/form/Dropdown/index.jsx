import React, {
    forwardRef,
    useCallback,
    useEffect,
    useRef,
    useState
} from 'react';

import InputWithLabel from 'components/InputWithLabel';
import DropdownItem from 'components/form/DropdownItem';
import DropdownMenu from 'components/form/DropdownMenu';
import Input from 'components/form/Input';
import Select from 'components/form/Select';

import isFunction from 'utilities/isFunction';

import useTranslation from './hooks/useTranslation';

import { TEST_ID } from './constants';

import styles from './styles.module.scss';

const Dropdown = forwardRef((props, ref) => {
    const {
        className = '',
        hasError = false,
        isRequired = false,
        items = [],
        label = '',
        onChange,
        onError,
        onSubmit,
        onValid,
        placeholder,
        selected = 0,
        testId = TEST_ID,
        value
    } = props;

    const { REQUIRED } = useTranslation();
    const [selectedLabel, setSelectedLabel] = useState();
    const [selectedIndex, setSelectedIndex] = useState(selected);
    const [error, setError] = useState();
    const [isOpen, setIsOpen] = useState(false);

    const inputRef = useRef(null);

    const handleError = useCallback(
        (dropdownValue, message) => {
            if (isFunction(onError)) {
                onError?.(dropdownValue, message, setError);
            } else {
                setError(message);
            }
        },
        [onError]
    );

    const handleRequired = useCallback(
        item => {
            if (isRequired && !item) {
                handleError?.(item, REQUIRED);
            } else {
                onValid?.(item);
                setError('');
            }
        },
        [handleError, isRequired, onValid, setError, REQUIRED]
    );

    const handleOpen = useCallback(() => {
        console.log('handleOpen');
        setIsOpen(open => setIsOpen(true));
    }, [setIsOpen]);

    const handleClick = useCallback(() => isOpen, [isOpen]);

    const handleClose = useCallback(() => {
        setIsOpen(false);
    }, [setIsOpen]);

    const handleChange = useCallback(
        (dropdownValue, index) => {
            handleRequired(dropdownValue?.length);

            onChange?.(dropdownValue, handleError, index);
        },
        [handleError, handleRequired, onChange]
    );

    const handleBlur = useCallback(
        event => {
            if (!event.relatedTarget?.classList.contains(styles.dropdownMenu)) {
                handleClose();
            }
        },
        [handleClose]
    );

    const setInputValue = useCallback(
        value => {
            if (inputRef.current) {
                inputRef.current.value = value;
            }
        },
        [inputRef]
    );

    const handleDropdownItemClick = useCallback(
        index => event => {
            const selectedItem = items[index];

            setSelectedIndex(index);
            setSelectedLabel(selectedItem?.label);
            handleClose();

            if (index !== selectedIndex) {
                onValid?.(selectedItem.value);
                handleChange(selectedItem.value, index);
                setInputValue(selectedItem?.label);
            }
        },
        [
            handleChange,
            items,
            handleClose,
            onValid,
            selectedIndex,
            setInputValue
        ]
    );

    useEffect(() => {
        if (selected) {
            setSelectedIndex(selected);
        }
    }, [selected]);

    useEffect(() => {
        const index = items.findIndex(item => item.value === value);

        if (index > -1) {
            setSelectedLabel(items[index].label);
            setSelectedIndex(index);
            setInputValue(items[index].label);
        }
    }, [items, setInputValue, value]);

    useEffect(() => {
        const currentReference = ref?.current;

        const handleSubmit = () => {
            const inputValue = items[selectedIndex ?? 0].value;

            handleRequired(inputValue);
            handleChange({ target: { value: inputValue } });
            onSubmit?.(inputValue, error);
        };

        currentReference?.addEventListener('submit', handleSubmit);

        return () => {
            currentReference?.removeEventListener('submit', handleSubmit);
        };
    }, [
        error,
        handleChange,
        handleRequired,
        items,
        onSubmit,
        ref,
        selectedIndex
    ]);

    const errorClassName = hasError || error ? styles.hasError : '';

    return (
        <InputWithLabel
            className={`${className} ${styles.dropdown}`}
            hasError={hasError}
            onClick={handleClick}
            testId={testId}
            text={label}
        >
            <Select
                items={items}
                onBlur={handleBlur}
                onClick={handleOpen}
                ref={ref}
                value={selectedLabel}
            />

            <Input
                className={`${className} ${errorClassName} ${styles.input}`}
                isReadOnly={true}
                onBlur={handleBlur}
                onClick={handleOpen}
                placeholder={placeholder}
                ref={inputRef}
                value={
                    selectedLabel ||
                    (typeof selectedIndex !== 'undefined'
                        ? items[selectedIndex]?.label
                        : '')
                }
            />

            {isOpen && (
                <DropdownMenu
                    className={styles.dropdownMenu}
                    onClose={handleClose}
                >
                    {items.map(({ label, type, value }, index) => (
                        <DropdownItem
                            isSelected={selectedIndex === index}
                            key={`${label}${index}`}
                            onClick={handleDropdownItemClick(index)}
                            text={label}
                            type={type}
                            value={value}
                        />
                    ))}
                </DropdownMenu>
            )}
        </InputWithLabel>
    );
});

Dropdown.displayName = 'Dropdown';

export default Dropdown;
