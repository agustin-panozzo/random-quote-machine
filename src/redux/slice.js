import { createSlice } from '@reduxjs/toolkit';
import frases from '../constantes';

export const phraseSlice = createSlice({
    name: 'phrase',
    initialState: {
        text: '2 + 2 = 4',
        author: 'Anonimo'
    },
    reducers: {
        changePhrase: (state) => {
            const index = Math.floor(Math.random() * frases.length);
            state.text = frases[index].text;
            state.author = frases[index].author;
        }
    }
});

export const { changePhrase } = phraseSlice.actions;

export default phraseSlice.reducer;