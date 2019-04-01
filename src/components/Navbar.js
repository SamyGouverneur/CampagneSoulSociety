import React from 'react';
import  { NavLink } from "react-router-dom";

const Navbar = () => {
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
                <img alt="Logo" src="../../Images/defaultLogo.png" className="logo ml-5 mt-2"/>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <ul className="navbar-nav right">
                        <NavLink className="nav-item nav-link my-2 ml-5 mr-5" href="#">Le concept</NavLink>
                        <NavLink className="nav-item nav-link my-2 ml-5 mr-5" href="#">Tarifs</NavLink>
                        <NavLink className="nav-item nav-link my-2 ml-5 mr-5" href="#">Contact</NavLink>
                        <NavLink className="nav-item nav-link my-2 ml-5 mr-5" href="#">Mon compte</NavLink>
                    </ul>
                </div>
            </nav>
        );
}

export default Navbar;