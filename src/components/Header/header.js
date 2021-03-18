import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import './header.css';


const Header = () => {
    return(
        <header>
            <ul>
            <Link to="/"><li className="icon"><FontAwesomeIcon icon={faHome}/></li></Link>
            <li><div className="title">Raashan Bazar</div></li>
            <li ><Link to="/myCart"><button className="cart-btn"><FontAwesomeIcon icon={faShoppingCart}/> My Cart</button></Link></li>
            </ul>
        </header>
    )
}
export default Header;