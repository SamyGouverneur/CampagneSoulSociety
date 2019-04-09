import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="row no-gutters">
                <div className="col-lg-3 col-md-5 col-sm-5">
                    <img alt="Logo" src="../../images/Logo.png" className="logo"/>
                </div>
                <div className="col-lg-1 col-md-1 col-sm-1 links footer_links cgv_link">
                    <a href="CGV" className="links_footer">CGV</a>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-2 links footer_links legal_link">
                    <a href="legal-notice" className="links_footer">Mentions Légales</a>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-3 links footer_links partners_link">
                    <a href="partenaires" className="links_footer">Partenaires</a>
                </div>
                <div className="col-lg-3 offset-1 col-md-6 col-sm-12 footer_socials_links">
                    <div className="row no-gutters">
                        <div className="col-lg-2 col-md-4 col-sm-4 links socials_links_fb">
                            <a href="#" className="social_links"><i className="fab fa-facebook-f fa-2x"></i></a>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 links socials_links_twitter">
                            <a href="#" className="social_links"><i className="fab fa-twitter fa-2x"></i></a>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 links socials_links_in">
                            <a href="#" className="social_links"><i className="fab fa-linkedin-in fa-2x"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
