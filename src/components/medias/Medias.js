import React from 'react'

const Medias = () => {
    return (

        <div id="medias" className="container-fluid">
            <div className="bg_gradient">
                <Speakers/>
                <Prices/>
            </div>
        </div>
    )
}

const Speakers = () => {
    return (
        <div id="speakers" className="col-md-12">
            <div className="container medias_container speakers_container">
                <h2>Ils parlent de nous !</h2>
                <p>Youpiiiiiiiiiiiii iiiiiii !</p>
                <div className="row mt-4 speakers_logos">
                    <div className="col-xs-12 col-md-4 text-center">
                        <img src="/images/france3.jpg"/>
                    </div>
                    <div className="col-xs-12 col-md-4 text-center">
                        <img src="/images/la_rep.jpg"/>
                    </div>
                    <div className="col-xs-12 col-md-4 text-center">
                        <img src="/images/la_tribune.jpg"/>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-xs-12 col-md-4 text-center">
                        <img src="/images/bfm.jpg"/>
                    </div>
                    <div className="col-xs-12 col-md-4 text-center">
                        <img src="/images/france_bleu.jpg"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Prices = () => {
    return (
        <div id="prices" className="col-md-12">
            <div className="container medias_container prices_container">
                <h2>On a gagné des tucs !</h2>
                <p>On est les meilleurs, c'est tout !</p>
                <div className="prices_display my-auto d-flex align-items-center justify-content-center">

                    <div className="row prices_logos my-auto w-100">
                        <div className="col-xs-12 col-md-4 text-center my-auto ">
                            <img src="/images/startup_weekend.jpg"/>
                            <p className="prices_text price_text">1er prix</p>
                            <p className="prices_text">Startup Weekend</p>
                            <p className="prices_text">(Bourges - 2016)</p>
                        </div>
                        <div className="col-xs-12 col-md-4 text-center my-auto">
                            <img src="/images/10000_startups.jpg"/>
                            <p className="prices_text">Lauréat catégorie</p>
                            <p className="prices_text">Smart Building</p>
                            <p className="prices_text">(CES Las Vegas - 2019)</p>
                        </div>
                        <div className="col-xs-12 col-md-4 text-center my-auto">
                            <img src="/images/human_tech_days.jpg"/>
                            <p className="prices_text price_text">Prix coup de coeur</p>
                            <p className="prices_text">(Tours - 2019)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Medias;