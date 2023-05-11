import useGlobalStore from './useGlobalStore';

const useConfig = () => {
    const { getValue } = useGlobalStore({ namespace: 'app' });

    return getValue('config');
};

export default useConfig;
