import useTranslate from 'app/i18n/useTranslate';

const useTranslation = () => {
    const t = useTranslate('dropdown');

    return {
        SELECT: t('select')
    };
};

export default useTranslation;
