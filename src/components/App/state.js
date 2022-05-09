import { atom } from 'recoil';

import CONFIG from 'utilities/env';

const configAtom = atom({
    default: CONFIG,
    key: 'config'
});

const state = {
    atoms: {
        configAtom
    }
};

export default state;
