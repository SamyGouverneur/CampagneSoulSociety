import React from 'react'

const Concept = () => {
    return (
        <div id="concept" className="container-fluid py-5">
            <div className="container my-auto py-5">
                <div className="row concept py-5">
                    <div className="col-md-5 col-sm-12 my-auto text-left">
                        <img alt="interphone bonjour+" src="../../images/plaque.png" className="img-fluid plaque"/>
                    </div>
                    <div className="col-md-7 col-sm-12 concept_text my-auto">
                        <h2 className="mb-5">Restez joignable, où que vous soyez...</h2>
                        <p className="p-0 mb-2 pr-md-5 mr-md-5">Bonjour+ est un interphone connecté nouvelle génération.</p>
                        <p className="p-0 mb-2 pr-md-5 mr-md-5">Le plus fin au monde, le meilleur rapport qualité/prix et plein de fonctionnalités
                            innovantes.</p>
                        <p className="p-0 mb-2 pr-md-5 mr-md-5">Facile à utiliser, vous n'avez qu'à le coller sur votre porte ou boîte aux lettres, et
                            télécharger l'application.</p>
                        <p className="p-0 mb-2 pr-md-5 mr-md-5">C'est tout !</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Concept;
