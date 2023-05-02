import CONFIG from 'utilities/env';

import { createSlice } from '@reduxjs/toolkit';

export const app = createSlice({
    initialState: {
        config: CONFIG
    },

    name: 'app'
});

export default app.reducer;
