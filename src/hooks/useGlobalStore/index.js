import { useRef } from 'react';

import CONFIG from 'utilities/env';

import useRecoil from 'hooks/useRecoil';
import useReduxToolkit from 'hooks/useReduxToolkit';

const useGlobalStore = ({ namespace }) => {
    const storeMap = useRef({
        recoil: useRecoil,

        reduxToolkit: useReduxToolkit
    }).current;

    return (storeMap[CONFIG.STORE] || storeMap.reduxToolkit)({ namespace });
};

export default useGlobalStore;
