import { configureStore } from '@reduxjs/toolkit';
import reduxExample from '../components/ReduxExample/slice';

export default configureStore({
    reducer: {
        reduxExample
    }
});
