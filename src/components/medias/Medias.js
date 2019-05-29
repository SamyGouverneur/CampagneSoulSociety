import React from 'react'

const Medias = () => {
    return (
        <div id="medias" className="container-fluid">
            <div className="container py-5 mt-5">
                <div className="row">
                    <div className="col">
                        <h2 className="text-center">Ils parlent de nous</h2>
                        <div className="row mt-5 speakers_logos">
                            <div className="col-xs-12 col-md-4 text-center mb-md-0 mb-5">
                                <img src="/images/parteners/france3.jpg" alt="logo France 3"/>
                            </div>
                            <div className="col-xs-12 col-md-4 text-center mb-md-0 mb-5">
                                <img src="/images/parteners/la_rep.jpg" alt="logo la République du Centre"/>
                            </div>
                            <div className="col-xs-12 col-md-4 text-center mb-md-0 mb-5">
                                <img src="/images/parteners/la_tribune.jpg" alt="logo la Tribune"/>
                            </div>
                        </div>
                        <div className="row mt-md-5">
                            <div className="col-xs-12 col-md-4 text-center mb-md-0 mb-5">
                                <img src="/images/parteners/bfm.jpg" alt="logo BFM"/>
                            </div>
                            <div className="col-xs-12 col-md-4 text-center mb-md-0 mb-5">
                                <img src="/images/parteners/france_bleu.jpg" alt="logo France Bleu"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h2 className="pt-5 mt-5 text-center">Nos prix</h2>
                        <div className="my-auto d-flex align-items-center justify-content-center">
                            <div className="row my-auto w-100">
                                <div className="col-xs-12 col-md-4 text-center my-mb-mb-auto mb-md-0 mb-5">
                                    <img src="/images/parteners/startup_weekend.jpg" alt="Logo Startup Weekend"/>
                                    <p className="p-0 mb-1 mt-3">1er prix</p>
                                    <p className="p-0 mb-1">Startup Weekend</p>
                                    <p className="p-0 mb-1">(Bourges - 2016)</p>
                                </div>
                                <div className="col-xs-12 col-md-4 text-center my-mb-auto mb-md-0 mb-5">
                                    <img src="/images/parteners/10000_startups.jpg"
                                         alt="Logo 10000 startups pour changer le monde"
                                    />
                                    <p className="p-0 mb-1 mt-3">Lauréat catégorie</p>
                                    <p className="p-0 mb-1">Smart Building</p>
                                    <p className="p-0 mb-1">(CES Las Vegas - 2019)</p>
                                </div>
                                <div className="col-xs-12 col-md-4 text-center my-mb-auto mb-md-0 mb-5">
                                    <img src="/images/parteners/human_tech_days.jpg" alt="Logo Human Tech Days"/>
                                    <p className="p-0 mb-1 mt-3">Prix coup de coeur</p>
                                    <p className="p-0 mb-1">(Tours - 2019)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Medias;