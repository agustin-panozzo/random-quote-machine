import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const stringToCamelCase = (str) => {
    const capitalizeArray = str.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    })

    return capitalizeArray.join('');
};

const IconsBlock = (props) => {
    const phrase = useSelector(state => state.phrase.text);
    const author = useSelector(state => state.phrase.author);
    
    useEffect( () => {
        const link = document.getElementById('tweet-quote');
        link.href = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(phrase) + `&hashtags=${stringToCamelCase(author)}`;
    
    }, [phrase, author]);

    return (
        <ul className="icons">
            <li><a style={{ color: props.color }} id='tweet-quote' href='https://x.com/intent/tweet' target='_blank' rel="noopener noreferrer"><BsTwitterX size={32}/></a></li>
            <li><a style={{ color: props.color }} id="instagram-quote" href='https://instagram.com' target='_blank' rel="noopener noreferrer"><FaInstagram size={34}/></a></li>
            <li><a style={{ color: props.color }} id="linkedin-quote" href="https://www.linkedin.com/in/agustin-panozzo" target="_blank" rel="noopener noreferrer"><FaLinkedin size={34} /></a></li>
        </ul>
    )
};

export default IconsBlock;