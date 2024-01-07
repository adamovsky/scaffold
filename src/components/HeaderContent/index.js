import useForm from 'hooks/useForm';
import { useCallback, useRef } from 'react';

import Logo from 'components/Logo';
import SearchInput from 'components/SearchInput';

import handleSubmitOnEnter from 'utilities/handleSubmitOnEnter';

import { TEST_ID } from './constants';

import styles from './styles.module.scss';

const Header = ({ testId = TEST_ID }) => {
    const form = useForm({
        search: ''
    });

    const searchInputRef = useRef();

    const { handleChange, handleForm, handleSubmit, handleValid } = form;

    const handleSearch = useCallback(async () => {
        const event = new Event('submit', { bubbles: true });

        searchInputRef.current.dispatchEvent(event);

        const output = handleForm();

        if (typeof output === 'string') {
            console.error(output);

            return;
        }

        // TODO: This is where you add custom logic what to do with the collected
        //       form data
        for (const pair of output.entries()) {
            console.log(`${pair[0]}, ${pair[1]}`);
        }
    }, [handleForm]);

    return (
        <div className={styles.header} data-testid={testId}>
            <Logo className={styles.logo} />

            <SearchInput
                className={styles.searchInput}
                onChange={handleChange('search')}
                onKeyUp={handleSubmitOnEnter(handleSearch)}
                onSubmit={handleSubmit('search')}
                onValid={handleValid('search')}
                ref={searchInputRef}
            />
        </div>
    );
};

export default Header;
