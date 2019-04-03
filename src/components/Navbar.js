import React from 'react';

const Navbar = () => {
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-light">
                <a href="#home">
                    <img alt="Logo" src="../../images/defaultLogo.png" className="logo ml-5"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <ul className="navbar-nav right">
                        <a className="nav-item nav-link my-2 ml-5 mr-5" href="#concept">Le concept</a>
                        <a className="nav-item nav-link my-2 ml-5 mr-5" href="#pricing">Tarifs</a>
                        <a className="nav-item nav-link my-2 ml-5 mr-5" href="#contact">Contact</a>
                        <a className="nav-item nav-link my-2 ml-5 mr-5" href="#">Mon compte</a>
                    </ul>
                </div>
            </nav>
        );
}

export default Navbar;