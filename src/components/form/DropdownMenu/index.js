import ContentPanel from 'components/ContentPanel';
import Menu from 'components/Menu';
import Overlay from 'components/Overlay';

import { TEST_ID } from './constants';

import styles from './styles.module.scss';

const DropdownMenu = props => {
    const {
        children,
        className = '',
        isOpen,
        onClose,
        placement = 'bottom',
        referenceElement,
        testId = TEST_ID
    } = props;

    return (
        <Overlay
            className={styles.overlay}
            isOpen={isOpen}
            onClose={onClose}
            testId={testId}
        >
            <Menu
                className={className}
                placement={placement}
                referenceElement={referenceElement}
            >
                <ContentPanel className={styles.contentPanel}>
                    {children}
                </ContentPanel>
            </Menu>
        </Overlay>
    );
};

export default DropdownMenu;
