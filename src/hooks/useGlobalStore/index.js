import { useRef } from 'react';

import useRecoil from 'hooks/useRecoil';
import useReduxToolkit from 'hooks/useReduxToolkit';

import CONFIG from 'utilities/env';

const useGlobalStore = ({ namespace }) => {
    const storeMap = useRef({
        recoil: useRecoil,

        reduxToolkit: useReduxToolkit
    }).current;

    return (storeMap[CONFIG.STORE] || storeMap.reduxToolkit)({ namespace });
};

export default useGlobalStore;
