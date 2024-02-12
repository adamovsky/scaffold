import { createSlice } from '@reduxjs/toolkit';

import CONFIG from 'utilities/env';

export const app = createSlice({
    initialState: {
        config: CONFIG
    },

    name: 'app'
});

export default app.reducer;
