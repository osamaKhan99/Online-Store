import React from 'react';
import './footer.css';


const Footer = () => {
    return(
        <footer className="footer"> 
            <div className="credit">Contact Me On:</div>
            <ul>
                <li><i className="fa fa-facebook-official"></i></li>
                <li><i className="fa fa-github"></i></li>
                <li><i className="fa fa-linkedin"></i></li>
            </ul>
            <div className="credit">Made by Osama Khan</div>
        </footer>
    )
}
export default Footer;