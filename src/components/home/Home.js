import React from 'react'

const Home = () => {
    return (
        <div id="home" className="row">
            <div className="text col-sm-12 col-md-5 col-lg-6 my-auto">
                <div className="row">
                    <h1>Un Zoli Titre !</h1>
                </div>
                <div className="row">
                    <p>Ce n'est pas facile d'organiser un événement, blablabla.</p>
                    <p>Lorem ipsum atchoum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="row mt-3">
                    <a href="#concept">Découvrir MONSITE</a>
                </div>
            </div>
            <div className="illustration col-sm-12 col-md-7 col-lg-6 my-auto">
                <img className="img-fluid" src="/images/penguin.png" />
            </div>
        </div>
    )
}
export default Home;