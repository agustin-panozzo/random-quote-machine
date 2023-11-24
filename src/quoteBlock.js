import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePhrase } from './redux/slice';
import { Howl } from 'howler';
import sound from './sounds/mouse-click.wav';

const QuoteBlock = () => {
    const phrase = useSelector(state => state.phrase.value);
    const dispatch = useDispatch();

    useEffect(() => {
        const clickSound = new Howl({
            src: [sound]
        });

        clickSound.play();
    
        return () => {
            clickSound.unload();
        }
    
    }, [phrase]);

    return (
        <div>
            <div>
                <strong>{phrase}</strong>
            </div>
            <div>
                <button onClick={() => dispatch(changePhrase())}>
                    Generar nueva frase
                </button>
            </div>
        </div>
    )
};

export default QuoteBlock;