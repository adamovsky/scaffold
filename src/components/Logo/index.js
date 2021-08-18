import { Link } from 'react-router-dom';

import image from './image.png';

import styles from './styles.module.scss';

const Logo = ({ className = '' }) => (
    <Link className={styles.logo} to="/">
        <img
            alt="logo"
            className={`${styles.image} ${className}`}
            src={image}
        />
    </Link>
);

export default Logo;
