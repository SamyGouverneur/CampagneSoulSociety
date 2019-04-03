import React from 'react';

const Footer = () => {
    return (
        <footer className=" mt-5 pt-3 pb-3">
            <div className="row">
                <div className="col-lg-2 col-md-3 col-sm-3">
                    <img alt="Logo" src="../../images/defaultLogo.png" className="logo ml-5"/>
                </div>
                <div className="col-lg-1 col-md-2 col-sm-2 footer_links">
                    <a href="CGV" className="links_footer">CGV</a>
                </div>
                <div className="col-lg-5 col-md-3 col-sm-3 footer_links">
                    <a href="legal-notice" className="links_footer">Mentions Légales</a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 footer_socials_links">
                    <div className="row">
                        <div className="col-lg-2 col-md-4 col-sm-4 socials_links_fb">
                            <a href="#" className="social_links"><i className="fab fa-facebook-f fa-2x"></i></a>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 socials_links_twitter">
                            <a href="#" className="social_links"><i className="fab fa-twitter fa-2x"></i></a>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 socials_links_in">
                            <a href="#" className="social_links"><i className="fab fa-linkedin-in fa-2x"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
