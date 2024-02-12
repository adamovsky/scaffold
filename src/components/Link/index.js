import { Link as OriginalLink } from 'react-router-dom';

import styles from './styles.module.scss';

const Link = ({ children, className = '', onClick, target, to }) => {
    const linkTo = /^\//.test(to) ? to : { pathname: to };

    return (
        <OriginalLink
            className={`${className} ${styles.link}`}
            onClick={onClick}
            target={target}
            to={linkTo}
        >
            {children}
        </OriginalLink>
    );
};

export default Link;
