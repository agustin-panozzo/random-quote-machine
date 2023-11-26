import { useDispatch } from 'react-redux';
import { changePhrase } from './redux/slice';

const ButtonBlock = () => {
    const dispatch = useDispatch();

    return (
        <div className='btn-container'>
        <button id='new-quote' className='quote-btn' onClick={() => dispatch(changePhrase())}>
            Nueva Frase
        </button>
        </div>
    )
}

export default ButtonBlock;