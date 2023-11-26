import { createSlice } from '@reduxjs/toolkit';
import frases from '../constantes';
import { colors } from '../constantes';

export const phraseSlice = createSlice({
    name: 'phrase',
    initialState: {
        text: '2 + 2 = 4',
        author: 'Anonimo',
        color: '#000'
    },
    reducers: {
        changePhrase: (state) => {
            const index = Math.floor(Math.random() * frases.length);
            state.text = frases[index].text;
            state.author = frases[index].author;
            state.color = colors[Math.floor(Math.random() * colors.length)];
        }
    }
});

export const { changePhrase } = phraseSlice.actions;

export default phraseSlice.reducer;