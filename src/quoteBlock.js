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
    const color = useSelector(state => state.phrase.color);
    const dispatch = useDispatch();
    console.log(color);

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
            <div className='wrapper' style={{ backgroundColor: color }}>

                <div id='quote-box' className='flex-container'>
                    <ul className='icons'>
                        <li><a style={{ color: color }} id='tweet-quote' href='https://x.com' target='_blank' rel="noopener noreferrer"><BsTwitterX size={32}/></a></li>
                        <li><a style={{ color: color }} id="instagram-quote" href='https://instagram.com' target='_blank' rel="noopener noreferrer"><FaInstagram size={32}/></a></li>
                    </ul>

                    <div key={animationKey} className='text-container'>
                        <h1 id='text' style={{ color: color }}><span><FaQuoteLeft size={25} /> {text} <FaQuoteRight size={25} /></span></h1>
                        <p id='author' style={{ color: color }}>- <i>{author}</i></p>
                    </div>

                    <div className='btn-container'>
                        <button id='new-quote' className='quote-btn' onClick={() => dispatch(changePhrase())}>
                            Nueva Frase
                        </button>
                    
                    </div>
                
                </div>

                <div className='footer-container'>
                    <p className='footer'>Created by:<strong> Agustín Panozzo</strong></p>
                </div>
            
            </div>
        
        </div>
    )
};

export default QuoteBlock;