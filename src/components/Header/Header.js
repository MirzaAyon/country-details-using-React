import React from 'react';
import "./Header.css";

const Header = () => {
    return (
        <div>
            <h1>Welcome to the rest Countries</h1>
            <nav className='menu'>
                <a href="/home">HOME</a>
                <a href="/countries">COUNTRIES</a>
                <a href="about">ABOUT</a>
            </nav>
        </div>
    );
};

export default Header;