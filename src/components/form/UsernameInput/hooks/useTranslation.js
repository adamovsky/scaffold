import useTranslate from 'app/i18n/useTranslate';

const useConstants = () => {
    const t = useTranslate('usernameInput');

    return {
        USERNAME: t('username')
    };
};

export default useConstants;
