import React from 'react'
import CardPricing from './CardPricing'

const Pricing = () => {
    return (
        <div id="pricing" className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="text col-12">
                        <div className="row">
                            <h2>Tarifs</h2>
                        </div>
                        <div className="row">
                            <p>Les offres seront bientôt disponibles !</p>
                        </div>
                    </div>
                    <CardPricing
                        format="Freemium"
                        pricing="0€"
                        subscription="Sans abonnement"
                        user="1 utilisateur"
                        equipment="1 interphone"
                        details="Message texte"
                        message="C'est moins cher que gratuit !"
                    />
                    <CardPricing
                        format="Premium"
                        pricing="10€"
                        subscription="1 an d'abonnement"
                        user="3 utilisateurs"
                        equipment="2 interphones"
                        details="Audio et vidéo"
                        message="Pour le prix de deux kébabs !"
                    />
                    <CardPricing
                        format="Entreprise"
                        pricing="Devis"
                        subscription="1 an d'abonnement"
                        user="Utilisateurs multiples"
                        equipment="Interphones multiples"
                        details="Options personnalisées"
                        message="Bon là j'ai pas d'idées de messages."
                    />
                </div>
            </div>
        </div>
    );
};

export default Pricing;
