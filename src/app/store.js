import { configureStore } from '@reduxjs/toolkit';

import app from 'components/App/slice';

export default configureStore({
    reducer: {
        app
    }
});
