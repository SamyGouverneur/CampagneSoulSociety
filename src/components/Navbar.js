import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div>
                <a href="#home">
                    <img alt="Logo Bonjour+" src="../../images/Logo.png" className="logo"/>
                </a>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end text-right" id="navbarNavAltMarkup">
                <div id="navbar" className="navbar-nav right topBotomBordersOut">
                    <a className="nav-item nav-link my-xs-1 my-lg-auto mr-4" href="#concept">Concept</a>
                    <a className="nav-item nav-link my-xs-1 my-lg-auto mr-4" href="#pricing">Tarifs</a>
                    <a className="nav-item nav-link my-xs-1 my-lg-auto mr-4" href="#medias">Médias</a>
                    <a className="nav-item nav-link my-xs-1 my-lg-auto mr-4" href="#contact">Contact</a>
                    <a className="nav-item nav-link my-xs-1 my-lg-auto mr-4" href="#home">Mon compte</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
