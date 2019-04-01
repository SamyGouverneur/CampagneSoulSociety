import React from 'react'

const Home = (props) => {
    return (
        <div id="home" className="row">
            <div className="text col-6 my-auto">
                <div class="row">
                    <h1>Un Zoli Titre !</h1>
                </div>
                <div class="row">
                    <p>Ce n'est pas facile d'organiser un événement, blablabla.</p>
                    <p>Lorem ipsum atchoum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div class="row mt-3">
                    <a href="#concept">Découvrir MONSITE</a>
                </div>
            </div>
            <div className="illustration col-6">
                <img class="img-fluid" src="/images/home_illustration.png" />
            </div>
        </div>
    )
}
export default Home;