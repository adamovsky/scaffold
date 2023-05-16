import useTranslate from 'app/i18n/useTranslate';

const useConstants = () => {
    const t = useTranslate('footer');

    return {
        CREDIT_TEXT: t('creditText')
    };
};

export default useConstants;
