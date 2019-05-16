import React from 'react';

const Footer = () => {
    return (
        <footer className="row no-gutters footer d-lg-flex justify-content-lg-between">
            <div className="col-md-3 col-xs-1 d-md-flex text-center py-2 py-lg-0 pr-lg-4 ">
                <a href="#home">
                    <img alt="Logo Bonjour+" src="../../images/Logo.png" className="logo"/>
                </a>
            </div>
            <div className="col-md-6 col-xs-1 my-auto py-4 pr-lg-4 text-center bottomBorder">
                <a href="CGV" className="links mx-3">CGV</a>
                <a href="legal-notice" className="links mx-3">Mentions Légales</a>
                <a href="partenaires" className="links mx-3">Partenaires</a>
            </div>
            <div className="col-md-3 col-xs-1 my-auto text-lg-right text-center py-4 py-lg-0 pr-lg-4">
                <a href="https://www.facebook.com/BonjourPlus"
                   target="_blank"
                   rel="noopener noreferrer"
                >
                    <img src="../../images/icons/facebook.png" alt="Logo Facebook" className="social-media mx-2"/>
                </a>
                <a href="https://twitter.com/bonjourplus"
                   target="_blank"
                   rel="noopener noreferrer"
                >
                    <img src="../../images/icons/twitter.png" alt="Logo Twitter" className="social-media mx-2"/>
                </a>
                <a href="https://www.linkedin.com/company/bonjourplus"
                   target="_blank"
                   rel="noopener noreferrer"
                >
                    <img src="../../images/icons/linkedin.png" alt="Logo Linkedin" className="social-media mx-2"/>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
