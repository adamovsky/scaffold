import useTranslate from 'app/i18n/useTranslate';

const useConstants = () => {
    const t = useTranslate('emailAddressInput');

    return {
        EMAIL_ADDRESS: t('emailAddress'),
        PLEASE_ENTER_VALID_EMAIL_ADDRESS: t('pleaseEnterValidEmailAddress'),
        PLEASE_ENTER_YOUR_EMAIL_ADDRESS: t('pleaseEnterYourEmailAddress')
    };
};

export default useConstants;
