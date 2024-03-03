import Checkbox from 'components/form/Checkbox';

import { TEST_ID } from './constants';

const WithCheckbox = props => {
    const {
        children,
        className = '',
        isChecked,
        isDisabled,
        onChange,
        testId = TEST_ID
    } = props;

    return (
        <>
            <Checkbox
                className={className}
                isChecked={isChecked}
                isDisabled={isDisabled}
                onChange={onChange}
                testId={testId}
            />

            {children}
        </>
    );
};

export default WithCheckbox;
