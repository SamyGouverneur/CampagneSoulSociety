import React from 'react'

const Medias = () => {
    return (
        <div id="medias">
            <div className="bg_gradient">
                <Speakers/>
                <Prices/>
            </div>
        </div>
    )
};

const Speakers = () => {
    return (
        <div id="speakers" className="col-md-10">
            <div className="col-md-8 offset-md-2">
                <h2>Ils parlent de nous !</h2>
                <p>Youpiiiiiiiiiiiii iiiiiii !</p>
                <div className="row mt-4">
                    <div className="col-xs-12 col-md-4 text-center">
                        <img src="/images/parteners/france3.jpg" alt="logo france3"/>
                    </div>
                    <div className="col-xs-12 col-md-4 text-center">
                        <img src="/images/parteners/la_rep.jpg" alt="logo la république du centre"/>
                    </div>
                    <div className="col-xs-12 col-md-4 text-center">
                        <img src="/images/parteners/la_tribune.jpg" alt="logo la tribune"/>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-xs-12 col-md-4 text-center">
                        <img src="/images/parteners/bfm.jpg" alt="logo bfm"/>
                    </div>
                    <div className="col-xs-12 col-md-4 text-center">
                        <img src="/images/parteners/france_bleu.jpg" alt="logo france bleu"/>
                    </div>
                </div>
            </div>
        </div>
    )
};

const Prices = () => {
    return (
        <div id="prices" className="col-md-10 offset-md-2">
            <div className="col-md-8 offset-md-2">
                <h2>On a gagné des tucs !</h2>
                <p>On est les meilleurs, c'est tout !</p>
                <div className="prices_display">
                    <div className="row mt-4">
                        <div className="col-xs-12 col-lg-4 text-center my-auto">
                            <img src="/images/parteners/startup_weekend.jpg" alt="logo startup weekend"/>
                        </div>
                        <div className="col-xs-12 col-lg-4 text-center my-auto">
                            <img src="/images/parteners/10000_startups.jpg" alt="logo 10000 startups pour changer le monde"/>
                        </div>
                        <div className="col-xs-12 col-lg-4 text-center my-auto">
                            <img src="/images/parteners/human_tech_days.jpg" alt="logo human tech days"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-lg-4 text-center my-auto">
                            <p>1er prix</p>
                            <p>Startup Weekend</p>
                            <p>(Bourges - 2016)</p>
                        </div>
                        <div className="col-xs-12 col-lg-4 text-center my-auto">
                            <p>Lauréat catégorie</p>
                            <p>Smart Building</p>
                            <p>(CES Las Vegas - 2019)</p>
                        </div>
                        <div className="col-xs-12 col-lg-4 text-center my-auto">
                            <p>Prix coup de coeur</p>
                            <p>(Tours - 2019)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Medias;