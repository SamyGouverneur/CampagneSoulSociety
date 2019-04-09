import React from 'react';

const Footer = () => {
    return (
        <footer className="row no-gutters footer d-lg-flex justify-content-lg-between">
            <div className="col-md-3 col-xs-1 d-md-flex text-center">
                <a href="#home">
                    <img alt="Logo" src="../../images/Logo.png" className="logo"/>
                </a>
            </div>
            <div className="col-md-6 col-xs-1 my-auto text-center">
                <a href="CGV" className="links mx-3">CGV</a>
                <a href="legal-notice" className="links mx-3">Mentions Légales</a>
                <a href="partenaires" className="links mx-3">Partenaires</a>
            </div>
            <div className="col-md-3 col-xs-1 my-auto text-lg-right text-center py-3 py-lg-0 pr-lg-4">
                <a href="https://www.facebook.com/BonjourPlus">
                    <img src="../../images/icons/facebook.png" alt="facebook" className="social-media mx-2"/>
                </a>
                <a href="https://twitter.com/bonjourplus">
                    <img src="../../images/icons/twitter.png" alt="twitter" className="social-media mx-2"/>
                </a>
                <a href="https://www.linkedin.com/company/bonjourplus">
                    <img src="../../images/icons/linkedin.png" alt="linkedin" className="social-media mx-2"/>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
