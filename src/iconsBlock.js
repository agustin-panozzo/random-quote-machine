import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const IconsBlock = (props) => {
    return (
        <ul className="icons">
            <li><a style={{ color: props.color }} id='tweet-quote' href='https://x.com' target='_blank' rel="noopener noreferrer"><BsTwitterX size={32}/></a></li>
            <li><a style={{ color: props.color }} id="instagram-quote" href='https://instagram.com' target='_blank' rel="noopener noreferrer"><FaInstagram size={34}/></a></li>
            <li><a style={{ color: props.color }} id="linkedin-quote" href="https://www.linkedin.com/in/agustin-panozzo" target="_blank" rel="noopener noreferrer"><FaLinkedin size={34} /></a></li>
        </ul>
    )
};

export default IconsBlock;