import React from 'react'

const Home = () => {
    return (
        <div id="home">
            <div className="bgColor row no-gutters">
                <div className="text col-sm-8 col-md-7 col-lg-6 my-auto">
                    <div className="row">
                        <h1>L'interphone nouvelle génération
                            qui s'adapte à votre mode de vie.</h1>
                    </div>
                    <div className="row">
                        <p>Soyez joignable sur votre smartphone où que vous soyez,
                            vous ne manquerez plus jamais une livraison.</p>
                    </div>
                    <div className="row mt-3">
                        <a className="button" href="#concept">Découvrir Bonjour+</a>
                    </div>
                </div>
                <div className="illustration ">
                    <img src="/images/home_illustration.png" />
                </div>
            </div>
        </div>
    )
}
export default Home;