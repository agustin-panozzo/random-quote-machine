import { configureStore } from '@reduxjs/toolkit';
import phraseReducer from './slice';

const store = configureStore({
    reducer: {
        phrase: phraseReducer
    }
})

export default store;