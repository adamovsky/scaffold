import useTranslate from 'app/i18n/useTranslate';

const useConstants = () => {
    const t = useTranslate('login');

    return {
        SUBMIT: t('submit')
    };
};

export default useConstants;
