import { createSlice } from '@reduxjs/toolkit';
import frases from '../constantes';

export const phraseSlice = createSlice({
    name: 'phrase',
    initialState: {
        value: '2 + 2 = 4'
    },
    reducers: {
        changePhrase: (state) => {
            const index = Math.floor(Math.random() * frases.length);
            state.value = frases[index];
        }
    }
});

export const { changePhrase } = phraseSlice.actions;

export default phraseSlice.reducer;