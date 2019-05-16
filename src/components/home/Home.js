import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css';

const Home = () => {
    return (
        <div id="home" className="container-fluid bgColor d-flex align-items-md-center">
            <div className="row m-0 px-sm-5">
                <div className="text col-sm-8 col-xl-7">
                    <div className="row no-gutters">
                        <h1>L'interphone nouvelle génération
                            qui s'adapte à votre mode de vie.</h1>
                    </div>
                    <div className="row no-gutters">
                        <p>Soyez joignable sur votre smartphone où que vous soyez,
                            vous ne manquerez plus jamais une livraison.</p>
                    </div>
                    <div className="row no-gutters mt-3">
                        <a className="button" href="#concept">Découvrir Bonjour+</a>
                    </div>
                </div>
                <ScrollAnimation animateIn="fadeIn">
                    <div className="illustration">
                        <img src="/images/home_illustration.png"
                             alt="Mise en situation de l'application Bonjour+ sur des écrans de smartphone"
                        />
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    )
};

export default Home;