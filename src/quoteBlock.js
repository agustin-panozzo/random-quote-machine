import { useSelector } from 'react-redux';
import './styles.scss';
import TextBlock from './textBlock.js';
import IconsBlock from './iconsBlock.js';
import ButtonBlock from './buttonBlock.js';
import Footer from './footerBlock.js';

const QuoteBlock = () => {
    const color = useSelector(state => state.phrase.color);
    
    return (
        <div>
            <div className='wrapper' style={{ backgroundColor: color }}>
                <div className='flex-container'>
                    <IconsBlock color={color} />
                    <TextBlock color={color} />        
                    <ButtonBlock />
                </div>
                <Footer />
            </div>
        </div>
    )
};

export default QuoteBlock;