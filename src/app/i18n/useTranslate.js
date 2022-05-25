import { useTranslation } from 'react-i18next';

const useTranslate = component => {
    const { t } = useTranslation('translation', {
        keyPrefix: component
    });

    return (key, params = {}) => t(key, params);
};

export default useTranslate;
