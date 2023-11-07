import useTranslate from 'app/i18n/useTranslate';

const useTranslation = () => {
  const t = useTranslate('useFetch');

  return {
    API_ERROR: t('apiError'),
  };
};

export default useTranslation;
