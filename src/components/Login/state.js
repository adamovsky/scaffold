import { atom } from 'recoil';

const authAtom = atom({
    default: '',
    key: 'auth'
});

const state = {
    atoms: {
        authAtom
    }
};

export default state;
