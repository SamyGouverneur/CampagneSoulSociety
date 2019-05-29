import React, {Component} from 'react'
import CardPricing from './CardPricing'
import TabsPricing from "./TabsPricing";

class Pricing extends Component {

    state = {
        width: 0,
        format: "Freemium",
        pricing: "0€",
        subscription: "Sans abonnement",
        user: "1 utilisateur",
        equipment: "1 interphone",
        details: "Message texte",
        message: "Bonjour, je suis intéressé par le formfait Freemium"
    };

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        this.setState({width: window.innerWidth});
    };

    updateTabContent = e => {
        const tabFreemium = document.getElementById('freemium');
        const tabPremium = document.getElementById('premium');
        const tabEntreprise = document.getElementById('entreprise');
        switch (Number(e.target.dataset.key)) {
            case 1:
                this.setState({
                    format: "Freemium",
                    pricing: "0€",
                    subscription: "Sans abonnement",
                    user: "1 utilisateur",
                    equipment: "1 interphone",
                    details: "Message texte",
                    message: "Bonjour, je suis intéressé par le formfait Freemium."
                });
                tabFreemium.className = 'tab-link active';
                tabPremium.className = 'tab-link';
                tabEntreprise.className = 'tab-link';
                break;
            case 2:
                this.setState({
                    format: "Premium",
                    pricing: "10€",
                    subscription: "1 an d'abonnement",
                    user: "3 utilisateurs",
                    equipment: "2 interphones",
                    details: "Audio et vidéo",
                    message: "Bonjour, je suis intéressé par le formfait Premium."
                });
                tabFreemium.className = 'tab-link';
                tabPremium.className = 'tab-link active';
                tabEntreprise.className = 'tab-link';
                break;
            case 3:
                this.setState({
                    format: "Entreprise",
                    pricing: "Devis",
                    subscription: "1 an d'abonnement",
                    user: "Utilisateurs multiples",
                    equipment: "Interphones multiples",
                    details: "Options personnalisées",
                    message: "Bonjour, je suis intéressé par le formfait Entreprise."
                });
                tabFreemium.className = 'tab-link';
                tabPremium.className = 'tab-link';
                tabEntreprise.className = 'tab-link active';
                break;
            default:
                this.setState({
                    format: "Freemium",
                    pricing: "0€",
                    subscription: "Sans abonnement",
                    user: "1 utilisateur",
                    equipment: "1 interphone",
                    details: "Message texte",
                    message: "Bonjour, je suis intéressé par le formfait Freemium."
                });
                tabFreemium.className = 'tab-link active';
                tabPremium.className = 'tab-link';
                tabEntreprise.className = 'tab-link';
        }
    };

    render() {
        const tabsPricing = this.state.width <= 991;
        return (
            <div id="pricing" className="container-fluid pb-5">
                <div className="container mb-5">
                    <div className="row mx-0 pb-5">
                        <div className="mb-5 col-12">
                            <div className="row mx-0 d-flex justify-content-center">
                                <h2>Tarifs</h2>
                            </div>
                            <div className="row mx-0 d-flex justify-content-center">
                                <p>Les offres seront bientôt disponibles, contactez-nous dès maintenant pour commander
                                    votre forfait.</p>
                            </div>

                            {tabsPricing ?
                                <div className="row">
                                    <div className="col mt-4">
                                        <div className="row no-gutters tabs-buttons">
                                            <div className="col-4 p-0 text-center">
                                                <p className="tab-link active"
                                                   id="freemium"
                                                   data-key="1"
                                                   onClick={this.updateTabContent}>
                                                    Freemium
                                                </p>
                                            </div>
                                            <div className="col-4 p-0 text-center nav-item">
                                                <p className="tab-link"
                                                   id="premium"
                                                   data-key="2"
                                                   onClick={this.updateTabContent}>
                                                    Premium
                                                </p>
                                            </div>
                                            <div className="col-4 p-0 text-center nav-item">
                                                <p className="tab-link"
                                                   id="entreprise"
                                                   data-key="3"
                                                   onClick={this.updateTabContent}>
                                                    Entreprise
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row no-gutters shadow pricing-tab">
                                            <div className="col">
                                                <TabsPricing
                                                    format={this.state.format}
                                                    pricing={this.state.pricing}
                                                    subscription={this.state.subscription}
                                                    user={this.state.user}
                                                    equipment={this.state.equipment}
                                                    details={this.state.details}
                                                    message={this.state.message}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className="row">
                                    <CardPricing
                                        format="Freemium"
                                        pricing="0€"
                                        subscription="Sans abonnement"
                                        user="1 utilisateur"
                                        equipment="1 interphone"
                                        details="Message texte"
                                        message="Bonjour, je suis intéressé par le formfait Freemium."
                                    />
                                    <CardPricing
                                        format="Premium"
                                        pricing="10€"
                                        subscription="1 an d'abonnement"
                                        user="3 utilisateurs"
                                        equipment="2 interphones"
                                        details="Audio et vidéo"
                                        message="Bonjour, je suis intéressé par le formfait Premium."
                                    />
                                    <CardPricing
                                        format="Entreprise"
                                        pricing="Devis"
                                        subscription="1 an d'abonnement"
                                        user="Utilisateurs multiples"
                                        equipment="Interphones multiples"
                                        details="Options personnalisées"
                                        message="Bonjour, je suis intéressé par le formfait Entreprise."
                                    />
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Pricing;
