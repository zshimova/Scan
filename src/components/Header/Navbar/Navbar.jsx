import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="/">Главная</a>
            <a href="#">Тарифы</a>
            <a href="#">FAQ</a>
        </nav>
    );
};

export default Navbar;