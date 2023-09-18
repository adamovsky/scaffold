import useTranslate from 'app/i18n/useTranslate';

const useConstants = () => {
    const t = useTranslate('home');

    return {
        CLICK_ME: t('clickMe'),
        HELLO: t('hello'),
        TIME_SPENT: t('timeSpent')
    };
};

export default useConstants;
