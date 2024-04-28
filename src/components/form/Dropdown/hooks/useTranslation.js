import useTranslate from 'app/i18n/useTranslate';

const useTranslation = () => {
    const t = useTranslate('dropdown');

    return {
        REQUIRED: t('required'),
        SELECT: t('select')
    };
};

export default useTranslation;
