import { useDispatch, useSelector } from 'react-redux';

import store from 'app/store';

const useReduxToolkit = ({ namespace }) => {
    const dispatch = useDispatch();

    const namespacedStore = useSelector(state => state[namespace]);

    const getValue = type => namespacedStore[type];

    const setValue = value => dispatch(value);

    return {
        getValue,

        setValue,

        store
    };
};

export default useReduxToolkit;
