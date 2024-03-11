import Highlight from 'components/Highlight';
import Tabs from 'components/Tabs';

import { TEST_ID } from './constants';

import styles from './styles.module.scss';

const HighlightTabs = ({
    children,
    className = '',
    selectedClass,
    testId = TEST_ID
}) => (
    <Tabs className={`${className} ${styles.highlightTabs}`} testId={testId}>
        {children}

        <Highlight className={selectedClass} />
    </Tabs>
);

export default HighlightTabs;
