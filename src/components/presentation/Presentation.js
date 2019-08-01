import React from 'react';
import 'animate.css';

const Presentation = () => {
    return (
        <div>
            <h1 className="text-center heartbeat pt-5"><span className="color-votez">Votez </span><span className="color-samy">Samy </span><span className="color-lee">Lee</span></h1>
            <div className="row mt-5">
                <div className="col-md-6 col-sm-12 ml-5 mr-5">
                    <div id="infos">
                        <div className="row">
                            <div className="col-md-5 col-sm-4">
                                <div className="card m-4 card-size">
                                    <img className="card-img-top" src="../../../images/ambassade.jpg" alt="Card image cap"/>
                                    <div id="card-body" className="card-body">
                                        <h3 className="card-title text-center mt-3">Gouvernement Soul Society</h3>
                                        <h4 className="text-left mt-5">Mes chers Compatriotes,</h4>
                                        <p className="card-text">
                                            Je vous présente aujourd'hui ma candidature au poste de gouverneur de la région de Los
                                            Santos , mon programme et mes promesses électorales.
                                        </p>
                                        <p><i className="fas fa-ambulance fas-color"></i>  Former plus amplement les agents des services publics.
                                            Je souhaite rendre les agents du service public plus polyvalents pour votre et leur sécurité,
                                            Permettre à un agent de la LSPD formé d'effectuer les premiers secours en attendant une
                                            ambulance ou à un agent des EMS de se défendre s'il se retrouve dans une situation
                                            dangereuse ne pourra rendre leur travail que plus efficace.
                                        </p>
                                        <p><i className="fas fa-cannabis fas-color"></i>  Réglementation et dépénalisation du cannabis.
                                            Le cannabis a été combattu par une politique d'interdiction et de punition totale,
                                            je souhaite légaliser le cannabis, ce qui permettra à des particuliers de créer une entreprise pour sa récolte,
                                            sa transformation et sa revente sous tutelle du gouvernement.
                                        </p>
                                        <p><i className="fas fa-money-bill-wave fas-color"></i>  Gel des impôts a 15% pour les entreprises.
                                            Je ne souhaite pas voir les entreprises de notre belle ville crouler sous les impôts,
                                            je gèlerais donc le taux d'impôt au minimum national qui est de 15% pendant la durée de mon mandat sans oublier
                                            l’exonération totale durant le 1er mois d’activité d’une nouvelle entreprise. Le gouvernement s'engagera à payer
                                            l'essence des véhicules de fonction et s'engage à utiliser correctement l'argent collecté des impots en toute transparence.
                                        </p>
                                        <p><i className="fas fa-shield-alt fas-color"></i>  Autorisation d’un certain type d’arme.
                                            Le port d’arme lourde telle que  «Fusil à pompe »  sera autorisé pour les commerçants.
                                            Vous pourrez vous procurer un permis de port d’arme à l’armurerie en effectuant une visite médicale (EMS)
                                            et en présentant un certificat de bonne vie et mœurs (LSPD).
                                        </p>
                                        <p><i className="fas fa-building fas-color"></i>  Visite des entreprises.
                                            Je  souhaite m'entretenir en  réunion régulièrement avec tous les patrons d’entreprise  pour faire le point sur leur situation globale
                                            et être à l’écoute de leurs propositions pour l’amélioration et le bon fonctionnement de leurs entreprises.
                                        </p>
                                        <p><i className="fas fa-users fas-color"></i>  Organisation d’un conseil.
                                            Je souhaite m'entourer d'une équipe gouvernementale qui me conseillera dans mes choix pour le bon fonctionnement de la ville.
                                        </p>
                                        <p>
                                            Je pense être a la hauteur de la tâche car je comprends les besoins des citoyens de Los Santos.
                                            D’avance, je vous remercie pour votre confiance.
                                        </p>
                                        <p className="text-right"><strong>Samy Lee</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 col-sm-12 mt-5 mb-2">
                    <div className="row">
                        <div className="col-5">
                            <div className="col-2 ml-4 mb-5">
                                <div id="visit_card" className="col-6">
                                    <div className="portfoliocard">
                                        <div className="coverphoto"></div>
                                        <div className="profile_picture"></div>
                                        <div className="left_col">

                                        </div>
                                        <div className="right_col">
                                            <h2 className="name">Samy Lee</h2>
                                            <h3 className="location">Los Santos</h3>
                                            <div className="row mt-5">
                                                <div className="col-2">
                                                    <i className="fas fa-briefcase ml-3 fas-visit"></i>
                                                </div>
                                                <div className="col-10">
                                                    Patron des mécanos
                                                </div>
                                                <div className="col-2">
                                                    <i className="fas fa-envelope-open ml-3 fas-visit"></i>
                                                </div>
                                                <div className="col-10">
                                                    Babaz@discord.Gg
                                                </div>
                                                <div className="col-2">
                                                    <i className="fas fa-mobile ml-3 fas-visit"></i>
                                                </div>
                                                <div className="col-10">
                                                    923-8519
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-5 ml-5 mt-5">
                        <iframe width="640" height="360" src="https://www.youtube.com/embed/ySuh0_USWmM" className="media"
                                allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>


    )
};

export default Presentation;
