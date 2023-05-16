import { Link } from 'react-router-dom';

import image from './image.svg';

import { ALT_TEXT, TEST_ID } from './constants';

import styles from './styles.module.scss';

const Logo = ({ className = '', testId = TEST_ID }) => (
    <Link className={styles.logo} data-testid={testId} to="/">
        <img
            alt={ALT_TEXT}
            className={`${className} ${styles.image}`}
            src={image}
        />
    </Link>
);

export default Logo;
