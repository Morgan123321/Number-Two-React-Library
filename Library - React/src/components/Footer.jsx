import React from 'react';
import Logo from "../assets/Library.svg"

const Footer = () => {
    return (
      <footer>
        <div className="container">
            <div className="row row__column">
                <link to="/">
                <figure className="footer__logo">
                    <img src={Logo} className="footer__logo--img" alt=""/>
                </figure>
                </link>
                <div className="footer__list">
                    <link to="/" className="footer__link">Home</link>
                    <span className="footer__link no-cursor">About</span>
                    <link to="/books" className="footer__link">Books</link>
                    <link to="/cart" className="footer__link">Cart</link>
                </div>
                <div className="footer__copyright">
                    Copyright &copy; 2026 Library
                </div>
            </div>
        </div>
      </footer>
    );
}

export default Footer;