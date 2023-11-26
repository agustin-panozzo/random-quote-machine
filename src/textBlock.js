import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { Howl } from 'howler';
import sound from './sounds/mario.mp3';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const TextBlock = (props) => {
    const animationKey = Math.random(); // Para reiniciar los efectos de animación
    const text = useSelector(state => state.phrase.text);
    const author = useSelector(state => state.phrase.author);

    useEffect(() => {
        const clickSound = new Howl({
            src: [sound]
        });

        clickSound.play();
    
        return () => {
            clickSound.unload();
        }
    
    }, [text]);    

    return (
        <div key={animationKey} className='text-container'>
            <h1 id='text' style={{ color: props.color }}><span><FaQuoteLeft size={25} /> {text} <FaQuoteRight size={25} /></span></h1>
            <p id='author' style={{ color: props.color }}>- <i>{author}</i></p>
        </div>
    )
}

export default TextBlock;