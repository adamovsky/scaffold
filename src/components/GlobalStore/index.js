import { useRef } from 'react';
import { Provider } from 'react-redux';
import { RecoilRoot } from 'recoil';

import store from 'app/store';

import CONFIG from 'utilities/env';

const GlobalStore = ({ children }) => {
    const storeMap = useRef({
        recoil: RecoilRoot,
        reduxToolkit: () => <Provider store={store}>{children}</Provider>
    }).current;

    const StoreProvider = storeMap[CONFIG.STORE] || storeMap.reduxToolkit;

    return <StoreProvider>{children}</StoreProvider>;
};

export default GlobalStore;
