import useTranslate from 'app/i18n/useTranslate';

const useTranslation = () => {
    const t = useTranslate('passwordInput');

    return {
        ENTER_VALID_ADDRESS: t('enterValidPassword'),
        ENTER_YOUR_ADDRESS: t('enterYourPassword'),
        PASSWORD: t('password')
    };
};

export default useTranslation;
