import React from 'react';
import ReactDOM from 'react-dom';
import FooterLogo from './FooterLogo';
import FooterMenu from './FooterMenu';
import Copyright from './Copyright';

function Footer() {
    return (
        <div className="bottom">
            <FooterLogo />
            <FooterMenu />
            <Copyright className="align-items-end" /> 
        </div>
    );
}

export default Footer;