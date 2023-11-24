import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePhrase } from './redux/slice';
import { Howl } from 'howler';
import sound from './sounds/mario.mp3';
import './styles.scss';
import { FaInstagram, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";

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
                <h1 className={`phrase`} key={animationKey} id='text'><strong><FaQuoteLeft size={30} /> {text} <FaQuoteRight size={30} /></strong></h1>
                <p id='author'>- <i>{author}</i></p>
                <button id='new-quote' onClick={() => dispatch(changePhrase())}>
                    Nueva Frase
                </button>
                <a id='tweet-quote' href='https://x.com' target='_blank' rel="noopener noreferrer"><BsTwitterX size={32}/></a>
                <a id="instagram-quote" href='https://instagram.com' target='_blank' rel="noopener noreferrer"><FaInstagram size={32}/></a>
            </div>
        </div>
    )
};

export default QuoteBlock;