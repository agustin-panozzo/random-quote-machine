import { createSlice } from '@reduxjs/toolkit';

export const phraseSlice = createSlice({
    name: 'phrase',
    initialState: {
        value: ''
    },
    reducers: {
        changePhrase: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { changePhrase } = phraseSlice.actions;

export default phraseSlice.reducer;