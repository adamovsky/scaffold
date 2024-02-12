import { useRecoilValue, useSetRecoilState } from 'recoil';

import store from 'app/state';

const useRecoil = ({ namespace }) => {
    const useStoreValue = type => {
        const atom = store[namespace].atoms[`${type}Atom`];

        useRecoilValue(atom);
    };

    const useSetState = type => {
        const atom = store[namespace].atoms[`${type}Atom`];

        return useSetRecoilState(atom);
    };

    return {
        getValue: useStoreValue,

        setValue: useSetState,

        store
    };
};

export default useRecoil;
