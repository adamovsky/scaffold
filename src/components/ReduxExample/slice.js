import { createSlice } from '@reduxjs/toolkit'

export const reduxExample = createSlice({
    initialState: {
        value: 0,
    },
    
    name: 'reduxExample',

    reducers: {
        decrement: (state) => {
            state.value -= 1;
        },

        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1;
        },

        incrementByAmount: (state, action) => {
            state.value += action.payload;
        }
    }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = reduxExample.actions;

export default reduxExample.reducer;