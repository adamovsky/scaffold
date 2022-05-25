import { useRecoilValue } from 'recoil';

import state from 'app/state';

const { configAtom } = state.app.atoms;

const useConfig = () => useRecoilValue(configAtom);

export default useConfig;
