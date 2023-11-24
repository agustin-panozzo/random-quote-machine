import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePhrase } from './redux/slice';

const QuoteBlock = () => {
    const phrase = useSelector(state => state.phrase.value);
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <strong>{phrase}</strong>
            </div>
            <div>
                <button onClick={() => dispatch(changePhrase('Algo nuevo'))}>
                    Generate new phrase
                </button>
            </div>
        </div>
    )
};

export default QuoteBlock;