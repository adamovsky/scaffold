import { Link } from 'react-router-dom';

import image from './image.svg';

import { altText } from './constants';

import styles from './styles.module.scss';

const Logo = ({ className = '' }) => (
    <Link className={styles.logo} to="/">
        <img
            alt={altText}
            className={`${className} ${styles.image}`}
            src={image}
        />
    </Link>
);

export default Logo;
