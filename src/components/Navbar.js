import React from 'react';

const Navbar = () => {
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-light">
                <img alt="Logo" src="../../images/defaultLogo.png" className="logo ml-5"/>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <ul className="navbar-nav right">
                        <a className="nav-item nav-link my-2 ml-5 mr-5" href="#home">Le concept</a>
                        <a className="nav-item nav-link my-2 ml-5 mr-5" href="#">Tarifs</a>
                        <a className="nav-item nav-link my-2 ml-5 mr-5" href="#">Contact</a>
                        <a className="nav-item nav-link my-2 ml-5 mr-5" href="#">Mon compte</a>
                    </ul>
                </div>
            </nav>
        );
}

export default Navbar;