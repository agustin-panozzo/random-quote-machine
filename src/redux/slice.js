import { createSlice } from '@reduxjs/toolkit';
import frases from '../constantes';
import { colors } from '../constantes';

const generateNewState = () => {
    const index = Math.floor(Math.random() * frases.length);
    return {
        text: frases[index].text,
        author: frases[index].author,
        color: colors[Math.floor(Math.random() * colors.length)]
    }
};

export const phraseSlice = createSlice({
    name: 'phrase',
    initialState: generateNewState(),
    reducers: {
        changePhrase: () => {
            return generateNewState();
        }
    }
});

export const { changePhrase } = phraseSlice.actions;

export default phraseSlice.reducer;