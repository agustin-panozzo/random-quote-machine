import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePhrase } from './redux/slice';
import { Howl } from 'howler';
import sound from './sounds/mario.mp3';
import './styles.scss';

const QuoteBlock = () => {
    const text = useSelector(state => state.phrase.text);
    const author = useSelector(state => state.phrase.author);
    const dispatch = useDispatch();

    useEffect(() => {
        const clickSound = new Howl({
            src: [sound]
        });

        clickSound.play();
    
        return () => {
            clickSound.unload();
        }
    
    }, [text]);

    const animationKey = Math.random(); // Para reiniciar los efectos de animación

    return (
        <div>
            <div id='quote-box'>
                <h1 className={`phrase`} key={animationKey} id='text'><strong>{text}</strong></h1>
                <p id='author'>{author}</p>
                <button id='new-quote' onClick={() => dispatch(changePhrase())}>
                    Generar nueva frase
                </button>
                <a id='tweet-quote' href='#author'>Link</a>
            </div>
        </div>
    )
};

export default QuoteBlock;