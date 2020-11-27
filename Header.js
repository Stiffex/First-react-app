import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './Logo';
import Menu from './Menu';

function Header() {
    return (
        <div className="top justify-content-between">
            <Logo />
            <Menu />
        </div>
    );
}

export default Header;
