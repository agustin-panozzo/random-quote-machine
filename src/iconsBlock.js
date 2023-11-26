import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const IconsBlock = (props) => {
    return (
        <ul className="icons">
            <li><a style={{ color: props.color }} id='tweet-quote' href='https://x.com' target='_blank' rel="noopener noreferrer"><BsTwitterX size={32}/></a></li>
            <li><a style={{ color: props.color }} id="instagram-quote" href='https://instagram.com' target='_blank' rel="noopener noreferrer"><FaInstagram size={32}/></a></li>
        </ul>
    )
};

export default IconsBlock;