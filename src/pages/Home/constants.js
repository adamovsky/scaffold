import useTranslate from 'app/i18n/useTranslate';

const useConstants = () => {
    const t = useTranslate('home');

    return {
        HELLO_WORLD: t('helloWorld')
    };
};

export default useConstants;
