import { forwardRef } from 'react';

import Input from 'components/form/Input';
import SearchIcon from 'components/icons/SearchIcon';

import { TEST_ID } from './constants';

import styles from './styles.module.scss';

const SearchInput = forwardRef((props, ref) => {
    const {
        className = '',
        onChange,
        onError,
        onKeyUp,
        onSubmit,
        onValid,
        placeholder = '',
        testId = TEST_ID
    } = props;

    return (
        <label
            className={`${className} ${styles.searchInput}`}
            data-testid={testId}
        >
            <Input
                className={styles.input}
                onChange={onChange}
                onError={onError}
                onKeyUp={onKeyUp}
                onSubmit={onSubmit}
                onValid={onValid}
                placeholder={placeholder}
                ref={ref}
                type="search"
            />

            <SearchIcon className={styles.searchIcon} />
        </label>
    );
});

export default SearchInput;
