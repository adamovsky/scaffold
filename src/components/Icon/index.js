import styles from './styles.module.scss';

const Icon = ({ altText = 'icon', className = '', image = '' }) => (
    <img alt={altText} className={`${className} ${styles.icon}`} src={image} />
);

export default Icon;
