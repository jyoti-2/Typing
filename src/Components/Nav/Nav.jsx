import React from 'react';
import "./Nav.css";

const Nav = () => {
    return (
        <div className="nav-container">
            <div className="nav-left">
                <p className="flash-logo-text"> Flash Type </p>
            </div>

            <div className="nav-right">
                <a
                    target="_blank"
                    className="Linkdln-name-link"
                    href="https://www.linkedin.com/in/jyoti-kumari2/"
                    rel="noreferrer"> JYOTI KUMARI </a>
            </div>
                
        </div>
    );
    
};

export default Nav;


/*
nfn
ren
imr
<div className="flash-logo">
                    <img src={logo} alt="logo"/>
                </div>
import logo from "./../../assets/logo.png";

*/